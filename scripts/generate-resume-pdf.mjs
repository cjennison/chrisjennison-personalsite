/**
 * Generates one-page PDF resumes from /[locale]/resume/pdf.
 *
 * Public:  one per locale → public/<file> (no email/phone; linked from the site)
 * Private: one per private/resumes/variants/<id>.json → private/resumes/<fileName>
 *          (role-tailored, with RESUME_EMAIL/RESUME_PHONE from .env.local; gitignored)
 *
 * Usage: start the site locally (`npm run dev`), then run `npm run resume:pdf`.
 * Env:
 *   RESUME_BASE_URL         Site origin (default http://localhost:3000)
 *   RESUME_BROWSER_CHANNEL  Installed Chromium channel (default msedge; e.g. chrome)
 *
 * Fails if any PDF is longer than one page or if contact details leak into a public PDF.
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import { chromium } from "playwright-core";

const BASE_URL = process.env.RESUME_BASE_URL ?? "http://localhost:3000";
const CHANNEL = process.env.RESUME_BROWSER_CHANNEL ?? "msedge";
const VARIANTS_DIR = "private/resumes/variants";

// Keep in sync with RESUME_PDF_FILES in src/lib/profile.ts
const profileSource = await readFile("src/lib/profile.ts", "utf8");
const publicFiles = Object.fromEntries(
  [...profileSource.matchAll(/^\s+(en|fr|de): "(\/[^"]+\.pdf)",$/gm)].map(
    ([, locale, file]) => [locale, file],
  ),
);

if (Object.keys(publicFiles).length === 0) {
  throw new Error("No RESUME_PDF_FILES entries found in src/lib/profile.ts");
}

const privateVariants = await readdir(VARIANTS_DIR)
  .then((names) => names.filter((name) => name.endsWith(".json")))
  .catch(() => []);

const countPages = (pdf) =>
  (pdf.toString("latin1").match(/\/Type\s*\/Page(?!s)/g) ?? []).length;

const browser = await chromium.launch({ channel: CHANNEL });
const page = await browser.newPage();
await page.emulateMedia({ colorScheme: "light" });

const problems = [];

async function render(url, outPath, { expectContact }) {
  const response = await page.goto(url, { waitUntil: "networkidle" });
  if (!response?.ok()) {
    throw new Error(`Failed to load ${url}: ${response?.status()}`);
  }

  // Hide the Next.js dev overlay in case the PDF is generated from `npm run dev`
  await page.addStyleTag({
    content: "nextjs-portal { display: none !important; }",
  });

  const hasContact =
    (await page.locator('a[href^="mailto:"], a[href^="tel:"]').count()) > 0;
  if (!expectContact && hasContact) {
    problems.push(
      `${outPath}: contact details must not appear in a public PDF`,
    );
    return;
  }
  if (expectContact && !hasContact) {
    console.warn(
      `${outPath}: no email/phone (set RESUME_EMAIL and RESUME_PHONE in .env.local)`,
    );
  }

  const pdf = await page.pdf({
    preferCSSPageSize: true,
    printBackground: true,
  });
  const pages = countPages(pdf);
  await writeFile(outPath, pdf);
  console.log(
    `${outPath}: ${pages} page(s), ${Math.round(pdf.length / 1024)} KB`,
  );
  if (pages !== 1) problems.push(`${outPath}: ${pages} pages (must be 1)`);
}

for (const [locale, file] of Object.entries(publicFiles)) {
  await render(`${BASE_URL}/${locale}/resume/pdf`, `public${file}`, {
    expectContact: false,
  });
}

for (const name of privateVariants) {
  const variant = JSON.parse(await readFile(`${VARIANTS_DIR}/${name}`, "utf8"));
  await render(
    `${BASE_URL}/en/resume/pdf?variant=${encodeURIComponent(variant.id)}`,
    `private/resumes/${variant.fileName}`,
    { expectContact: true },
  );
}

await browser.close();

if (problems.length > 0) {
  console.error(`\n${problems.join("\n")}`);
  console.error(
    "Tighten content in messages/*.json (Profile.onePage) or the variant JSON.",
  );
  process.exit(1);
}

import { getTranslations } from "next-intl/server";
import {
  COMPANIES,
  EDUCATION,
  IMPACT,
  PROFILE,
  RESUME_PDF_FILES,
  SKILL_GROUP_IDS,
  STAT_IDS,
  type YearMonth,
  yearMonthToDate,
} from "@/lib/profile";
import { SEO_CONFIG } from "@/lib/seo-config";

// Plain-text profile for LLM crawlers and AI recruiting tools (https://llmstxt.org)
export const dynamic = "force-static";

const LOCALE = "en";
const monthFormat = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

const formatRange = (
  start: YearMonth,
  end: YearMonth | null,
  present: string,
) =>
  `${monthFormat.format(yearMonthToDate(start))} – ${
    end ? monthFormat.format(yearMonthToDate(end)) : present
  }`;

export async function GET() {
  const t = await getTranslations({ locale: LOCALE, namespace: "Profile" });
  const lines: string[] = [
    `# ${PROFILE.name}`,
    "",
    `> ${t("headline")}. ${t("location")}.`,
    "",
    t("summary"),
    "",
    `- Preferred contact (LinkedIn): ${PROFILE.linkedin}`,
    `- Resume: ${SEO_CONFIG.siteUrl}/${LOCALE}/resume`,
    `- Resume (one-page PDF): ${SEO_CONFIG.siteUrl}${RESUME_PDF_FILES[LOCALE]}`,
    `- GitHub: ${PROFILE.github}`,
    "",
    `## ${t("strongestFit.label")}`,
    "",
    t("strongestFit.roles"),
    "",
    "## At a glance",
    "",
    ...STAT_IDS.map(
      (id) => `- ${t(`stats.${id}.value`)} ${t(`stats.${id}.label`)}`,
    ),
    "",
    "## Impact",
  ];

  for (const item of IMPACT) {
    const base = `impact.${item.id}`;
    lines.push(
      "",
      `### ${t(`${base}.title`)} (${t(`${base}.org`)})`,
      "",
      t(`${base}.description`),
      "",
    );
    for (const metric of item.metrics) {
      const m = `${base}.metrics.${metric.id}`;
      const value =
        metric.kind === "change"
          ? `${t(`${m}.before`)} → ${t(`${m}.after`)}`
          : t(`${m}.value`);
      lines.push(`- ${t(`${m}.label`)}: ${value}`);
    }
  }

  lines.push("", "## Experience");
  for (const company of COMPANIES) {
    lines.push("", `### ${company.name}`, "");
    for (const role of company.roles) {
      const r = `roles.${role.id}`;
      lines.push(
        `- **${t(`${r}.title`)}** (${t(`employmentTypes.${role.type}`)}, ${formatRange(role.start, role.end, t("present"))}, ${t(`${r}.location`)})`,
      );
      for (const highlight of t.raw(`${r}.highlights`) as string[]) {
        lines.push(`  - ${highlight}`);
      }
    }
  }

  lines.push("", "## Skills", "");
  for (const group of SKILL_GROUP_IDS) {
    const items = t.raw(`skills.${group}.items`) as string[];
    lines.push(`- ${t(`skills.${group}.title`)}: ${items.join(", ")}`);
  }

  lines.push("", "## Education", "");
  for (const school of EDUCATION) {
    lines.push(
      `- ${school.school}: ${t(`education.${school.id}.degree`)}, ${t(`education.${school.id}.honors`)} (${school.startYear}–${school.endYear})`,
    );
  }

  return new Response(`${lines.join("\n")}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

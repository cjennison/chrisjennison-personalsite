import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { generateCanonicalUrl } from "@/lib/seo-config";

const PAGES = [
  { path: "", priority: 1 },
  { path: "/resume", priority: 0.9 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return PAGES.flatMap(({ path, priority }) => {
    const languages = Object.fromEntries(
      routing.locales.map((locale) => [
        locale,
        generateCanonicalUrl(`/${locale}${path}`),
      ]),
    );

    return routing.locales.map((locale) => ({
      url: generateCanonicalUrl(`/${locale}${path}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: locale === routing.defaultLocale ? priority : priority - 0.2,
      alternates: { languages },
    }));
  });
}

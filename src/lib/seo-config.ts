/**
 * SEO configuration and constants shared by metadata, sitemap, robots, and JSON-LD.
 */

export const SEO_CONFIG = {
  siteName: "Christopher Jennison",
  siteUrl: (
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.chrisjennison.dev"
  ).replace(/\/$/, ""),
  ogImage: "/images/og-default.png",
  ogImageSize: { width: 1024, height: 1024 },

  // Role and capability keywords recruiters and AI screeners search for
  keywords: [
    "Christopher Jennison",
    "Principal Software Engineer",
    "Principal Engineering Manager",
    "Senior Engineering Manager",
    "Director of Engineering",
    "Head of AI Engineering",
    "Staff Engineer",
    "AI platform engineering",
    "LLM agents",
    "Agent platforms",
    "Microsoft Copilot Studio",
    "Conversational AI",
    "Live-site operations",
    "Incident management",
    "Accessibility (WCAG)",
    "Applied machine learning",
    "TypeScript",
    "React",
    "Remote",
  ],
} as const;

/**
 * Generate an absolute URL for a site path
 */
export const generateCanonicalUrl = (path: string): string => {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SEO_CONFIG.siteUrl}${cleanPath}`;
};

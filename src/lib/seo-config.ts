/**
 * SEO Configuration and constants
 * Centralized SEO settings for the entire website
 */

export const SEO_CONFIG = {
  // Website info
  siteName: "Christopher Jennison - Professional Software Engineer",
  siteDescription:
    "Professional software engineer specializing in enterprise-grade development, AI-enhanced workflows, and scalable web applications. Expert in React, Next.js, TypeScript, and modern development practices.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.chrisjennison.dev",

  // Author info
  author: {
    name: "Christopher Jennison",
    email: "cjennison92@gmail.com", // Update when domain is ready
    linkedin: "https://www.linkedin.com/in/christopher-jennison-27223825/",
    github: "https://github.com/cjennison",
  },

  // Default meta tags
  defaultKeywords: [
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Expert",
    "TypeScript Developer",
    "AI Development",
    "Enterprise Architecture",
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "JavaScript Developer",
    "Node.js Developer",
    "Technical Consultant",
    "Software Architecture",
    "MVP Development",
    "Startup Engineering",
    "SaaS Development",
    "API Development",
    "Database Design",
    "Cloud Architecture",
    "DevOps",
    "Agile Development",
    "Code Review",
    "Team Leadership",
    "Technical Strategy",
  ],

  // Business keywords
  businessKeywords: [
    "Software Development Services",
    "Custom Web Applications",
    "Enterprise Software Solutions",
    "AI Integration Services",
    "Technical Consulting",
    "MVP Development Services",
    "Startup Technology Partner",
    "Software Architecture Consulting",
    "React Development Services",
    "Next.js Development",
    "TypeScript Consulting",
    "Full Stack Development",
    "Web Application Development",
    "SaaS Development Services",
    "API Development Services",
    "Database Architecture",
    "Cloud Solutions",
    "Performance Optimization",
    "Code Quality Assessment",
    "Technical Due Diligence",
  ],

  // Social media
  social: {
    linkedin: "christopher-jennison-27223825/",
    github: "cjennison",
  },

  // Organization structured data
  organization: {
    "@type": "Person",
    name: "Christopher Jennison",
    jobTitle: "Professional Software Engineer",
    description:
      "Expert software engineer specializing in enterprise-grade development and AI-enhanced workflows",
    url: "",
    sameAs: [
      "https://www.linkedin.com/in/christopher-jennison-27223825/",
      "https://github.com/cjennison",
    ],
    knowsAbout: [
      "Software Engineering",
      "React Development",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "AI Development",
      "Enterprise Architecture",
      "Full Stack Development",
      "Technical Consulting",
    ],
  },
} as const;

/**
 * Generate page-specific keywords by combining default and page keywords
 */
export const generateKeywords = (pageKeywords: string[] = []): string[] => {
  return [...SEO_CONFIG.defaultKeywords, ...pageKeywords];
};

/**
 * Generate canonical URL
 */
export const generateCanonicalUrl = (path: string): string => {
  const baseUrl = SEO_CONFIG.siteUrl.replace(/\/$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};

/**
 * Generate Open Graph image URL
 */
export const generateOGImageUrl = (
  _title?: string,
  _description?: string,
): string => {
  // Using the dedicated Open Graph image for social media embeds
  return `${SEO_CONFIG.siteUrl}/images/og-default.png`;
};

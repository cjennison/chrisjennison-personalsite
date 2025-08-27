/**
 * Structured Data (JSON-LD) utilities for SEO
 * Generates structured data for better search engine understanding
 */

import { SEO_CONFIG } from "./seo-config";

// Base types for structured data
interface BaseStructuredData {
  "@context": "https://schema.org";
  "@type": string;
}

interface PersonStructuredData extends BaseStructuredData {
  "@type": "Person";
  name: string;
  jobTitle: string;
  description: string;
  url?: string;
  sameAs?: string[];
  knowsAbout?: string[];
  email?: string;
  image?: string;
}

interface WebsiteStructuredData extends BaseStructuredData {
  "@type": "Website";
  name: string;
  description: string;
  url: string;
  author: PersonStructuredData;
  inLanguage: string;
  copyrightYear: number;
}

interface ServiceStructuredData extends BaseStructuredData {
  "@type": "Service";
  name: string;
  description: string;
  provider: PersonStructuredData;
  serviceType: string;
  areaServed: string;
  hasOfferCatalog?: {
    "@type": "OfferCatalog";
    name: string;
    itemListElement: Array<{
      "@type": "Offer";
      itemOffered: {
        "@type": "Service";
        name: string;
        description: string;
      };
    }>;
  };
}

interface BreadcrumbStructuredData extends BaseStructuredData {
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item?: string;
  }>;
}

/**
 * Generate person structured data
 */
export const generatePersonStructuredData = (): PersonStructuredData => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SEO_CONFIG.author.name,
    jobTitle: "Professional Software Engineer",
    description:
      "Expert software engineer specializing in enterprise-grade development, AI-enhanced workflows, and scalable web applications.",
    url: SEO_CONFIG.siteUrl,
    sameAs: [SEO_CONFIG.author.linkedin, SEO_CONFIG.author.github],
    knowsAbout: [
      "Software Engineering",
      "React Development",
      "Next.js Development",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "AI Development",
      "Enterprise Architecture",
      "Full Stack Development",
      "Technical Consulting",
      "MVP Development",
      "SaaS Development",
    ],
    email: SEO_CONFIG.author.email,
    image: `${SEO_CONFIG.siteUrl}/images/christopher-jennison-headshot.jpg`,
  };
};

/**
 * Generate website structured data
 */
export const generateWebsiteStructuredData = (): WebsiteStructuredData => {
  return {
    "@context": "https://schema.org",
    "@type": "Website",
    name: SEO_CONFIG.siteName,
    description: SEO_CONFIG.siteDescription,
    url: SEO_CONFIG.siteUrl,
    author: generatePersonStructuredData(),
    inLanguage: "en-US",
    copyrightYear: new Date().getFullYear(),
  };
};

/**
 * Generate service structured data for engineering services
 */
export const generateEngineeringServiceStructuredData =
  (): ServiceStructuredData => {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Professional Software Engineering Services",
      description:
        "Comprehensive software engineering services including full-stack development, architecture consulting, and technical leadership for startups and enterprises.",
      provider: generatePersonStructuredData(),
      serviceType: "Software Development",
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Engineering Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Full-Stack Web Development",
              description:
                "Complete web application development using modern technologies like React, Next.js, and TypeScript.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Enterprise Architecture",
              description:
                "Scalable system architecture design and technical strategy for growing businesses.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "MVP Development",
              description:
                "Rapid prototype and minimum viable product development for startups.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Technical Consulting",
              description:
                "Expert technical guidance and code review services.",
            },
          },
        ],
      },
    };
  };

/**
 * Generate service structured data for AI coding services
 */
export const generateAICodingServiceStructuredData =
  (): ServiceStructuredData => {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "AI Coding Consultancy Services",
      description:
        "Specialized AI integration and team transformation services to enhance development workflows and productivity through AI-powered tools.",
      provider: generatePersonStructuredData(),
      serviceType: "AI Consulting",
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI Coding Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Team Integration",
              description:
                "Comprehensive 6-8 week program to integrate AI coding tools into development teams.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Workflow Optimization",
              description:
                "Custom AI-powered development workflows and productivity enhancement.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Team Training & Culture",
              description:
                "AI-first development culture integration and team training programs.",
            },
          },
        ],
      },
    };
  };

/**
 * Generate breadcrumb structured data
 */
export const generateBreadcrumbStructuredData = (
  breadcrumbs: Array<{ name: string; url?: string }>,
): BreadcrumbStructuredData => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
};

/**
 * Convert structured data to JSON-LD script tag content
 */
export const structuredDataToJSONLD = (data: BaseStructuredData): string => {
  return JSON.stringify(data, null, 2);
};

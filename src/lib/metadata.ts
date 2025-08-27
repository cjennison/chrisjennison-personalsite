import type { Metadata } from "next";
import {
  generateCanonicalUrl,
  generateKeywords,
  generateOGImageUrl,
  SEO_CONFIG,
} from "./seo-config";

interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
  ogImage?: string;
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  article?: boolean;
  author?: string;
}

/**
 * Generate comprehensive metadata for a page
 */
export const generatePageMetadata = ({
  title,
  description,
  keywords = [],
  path,
  ogImage,
  noIndex = false,
  publishedTime,
  modifiedTime,
  article = false,
  author,
}: PageMetadata): Metadata => {
  const fullTitle = title.includes(SEO_CONFIG.author.name)
    ? title
    : `${title} | ${SEO_CONFIG.author.name}`;

  const canonicalUrl = generateCanonicalUrl(path);
  const imageUrl = ogImage || generateOGImageUrl(title, description);
  const allKeywords = generateKeywords(keywords);

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: [{ name: author || SEO_CONFIG.author.name }],
    creator: SEO_CONFIG.author.name,
    publisher: SEO_CONFIG.author.name,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SEO_CONFIG.siteName,
      locale: "en_US",
      type: article ? "article" : "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(article && publishedTime && { publishedTime }),
      ...(article && modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: "@chrisjennison",
      images: [imageUrl],
    },
    category: article ? "technology" : undefined,
  };

  return metadata;
};

/**
 * Homepage metadata
 */
export const generateHomepageMetadata = (): Metadata => {
  return generatePageMetadata({
    title: SEO_CONFIG.siteName,
    description: SEO_CONFIG.siteDescription,
    keywords: [
      ...SEO_CONFIG.businessKeywords,
      "Portfolio",
      "Professional Website",
      "Software Engineering Services",
    ],
    path: "/",
  });
};

/**
 * Services page metadata
 */
export const generateServicesMetadata = (): Metadata => {
  return generatePageMetadata({
    title: "Professional Software Engineering Services",
    description:
      "Comprehensive software engineering services including full-stack development, enterprise architecture, MVP development, and technical consulting for startups and growing businesses.",
    keywords: [
      "Software Engineering Services",
      "Full Stack Development",
      "Enterprise Architecture",
      "MVP Development",
      "Technical Consulting",
      "React Development Services",
      "Next.js Development",
      "TypeScript Consulting",
      "Web Application Development",
      "SaaS Development",
      "API Development",
      "Database Design",
      "Cloud Architecture",
      "Performance Optimization",
    ],
    path: "/services",
  });
};

/**
 * Engineering services page metadata
 */
export const generateEngineeringServicesMetadata = (): Metadata => {
  return generatePageMetadata({
    title: "Engineering Services - Full-Stack Development & Architecture",
    description:
      "Expert engineering services for startups and enterprises. Specializing in React, Next.js, TypeScript, and modern web development. Custom CRM solutions, AI-powered applications, and scalable architectures.",
    keywords: [
      "Engineering Services",
      "Full Stack Development",
      "React Development",
      "Next.js Development",
      "TypeScript Development",
      "Enterprise Architecture",
      "Custom CRM Development",
      "AI Application Development",
      "Web Application Development",
      "SaaS Architecture",
      "MVP Development",
      "Technical Leadership",
      "Code Review Services",
      "Performance Optimization",
      "Database Architecture",
      "API Development",
      "Cloud Solutions",
      "Scalable Systems",
    ],
    path: "/services/engineering",
  });
};

/**
 * AI Coding services page metadata
 */
export const generateAICodingServicesMetadata = (): Metadata => {
  return generatePageMetadata({
    title: "AI Coding Consultancy - Team Integration & Workflow Optimization",
    description:
      "Transform your development team with AI-powered workflows. Comprehensive program integrating GitHub Copilot, AI tools, and best practices. Increase productivity by 300%+ with proven methodologies.",
    keywords: [
      "AI Coding Consultancy",
      "GitHub Copilot Integration",
      "AI Development Tools",
      "AI Workflow Optimization",
      "Team AI Training",
      "AI-First Development",
      "Developer Productivity",
      "AI Integration Services",
      "Copilot Training",
      "AI Code Generation",
      "Machine Learning Integration",
      "AI-Powered Development",
      "Development Team Training",
      "AI Adoption Strategy",
      "AI Development Culture",
      "AI Programming Assistance",
      "Automated Code Generation",
      "AI Code Review",
    ],
    path: "/services/ai-coding",
  });
};

/**
 * Contact page metadata
 */
export const generateContactMetadata = (): Metadata => {
  return generatePageMetadata({
    title: "Contact - Get Started on Your Project",
    description:
      "Ready to accelerate your development with AI-powered workflows and enterprise-grade engineering? Contact Christopher Jennison for project consultation and service inquiries.",
    keywords: [
      "Contact",
      "Project Consultation",
      "Engineering Services Inquiry",
      "AI Coding Consultation",
      "Software Development Quote",
      "Technical Consulting",
      "MVP Development Inquiry",
      "Development Services",
      "Project Estimation",
      "Engineering Partnership",
    ],
    path: "/contact",
  });
};

/**
 * Case Studies page metadata
 */
export const generateCaseStudiesMetadata = (): Metadata => {
  return generatePageMetadata({
    title: "Case Studies - Real-World Engineering Solutions",
    description:
      "Explore detailed case studies showcasing AI-powered development methodologies, enterprise solutions, and innovative engineering approaches. See real results and development processes.",
    keywords: [
      "Case Studies",
      "Engineering Portfolio",
      "AI Development Case Studies",
      "Software Engineering Examples",
      "Development Methodology",
      "Project Examples",
      "Technical Case Studies",
      "AI-Powered Development",
      "Real-World Solutions",
      "Development Process",
      "Engineering Results",
      "Project Outcomes",
    ],
    path: "/case-studies",
  });
};

/**
 * AI Portfolio Development Case Study metadata
 */
export const generateAIPortfolioCaseStudyMetadata = (): Metadata => {
  return generatePageMetadata({
    title: "AI-Powered Portfolio Development Case Study",
    description:
      "Live case study documenting the real-time development of this portfolio website using AI-powered tools and methodologies. See 300%+ productivity improvements and AI collaboration workflows.",
    keywords: [
      "AI Portfolio Development",
      "GitHub Copilot Case Study",
      "AI Development Methodology",
      "Live Development Case Study",
      "AI-Powered Web Development",
      "Next.js AI Development",
      "TypeScript AI Assistance",
      "AI Code Generation",
      "Development Productivity",
      "AI Collaboration Workflow",
      "Real-Time Case Study",
      "AI Integration Example",
    ],
    path: "/case-studies/ai-powered-portfolio-development",
    article: true,
    publishedTime: "2025-08-27T00:00:00.000Z",
    modifiedTime: new Date().toISOString(),
  });
};

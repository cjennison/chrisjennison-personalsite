import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { PROFILE } from "./profile";
import { generateCanonicalUrl, SEO_CONFIG } from "./seo-config";

const OPEN_GRAPH_LOCALES: Record<string, string> = {
  en: "en_US",
  fr: "fr_FR",
  de: "de_DE",
};

interface PageMetadataInput {
  locale: string;
  /** Path after the locale prefix, e.g. "" for home or "/resume" */
  path: "" | `/${string}`;
  title: string;
  description: string;
  /** Use the title as-is instead of applying the layout title template */
  absoluteTitle?: boolean;
}

/**
 * Generate localized metadata with canonical and hreflang alternates
 */
export const generatePageMetadata = ({
  locale,
  path,
  title,
  description,
  absoluteTitle = false,
}: PageMetadataInput): Metadata => {
  const canonicalUrl = generateCanonicalUrl(`/${locale}${path}`);
  const languages: Record<string, string> = Object.fromEntries(
    routing.locales.map((l) => [l, generateCanonicalUrl(`/${l}${path}`)]),
  );
  languages["x-default"] = generateCanonicalUrl(
    `/${routing.defaultLocale}${path}`,
  );
  const [firstName, ...rest] = PROFILE.name.split(" ");
  const imageUrl = generateCanonicalUrl(SEO_CONFIG.ogImage);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: [...SEO_CONFIG.keywords],
    authors: [{ name: PROFILE.name, url: SEO_CONFIG.siteUrl }],
    creator: PROFILE.name,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "profile",
      firstName,
      lastName: rest.join(" "),
      title,
      description,
      url: canonicalUrl,
      siteName: SEO_CONFIG.siteName,
      locale: OPEN_GRAPH_LOCALES[locale] ?? "en_US",
      images: [
        {
          url: imageUrl,
          ...SEO_CONFIG.ogImageSize,
          alt: PROFILE.name,
        },
      ],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [imageUrl],
    },
  };
};

/**
 * Structured data (JSON-LD) for search engines, AI crawlers, and recruiting tools.
 * Uses schema.org ProfilePage with a Person as the main entity.
 */

import { COMPANIES, EDUCATION, PROFILE } from "./profile";
import { generateCanonicalUrl, SEO_CONFIG } from "./seo-config";

interface ProfileStructuredDataInput {
  locale: string;
  /** Path after the locale prefix, e.g. "" or "/resume" */
  path: "" | `/${string}`;
  description: string;
  knowsAbout: string[];
}

const LANGUAGES = [
  { "@type": "Language", name: "English", alternateName: "en" },
  { "@type": "Language", name: "German", alternateName: "de" },
];

export const generateProfileStructuredData = ({
  locale,
  path,
  description,
  knowsAbout,
}: ProfileStructuredDataInput): Record<string, unknown> => {
  const pageUrl = generateCanonicalUrl(`/${locale}${path}`);
  const currentCompany = COMPANIES[0];
  const [givenName, ...rest] = PROFILE.name.split(" ");

  const person = {
    "@type": "Person",
    "@id": `${SEO_CONFIG.siteUrl}/#person`,
    name: PROFILE.name,
    givenName,
    familyName: rest.join(" "),
    jobTitle: PROFILE.jobTitle,
    description,
    url: SEO_CONFIG.siteUrl,
    image: generateCanonicalUrl(PROFILE.photo),
    sameAs: [PROFILE.linkedin, PROFILE.github],
    worksFor: currentCompany && {
      "@type": "Organization",
      name: currentCompany.name,
    },
    alumniOf: EDUCATION.map((school) => ({
      "@type": "CollegeOrUniversity",
      name: school.school,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: PROFILE.address.locality,
      addressRegion: PROFILE.address.region,
      addressCountry: PROFILE.address.country,
    },
    knowsAbout,
    knowsLanguage: LANGUAGES,
  };

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: pageUrl,
    inLanguage: locale,
    mainEntity: person,
  };
};

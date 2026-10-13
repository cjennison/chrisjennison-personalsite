# SEO and Machine-Readability Implementation

How the site makes Christopher Jennison's profile discoverable by search engines and accurately parsed by ATS and LLM-based recruiting tools.

## Files

| File | Responsibility |
| --- | --- |
| `src/lib/seo-config.ts` | Site URL (`NEXT_PUBLIC_SITE_URL`), role keywords, OG image, `generateCanonicalUrl` |
| `src/lib/metadata.ts` | `generatePageMetadata`: title, description, keywords, canonical, hreflang, Open Graph `profile`, Twitter card |
| `src/lib/structured-data.ts` | `generateProfileStructuredData`: schema.org `ProfilePage` with a `Person` main entity |
| `src/components/seo/StructuredData.tsx` | Server-rendered `<script type="application/ld+json">` (escaped) |
| `src/app/llms.txt/route.ts` | Static plain-text profile in English |
| `src/app/sitemap.ts` | Home and resume for each locale, with language alternates |
| `src/app/robots.ts` | Allows everything except `/api/`; links the sitemap |
| `next.config.ts` | 308 redirects from retired services/case-studies/contact URLs |

## Metadata

- Home uses an absolute title; the resume uses the layout template `%s | Christopher Jennison`.
- Text comes from `Site.meta` in each locale's messages.
- `alternates.languages` lists `en`, `fr`, `de`, and `x-default` (English).

## Structured Data

`ProfilePage` → `Person` includes `name`, `givenName`, `familyName`, `jobTitle`, `description` (localized summary), `url`, `image`, `sameAs` (LinkedIn, GitHub), `worksFor`, `alumniOf`, `address` (Manchester, NH, US), `knowsAbout` (localized skills, excluding spoken languages), and `knowsLanguage`. No email is included.

## llms.txt

A Markdown-formatted plain-text profile following the llmstxt.org convention: summary, contact links, strongest-fit roles, stats, impact with metrics, full experience with highlights, skills, and education. It is generated from the same `Profile` messages and `profile.ts` data as the pages, so it never drifts.

## Verification Checklist

- `curl /en` contains the summary, impact metrics, `<time datetime>` dates, and valid JSON-LD.
- `curl /llms.txt` returns `text/plain` with the full profile.
- Retired URLs return 308 to `/[locale]`.
- Printing `/en/resume` produces a text-extractable PDF without site chrome.
- `npm run resume:pdf` reports exactly 1 page per locale, and plain-text extraction of the PDF reads in order (name, contact, summary, achievements, then "Title, Company" / "Mon YYYY – Mon YYYY" per role).

## One-page PDF (ATS rules applied)

Based on Greenhouse's resume-parsing docs (parse failures come from tables, columns, headers/footers, text boxes, graphics, and abbreviated titles) and Jobscan's formatting guidance (standard headings, "Mon YYYY" dates, web-safe fonts, no icons): the PDF is single-column Calibri/Arial with standard section names, contact details in the body, full job titles, and plain-word metrics.

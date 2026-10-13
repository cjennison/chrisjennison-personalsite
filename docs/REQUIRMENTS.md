# Agent Product Requirements

## Summary

A minimal professional profile website for Christopher Jennison, Principal Software Engineer at Microsoft Copilot Studio. It supports a job search for Principal/Staff Engineer, Engineering Manager/Director, and Head of AI Engineering roles. It must be quick for people to scan and easy for AI recruiting systems to parse.

## Functional Requirements

### Structure

- **Home (`/[locale]`)**: a single page with intro, at-a-glance stats, impact, experience summary, skills, education, and a LinkedIn call to action.
- **Resume (`/[locale]/resume`)**: full role history with highlights, printable to a clean PDF.
- **`/llms.txt`**: plain-text profile for LLM crawlers.
- No contact form. LinkedIn is the only contact path; no email address is published.
- Retired URLs (services, case studies, contact) permanently redirect to the home page.

### Content

- Titles, companies, and dates must match the LinkedIn profile.
- Achievements lead with quantified outcomes.
- All text is translated into English, French, and German, with language notices on fr/de.

### Machine Readability

- All content server-rendered; no content hidden behind client-only interactions.
- schema.org `ProfilePage` + `Person` JSON-LD on both pages.
- Per-locale metadata, canonical URLs, and hreflang alternates; sitemap covers all locales.

## Non-Functional Requirements

- **Accessibility**: WCAG 2.1 AA (contrast, keyboard navigation, skip link, screen-reader text for metrics).
- **Performance**: static generation, Core Web Vitals in the green, no animation libraries.
- **Maintainability**: structure in `src/lib/profile.ts`, text in `messages/*.json`; files under 400 lines.
- **Privacy**: no forms, no stored personal data, no published email.

## Success Criteria

- A recruiter can identify title, focus, top achievements, and contact path within 10 seconds.
- ATS/LLM extraction of `/en/resume`, `/llms.txt`, and JSON-LD yields accurate titles, dates, and metrics.
- Lighthouse scores of 90+ across categories.

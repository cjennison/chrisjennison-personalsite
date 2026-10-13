# Christopher Jennison

> Principal Software Engineer · Microsoft Copilot Studio · New England (remote)

Source for [chrisjennison.dev](https://www.chrisjennison.dev): a minimal profile and resume site built so people and AI recruiting systems can quickly understand my work.

- **Profile**: `/en`, `/fr`, `/de`
- **Resume** (print-ready): `/en/resume`
- **One-page PDF resume**: [`/Christopher-Jennison-Resume.pdf`](https://www.chrisjennison.dev/Christopher-Jennison-Resume.pdf)
- **Plain-text profile for LLMs**: [`/llms.txt`](https://www.chrisjennison.dev/llms.txt)
- **Contact**: [LinkedIn](https://www.linkedin.com/in/christopher-jennison-27223825/)

## Stack

Next.js 15 (App Router) · React 19 · TypeScript · Mantine 8 · Tailwind CSS 4 · next-intl (en/fr/de) · Biome

All pages are statically generated and server-rendered, with schema.org `ProfilePage`/`Person` JSON-LD.

## Development

```bash
npm install
npm run dev      # Development server (Turbopack)
npm run build    # Production build
npm run lint     # Biome lint + format check
npm run resume:pdf  # Regenerate the one-page PDFs (run while the site is up)
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` (and optionally `NEXT_PUBLIC_GA_MEASUREMENT_ID`).

## Editing content

- Companies, roles, dates, and achievement metrics: `src/lib/profile.ts`
- All display text (in three languages): `messages/en.json`, `messages/fr.json`, `messages/de.json`
- After editing content, run `npm run resume:pdf` to refresh the PDFs (it fails if any exceeds one page)
- Private, role-tailored resumes live in the gitignored `private/` folder (see docs/PROJECT.md)

See [docs/PROJECT.md](docs/PROJECT.md) for architecture and conventions.

/**
 * Internationalization configuration for the portfolio website
 *
 * Current setup:
 * - English (en) as primary language
 * - Ready for expansion to additional locales
 * - Follows Next.js App Router + next-intl patterns
 */

export const locales = ["en"] as const;
export const defaultLocale = "en" as const;

export type Locale = (typeof locales)[number];

/**
 * Configuration for next-intl
 */
export const i18nConfig = {
  locales,
  defaultLocale,
  localePrefix: "never" as const, // No prefix for default locale
} as const;

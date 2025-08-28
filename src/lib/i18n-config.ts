/**
 * Internationalization configuration for the portfolio website
 *
 * Current setup:
 * - English (en) as primary language
 * - French (fr) with regional variants (fr-CA, fr-FR, etc.)
 * - German (de) with regional variants (de-DE, de-AT, etc.)
 * - Follows Next.js App Router + next-intl patterns
 */

export const locales = ["en", "fr", "de"] as const;
export const defaultLocale = "en" as const;

export type Locale = (typeof locales)[number];

/**
 * Configuration for next-intl
 */
export const i18nConfig = {
  locales,
  defaultLocale,
  localePrefix: "as-needed" as const, // Add prefix for non-default locales
} as const;

/**
 * Language display names for the language selector
 * Format: [Language in current locale] ([Language in its own locale])
 */
export const languageNames = {
  en: {
    en: "English (English)",
    fr: "French (Français)",
    de: "German (Deutsch)",
  },
  fr: {
    en: "Anglais (English)",
    fr: "Français (Français)",
    de: "Allemand (Deutsch)",
  },
  de: {
    en: "Englisch (English)",
    fr: "Französisch (Français)",
    de: "Deutsch (Deutsch)",
  },
} as const;

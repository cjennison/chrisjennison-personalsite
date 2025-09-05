import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

/**
 * Deep merge two translation objects, with the second object taking priority
 * This ensures that any missing keys in the locale fallback to English
 */
function deepMergeTranslations(
  target: Record<string, unknown>,
  source: Record<string, unknown>,
): Record<string, unknown> {
  const result: Record<string, unknown> = { ...target };

  for (const [key, value] of Object.entries(source)) {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      const targetValue = target[key];
      const targetObj =
        targetValue &&
        typeof targetValue === "object" &&
        !Array.isArray(targetValue)
          ? (targetValue as Record<string, unknown>)
          : {};

      result[key] = deepMergeTranslations(
        targetObj,
        value as Record<string, unknown>,
      );
    } else {
      result[key] = value;
    }
  }

  return result;
}

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (
    !locale ||
    !routing.locales.includes(locale as (typeof routing.locales)[number])
  ) {
    locale = routing.defaultLocale ?? "en";
  }

  // Always load English messages as fallback
  const englishMessages = (await import(`../../messages/en.json`)).default;

  let messages = englishMessages;

  // If the requested locale is not English, merge with English as fallback
  if (locale !== "en") {
    try {
      const localeMessages = (await import(`../../messages/${locale}.json`))
        .default;
      // Merge English (fallback) with locale-specific messages (priority)
      messages = deepMergeTranslations(
        englishMessages as Record<string, unknown>,
        localeMessages as Record<string, unknown>,
      ) as typeof englishMessages;
    } catch (error) {
      // If locale file doesn't exist or has errors, fall back to English
      console.warn(
        `Failed to load messages for locale '${locale}', falling back to English:`,
        error,
      );
      messages = englishMessages;
    }
  }

  return {
    locale: locale || "en",
    messages,
  };
});

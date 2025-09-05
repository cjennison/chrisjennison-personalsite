/**
 * Utility functions for i18n development and debugging
 */

/**
 * Get all translation keys from an object (flattened with dot notation)
 */
export function getTranslationKeys(
  obj: Record<string, unknown>,
  prefix = "",
): string[] {
  const keys: string[] = [];

  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if (value && typeof value === "object" && !Array.isArray(value)) {
      keys.push(
        ...getTranslationKeys(value as Record<string, unknown>, fullKey),
      );
    } else {
      keys.push(fullKey);
    }
  }

  return keys;
}

/**
 * Compare two translation objects and find missing keys
 */
export function findMissingTranslationKeys(
  baseTranslations: Record<string, unknown>,
  compareTranslations: Record<string, unknown>,
): {
  missingInCompare: string[];
  extraInCompare: string[];
} {
  const baseKeys = new Set(getTranslationKeys(baseTranslations));
  const compareKeys = new Set(getTranslationKeys(compareTranslations));

  const missingInCompare = Array.from(baseKeys).filter(
    (key) => !compareKeys.has(key),
  );
  const extraInCompare = Array.from(compareKeys).filter(
    (key) => !baseKeys.has(key),
  );

  return {
    missingInCompare,
    extraInCompare,
  };
}

/**
 * Development utility to check translation completeness
 * Only available in development mode
 */
export async function checkTranslationCompleteness(locale: string): Promise<{
  locale: string;
  missingKeys: string[];
  extraKeys: string[];
  completeness: number;
}> {
  if (process.env.NODE_ENV === "production") {
    throw new Error(
      "Translation completeness check is only available in development mode",
    );
  }

  try {
    // Load English as the base reference
    const englishMessages = (await import(`../../messages/en.json`)).default;
    const localeMessages = (await import(`../../messages/${locale}.json`))
      .default;

    const { missingInCompare: missingKeys, extraInCompare: extraKeys } =
      findMissingTranslationKeys(englishMessages, localeMessages);

    const totalEnglishKeys = getTranslationKeys(englishMessages).length;
    const completeness = Math.round(
      ((totalEnglishKeys - missingKeys.length) / totalEnglishKeys) * 100,
    );

    return {
      locale,
      missingKeys,
      extraKeys,
      completeness,
    };
  } catch (error) {
    throw new Error(
      `Failed to check translations for locale '${locale}': ${error}`,
    );
  }
}

/**
 * Development utility to print translation completeness report
 */
export async function printTranslationReport(locales: string[]): Promise<void> {
  if (process.env.NODE_ENV === "production") {
    console.warn("Translation reports are only available in development mode");
    return;
  }

  console.log("\n🌐 Translation Completeness Report\n");
  console.log("=".repeat(50));

  for (const locale of locales) {
    if (locale === "en") continue; // Skip English as it's the reference

    try {
      const report = await checkTranslationCompleteness(locale);

      console.log(
        `\n📍 ${locale.toUpperCase()}: ${report.completeness}% complete`,
      );

      if (report.missingKeys.length > 0) {
        console.log(`\n❌ Missing keys (${report.missingKeys.length}):`);
        for (const key of report.missingKeys.slice(0, 10)) {
          console.log(`   - ${key}`);
        }
        if (report.missingKeys.length > 10) {
          console.log(`   ... and ${report.missingKeys.length - 10} more`);
        }
      }

      if (report.extraKeys.length > 0) {
        console.log(`\n➕ Extra keys (${report.extraKeys.length}):`);
        for (const key of report.extraKeys.slice(0, 5)) {
          console.log(`   - ${key}`);
        }
        if (report.extraKeys.length > 5) {
          console.log(`   ... and ${report.extraKeys.length - 5} more`);
        }
      }

      if (report.missingKeys.length === 0 && report.extraKeys.length === 0) {
        console.log("✅ All translations are complete!");
      }
    } catch (error) {
      console.log(`\n❌ ${locale.toUpperCase()}: Error - ${error}`);
    }
  }

  console.log("\n" + "=".repeat(50));
}

"use client";

import { useLocale } from "next-intl";
import { useEffect } from "react";

export function LocaleHtmlUpdater() {
  const locale = useLocale();

  useEffect(() => {
    // Update the HTML lang attribute to match the current locale
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}

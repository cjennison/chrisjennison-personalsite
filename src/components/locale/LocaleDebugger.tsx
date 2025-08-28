"use client";

import { useLocale, useTranslations } from "next-intl";

export function LocaleDebugger() {
  const locale = useLocale();
  const t = useTranslations("Navigation");

  if (process.env.NODE_ENV === "development") {
    return (
      <div
        style={{
          position: "fixed",
          top: 10,
          right: 10,
          background: "red",
          color: "white",
          padding: "5px 10px",
          fontSize: "12px",
          zIndex: 9999,
        }}
      >
        Locale: {locale} | Home: {t("home")}
      </div>
    );
  }

  return null;
}

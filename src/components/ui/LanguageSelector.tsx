"use client";

import { Menu, Text, UnstyledButton } from "@mantine/core";
import { IconChevronDown, IconLanguage } from "@tabler/icons-react";
import { useLocale } from "next-intl";
import { useEffect, useState, useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import { type Locale, languageNames } from "@/lib/i18n-config";

export function LanguageSelector() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [opened, setOpened] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <UnstyledButton className="flex items-center gap-2 px-3 py-2 rounded-md">
        <IconLanguage size={16} />
        <Text size="sm" fw={500}>
          Loading...
        </Text>
      </UnstyledButton>
    );
  }

  const handleLanguageChange = (newLocale: Locale) => {
    startTransition(() => {
      // Use push instead of replace and just pass the pathname
      // The routing should automatically handle the locale switching
      router.push(pathname, { locale: newLocale });
    });
    setOpened(false);
  };

  // Show language name in current UI language, with native name in parentheses
  // For example: if current locale is 'en' and we're showing German, show "German (Deutsch)"
  // Add fallback in case locale detection fails
  const currentLanguageDisplay =
    languageNames[locale]?.[locale] || languageNames.en.en;

  return (
    <Menu
      opened={opened}
      onChange={setOpened}
      position="bottom-end"
      withArrow
      arrowPosition="center"
    >
      <Menu.Target>
        <UnstyledButton
          className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          disabled={isPending}
        >
          <IconLanguage size={16} />
          <Text size="sm" fw={500}>
            {currentLanguageDisplay}
          </Text>
          <IconChevronDown
            size={14}
            style={{
              transform: opened ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 200ms ease",
            }}
          />
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>
          {locale === "en"
            ? "Select Language"
            : locale === "fr"
              ? "Sélectionner la langue"
              : "Sprache auswählen"}
        </Menu.Label>
        {Object.entries(languageNames[locale]).map(
          ([langCode, displayName]) => (
            <Menu.Item
              key={langCode}
              onClick={() => handleLanguageChange(langCode as Locale)}
              disabled={langCode === locale}
              style={{
                fontWeight: langCode === locale ? 600 : 400,
                backgroundColor:
                  langCode === locale
                    ? "var(--mantine-color-gray-1)"
                    : undefined,
              }}
            >
              {displayName}
            </Menu.Item>
          ),
        )}
      </Menu.Dropdown>
    </Menu>
  );
}

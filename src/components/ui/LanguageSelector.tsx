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
  const [isWideScreen, setIsWideScreen] = useState(false);

  // Handle hydration
  useEffect(() => {
    setMounted(true);

    // Check initial screen size
    const checkScreenSize = () => {
      setIsWideScreen(window.innerWidth >= 900);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <UnstyledButton className="flex items-center gap-1 px-2 py-2 rounded-md">
        <Text size="sm" fw={500}>
          EN
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

  // Get compact language code for smaller screens
  const getLanguageCode = (localeCode: Locale) => {
    return localeCode.toUpperCase();
  };

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
          className={`flex items-center py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
            isWideScreen ? "gap-2 px-3" : "gap-1 px-2"
          }`}
          disabled={isPending}
        >
          {isWideScreen && <IconLanguage size={14} />}
          {isWideScreen ? (
            <Text size="sm" fw={500}>
              {currentLanguageDisplay}
            </Text>
          ) : (
            <Text size="sm" fw={500}>
              {getLanguageCode(locale)}
            </Text>
          )}
          <IconChevronDown
            size={isWideScreen ? 14 : 12}
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

"use client";

import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { LanguageSelector } from "@/components/ui/LanguageSelector";
import { trackThemeChange } from "@/lib/analytics";

interface HeaderControlsProps {
  themeLabel: string;
}

export function HeaderControls({ themeLabel }: HeaderControlsProps) {
  const { setColorScheme } = useMantineColorScheme();
  // Resolved after mount so server and client markup match
  const colorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = () => {
    const next = colorScheme === "dark" ? "light" : "dark";
    trackThemeChange(next);
    setColorScheme(next);
  };

  return (
    <div className="flex items-center gap-1">
      <LanguageSelector compact />
      <ActionIcon
        variant="subtle"
        color="gray"
        size="lg"
        onClick={toggleColorScheme}
        aria-label={themeLabel}
        title={themeLabel}
      >
        {colorScheme === "dark" ? (
          <IconSun size={18} />
        ) : (
          <IconMoon size={18} />
        )}
      </ActionIcon>
    </div>
  );
}

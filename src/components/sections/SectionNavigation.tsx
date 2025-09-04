"use client";

import { Button, Group } from "@mantine/core";
import { useEffect, useState } from "react";

interface SectionItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
}

interface SectionNavigationProps {
  sections: SectionItem[];
  onSectionClick: (sectionId: string) => void;
  color?: string;
}

export function SectionNavigation({
  sections,
  onSectionClick,
  color = "blue",
}: SectionNavigationProps) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 700);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div
      className={`z-10 mb-8 ${isSmallScreen ? "relative" : "sticky top-20"}`}
    >
      <div
        className="p-4 rounded-xl border shadow-md backdrop-blur-sm"
        style={{
          backgroundColor: "var(--mantine-color-body)",
          borderColor: "var(--mantine-color-default-border)",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        }}
      >
        <Group justify="center" gap="xs" wrap="wrap">
          {sections.map(({ id, label, icon: Icon }) => (
            <Button
              key={id}
              variant="subtle"
              size="sm"
              leftSection={<Icon size={16} />}
              onClick={() => onSectionClick(id)}
              className="hover:scale-105 transition-all duration-200 hover:shadow-md"
              c="var(--mantine-color-text)"
              style={{
                "--button-hover": `var(--mantine-color-${color}-light-hover)`,
                fontSize: "0.875rem",
                fontWeight: 500,
              }}
            >
              {label}
            </Button>
          ))}
        </Group>
      </div>
    </div>
  );
}

"use client";

import { createTheme, MantineProvider } from "@mantine/core";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export const theme = createTheme({
  fontFamily: inter.style.fontFamily,
  primaryColor: "blue",
  colors: {
    blue: [
      "#eff6ff",
      "#dbeafe",
      "#bfdbfe",
      "#93c5fd",
      "#60a5fa",
      "#3b82f6", // Primary professional blue
      "#2563eb",
      "#1d4ed8",
      "#1e40af",
      "#1e3a8a",
    ],
    // Indigo colors for hero gradient
    indigo: [
      "#f0f9ff", // 0 - very light blue
      "#e0f2fe", // 1 - light blue
      "#bae6fd", // 2
      "#7dd3fc", // 3
      "#38bdf8", // 4
      "#0ea5e9", // 5
      "#0284c7", // 6
      "#0369a1", // 7
      "#075985", // 8
      "#0c4a6e", // 9 - dark blue
    ],
    // Custom gray scale that works with our design
    gray: [
      "#f8f9fa", // 0 - lightest
      "#f1f3f4", // 1
      "#e9ecef", // 2
      "#dee2e6", // 3
      "#ced4da", // 4
      "#adb5bd", // 5
      "#6c757d", // 6
      "#495057", // 7
      "#343a40", // 8
      "#212529", // 9 - darkest
    ],
    // Green scale for success states
    green: [
      "#f0fdf4",
      "#dcfce7",
      "#bbf7d0",
      "#86efac",
      "#4ade80",
      "#22c55e",
      "#16a34a",
      "#15803d",
      "#166534",
      "#14532d",
    ],
    // Purple scale
    purple: [
      "#faf5ff",
      "#f3e8ff",
      "#e9d5ff",
      "#d8b4fe",
      "#c084fc",
      "#a855f7",
      "#9333ea",
      "#7c3aed",
      "#6b21a8",
      "#581c87",
    ],
    // Orange scale
    orange: [
      "#fff7ed",
      "#ffedd5",
      "#fed7aa",
      "#fdba74",
      "#fb923c",
      "#f97316",
      "#ea580c",
      "#c2410c",
      "#9a3412",
      "#7c2d12",
    ],
    // Red scale
    red: [
      "#fef2f2",
      "#fecaca",
      "#fca5a5",
      "#f87171",
      "#ef4444",
      "#dc2626",
      "#b91c1c",
      "#991b1b",
      "#7f1d1d",
      "#650a0a",
    ],
    // Mantine's dark colors for dark mode backgrounds
    dark: [
      "#C1C2C5", // 0 - lightest gray for dark mode
      "#A6A7AB", // 1
      "#909296", // 2
      "#5c5f66", // 3
      "#373A40", // 4
      "#2C2E33", // 5
      "#25262b", // 6 - default dark background
      "#1A1B1E", // 7
      "#141517", // 8
      "#000000", // 9 - pure black for strict dark mode
      "#000000", // 9 - pure black for dark mode backgrounds
    ],
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
  components: {
    Container: {
      defaultProps: {
        sizes: {
          xs: 540,
          sm: 720,
          md: 960,
          lg: 1140,
          xl: 1320,
        },
      },
    },
  },
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // Sync Mantine color scheme with class-based dark mode
  useEffect(() => {
    const updateDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      // We'll let Mantine's useMantineColorScheme handle the state
      // This is just to ensure initial sync
    };

    updateDarkMode();

    // Watch for class changes on html element
    const observer = new MutationObserver(updateDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <MantineProvider
      theme={theme}
      defaultColorScheme="auto"
      forceColorScheme={undefined}
    >
      {children}
    </MantineProvider>
  );
}

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
    dark: [
      "#C1C2C5",
      "#A6A7AB",
      "#909296",
      "#5c5f66",
      "#373A40",
      "#2C2E33",
      "#25262b",
      "#1A1B1E",
      "#141517",
      "#101113",
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

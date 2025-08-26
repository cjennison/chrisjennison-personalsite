"use client";

import {
  ActionIcon,
  Burger,
  Button,
  Drawer,
  Group,
  Stack,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMoon, IconSun } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/", type: "page" },
  { label: "About", href: "#about", type: "section" },
  { label: "Services", href: "#services", type: "section" },
  { label: "Case Studies", href: "/case-studies", type: "page" },
  { label: "Contact", href: "#contact", type: "section" },
];

export function Navigation() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("");

  // Sync Mantine color scheme with HTML class
  useEffect(() => {
    const html = document.documentElement;

    if (colorScheme === "dark") {
      html.classList.add("dark");
    } else if (colorScheme === "light") {
      html.classList.remove("dark");
    } else {
      // Auto mode - check system preference
      const isDarkPreferred = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      if (isDarkPreferred) {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    }
  }, [colorScheme]);

  // Track active section based on scroll position
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const handleScroll = () => {
      const sections = ["home", "about", "services", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      // Find the current section based on scroll position
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);

        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }

      // Default to home if we're at the very top
      if (scrollPosition < 100) {
        setActiveSection("/");
      }
    };

    // Set initial active section
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const handleNavClick = (item: (typeof navItems)[0]) => {
    if (item.type === "section") {
      // Handle section scrolling on homepage
      if (pathname === "/") {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to homepage first, then scroll
        window.location.href = `/${item.href}`;
      }
    }
    // Page navigation is handled by Link component
    close();
  };

  const isActiveNavItem = (item: (typeof navItems)[0]) => {
    if (item.type === "page") {
      // Handle exact page matches and sub-pages
      if (item.href === "/") {
        // Home page should be active on exact root path OR when actively viewing home section
        return (
          pathname === "/" &&
          (activeSection === "/" || activeSection === "#home")
        );
      }
      // For other pages, check if current path starts with the page path
      // This handles sub-pages like /case-studies/specific-study
      return pathname.startsWith(item.href);
    }

    if (item.type === "section") {
      // Sections are active when we're on homepage and scrolled to that section
      if (pathname === "/") {
        return activeSection === item.href;
      }
      return false;
    }

    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 light:bg-white/80 dark:bg-black/80 backdrop-blur-md light:border-b light:border-gray-200 dark:border-none">
      <div className="max-w-7xl mx-auto px-4">
        <Group justify="space-between" h={60}>
          {/* Logo */}
          <Button
            variant="subtle"
            size="lg"
            fw={700}
            className="text-blue-600 hover:bg-transparent"
            component={Link}
            href="/"
          >
            CJ
          </Button>

          {/* Desktop Navigation */}
          <Group gap="md" visibleFrom="sm">
            {navItems.map((item) =>
              item.type === "page" ? (
                <Button
                  key={item.label}
                  variant={isActiveNavItem(item) ? "filled" : "subtle"}
                  component={Link}
                  href={item.href}
                  className={
                    isActiveNavItem(item)
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }
                >
                  {item.label}
                </Button>
              ) : (
                <Button
                  key={item.label}
                  variant={isActiveNavItem(item) ? "filled" : "subtle"}
                  onClick={() => handleNavClick(item)}
                  className={
                    isActiveNavItem(item)
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }
                >
                  {item.label}
                </Button>
              ),
            )}
          </Group>

          {/* Theme Toggle & Mobile Menu */}
          <Group gap="sm">
            <ActionIcon
              variant="subtle"
              size="lg"
              onClick={() => toggleColorScheme()}
              className="text-gray-700 dark:text-gray-300"
            >
              {colorScheme === "dark" ? (
                <IconSun size={20} />
              ) : (
                <IconMoon size={20} />
              )}
            </ActionIcon>

            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
              className="text-gray-700 dark:text-gray-300"
            />
          </Group>
        </Group>
      </div>

      {/* Mobile Navigation Drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        title="Navigation"
        padding="md"
        size="sm"
        position="right"
      >
        <Stack gap="md">
          {navItems.map((item) =>
            item.type === "page" ? (
              <Button
                key={item.label}
                variant={isActiveNavItem(item) ? "filled" : "subtle"}
                fullWidth
                justify="flex-start"
                component={Link}
                href={item.href}
                onClick={close}
                className={
                  isActiveNavItem(item)
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "text-gray-700 dark:text-gray-300"
                }
              >
                {item.label}
              </Button>
            ) : (
              <Button
                key={item.label}
                variant={isActiveNavItem(item) ? "filled" : "subtle"}
                fullWidth
                justify="flex-start"
                onClick={() => handleNavClick(item)}
                className={
                  isActiveNavItem(item)
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "text-gray-700 dark:text-gray-300"
                }
              >
                {item.label}
              </Button>
            ),
          )}
        </Stack>
      </Drawer>
    </nav>
  );
}

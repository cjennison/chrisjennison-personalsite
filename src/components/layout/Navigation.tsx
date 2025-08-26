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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
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
                  variant="subtle"
                  component={Link}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {item.label}
                </Button>
              ) : (
                <Button
                  key={item.label}
                  variant="subtle"
                  onClick={() => handleNavClick(item)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
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
                variant="subtle"
                fullWidth
                justify="flex-start"
                component={Link}
                href={item.href}
                onClick={close}
                className="text-gray-700 dark:text-gray-300"
              >
                {item.label}
              </Button>
            ) : (
              <Button
                key={item.label}
                variant="subtle"
                fullWidth
                justify="flex-start"
                onClick={() => handleNavClick(item)}
                className="text-gray-700 dark:text-gray-300"
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

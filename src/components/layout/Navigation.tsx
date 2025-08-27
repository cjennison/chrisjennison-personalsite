"use client";

import {
  ActionIcon,
  Burger,
  Button,
  Drawer,
  Group,
  Menu,
  Stack,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBrain,
  IconChevronDown,
  IconCode,
  IconMoon,
  IconSun,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { trackNavigation, trackThemeChange } from "@/lib/analytics";

const navItems = [
  { label: "Home", href: "/", type: "page" },
  { label: "About", href: "#about", type: "section" },
  {
    label: "Services",
    href: "#services",
    type: "section",
    dropdown: [
      {
        label: "Engineering Services",
        href: "/services/engineering",
        icon: IconCode,
        description: "Full-stack development & architecture",
      },
      {
        label: "AI Coding Consultancy",
        href: "/services/ai-coding",
        icon: IconBrain,
        description: "Team AI integration & workflows",
      },
    ],
  },
  { label: "Case Studies", href: "/case-studies", type: "page" },
  { label: "Contact", href: "/contact", type: "page" },
];

export function Navigation() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("");

  // Handle theme change with analytics
  const handleThemeToggle = () => {
    const newTheme = colorScheme === "dark" ? "light" : "dark";
    trackThemeChange(newTheme);
    toggleColorScheme();
  };

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
    // Track navigation analytics
    trackNavigation(item.label.toLowerCase(), "nav_click");

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
      // Special handling for Services with dropdown
      if (item.label === "Services" && item.dropdown) {
        // Services is active if we're on homepage scrolled to services section
        // OR if we're on any services sub-page
        if (pathname === "/") {
          return activeSection === item.href;
        }
        // Check if we're on any services sub-page
        return pathname.startsWith("/services");
      }

      // Other sections are active when we're on homepage and scrolled to that section
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
              ) : item.dropdown ? (
                <Menu
                  key={item.label}
                  trigger="hover"
                  openDelay={100}
                  closeDelay={400}
                >
                  <Menu.Target>
                    <Button
                      variant={isActiveNavItem(item) ? "filled" : "subtle"}
                      rightSection={<IconChevronDown size={16} />}
                      className={
                        isActiveNavItem(item)
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      }
                    >
                      {item.label}
                    </Button>
                  </Menu.Target>
                  <Menu.Dropdown
                    style={{
                      backgroundColor: "var(--mantine-color-body)",
                      border: "1px solid var(--mantine-color-default-border)",
                    }}
                  >
                    <Menu.Label>Service Offerings</Menu.Label>
                    {item.dropdown.map((dropdownItem) => (
                      <Menu.Item
                        key={dropdownItem.href}
                        component={Link}
                        href={dropdownItem.href}
                        leftSection={
                          <dropdownItem.icon
                            size={16}
                            style={{
                              color: dropdownItem.href.includes("engineering")
                                ? "var(--mantine-color-blue-6)"
                                : dropdownItem.href.includes("ai-coding")
                                  ? "var(--mantine-color-violet-6)"
                                  : "var(--mantine-color-green-6)",
                            }}
                          />
                        }
                        style={{
                          color: "var(--mantine-color-text)",
                        }}
                      >
                        <div>
                          <div
                            style={{
                              fontWeight: 500,
                              color: "var(--mantine-color-text)",
                            }}
                          >
                            {dropdownItem.label}
                          </div>
                          <div
                            style={{
                              fontSize: "0.8rem",
                              color: "var(--mantine-color-dimmed)",
                            }}
                          >
                            {dropdownItem.description}
                          </div>
                        </div>
                      </Menu.Item>
                    ))}
                    <Menu.Divider />
                    <Menu.Item
                      component={Link}
                      href="/services"
                      style={{
                        color: "var(--mantine-color-blue-6)",
                        fontWeight: 500,
                      }}
                    >
                      View All Services
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
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
              onClick={() => handleThemeToggle()}
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
        styles={{
          content: {
            backgroundColor: "var(--mantine-color-body)",
          },
          header: {
            backgroundColor: "var(--mantine-color-body)",
            borderBottom: "1px solid var(--mantine-color-default-border)",
          },
        }}
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
            ) : item.dropdown ? (
              <div key={item.label}>
                <Button
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
                <Stack gap="xs" className="ml-4 mt-2">
                  {item.dropdown.map((dropdownItem) => (
                    <Button
                      key={dropdownItem.href}
                      variant="subtle"
                      size="sm"
                      fullWidth
                      justify="flex-start"
                      component={Link}
                      href={dropdownItem.href}
                      onClick={close}
                      leftSection={
                        <dropdownItem.icon
                          size={14}
                          style={{
                            color: dropdownItem.href.includes("engineering")
                              ? "var(--mantine-color-blue-6)"
                              : dropdownItem.href.includes("ai-coding")
                                ? "var(--mantine-color-violet-6)"
                                : "var(--mantine-color-green-6)",
                          }}
                        />
                      }
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {dropdownItem.label}
                    </Button>
                  ))}
                  <Button
                    variant="subtle"
                    size="sm"
                    fullWidth
                    justify="flex-start"
                    component={Link}
                    href="/services"
                    onClick={close}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View All Services
                  </Button>
                </Stack>
              </div>
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

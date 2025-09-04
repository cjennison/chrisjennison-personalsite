"use client";

import {
  Button,
  Container,
  Group,
  Stack,
  Text,
  Title,
  Tooltip,
  useMantineColorScheme,
} from "@mantine/core";
import { IconArrowRight, IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link } from "@/i18n/routing";

export function HeroSection() {
  const { colorScheme } = useMantineColorScheme();
  const t = useTranslations("Hero");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check for small screens to adjust spacing
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // Calculate daughter's age automatically
  const getDaughterAge = () => {
    const birthDate = new Date(2023, 7, 10); // August 10, 2023 (month is 0-indexed)
    const today = new Date();
    const ageInYears = Math.floor(
      (today.getTime() - birthDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000),
    );
    return ageInYears;
  };

  const achievements = [
    {
      id: "exp",
      number: t("achievements.exp.number"),
      label: t("achievements.exp.label"),
    },
    {
      id: "rev",
      number: t("achievements.rev.number"),
      label: t("achievements.rev.label"),
    },
    {
      id: "reports",
      number: t("achievements.reports.number"),
      label: t("achievements.reports.label"),
    },
    {
      id: "business",
      number: t("achievements.business.number"),
      label: t("achievements.business.label"),
    },
    {
      id: "countries",
      number: t("achievements.countries.number"),
      label: t("achievements.countries.label"),
    },
    {
      id: "users",
      number: t("achievements.users.number"),
      label: t("achievements.users.label"),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % achievements.length);
        setIsTransitioning(false);
      }, 300); // Half of transition duration
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [achievements.length]);

  // Get current 4 achievements (3 visible + 1 for incoming)
  const getAchievements = () => {
    const items = [];
    for (let i = -1; i < 3; i++) {
      const index =
        (currentIndex + i + achievements.length) % achievements.length;
      items.push({
        ...achievements[index],
        position: i,
      });
    }
    return items;
  };

  // Define backgrounds for light and dark modes using Mantine colors
  const getBackgroundStyle = () => {
    if (colorScheme === "dark") {
      return {
        background: `linear-gradient(135deg,
          var(--mantine-color-dark-7) 0%,
          var(--mantine-color-dark-8) 100%
        )`,
      };
    }
    return {
      background: `linear-gradient(135deg,
        var(--mantine-color-blue-0) 0%,
        var(--mantine-color-indigo-1) 100%
      )`,
    };
  };

  return (
    <section
      className="relative min-h-[calc(100vh-60px)] flex items-center justify-center"
      style={getBackgroundStyle()}
    >
      <Container size="lg" className="text-center">
        <Stack gap="xl">
          {/* Professional Headshot */}
          <div className="mx-auto w-32 h-32 rounded-full overflow-hidden shadow-lg ring-4 ring-blue-600/20 mt-5">
            <Image
              src="/images/selfie.jpg"
              alt="Christopher Jennison professional headshot"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Main Title and Value Proposition */}
          <div>
            <Title
              order={1}
              size="3.5rem"
              fw={700}
              className="mb-4"
              style={{ lineHeight: 1.1 }}
            >
              {t("name")}
            </Title>
            <Title
              order={2}
              size="1.75rem"
              fw={400}
              c="blue.6"
              className="mb-6"
            >
              {t("title")}
            </Title>
          </div>
          {/* Value Proposition */}
          <div className="max-w-3xl mx-auto">
            <Text size="xl" c="dimmed" className="leading-relaxed text-center">
              {t("description")}
            </Text>
          </div>
          {/* Personal Touch */}
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center">
              <Text
                size="md"
                c="dimmed"
                className="inline-flex items-center justify-center flex-wrap gap-1 leading-relaxed"
              >
                {t.rich("personalNote", {
                  age: getDaughterAge(),
                  flag: (_chunks) => (
                    <Tooltip label={t("personalNoteTooltip")} position="top">
                      <Image
                        src="/images/nh.webp"
                        alt={t("personalNoteTooltip")}
                        width={20}
                        height={14}
                        className="inline cursor-pointer"
                        style={{
                          filter: colorScheme === "dark" ? "invert(1)" : "none",
                        }}
                      />
                    </Tooltip>
                  ),
                })}
              </Text>
            </div>
          </div>
          {/* Animated Key Stats/Highlights */}
          <div className="mt-8 relative overflow-hidden">
            <div
              className="flex justify-center items-center"
              style={{ height: "100px" }} // Increased height for German text wrapping
            >
              {getAchievements().map((achievement) => {
                const getTransform = () => {
                  // Responsive spacing: smaller on mobile, larger on desktop for German text
                  const spacing = isSmallScreen ? 140 : 180;

                  if (isTransitioning) {
                    // During transition, everything slides left - responsive spacing
                    return `translateX(${(achievement.position - 1) * spacing}px)`;
                  } else {
                    // Normal positioning - responsive spacing
                    return `translateX(${achievement.position * spacing}px)`;
                  }
                };

                const getOpacity = () => {
                  if (achievement.position === -1) {
                    return isTransitioning ? 0 : 1; // Fade out when sliding left
                  }
                  if (achievement.position === 2) {
                    return isTransitioning ? 1 : 0; // Fade in when coming from right
                  }
                  return 1; // Always visible for positions 0 and 1
                };

                const isVisible =
                  achievement.position >= -1 && achievement.position <= 2;

                return (
                  <div
                    key={achievement.id}
                    className="absolute text-center transition-all duration-600 ease-in-out"
                    style={{
                      minWidth: isSmallScreen ? "140px" : "160px", // Responsive width
                      maxWidth: isSmallScreen ? "140px" : "160px", // Responsive width
                      transform: getTransform(),
                      opacity: getOpacity(),
                      pointerEvents: isVisible ? "auto" : "none",
                    }}
                  >
                    <Text size="2xl" fw={700} c="blue.6">
                      {achievement.number}
                    </Text>
                    <Text
                      size="sm"
                      c="dimmed"
                      className="px-1" // Small padding to prevent edge cutoff
                      style={{
                        fontSize: isSmallScreen ? "0.75rem" : "0.8rem", // Responsive font size
                        lineHeight: "1.2",
                        wordWrap: "break-word",
                        hyphens: "auto",
                        hyphenateCharacter: "-",
                        WebkitHyphens: "auto", // Safari support
                        overflowWrap: "break-word", // Additional word breaking support
                        wordBreak: "break-word", // More aggressive word breaking for long German compounds
                      }}
                    >
                      {achievement.label}
                    </Text>
                  </div>
                );
              })}
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-1 mt-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor:
                      achievements.indexOf(achievement) === currentIndex
                        ? "var(--mantine-color-blue-6)"
                        : "var(--mantine-color-gray-4)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <Group justify="center" gap="lg" className="mt-8 mb-20">
            <Button
              component={Link}
              href="/contact"
              size="lg"
              rightSection={<IconArrowRight size={20} />}
              color="blue"
              className="px-8 py-3 font-semibold shadow-lg hover:shadow-xl"
            >
              {t("cta.primary")}
            </Button>
            <Button
              component="a"
              href="https://github.com/cjennison/chrisjennison-personalsite"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
              leftSection={<IconBrandGithub size={20} />}
              color="blue"
              className="px-8 py-3 font-semibold"
            >
              {t("cta.github")}
            </Button>
          </Group>
        </Stack>

        {/* Scroll Indicator - positioned outside Stack to avoid overlap */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div
            className="w-6 h-10 border-2 rounded-full flex justify-center"
            style={{ borderColor: "var(--mantine-color-gray-4)" }}
          >
            <div
              className="w-1 h-3 rounded-full mt-2 animate-pulse"
              style={{ backgroundColor: "var(--mantine-color-gray-4)" }}
            ></div>
          </div>
        </div>
      </Container>
    </section>
  );
}

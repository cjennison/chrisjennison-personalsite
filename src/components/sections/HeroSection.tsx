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
import { IconArrowRight, IconMail } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroSection() {
  const { colorScheme } = useMantineColorScheme();

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
    { id: "exp", number: "12+", label: "Years Experience" },
    { id: "rev", number: "$1M", label: "Contract Revenue" },
    { id: "reports", number: "100+", label: "Managed Engineers" },
    { id: "business", number: "30+", label: "Business Supported" },
    { id: "countries", number: "6", label: "Countries Managed" },
    { id: "users", number: "10M+", label: "Users Reached" },
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
  }, []);

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
      className="relative min-h-screen flex items-center justify-center"
      style={getBackgroundStyle()}
    >
      <Container size="lg" className="text-center">
        <Stack gap="xl">
          {/* Professional Headshot */}
          <div className="mx-auto w-32 h-32 rounded-full overflow-hidden shadow-lg ring-4 ring-blue-600/20">
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
              Christopher Jennison
            </Title>
            <Title
              order={2}
              size="1.75rem"
              fw={400}
              c="blue.6"
              className="mb-6"
            >
              Principal Engineering Manager at Microsoft & AI Strategic Advisor
            </Title>
          </div>
          {/* Value Proposition */}
          <div className="max-w-3xl mx-auto">
            <Text size="xl" c="dimmed" className="leading-relaxed text-center">
              From scaling enterprise teams at Microsoft Copilot Studio to
              setting up new companies for success with top-notch MVP deliveries
              and strategic technical guidance. Specializing in AI integration,
              enterprise architecture, and turning innovative ideas into
              measurable business results.
            </Text>
          </div>
          {/* Personal Touch */}
          <div className="max-w-2xl mx-auto">
            <Text
              size="md"
              c="dimmed"
              className="text-center flex items-center justify-center gap-1"
            >
              I live in Manchester,{" "}
              <Tooltip label="New Hampshire" position="top">
                <Image
                  src="/images/nh.webp"
                  alt="New Hampshire"
                  width={20}
                  height={14}
                  className="inline cursor-pointer"
                />
              </Tooltip>{" "}
              with my wife, my {getDaughterAge()} year old daughter, dogs and
              cats
            </Text>
          </div>
          {/* Animated Key Stats/Highlights */}
          <div className="mt-8 relative overflow-hidden">
            <div
              className="flex justify-center items-center"
              style={{ height: "80px" }}
            >
              {getAchievements().map((achievement) => {
                const getTransform = () => {
                  if (isTransitioning) {
                    // During transition, everything slides left
                    return `translateX(${(achievement.position - 1) * 140}px)`;
                  } else {
                    // Normal positioning
                    return `translateX(${achievement.position * 140}px)`;
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
                      minWidth: "120px",
                      transform: getTransform(),
                      opacity: getOpacity(),
                      pointerEvents: isVisible ? "auto" : "none",
                    }}
                  >
                    <Text size="2xl" fw={700} c="blue.6">
                      {achievement.number}
                    </Text>
                    <Text size="sm" c="dimmed">
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
          <Group justify="center" gap="lg" className="mt-8">
            <Button
              size="lg"
              rightSection={<IconArrowRight size={20} />}
              color="blue"
              className="px-8 py-3 font-semibold shadow-lg hover:shadow-xl"
            >
              Start a Project
            </Button>
            <Button
              variant="outline"
              size="lg"
              leftSection={<IconMail size={20} />}
              color="blue"
              className="px-8 py-3 font-semibold"
            >
              Get in Touch
            </Button>
          </Group>
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
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
        </Stack>
      </Container>
    </section>
  );
}

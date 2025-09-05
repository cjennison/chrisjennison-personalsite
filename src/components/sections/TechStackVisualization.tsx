"use client";

import { Badge, Card, Group, Text, Title } from "@mantine/core";
import {
  IconBrain,
  IconCode,
  IconRocket,
  IconServer,
  IconUsers,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import type React from "react";

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  skills: string[];
}

interface TechStackVisualizationProps {
  title?: string;
  categories?: SkillCategory[];
}

export function TechStackVisualization({
  title,
  categories,
}: TechStackVisualizationProps) {
  const t = useTranslations("TechStack");

  // Use translations if no custom props provided
  const displayTitle = title || t("title");

  const getDefaultCategories = (): SkillCategory[] => [
    {
      id: "leadership",
      title: t("categories.leadership.title"),
      icon: IconUsers,
      color: "blue",
      skills: [
        t("categories.leadership.skills.0"),
        t("categories.leadership.skills.1"),
        t("categories.leadership.skills.2"),
        t("categories.leadership.skills.3"),
        t("categories.leadership.skills.4"),
      ],
    },
    {
      id: "frontend",
      title: t("categories.frontend.title"),
      icon: IconCode,
      color: "indigo",
      skills: [
        t("categories.frontend.skills.0"),
        t("categories.frontend.skills.1"),
        t("categories.frontend.skills.2"),
        t("categories.frontend.skills.3"),
        t("categories.frontend.skills.4"),
        t("categories.frontend.skills.5"),
      ],
    },
    {
      id: "backend",
      title: t("categories.backend.title"),
      icon: IconServer,
      color: "red",
      skills: [
        t("categories.backend.skills.0"),
        t("categories.backend.skills.1"),
        t("categories.backend.skills.2"),
        t("categories.backend.skills.3"),
        t("categories.backend.skills.4"),
      ],
    },
    {
      id: "ai",
      title: t("categories.ai.title"),
      icon: IconBrain,
      color: "violet",
      skills: [
        t("categories.ai.skills.0"),
        t("categories.ai.skills.1"),
        t("categories.ai.skills.2"),
        t("categories.ai.skills.3"),
      ],
    },
    {
      id: "business",
      title: t("categories.business.title"),
      icon: IconRocket,
      color: "orange",
      skills: [
        t("categories.business.skills.0"),
        t("categories.business.skills.1"),
        t("categories.business.skills.2"),
        t("categories.business.skills.3"),
      ],
    },
  ];

  const displayCategories = categories || getDefaultCategories();
  return (
    <div>
      <Title
        order={3}
        size="1.5rem"
        fw={600}
        c="var(--mantine-color-text)"
        className="mb-6 text-center"
      >
        {displayTitle}
      </Title>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayCategories.map((category) => (
          <Card
            key={category.id}
            shadow="sm"
            padding="lg"
            radius="md"
            bg="var(--mantine-color-body)"
            withBorder
            className="h-full hover:shadow-lg transition-shadow duration-200"
          >
            <Group gap="sm" className="mb-4">
              <div
                style={{
                  color: `var(--mantine-color-${category.color}-6)`,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <category.icon size={24} />
              </div>
              <Title
                order={4}
                size="1.125rem"
                fw={600}
                c="var(--mantine-color-text)"
              >
                {category.title}
              </Title>
            </Group>
            <Group gap="xs">
              {category.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="light"
                  color={category.color}
                  size="sm"
                >
                  {skill}
                </Badge>
              ))}
            </Group>
          </Card>
        ))}
      </div>

      {/* Language Skills Section */}
      <div className="mt-8 text-center">
        <Card
          padding="md"
          radius="md"
          bg="var(--mantine-color-body)"
          className="max-w-md mx-auto border"
          style={{
            borderColor: "var(--mantine-color-gray-4)",
          }}
        >
          <Group gap="xs" justify="center" className="mb-2">
            <Text size="lg" fw={500} c="var(--mantine-color-text)">
              {t("languageSkills.title")}
            </Text>
          </Group>
          <Text size="sm" c="dimmed" className="text-center">
            {t("languageSkills.subtitle")}
          </Text>
          <Text size="xs" c="dimmed" className="text-center mt-1">
            {t("languageSkills.availability")}
          </Text>
        </Card>
      </div>
    </div>
  );
}

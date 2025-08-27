"use client";

import { Badge, Card, Group, Title } from "@mantine/core";
import {
  IconBrain,
  IconCode,
  IconRocket,
  IconServer,
  IconUsers,
} from "@tabler/icons-react";
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

const defaultCategories: SkillCategory[] = [
  {
    id: "leadership",
    title: "Leadership & Management",
    icon: IconUsers,
    color: "blue",
    skills: [
      "Engineering Management",
      "Team Scaling",
      "Process Optimization",
      "Strategic Planning",
      "International Teams",
    ],
  },
  {
    id: "frontend",
    title: "Frontend & Modern Web",
    icon: IconCode,
    color: "magenta",
    skills: ["React", "TypeScript", "Next.js", "Redux", "RxJS", "Modern SPA"],
  },
  {
    id: "backend",
    title: "Backend & Infrastructure",
    icon: IconServer,
    color: "red",
    skills: ["Node.js", "Azure", "MongoDB", "REST APIs", "Microservices"],
  },
  {
    id: "ai",
    title: "AI & Enterprise Systems",
    icon: IconBrain,
    color: "violet",
    skills: [
      "Microsoft Copilot Studio",
      "AI Integration",
      "Enterprise Architecture",
      "Low/No-Code Platforms",
    ],
  },
  {
    id: "business",
    title: "Business & Strategy",
    icon: IconRocket,
    color: "orange",
    skills: [
      "Strategic Partnerships",
      "Revenue Growth",
      "CTO Leadership",
      "Process Innovation",
    ],
  },
];

export function TechStackVisualization({
  title = "Core Expertise",
  categories = defaultCategories,
}: TechStackVisualizationProps) {
  return (
    <div>
      <Title
        order={3}
        size="1.5rem"
        fw={600}
        c="var(--mantine-color-text)"
        className="mb-6 text-center"
      >
        {title}
      </Title>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => (
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
    </div>
  );
}

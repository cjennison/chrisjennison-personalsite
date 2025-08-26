"use client";

import {
  Badge,
  Card,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconBrain,
  IconCode,
  IconRocket,
  IconUsers,
} from "@tabler/icons-react";
import { CareerTimeline } from "./CareerTimeline";
import { ExperienceLogos } from "./ExperienceLogos";

const skillCategories = [
  {
    title: "Leadership & Management",
    icon: IconUsers,
    skills: [
      "Engineering Management",
      "Team Scaling",
      "Process Optimization",
      "Strategic Planning",
      "International Teams",
    ],
    color: "blue",
  },
  {
    title: "Frontend & Modern Web",
    icon: IconCode,
    skills: ["React", "TypeScript", "Next.js", "Redux", "RxJS", "Modern SPA"],
    color: "green",
  },
  {
    title: "AI & Enterprise Systems",
    icon: IconBrain,
    skills: [
      "Microsoft Copilot Studio",
      "AI Integration",
      "Enterprise Architecture",
      "Low/No-Code Platforms",
    ],
    color: "purple",
  },
  {
    title: "Business & Strategy",
    icon: IconRocket,
    skills: [
      "Strategic Partnerships",
      "Revenue Growth",
      "CTO Leadership",
      "Process Innovation",
    ],
    color: "orange",
  },
];

export function AboutSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <Container size="lg">
        <Stack gap="xl">
          {/* Section Header */}
          <div className="text-center">
            <Title
              order={2}
              size="2.5rem"
              fw={700}
              className="mb-4 text-gray-900 dark:text-white"
            >
              About Me
            </Title>
            <div className="max-w-3xl mx-auto">
              <Text
                size="xl"
                className="text-gray-600 dark:text-gray-300 text-center"
              >
                Principal Engineering Manager at Microsoft and AI Strategic
                Advisor, specializing in scaling engineering organizations and
                building cutting-edge AI solutions.
              </Text>
            </div>
          </div>

          {/* Career Journey Timeline */}
          <CareerTimeline />

          {/* Company Logos with Role Information */}
          <ExperienceLogos />

          {/* Skills Showcase */}
          <div>
            <Title
              order={3}
              size="1.5rem"
              fw={600}
              className="mb-6 text-center text-gray-900 dark:text-white"
            >
              Core Expertise
            </Title>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category) => (
                <Card
                  key={category.title}
                  shadow="sm"
                  padding="lg"
                  radius="md"
                  className="h-full hover:shadow-lg transition-shadow duration-200"
                >
                  <Group gap="sm" className="mb-4">
                    <category.icon
                      size={24}
                      className={`text-${category.color}-600`}
                    />
                    <Title
                      order={4}
                      size="1.125rem"
                      fw={600}
                      className="text-gray-900 dark:text-white"
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

        </Stack>
      </Container>
    </section>
  );
}

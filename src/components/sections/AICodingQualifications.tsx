"use client";

import { Card, Group, Stack, Text, Title } from "@mantine/core";
import {
  IconBuildingFactory2,
  IconCheck,
  IconCode,
  IconCpu,
  IconUsers,
} from "@tabler/icons-react";

interface QualificationItem {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  description: string;
  examples: string[];
}

const qualifications: QualificationItem[] = [
  {
    icon: IconBuildingFactory2,
    title: "Enterprise AI Workshops",
    description:
      "Led AI coding workshops for enterprise organizations, demonstrating practical AI integration and business value",
    examples: [
      "Interactive demonstrations of AI-first development workflows",
      "ROI analysis and adoption roadmap development",
      "Team readiness assessment and change management strategies",
      "Executive stakeholder alignment on AI adoption benefits",
    ],
  },
  {
    icon: IconUsers,
    title: "AI-Ready Code Quality Systems",
    description:
      "Established code quality committees to create AI-consumable standards, transforming requirements into AI instructions and automated review systems",
    examples: [
      "Converted code standards into AI instruction formats",
      "Built automated code review systems using AI-readable guidelines",
      "Created committee structures for AI/human collaborative quality control",
      "Developed feedback loops between AI outputs and quality requirements",
    ],
  },
  {
    icon: IconCpu,
    title: "AI Architecture Innovation",
    description:
      "Pioneered AI instruction architectures and frameworks for consistent, high-quality code generation",
    examples: [
      "Developed AI prompt engineering methodologies",
      "Created reusable instruction templates for coding assistants",
      "Implemented context-aware AI guidance systems",
      "Built quality assurance frameworks for AI-generated code",
    ],
  },
  {
    icon: IconCode,
    title: "AI-First Project Leadership",
    description:
      "Successfully delivered complex projects using AI-first methodologies with measurable business outcomes",
    examples: [
      "WCAG 2.1 accessibility compliance through agentic AI processes",
      "Right-to-Left internationalization: 100+ bugs resolved with 2 engineers",
      "Hybrid AI/human architecture for safe feature development",
      "Phased engineering approach preventing AI hallucination risks",
    ],
  },
];

export function AICodingQualifications() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <Title
          order={2}
          size="2.5rem"
          fw={700}
          c="var(--mantine-color-text)"
          className="mb-4"
        >
          Proven AI Adoption Expertise
        </Title>
        <div className="max-w-3xl mx-auto">
          <Text size="xl" c="dimmed" className="text-center">
            Real-world experience helping engineering teams successfully adopt
            AI-first development practices with measurable results
          </Text>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {qualifications.map((qualification) => (
          <Card
            key={qualification.title}
            shadow="md"
            padding="xl"
            radius="lg"
            bg="var(--mantine-color-body)"
            className="border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
          >
            <Group gap="md" align="flex-start" className="mb-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: "var(--mantine-color-blue-6)",
                  color: "white",
                }}
              >
                <qualification.icon size={24} />
              </div>
              <div className="flex-1">
                <Title
                  order={3}
                  size="1.5rem"
                  fw={600}
                  c="var(--mantine-color-text)"
                  className="mb-2"
                >
                  {qualification.title}
                </Title>
                <Text size="md" c="dimmed" className="mb-4">
                  {qualification.description}
                </Text>
              </div>
            </Group>

            <Stack gap="sm">
              <Text size="sm" fw={600} c="var(--mantine-color-text)">
                Key Achievements:
              </Text>
              {qualification.examples.map((example) => (
                <Group key={example} gap="xs" align="flex-start">
                  <IconCheck
                    size={16}
                    style={{
                      color: "var(--mantine-color-green-6)",
                      marginTop: "2px",
                      flexShrink: 0,
                    }}
                  />
                  <Text size="sm" c="dimmed" className="flex-1">
                    {example}
                  </Text>
                </Group>
              ))}
            </Stack>
          </Card>
        ))}
      </div>

      {/* Engineering Team Message */}
      <div
        className="mt-12 p-6 rounded-xl border-l-4"
        style={{
          backgroundColor: "var(--mantine-color-violet-0)",
          borderLeftColor: "var(--mantine-color-violet-6)",
        }}
      >
        <Group gap="md" align="flex-start">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{
              backgroundColor: "var(--mantine-color-violet-6)",
              color: "white",
            }}
          >
            <IconUsers size={20} />
          </div>
          <div className="flex-1">
            <Title
              order={4}
              size="1.25rem"
              fw={600}
              c="violet.8"
              className="mb-3"
            >
              For Engineering Teams & Directors
            </Title>
            <Text size="md" c="violet.9" className="leading-relaxed">
              This program is designed to amplify your team's capabilities, not
              replace them. The goal is achieving{" "}
              <strong>more impact with your existing talent</strong> —
              delivering richer features, implementing better practices, and
              creating opportunities for engineers to work on higher-value
              problems. When your team can build faster and solve complex
              challenges more effectively, everyone wins: engineers grow their
              skills, businesses achieve ambitious goals, and innovation
              accelerates.
            </Text>
          </div>
        </Group>
      </div>
    </section>
  );
}

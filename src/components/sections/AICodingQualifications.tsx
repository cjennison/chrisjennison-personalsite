"use client";

import { Card, Group, Stack, Text, Title } from "@mantine/core";
import {
  IconBuildingFactory2,
  IconCheck,
  IconCode,
  IconCpu,
  IconUsers,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";

interface QualificationItem {
  key: string;
  icon: React.ComponentType<{ size?: number }>;
}

const qualifications: QualificationItem[] = [
  {
    key: "enterpriseWorkshops",
    icon: IconBuildingFactory2,
  },
  {
    key: "codeQualitySystems",
    icon: IconUsers,
  },
  {
    key: "aiArchitecture",
    icon: IconCpu,
  },
  {
    key: "projectLeadership",
    icon: IconCode,
  },
];

export function AICodingQualifications() {
  const t = useTranslations("AICodingPage");

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
          {t("qualifications.title")}
        </Title>
        <div className="max-w-3xl mx-auto">
          <Text size="xl" c="dimmed" className="text-center">
            {t("qualifications.subtitle")}
          </Text>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {qualifications.map((qualification) => (
          <Card
            key={qualification.key}
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
                  {t(`qualifications.items.${qualification.key}.title`)}
                </Title>
                <Text size="md" c="dimmed" className="mb-4">
                  {t(`qualifications.items.${qualification.key}.description`)}
                </Text>
              </div>
            </Group>

            <Stack gap="sm">
              <Text size="sm" fw={600} c="var(--mantine-color-text)">
                {t("qualifications.keyAchievements")}
              </Text>
              {t.raw(`qualifications.items.${qualification.key}.examples`).map((example: string, index: number) => (
                <Group key={`${qualification.key}-example-${index}`} gap="xs" align="flex-start">
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
              {t("qualifications.teamMessage.title")}
            </Title>
            <Text size="md" c="violet.9" className="leading-relaxed">
              {t("qualifications.teamMessage.content")}
            </Text>
          </div>
        </Group>
      </div>
    </section>
  );
}

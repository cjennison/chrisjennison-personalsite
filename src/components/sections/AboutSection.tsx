"use client";

import { Container, Stack, Text, Title } from "@mantine/core";
import { useTranslations } from "next-intl";
import { CareerTimeline } from "./CareerTimeline";
import { ExperienceLogos } from "./ExperienceLogos";
import { TechStackVisualization } from "./TechStackVisualization";

export function AboutSection() {
  const t = useTranslations("About");

  return (
    <section
      className="py-20"
      style={{ backgroundColor: "var(--mantine-color-body)" }}
    >
      <Container size="lg">
        <Stack gap="xl">
          {/* Section Header */}
          <div className="text-center">
            <Title
              order={2}
              size="2.5rem"
              fw={700}
              c="var(--mantine-color-text)"
              className="mb-4"
            >
              {t("title")}
            </Title>
            <div className="max-w-3xl mx-auto">
              <Text size="xl" c="dimmed" className="text-center">
                {t("subtitle")}
              </Text>
            </div>
          </div>

          {/* Career Journey Timeline */}
          <CareerTimeline />

          {/* Company Logos with Role Information */}
          <ExperienceLogos />

          {/* Interactive Tech Stack Visualization */}
          <TechStackVisualization />
        </Stack>
      </Container>
    </section>
  );
}

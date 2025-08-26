"use client";

import { Container, Stack, Text, Title } from "@mantine/core";
import { CareerTimeline } from "./CareerTimeline";
import { ExperienceLogos } from "./ExperienceLogos";
import { TechStackVisualization } from "./TechStackVisualization";

export function AboutSection() {
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
              About Me
            </Title>
            <div className="max-w-3xl mx-auto">
              <Text size="xl" c="dimmed" className="text-center">
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

          {/* Interactive Tech Stack Visualization */}
          <TechStackVisualization />
        </Stack>
      </Container>
    </section>
  );
}

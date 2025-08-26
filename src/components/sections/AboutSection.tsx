"use client";

import { Container, Stack, Text, Title } from "@mantine/core";
import { CareerTimeline } from "./CareerTimeline";
import { ExperienceLogos } from "./ExperienceLogos";
import { TechStackVisualization } from "./TechStackVisualization";

export function AboutSection() {
  return (
    <section className="py-20 light:bg-white dark:bg-black">
      <Container size="lg">
        <Stack gap="xl">
          {/* Section Header */}
          <div className="text-center">
            <Title
              order={2}
              size="2.5rem"
              fw={700}
              className="mb-4 light:text-gray-900 dark:text-white"
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

          {/* Interactive Tech Stack Visualization */}
          <TechStackVisualization />
        </Stack>
      </Container>
    </section>
  );
}

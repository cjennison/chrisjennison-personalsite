import {
  Badge,
  Button,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/layout/Navigation";
import {
  AICodingCallToAction,
  AICodingPageHeader,
  AICodingQualifications,
  AIProgramTimeline,
  Day0VsMVPSection,
  ProgramOutcomes,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "AI Coding Adoption Program | Christopher Jennison",
  description:
    "6-8 week structured program to implement AI-first coding practices and increase engineering velocity without reducing jobs.",
};

export default function AICodingPage() {
  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "var(--mantine-color-body)" }}
    >
      <Navigation />
      <Container size="xl" className="py-20">
        <Stack gap="xl">
          {/* Back Navigation */}
          <Button
            component={Link}
            href="/services"
            variant="subtle"
            leftSection={<IconArrowLeft size={16} />}
            size="sm"
            className="self-start"
          >
            Back to Services
          </Button>

          {/* Page Header */}
          <AICodingPageHeader />

          {/* Program Outcomes */}
          <ProgramOutcomes />

          {/* Qualifications & Expertise */}
          <AICodingQualifications />

          {/* Program Timeline */}
          <AIProgramTimeline />

          {/* Day0 vs MVP Concept */}
          <Day0VsMVPSection />

          {/* Call to Action */}
          <AICodingCallToAction />

          {/* Bottom CTA - Similar to Engineering Services */}
          <div
            className="text-center p-12 rounded-xl mt-20"
            style={{ backgroundColor: "var(--mantine-color-body)" }}
          >
            <Title order={2} c="var(--mantine-color-text)" className="mb-4">
              Transform Your Team with AI-First Development
            </Title>
            <div className="max-w-2xl mx-auto">
              <Text size="lg" c="dimmed" className="mb-8 text-center">
                Join the growing number of teams who have successfully adopted
                AI-first development practices. Our proven 6-8 week program
                delivers measurable results while strengthening your team
                culture.
              </Text>
            </div>
            <Group justify="center">
              <Badge
                size="xl"
                variant="filled"
                color="violet"
                className="text-lg px-8 py-4 cursor-pointer hover:opacity-90 transition-opacity"
              >
                Schedule Your AI Adoption Consultation
              </Badge>
            </Group>
          </div>
        </Stack>
      </Container>
    </main>
  );
}

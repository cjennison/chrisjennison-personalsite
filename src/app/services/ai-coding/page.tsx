"use client";

import {
  Badge,
  Button,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconArrowLeft,
  IconBrain,
  IconCheck,
  IconClipboardList,
  IconGitBranch,
  IconUsers,
} from "@tabler/icons-react";
import Link from "next/link";
import { Navigation } from "@/components/layout/Navigation";
import {
  AICodingCallToAction,
  AICodingPageHeader,
  AICodingQualifications,
  AIProgramTimeline,
  Day0VsMVPSection,
  ProgramOutcomes,
  SectionNavigation,
} from "@/components/sections";

export default function AICodingPage() {
  const aiCodingSections = [
    {
      id: "program-outcomes",
      label: "Program Outcomes",
      icon: IconCheck,
    },
    {
      id: "qualifications",
      label: "Qualifications",
      icon: IconUsers,
    },
    {
      id: "program-timeline",
      label: "Program Timeline",
      icon: IconClipboardList,
    },
    {
      id: "day0-vs-mvp",
      label: "Day0 vs MVP",
      icon: IconGitBranch,
    },
    {
      id: "get-started",
      label: "Get Started",
      icon: IconBrain,
    },
  ];

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Main navigation header
      const sectionNavHeight = 80; // Section navigation bar
      const additionalPadding = 20; // Extra breathing room
      const totalOffset = headerHeight + sectionNavHeight + additionalPadding;
      const elementPosition = element.offsetTop - totalOffset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

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
          <div className="text-center max-w-3xl mx-auto">
            <Group justify="center" mb="md">
              <Badge
                size="lg"
                variant="light"
                color="violet"
                className="text-sm font-medium"
              >
                AI CODING CONSULTANCY
              </Badge>
            </Group>
            <AICodingPageHeader />
          </div>

          {/* Section Navigation */}
          <SectionNavigation
            sections={aiCodingSections}
            onSectionClick={handleSectionClick}
            color="violet"
          />

          {/* Program Outcomes */}
          <div id="program-outcomes" className="mt-0">
            <ProgramOutcomes />
          </div>

          {/* Qualifications & Expertise */}
          <div id="qualifications" className="mt-0">
            <AICodingQualifications />
          </div>

          {/* Program Timeline */}
          <div id="program-timeline" className="mt-0">
            <AIProgramTimeline />
          </div>

          {/* Day0 vs MVP Concept */}
          <div id="day0-vs-mvp" className="mt-16">
            <Day0VsMVPSection />
          </div>

          {/* Call to Action */}
          <div id="get-started" className="mt-16">
            <AICodingCallToAction />
          </div>
        </Stack>
      </Container>
    </main>
  );
}

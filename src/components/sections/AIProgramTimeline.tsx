"use client";

import { Card, Group, Stack, Text, Title } from "@mantine/core";
import {
  IconCheck,
  IconClipboardCheck,
  IconCode,
  IconGitBranch,
  IconRocket,
  IconSearch,
  IconSettings,
  IconTarget,
  IconTrendingUp,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { TimelineNavigation } from "./TimelineNavigation";

interface ProgramPhase {
  phase: number;
  title: string;
  focus: string;
  keyBenefit: string;
  deliverables: string[];
  impact: string;
}

const phaseIcons = [
  IconSearch,
  IconSettings,
  IconCode,
  IconClipboardCheck,
  IconRocket,
  IconGitBranch,
  IconTrendingUp,
  IconTarget,
];

export function AIProgramTimeline() {
  const t = useTranslations("AICodingPage");
  const [visiblePhases, setVisiblePhases] = useState<Set<number>>(new Set());
  const [timelineProgress, setTimelineProgress] = useState(0);
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([]);
  const visibilityState = useRef<boolean[]>([]);

  // Get phases from translations
  const phases = t.raw("programTimeline.phases") as ProgramPhase[];

  // Create phases with icons for TimelineNavigation compatibility
  const phasesWithIcons = phases.map((phase, index) => ({
    ...phase,
    icon: phaseIcons[index] || IconCheck,
  }));

  // Initialize visibility state based on phases length
  useEffect(() => {
    visibilityState.current = new Array(phases.length).fill(false);
  }, [phases.length]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Create intersection observer for each phase
    phaseRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const wasVisible = visibilityState.current[index];
              const isVisible = entry.isIntersecting;

              // Only update if visibility actually changed
              if (wasVisible !== isVisible) {
                visibilityState.current[index] = isVisible;

                if (isVisible) {
                  setVisiblePhases((prev) => new Set([...prev, index]));
                } else {
                  setVisiblePhases((prev) => {
                    const newSet = new Set(prev);
                    newSet.delete(index);
                    return newSet;
                  });
                }
              }
            });
          },
          {
            threshold: 0.25,
            rootMargin: "-80px 0px -80px 0px",
          },
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      for (const observer of observers) {
        observer.disconnect();
      }
    };
  }, []);

  // Calculate progress based on visible phases with debouncing
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (visiblePhases.size === 0) {
        setTimelineProgress(0);
        return;
      }

      // Find the highest visible phase number
      const maxVisiblePhase = Math.max(...Array.from(visiblePhases));
      // Calculate progress as the percentage through the program
      const progress = (maxVisiblePhase + 1) / phases.length;
      setTimelineProgress(progress);
    }, 100); // Small debounce to prevent rapid updates

    return () => clearTimeout(timeoutId);
  }, [visiblePhases, phases.length]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Timeline Navigation */}
      <TimelineNavigation
        programWeeks={phasesWithIcons}
        visibleWeeks={visiblePhases}
        timelineProgress={timelineProgress}
      />

      {/* Content Area with Timeline */}
      <div className="lg:col-span-9 relative">
        {/* Animated Progress Line - spans full content height */}
        <div
          className="absolute left-0 top-0 w-1 rounded-full overflow-hidden h-full"
          style={{
            backgroundColor: "var(--mantine-color-gray-3)",
          }}
        >
          <div
            className="w-full bg-gradient-to-b from-violet-600 to-blue-600 rounded-full transition-all duration-1000 ease-out"
            style={{
              height: `${timelineProgress * 100}%`,
              transformOrigin: "top",
            }}
          />
        </div>

        <Stack gap="xl" className="pl-8">
          {phases.map((phase: ProgramPhase, index: number) => {
            const isVisible = visiblePhases.has(index);
            const PhaseIcon = phaseIcons[index] || IconCheck;
            return (
              <Card
                key={phase.phase}
                ref={(el) => {
                  phaseRefs.current[index] = el;
                }}
                shadow="md"
                padding="xl"
                radius="lg"
                bg="var(--mantine-color-body)"
                className={`border-l-4 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  borderLeftColor: "var(--mantine-color-violet-6)",
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Phase Header */}
                  <div className="lg:col-span-1">
                    <Group gap="sm" className="mb-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: "var(--mantine-color-violet-6)",
                          color: "white",
                        }}
                      >
                        <PhaseIcon size={24} />
                      </div>
                      <div>
                        <Text size="sm" c="violet.6" fw={500}>
                          {t("programTimeline.phaseLabel")} {phase.phase}
                        </Text>
                        <Title
                          order={3}
                          size="1.25rem"
                          fw={600}
                          c="var(--mantine-color-text)"
                        >
                          {phase.title}
                        </Title>
                      </div>
                    </Group>
                    <Text size="md" c="dimmed" className="mb-3">
                      <strong>{t("programTimeline.focusLabel")}:</strong>{" "}
                      {phase.focus}
                    </Text>
                    <div
                      className="p-3 rounded"
                      style={{
                        backgroundColor: "var(--mantine-color-violet-0)",
                      }}
                    >
                      <Text size="sm" fw={500} c="violet.7">
                        {t("programTimeline.keyBenefitLabel")}
                      </Text>
                      <Text size="sm" c="violet.8">
                        {phase.keyBenefit}
                      </Text>
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="lg:col-span-1">
                    <Title
                      order={4}
                      size="1rem"
                      fw={600}
                      c="var(--mantine-color-text)"
                      className="mb-3"
                    >
                      {t("programTimeline.deliverablesLabel")}
                    </Title>
                    <Stack gap="xs">
                      {phase.deliverables.map((deliverable: string) => (
                        <Group key={deliverable} gap="xs">
                          <IconCheck
                            size={16}
                            style={{ color: "var(--mantine-color-green-6)" }}
                          />
                          <Text size="sm" c="dimmed">
                            {deliverable}
                          </Text>
                        </Group>
                      ))}
                    </Stack>
                  </div>

                  {/* Impact */}
                  <div className="lg:col-span-1">
                    <Title
                      order={4}
                      size="1rem"
                      fw={600}
                      c="var(--mantine-color-text)"
                      className="mb-3"
                    >
                      {t("programTimeline.impactLabel")}
                    </Title>
                    <div
                      className="p-4 rounded border-l-4"
                      style={{
                        backgroundColor: "var(--mantine-color-green-0)",
                        borderLeftColor: "var(--mantine-color-green-6)",
                      }}
                    >
                      <Text size="sm" c="green.8" fw={500}>
                        {phase.impact}
                      </Text>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </Stack>
      </div>
    </div>
  );
}

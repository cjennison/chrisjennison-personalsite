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
import { useEffect, useRef, useState } from "react";
import { TimelineNavigation } from "./TimelineNavigation";

interface ProgramWeek {
  week: number;
  title: string;
  icon: React.ComponentType<{ size?: number }>;
  focus: string;
  keyBenefit: string;
  deliverables: string[];
  impact: string;
}

const programWeeks: ProgramWeek[] = [
  {
    week: 1,
    title: "Discovery & Strategy",
    icon: IconSearch,
    focus: "Understand business, codebase, and team workflows",
    keyBenefit: "Clear vision for AI adoption with executive buy-in",
    deliverables: [
      "Stakeholder interviews & team surveys",
      "AI Adoption Strategy Document",
      "Success metrics framework",
      "Pilot feature identification",
    ],
    impact: "Roadmap of what will be achieved by end of program",
  },
  {
    week: 2,
    title: "Tooling Setup",
    icon: IconSettings,
    focus: "Select and configure AI tools for immediate use",
    keyBenefit: "Engineers ready to use AI in daily workflow",
    deliverables: [
      "GitHub Copilot + VSCode configuration",
      "Claude 4 Sonnet integration",
      "Secure MCP server setup",
      "AI Tooling Setup Guide",
    ],
    impact: "Reduced setup friction for future hires",
  },
  {
    week: 3,
    title: "Proof of Concept",
    icon: IconCode,
    focus: "Demonstrate AI's practical value with real work",
    keyBenefit: "Proof AI can navigate existing codebase",
    deliverables: [
      "2-3 real tickets completed with AI",
      "Process documentation",
      "'Onboarding with AI' case study",
      "Team confidence building",
    ],
    impact: "Increased confidence in AI's delivery capabilities",
  },
  {
    week: 4,
    title: "Quality Standards",
    icon: IconClipboardCheck,
    focus: "Formalize AI-first quality standards",
    keyBenefit: "Consistent quality across AI-generated code",
    deliverables: [
      "Collaborative Code Standards Document",
      "Code Excellence Committee formation",
      "AI-augmented code review process",
      "Quality benchmarks",
    ],
    impact: "Reduced review burden for senior engineers",
  },
  {
    week: 5,
    title: "Pilot Project",
    icon: IconRocket,
    focus: "AI-assisted development at scale",
    keyBenefit: "First project delivered using AI-first engineering",
    deliverables: [
      "Small/medium project execution",
      "AI-consumable task breakdown",
      "Continuous feedback loops",
      "Real-world validation",
    ],
    impact: "Engineers gain confidence in AI task management",
  },
  {
    week: 6,
    title: "Day0 Project Design",
    icon: IconGitBranch,
    focus: "Adopt Day0 principles for project scaffolding",
    keyBenefit: "Faster initial project scaffolding",
    deliverables: [
      "Day0 vs MVP workshop",
      "AI-friendly project splitting",
      "AI-First Project Playbook",
      "Repeatable framework",
    ],
    impact: "Reduced technical risk with AI contributions",
  },
  {
    week: 7,
    title: "Iteration & Scaling",
    icon: IconTrendingUp,
    focus: "Learn from pilots and refine adoption",
    keyBenefit: "Engineers actively refining AI workflows",
    deliverables: [
      "Team feedback collection",
      "Standards document iteration",
      "Next project identification",
      "Process optimization",
    ],
    impact: "Institutional learning baked into development culture",
  },
  {
    week: 8,
    title: "Sustaining Adoption",
    icon: IconTarget,
    focus: "Ensure long-term competitiveness",
    keyBenefit: "Sustainable AI-first development culture",
    deliverables: [
      "Refined AI review strategy",
      "Long-term adoption plan",
      "Final presentation & roadmap",
      "Internal champion training",
    ],
    impact: "Company positioned for continuous improvement",
  },
];

export function AIProgramTimeline() {
  const [visibleWeeks, setVisibleWeeks] = useState<Set<number>>(new Set());
  const [timelineProgress, setTimelineProgress] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const weekRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Create intersection observer for each week
    weekRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleWeeks((prev) => new Set([...prev, index]));
              }
            });
          },
          {
            threshold: 0.3,
            rootMargin: "-50px 0px -50px 0px",
          },
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    // Timeline progress observer - based on content container visibility
    if (contentRef.current) {
      const timelineObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const rect = entry.boundingClientRect;
              const viewportHeight = window.innerHeight;
              const elementTop = rect.top;
              const elementHeight = rect.height;

              // Calculate progress based on how much of the content is visible
              const visibleTop = Math.max(0, viewportHeight - elementTop);
              const visibleHeight = Math.min(visibleTop, elementHeight);
              const progress = Math.min(visibleHeight / elementHeight, 1);

              setTimelineProgress(progress);
            }
          });
        },
        { threshold: Array.from({ length: 21 }, (_, i) => i * 0.05) },
      );
      timelineObserver.observe(contentRef.current);
      observers.push(timelineObserver);
    }

    return () => {
      for (const observer of observers) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Timeline Navigation */}
      <TimelineNavigation
        programWeeks={programWeeks}
        visibleWeeks={visibleWeeks}
        timelineProgress={timelineProgress}
      />

      {/* Content Area with Timeline */}
      <div className="lg:col-span-9 relative" ref={contentRef}>
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
          {programWeeks.map((week, index) => {
            const isVisible = visibleWeeks.has(index);
            return (
              <Card
                key={week.week}
                ref={(el) => {
                  weekRefs.current[index] = el;
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
                  {/* Week Header */}
                  <div className="lg:col-span-1">
                    <Group gap="sm" className="mb-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: "var(--mantine-color-violet-6)",
                          color: "white",
                        }}
                      >
                        <week.icon size={24} />
                      </div>
                      <div>
                        <Text size="sm" c="violet.6" fw={500}>
                          Week {week.week}
                        </Text>
                        <Title
                          order={3}
                          size="1.25rem"
                          fw={600}
                          c="var(--mantine-color-text)"
                        >
                          {week.title}
                        </Title>
                      </div>
                    </Group>
                    <Text size="md" c="dimmed" className="mb-3">
                      <strong>Focus:</strong> {week.focus}
                    </Text>
                    <div
                      className="p-3 rounded"
                      style={{
                        backgroundColor: "var(--mantine-color-violet-0)",
                      }}
                    >
                      <Text size="sm" fw={500} c="violet.7">
                        Key Benefit
                      </Text>
                      <Text size="sm" c="violet.8">
                        {week.keyBenefit}
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
                      Deliverables
                    </Title>
                    <Stack gap="xs">
                      {week.deliverables.map((deliverable) => (
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
                      Impact
                    </Title>
                    <div
                      className="p-4 rounded border-l-4"
                      style={{
                        backgroundColor: "var(--mantine-color-green-0)",
                        borderLeftColor: "var(--mantine-color-green-6)",
                      }}
                    >
                      <Text size="sm" c="green.8" fw={500}>
                        {week.impact}
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

"use client";

import { Card, Group, Stack, Text, Title } from "@mantine/core";

interface ProgramDeliverable {
  phase: number;
  title: string;
  icon: React.ComponentType<{ size?: number }>;
  focus: string;
  keyBenefit: string;
  deliverables: string[];
  impact: string;
}

interface TimelineNavigationProps {
  programWeeks: ProgramDeliverable[];
  visibleWeeks: Set<number>;
  timelineProgress: number;
}

export function TimelineNavigation({
  programWeeks,
  visibleWeeks,
  timelineProgress,
}: TimelineNavigationProps) {
  return (
    <div className="lg:col-span-3">
      <div className="sticky top-32">
        <Card
          shadow="sm"
          padding="lg"
          radius="lg"
          bg="var(--mantine-color-body)"
        >
          <Title
            order={3}
            size="1.25rem"
            fw={600}
            c="var(--mantine-color-text)"
            className="mb-4"
          >
            Program Timeline
          </Title>

          <Stack gap="xs">
            {programWeeks.map((phase, index) => {
              const isVisible = visibleWeeks.has(index);
              return (
                <Group
                  key={phase.phase}
                  gap="sm"
                  className={`relative p-2 rounded cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-60 translate-x-2"
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div
                    className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-500 ${
                      isVisible ? "scale-100 shadow-lg" : "scale-75"
                    }`}
                    style={{
                      backgroundColor: isVisible
                        ? "var(--mantine-color-violet-6)"
                        : "var(--mantine-color-violet-1)",
                      color: isVisible
                        ? "white"
                        : "var(--mantine-color-violet-7)",
                      transitionDelay: `${index * 100 + 200}ms`,
                    }}
                  >
                    {phase.phase}
                  </div>
                  <div className="flex-1">
                    <Text
                      size="sm"
                      fw={isVisible ? 600 : 500}
                      c={isVisible ? "var(--mantine-color-text)" : "dimmed"}
                    >
                      {phase.title}
                    </Text>
                  </div>
                </Group>
              );
            })}
          </Stack>

          {/* Progress indicator */}
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <Text size="xs" c="dimmed">
                Progress
              </Text>
              <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-violet-600 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${timelineProgress * 100}%`,
                  }}
                />
              </div>
              <Text size="xs" c="dimmed" fw={500}>
                {Math.round(timelineProgress * 100)}%
              </Text>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

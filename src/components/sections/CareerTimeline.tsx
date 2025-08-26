"use client";

import { Card, Group, Text, Title } from "@mantine/core";
import { useEffect, useRef, useState } from "react";

interface TimelineItem {
  id: number;
  title: string;
  description: string;
  color: string;
  side: "left" | "right";
  isCurrent?: boolean;
}

interface CareerTimelineProps {
  title?: string;
  items?: TimelineItem[];
}

const defaultTimelineItems: TimelineItem[] = [
  {
    id: 0,
    title: "Academic Foundation",
    description:
      "UMass Amherst CompSci Summa Cum Laude → USGS Anadromous Fish Research Data Visualizations",
    color: "green",
    side: "left",
  },
  {
    id: 1,
    title: "Digital Marketing Innovation",
    description:
      "Promoboxx - Boston, building enterprise digital marketing platforms for retailers",
    color: "blue",
    side: "right",
  },
  {
    id: 2,
    title: "Startup CTO Success",
    description:
      "Komodal CTO - Port of LA logistics innovation → Successful acquisition in 2022",
    color: "purple",
    side: "left",
  },
  {
    id: 3,
    title: "AI Platform Pioneer",
    description:
      "Nuance - Built Mix.dialog conversational AI platform, pioneering voice AI technology",
    color: "orange",
    side: "right",
  },
  {
    id: 4,
    title: "Strategic Advisory",
    description:
      "Code Upscale - Strategic Advisor & Consultant, achieving $1M+ in contract revenue",
    color: "red",
    side: "left",
  },
  {
    id: 5,
    title: "Enterprise AI Leadership (Current)",
    description:
      "Microsoft - Copilot Studio Principal Manager, innovator and AI engineering advisor",
    color: "blue",
    side: "right",
    isCurrent: true,
  },
];

export function CareerTimeline({
  title = "My Journey",
  items = defaultTimelineItems,
}: CareerTimelineProps) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [timelineProgress, setTimelineProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Create intersection observer for each timeline item
    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleItems((prev) => new Set([...prev, index]));
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

    // Timeline progress observer
    if (timelineRef.current) {
      const timelineObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const rect = entry.boundingClientRect;
              const viewportHeight = window.innerHeight;
              const elementTop = rect.top;
              const elementHeight = rect.height;

              // Calculate progress based on how much of the timeline is visible
              const visibleTop = Math.max(0, viewportHeight - elementTop);
              const visibleHeight = Math.min(visibleTop, elementHeight);
              const progress = Math.min(visibleHeight / elementHeight, 1);

              setTimelineProgress(progress);
            }
          });
        },
        { threshold: Array.from({ length: 21 }, (_, i) => i * 0.05) },
      );
      timelineObserver.observe(timelineRef.current);
      observers.push(timelineObserver);
    }

    return () => {
			for (const observer of observers) {
				observer.disconnect();
			}
		};
  }, []);

  const colorClasses = {
    green: {
      card: "light:bg-green-50 dark:bg-black",
      text: "text-green-700 dark:text-green-400",
      dot: "bg-green-600",
      glow: "shadow-green-500/50",
    },
    blue: {
      card: "light:bg-blue-50 dark:bg-black",
      text: "text-blue-700 dark:text-blue-400",
      dot: "bg-blue-600",
      glow: "shadow-blue-500/50",
    },
    purple: {
      card: "light:bg-purple-50 dark:bg-black",
      text: "text-purple-700 dark:text-purple-400",
      dot: "bg-purple-600",
      glow: "shadow-purple-500/50",
    },
    orange: {
      card: "light:bg-orange-50 dark:bg-black",
      text: "text-orange-700 dark:text-orange-400",
      dot: "bg-orange-600",
      glow: "shadow-orange-500/50",
    },
    red: {
      card: "light:bg-red-50 dark:bg-black",
      text: "text-red-700 dark:text-red-400",
      dot: "bg-red-600",
      glow: "shadow-red-500/50",
    },
  };

  return (
    <div>
      <Title
        order={3}
        size="1.5rem"
        fw={600}
        className="mb-6 text-center text-gray-900 dark:text-white"
      >
        {title}
      </Title>
      <div className="relative" ref={timelineRef}>
        {/* Animated Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="w-full bg-gradient-to-b from-green-600 via-blue-600 via-purple-600 via-orange-600 to-red-600 rounded-full transition-all duration-1000 ease-out"
            style={{
              height: `${timelineProgress * 100}%`,
              transformOrigin: "top",
            }}
          />
        </div>

        {/* Timeline Items */}
        <div className="space-y-8">
          {items.map((item, index) => {
            const isVisible = visibleItems.has(index);
            const colors =
              colorClasses[item.color as keyof typeof colorClasses];

            return (
              <div
                key={item.id}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={`flex items-center group transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                {item.side === "left" ? (
                  <>
                    {/* Left Side Card */}
                    <div className="flex-1 text-right pr-8">
                      <Card
                        padding="lg"
                        radius="md"
                        className={`transition-all duration-500 hover:shadow-lg hover:scale-105 ${colors.card} ${
                          isVisible
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-8 opacity-0"
                        }`}
                        style={{
                          transitionDelay: `${index * 200 + 100}ms`,
                        }}
                      >
                        <Group gap="sm" justify="flex-end" className="mb-2">
                          <Title
                            order={5}
                            size="lg"
                            fw={600}
                            className={colors.text}
                          >
                            {item.title}
                          </Title>
                        </Group>
                        <Text
                          size="sm"
                          className="text-gray-700 dark:text-gray-300"
                        >
                          {item.description}
                        </Text>
                      </Card>
                    </div>

                    {/* Timeline Dot */}
                    <div
                      className={`relative z-10 ${item.isCurrent ? "w-6 h-6" : "w-4 h-4"} ${colors.dot} rounded-full border-4 light:border-white dark:border-black transition-all duration-500 ${
                        isVisible
                          ? `scale-100 shadow-lg ${colors.glow} ${item.isCurrent ? "animate-pulse" : ""}`
                          : "scale-0"
                      }`}
                      style={{
                        transitionDelay: `${index * 200 + 300}ms`,
                      }}
                    />

                    <div className="flex-1 pl-8"></div>
                  </>
                ) : (
                  <>
                    {/* Right Side Layout */}
                    <div className="flex-1 pr-8"></div>

                    {/* Timeline Dot */}
                    <div
                      className={`relative z-10 ${item.isCurrent ? "w-6 h-6" : "w-4 h-4"} ${colors.dot} rounded-full border-4 light:border-white dark:border-black transition-all duration-500 ${
                        isVisible
                          ? `scale-100 shadow-lg ${colors.glow} ${item.isCurrent ? "animate-pulse" : ""}`
                          : "scale-0"
                      }`}
                      style={{
                        transitionDelay: `${index * 200 + 300}ms`,
                      }}
                    />

                    {/* Right Side Card */}
                    <div className="flex-1 text-left pl-8">
                      <Card
                        padding="lg"
                        radius="md"
                        className={`transition-all duration-500 hover:shadow-lg hover:scale-105 ${colors.card} ${
                          item.isCurrent
                            ? "bg-gradient-to-r light:from-blue-50 light:to-purple-50 dark:from-black dark:to-black border-2 border-blue-200 dark:border-blue-800"
                            : colors.card
                        } ${
                          isVisible
                            ? "translate-x-0 opacity-100"
                            : "translate-x-8 opacity-0"
                        }`}
                        style={{
                          transitionDelay: `${index * 200 + 100}ms`,
                        }}
                      >
                        <Group gap="sm" className="mb-2">
                          <Title
                            order={5}
                            size="lg"
                            fw={600}
                            className={colors.text}
                          >
                            {item.title}
                          </Title>
                        </Group>
                        <Text
                          size="sm"
                          className="text-gray-700 dark:text-gray-300"
                        >
                          {item.description}
                        </Text>
                      </Card>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

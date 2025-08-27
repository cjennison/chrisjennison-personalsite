"use client";

import { Badge, Card, Group, Stack, Text, Title } from "@mantine/core";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

interface EngineeringExperienceProps {
  visualComponent?: ReactNode;
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  outcome: string;
  realExample: string;
  technologies: string[];
  techColor?: string;
  reverse?: boolean;
}

export function EngineeringExperience({
  visualComponent,
  title,
  subtitle,
  challenge,
  solution,
  outcome,
  realExample,
  technologies,
  techColor = "blue",
  reverse = false,
}: EngineeringExperienceProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);
  const contentSection = (
    <Stack
      gap="lg"
      className={`flex-1 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: reverse ? "0ms" : "200ms" }}
    >
      <div>
        <Title
          order={2}
          size="2rem"
          c="var(--mantine-color-text)"
          className="mb-2"
        >
          {title}
        </Title>
        <Text size="lg" c="dimmed" className="leading-relaxed">
          {subtitle}
        </Text>
      </div>

      <div className="space-y-6">
        {/* What We Can Build */}
        <div>
          <Text
            size="sm"
            c="blue.6"
            className="font-semibold mb-2 uppercase tracking-wide"
          >
            What We Can Build For You
          </Text>
          <Text
            size="md"
            c="var(--mantine-color-text)"
            className="leading-relaxed"
          >
            {challenge}
          </Text>
        </div>

        {/* Our Approach */}
        <div>
          <Text
            size="sm"
            c="violet.6"
            className="font-semibold mb-2 uppercase tracking-wide"
          >
            Our Approach
          </Text>
          <Text
            size="md"
            c="var(--mantine-color-text)"
            className="leading-relaxed"
          >
            {solution}
          </Text>
        </div>

        {/* Value You Get */}
        <div>
          <Text
            size="sm"
            c="green.6"
            className="font-semibold mb-2 uppercase tracking-wide"
          >
            Value You Get
          </Text>
          <Text
            size="md"
            c="var(--mantine-color-text)"
            className="leading-relaxed font-medium"
          >
            {outcome}
          </Text>
        </div>

        {/* Real Example */}
        <div
          className="p-4 rounded-lg border-l-4"
          style={{
            backgroundColor: "var(--mantine-color-gray-0)",
            borderLeftColor: "var(--mantine-color-blue-5)",
          }}
        >
          <Text
            size="sm"
            c="blue.7"
            className="font-semibold mb-2 uppercase tracking-wide"
          >
            Real Example
          </Text>
          <Text size="sm" c="dimmed" className="leading-relaxed italic">
            {realExample}
          </Text>
        </div>
      </div>

      {/* Technologies */}
      <div>
        <Text size="sm" c="dimmed" className="font-semibold mb-3">
          Technologies we can use
        </Text>
        <Group gap="xs">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="light"
              color={techColor}
              size="md"
              className="px-3 py-1"
            >
              {tech}
            </Badge>
          ))}
        </Group>
      </div>
    </Stack>
  );

  const imageSection = visualComponent && (
    <div
      className={`flex-1 flex items-center justify-center transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-95"
      }`}
      style={{ transitionDelay: reverse ? "200ms" : "0ms" }}
    >
      {visualComponent}
    </div>
  );

  return (
    <Card
      ref={ref}
      shadow="lg"
      padding={0}
      radius="lg"
      bg="var(--mantine-color-body)"
      className={`overflow-hidden transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div
        className={`flex flex-col lg:flex-row gap-8 p-8 ${reverse ? "lg:flex-row-reverse" : ""}`}
      >
        {imageSection}
        {contentSection}
      </div>
    </Card>
  );
}

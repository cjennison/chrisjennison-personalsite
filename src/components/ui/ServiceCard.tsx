"use client";

import { Card, Group, Stack, Text, Title } from "@mantine/core";
import { IconArrowRight, IconBrain, IconCode } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Link } from "@/i18n/routing";

export interface ServiceCardProps {
  service: {
    iconType: "code" | "brain";
    title: string;
    type: "engineering" | "aicoding";
    description: string;
    features: string[];
    color: string;
    href: string;
  };
}

function EngineeringVisualization({ isHovered }: { isHovered: boolean }) {
  const [progress, setProgress] = useState(0);
  const [chartData, setChartData] = useState([40, 60, 30, 80]);

  useEffect(() => {
    if (!isHovered) return;

    const interval = setInterval(() => {
      setProgress((prev) => (prev + 1) % 100);

      // Update chart data periodically
      if (progress % 25 === 0) {
        setChartData((prev) => prev.map(() => Math.random() * 80 + 20));
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isHovered, progress]);

  return (
    <div className="relative w-full h-32 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      {/* Header Bar */}
      <div className="h-8 bg-blue-500 flex items-center px-3">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-400"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
        </div>
        <div className="ml-3 text-white text-xs font-medium">
          Engineering Dashboard
        </div>
      </div>

      {/* Content Area */}
      <div className="h-24 bg-white dark:bg-gray-800 p-2">
        <div className="grid grid-cols-3 gap-2 h-full">
          {/* Charts */}
          <div className="col-span-2 space-y-1">
            <div className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              Performance Metrics
            </div>
            <div className="flex gap-1 h-12">
              {[0, 1, 2, 3].map((barId) => (
                <div
                  key={`chart-bar-${barId}`}
                  className="flex-1 flex items-end"
                >
                  <div
                    className="w-full bg-blue-500 rounded-sm transition-all duration-500"
                    style={{
                      height: `${isHovered ? chartData[barId] : 20}%`,
                      animationDelay: `${barId * 100}ms`,
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Circle */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-12 h-12">
              <svg
                className="w-12 h-12 transform -rotate-90"
                viewBox="0 0 36 36"
                aria-hidden="true"
              >
                <title>Performance Progress</title>
                <path
                  className="text-gray-300 dark:text-gray-600"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-blue-500"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray={`${isHovered ? progress : 0}, 100`}
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  style={{ transition: "stroke-dasharray 0.3s ease" }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
                  {isHovered ? Math.round(progress) : 0}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AICodingVisualization({ isHovered }: { isHovered: boolean }) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [typingProgress, setTypingProgress] = useState(0);

  const aiResponses = [
    "I'll help you create that component with proper TypeScript types...",
    "Here's the implementation with accessibility features...",
    "Let me add some animations and hover effects...",
    "Perfect! I've optimized the performance and added tests...",
  ];

  useEffect(() => {
    if (!isHovered) {
      setCurrentMessageIndex(0);
      setTypingProgress(0);
      return;
    }

    const interval = setInterval(() => {
      setTypingProgress((prev) => {
        if (prev >= 100) {
          setCurrentMessageIndex(
            (msgIndex) => (msgIndex + 1) % aiResponses.length,
          );
          return 0;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isHovered]);

  const currentResponse = aiResponses[currentMessageIndex];
  const displayedText = currentResponse.slice(
    0,
    Math.floor((currentResponse.length * typingProgress) / 100),
  );

  return (
    <div className="relative w-full h-32 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-900">
      {/* Terminal Header */}
      <div className="h-6 bg-gray-800 flex items-center px-2">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-400"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
        </div>
        <div className="ml-2 text-gray-300 text-xs">AI Coding Assistant</div>
      </div>

      {/* Code Editor */}
      <div className="h-26 bg-gray-900 p-2 text-xs font-mono">
        <div className="space-y-1">
          {/* User Message */}
          <div className="flex gap-2">
            <span className="text-blue-400">→</span>
            <span className="text-gray-300">Create a React component...</span>
          </div>

          {/* AI Response */}
          <div className="flex gap-2">
            <span className="text-purple-400">✨</span>
            <div className="text-green-400 flex-1">
              {displayedText}
              {isHovered && typingProgress < 100 && (
                <span className="animate-pulse">|</span>
              )}
            </div>
          </div>

          {/* Code Preview */}
          {isHovered && typingProgress > 50 && (
            <div className="mt-2 text-gray-500 text-xs">
              <div className="opacity-75">
                <span className="text-blue-300">function</span>{" "}
                <span className="text-yellow-300">Component</span>
                <span className="text-gray-300">() {"{"}</span>
              </div>
              <div className="opacity-50 ml-2">
                <span className="text-purple-300">return</span>{" "}
                <span className="text-green-300">
                  &lt;div&gt;...&lt;/div&gt;
                </span>
              </div>
              <div className="opacity-25">
                <span className="text-gray-300">{"}"}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function ServiceCard({ service }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = () => {
    switch (service.iconType) {
      case "code":
        return IconCode;
      case "brain":
        return IconBrain;
      default:
        return IconCode;
    }
  };

  const IconComponent = getIcon();

  const renderVisualization = () => {
    if (service.type === "engineering") {
      return <EngineeringVisualization isHovered={isHovered} />;
    } else if (service.type === "aicoding") {
      return <AICodingVisualization isHovered={isHovered} />;
    }
    return null;
  };

  return (
    <Card
      component={Link}
      href={service.href}
      shadow="sm"
      padding="xl"
      radius="lg"
      bg="var(--mantine-color-body)"
      className="h-full transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-2 hover:shadow-xl"
      style={{
        ":hover": {
          borderColor: `var(--mantine-color-${service.color}-6)`,
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Stack gap="md" className="h-full">
        {/* Header */}
        <Group gap="sm" className="mb-4">
          <IconComponent
            size={32}
            style={{
              color: `var(--mantine-color-${service.color}-6)`,
            }}
          />
          <Title
            order={3}
            size="1.25rem"
            fw={600}
            c="var(--mantine-color-text)"
          >
            {service.title}
          </Title>
          <IconArrowRight
            size={20}
            style={{
              color: `var(--mantine-color-${service.color}-6)`,
              marginLeft: "auto",
              transform: isHovered ? "translateX(4px)" : "translateX(0)",
              transition: "transform 0.2s ease",
            }}
          />
        </Group>

        {/* Visualization */}
        <div className="mb-4">{renderVisualization()}</div>

        {/* Content */}
        <div className="flex-grow">
          <Text size="md" c="dimmed" className="leading-relaxed mb-4">
            {service.description}
          </Text>

          {/* Features List */}
          <div
            className={`transition-all duration-300 ${isHovered ? "opacity-100 max-h-32" : "opacity-0 max-h-0"} overflow-hidden`}
          >
            <ul className="space-y-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: `var(--mantine-color-${service.color}-6)`,
                    }}
                  />
                  <Text size="sm" c="dimmed">
                    {feature}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-4">
          <Group justify="flex-end">
            <Text
              size="sm"
              fw={500}
              style={{
                color: `var(--mantine-color-${service.color}-6)`,
              }}
            >
              Learn More
            </Text>
          </Group>
        </div>
      </Stack>
    </Card>
  );
}

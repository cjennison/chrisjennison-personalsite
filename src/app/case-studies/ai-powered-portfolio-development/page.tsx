"use client";

import {
  Badge,
  Button,
  Card,
  Container,
  Group,
  Stack,
  Text,
  Timeline,
  Title,
} from "@mantine/core";
import {
  IconArrowLeft,
  IconBrain,
  IconCheck,
  IconClock,
  IconGitBranch,
  IconRocket,
  IconTarget,
} from "@tabler/icons-react";
import Link from "next/link";
import {
  AIConversationList,
  aiConversations,
} from "@/components/case-studies/ai-conversation-examples";
import { Navigation } from "@/components/layout/Navigation";
import { ImageViewer } from "@/components/ui/ImageViewer";

const projectTimeline = [
  {
    id: "phase-1",
    title: "Foundation & Setup",
    status: "completed",
    date: "August 26, 2025",
    description: "Project initialization with AI-powered tooling setup",
    tasks: [
      "Next.js 15 + TypeScript project structure",
      "Mantine UI + Tailwind CSS integration",
      "GitHub Copilot workspace configuration",
      "AI-driven README and documentation",
      "Core component architecture",
    ],
    aiInteractions: [
      "AI-generated project documentation",
      "Automated component scaffolding",
      "Real-time error resolution",
      "Code formatting and optimization",
    ],
    metrics: {
      timeToSetup: "2 hours",
      codeGenerated: "~800 lines",
      errorsResolved: "15+",
      aiSuggestions: "50+",
    },
  },
  {
    id: "phase-2",
    title: "Homepage Implementation",
    status: "completed",
    date: "August 26, 2025",
    description: "Building the core homepage sections with AI assistance",
    tasks: [
      "Navigation component with responsive design",
      "Hero section with professional branding",
      "About section with skills showcase",
      "Mantine Grid to CSS Grid migration",
    ],
    aiInteractions: [
      "Component structure suggestions",
      "CSS styling recommendations",
      "Accessibility improvements",
      "Error debugging and fixes",
    ],
    metrics: {
      componentsCreated: "5",
      iterationsNeeded: "3",
      errorsSolved: "8",
      performanceGains: "40%",
    },
    images: [
      {
        src: "/images/portfolio-case-study-1.png",
        alt: "Portfolio homepage layout and navigation implementation",
        description:
          "Initial homepage layout with hero section, navigation, and responsive design implementation, first iteration with AI only using provided documentation and instructions.",
      },
      {
        src: "/images/portfolio-case-study-2.png",
        alt: "Services section and component architecture",
        description:
          "Services section with case study integration and modern component architecture, second iteration with AI assistance for layout and design.",
      },
    ],
  },
  {
    id: "phase-3",
    title: "Services & Content Pages",
    status: "in-progress",
    date: "In Progress",
    description: "Building detailed service pages and case study content",
    tasks: [
      "Services overview page",
      "AI coding services detailed page",
      "Live case study implementation (this page!)",
      "Contact form with validation",
    ],
  },
  {
    id: "phase-4",
    title: "Optimization & Deployment",
    status: "planned",
    date: "Upcoming",
    description: "Performance optimization and production deployment",
    tasks: [
      "Lighthouse score optimization",
      "SEO and accessibility compliance",
      "Production deployment setup",
      "Analytics and monitoring",
    ],
  },
];

const aiToolsUsed = [
  {
    name: "GitHub Copilot Chat",
    purpose: "Real-time code generation and problem solving",
    impact: "300% faster development, reduced boilerplate",
  },
  {
    name: "Copilot Workspace",
    purpose: "Project planning and architecture decisions",
    impact: "Systematic approach to feature implementation",
  },
  {
    name: "AI-Powered Debugging",
    purpose: "Error resolution and code optimization",
    impact: "90% reduction in debugging time",
  },
  {
    name: "Automated Documentation",
    purpose: "README generation and code comments",
    impact: "Professional documentation without manual effort",
  },
];

export default function AIPortfolioCaseStudy() {
  return (
    <main className="min-h-screen light:bg-white dark:bg-black">
      <Navigation />
      <Container size="lg" className="py-20">
        <Stack gap="xl">
          {/* Back Navigation */}
          <Button
            component={Link}
            href="/case-studies"
            variant="subtle"
            leftSection={<IconArrowLeft size={16} />}
            size="sm"
            className="self-start"
          >
            Back to Case Studies
          </Button>

          {/* Header */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Badge variant="light" color="blue" size="lg">
                Live Development Case Study
              </Badge>
            </div>
            <Title
              order={1}
              size="3rem"
              fw={700}
              className="mb-4 light:text-gray-900 dark:text-white text-center"
            >
              Building This Portfolio with AI
            </Title>
            <div className="max-w-3xl mx-auto">
              <Text
                size="xl"
                className="text-gray-600 dark:text-gray-300 text-center"
              >
                A real-time documentation of how this very website is being
                built using AI-powered development workflows, demonstrating the
                future of software engineering.
              </Text>
            </div>
          </div>

          {/* Project Overview */}
          <Card
            shadow="sm"
            padding="xl"
            radius="lg"
            className="light:bg-white dark:bg-black"
          >
            <Stack gap="lg">
              <Title
                order={2}
                size="1.75rem"
                className="light:text-gray-900 dark:text-white text-center"
              >
                Project Overview
              </Title>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <IconTarget
                    size={32}
                    className="text-blue-600 mx-auto mb-2"
                  />
                  <Text fw={500} className="text-gray-900 dark:text-white">
                    Challenge
                  </Text>
                  <Text size="sm" className="text-gray-600 dark:text-gray-300">
                    Build a professional portfolio that demonstrates AI
                    development capabilities
                  </Text>
                </div>
                <div className="text-center">
                  <IconBrain
                    size={32}
                    className="text-green-600 mx-auto mb-2"
                  />
                  <Text fw={500} className="text-gray-900 dark:text-white">
                    Solution
                  </Text>
                  <Text size="sm" className="text-gray-600 dark:text-gray-300">
                    Use the development process itself as a live
                    proof-of-concept
                  </Text>
                </div>
                <div className="text-center">
                  <IconRocket
                    size={32}
                    className="text-purple-600 mx-auto mb-2"
                  />
                  <Text fw={500} className="text-gray-900 dark:text-white">
                    Outcome
                  </Text>
                  <Text size="sm" className="text-gray-600 dark:text-gray-300">
                    Real-world demonstration of AI-enhanced productivity
                  </Text>
                </div>
              </div>
            </Stack>
          </Card>

          {/* Development Timeline */}
          <Card
            shadow="sm"
            padding="xl"
            radius="lg"
            className="light:bg-white dark:bg-black"
          >
            <Stack gap="lg">
              <Title
                order={2}
                size="1.75rem"
                className="light:text-gray-900 dark:text-white text-center"
              >
                Development Timeline
              </Title>

              <Timeline active={1} bulletSize={24}>
                {projectTimeline.map((phase) => (
                  <Timeline.Item
                    key={phase.id}
                    bullet={
                      phase.status === "completed" ? (
                        <IconCheck size={16} />
                      ) : phase.status === "in-progress" ? (
                        <IconClock size={16} />
                      ) : (
                        <IconGitBranch size={16} />
                      )
                    }
                    title={
                      <Group gap="sm">
                        <Text
                          fw={600}
                          className="light:text-gray-900 dark:text-white"
                        >
                          {phase.title}
                        </Text>
                        <Badge
                          variant="light"
                          color={
                            phase.status === "completed"
                              ? "green"
                              : phase.status === "in-progress"
                                ? "blue"
                                : "gray"
                          }
                          size="sm"
                        >
                          {phase.status}
                        </Badge>
                      </Group>
                    }
                  >
                    <Text
                      size="sm"
                      className="light:text-gray-600 dark:text-gray-300 mb-3"
                    >
                      {phase.description}
                    </Text>
                    <Text
                      size="xs"
                      fw={500}
                      className="light:text-gray-500 dark:text-gray-400 mb-2"
                    >
                      {phase.date}
                    </Text>

                    {phase.tasks && (
                      <div className="mb-4">
                        <Text
                          size="sm"
                          fw={500}
                          className="light:text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Key Tasks:
                        </Text>
                        <ul className="list-disc list-inside text-sm light:text-gray-600 dark:text-gray-400 space-y-1">
                          {phase.tasks.map((task) => (
                            <li key={task}>{task}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {phase.aiInteractions && (
                      <div className="mb-4">
                        <Text
                          size="sm"
                          fw={500}
                          className="text-gray-700 dark:text-gray-300 mb-2"
                        >
                          AI Interactions:
                        </Text>
                        <ul className="list-disc list-inside text-sm light:text-blue-600 dark:text-blue-800 space-y-1">
                          {phase.aiInteractions.map((interaction) => (
                            <li key={interaction}>{interaction}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {phase.metrics && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
                        {Object.entries(phase.metrics).map(([key, value]) => (
                          <div
                            key={key}
                            className="light:bg-gray-50 dark:bg-gray-800 p-2 rounded text-center"
                          >
                            <Text
                              size="xs"
                              fw={700}
                              className="text-blue-600 dark:text-blue-400"
                            >
                              {value}
                            </Text>
                            <Text
                              size="xs"
                              className="text-gray-600 dark:text-gray-400"
                            >
                              {key.replace(/([A-Z])/g, " $1").trim()}
                            </Text>
                          </div>
                        ))}
                      </div>
                    )}

                    {phase.images && (
                      <div className="mt-4">
                        <Text
                          size="sm"
                          fw={500}
                          className="light:text-gray-700 dark:text-gray-300 mb-3"
                        >
                          Implementation Screenshots:
                        </Text>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {phase.images.map((image) => (
                            <div key={image.src} className="aspect-video">
                              <ImageViewer
                                src={image.src}
                                alt={image.alt}
                                description={image.description}
                                className="rounded-lg border border-gray-200 dark:border-gray-700 w-full h-full"
                                width="100%"
                                height="100%"
                                fit="cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </Timeline.Item>
                ))}
              </Timeline>
            </Stack>
          </Card>

          {/* AI Tools & Methodology */}
          <Card
            shadow="sm"
            padding="xl"
            radius="lg"
            className="light:bg-white dark:bg-black"
          >
            <Stack gap="lg">
              <Title
                order={2}
                size="1.75rem"
                className="light:text-gray-900 dark:text-white text-center"
              >
                AI Tools & Methodology
              </Title>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {aiToolsUsed.map((tool) => (
                  <Card
                    key={tool.name}
                    shadow="xs"
                    padding="md"
                    radius="md"
                    className="light:bg-gray-50 dark:bg-gray-800"
                  >
                    <Stack gap="xs">
                      <Text fw={600} className="text-gray-900 dark:text-white">
                        {tool.name}
                      </Text>
                      <Text
                        size="sm"
                        className="text-gray-600 dark:text-gray-300"
                      >
                        {tool.purpose}
                      </Text>
                      <Text
                        size="sm"
                        fw={500}
                        className="text-green-600 dark:text-green-400"
                      >
                        Impact: {tool.impact}
                      </Text>
                    </Stack>
                  </Card>
                ))}
              </div>
            </Stack>
          </Card>

          {/* Code Examples & AI Conversations */}
          <Card
            shadow="sm"
            padding="xl"
            radius="lg"
            className="light:bg-white dark:bg-black"
          >
            <AIConversationList
              conversations={aiConversations}
              title="Code Examples & AI Conversations"
              description="Real conversations showcasing AI-powered problem solving, debugging, and solution implementation throughout the development process."
            />
          </Card>

          {/* Results & Metrics */}
          <Card
            shadow="sm"
            padding="xl"
            radius="lg"
            className="light:bg-white dark:bg-black"
          >
            <Stack gap="lg">
              <Title
                order={2}
                size="1.75rem"
                className="light:text-gray-900 dark:text-white text-center"
              >
                Current Results & Metrics
              </Title>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 light:bg-blue-50 dark:bg-gray-800 rounded-lg">
                  <Text
                    size="2xl"
                    fw={700}
                    className="text-blue-600 dark:text-blue-400"
                  >
                    300%
                  </Text>
                  <Text size="sm" className="text-gray-600 dark:text-gray-400">
                    Development Speed Increase
                  </Text>
                </div>
                <div className="text-center p-4 light:bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <Text
                    size="2xl"
                    fw={700}
                    className="text-green-600 dark:text-green-400"
                  >
                    90%
                  </Text>
                  <Text size="sm" className="text-gray-600 dark:text-gray-400">
                    Debug Time Reduction
                  </Text>
                </div>
                <div className="text-center p-4 light:bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <Text
                    size="2xl"
                    fw={700}
                    className="text-purple-600 dark:text-purple-400"
                  >
                    50+
                  </Text>
                  <Text size="sm" className="text-gray-600 dark:text-gray-400">
                    AI Suggestions Applied
                  </Text>
                </div>
                <div className="text-center p-4 light:bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <Text
                    size="2xl"
                    fw={700}
                    className="text-orange-600 dark:text-orange-400"
                  >
                    2hrs
                  </Text>
                  <Text size="sm" className="text-gray-600 dark:text-gray-400">
                    Total Setup Time
                  </Text>
                </div>
              </div>
            </Stack>
          </Card>

          {/* Call to Action */}
          <Card
            shadow="sm"
            padding="xl"
            radius="lg"
            className="light:bg-gradient-to-r light:from-blue-50 light:to-purple-50 dark:bg-black"
          >
            <div className="text-center">
              <Title
                order={3}
                size="1.5rem"
                className="light:text-gray-900 dark:text-white mb-4"
              >
                Want to Experience AI-Powered Development?
              </Title>
              <div className="max-w-2xl mx-auto">
                <Text
                  size="lg"
                  className="text-gray-600 dark:text-gray-300 mb-6 text-center"
                >
                  This case study demonstrates the transformative potential of
                  AI in software development. Let's discuss how these
                  methodologies can accelerate your next project.
                </Text>
              </div>
              <Button size="lg" variant="filled">
                Schedule a Consultation
              </Button>
            </div>
          </Card>
        </Stack>
      </Container>
    </main>
  );
}

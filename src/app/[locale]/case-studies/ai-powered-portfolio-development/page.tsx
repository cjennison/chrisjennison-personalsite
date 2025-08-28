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
import {
  AIConversationList,
  aiConversations,
} from "@/components/case-studies/ai-conversation-examples";
import { Navigation } from "@/components/layout/Navigation";
import { ImageViewer } from "@/components/ui/ImageViewer";
import { Link } from "@/i18n/routing";

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
    ],
    aiInteractions: [
      "AI-generated project documentation",
      "Automated component scaffolding",
      "Real-time error resolution",
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
    ],
    aiInteractions: [
      "Component structure suggestions",
      "CSS styling recommendations",
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
          "Initial homepage layout with hero section, navigation, and responsive design implementation.",
      },
      {
        src: "/images/portfolio-case-study-2.png",
        alt: "Services section and component architecture",
        description:
          "Services section with case study integration and modern component architecture.",
      },
    ],
  },
  {
    id: "phase-3",
    title: "Engineering Services Page Enhancement",
    status: "completed",
    date: "August 27, 2025",
    description:
      "Transforming portfolio showcase into customer-focused services page",
    tasks: [
      "Customer-centric content restructuring",
      "Sticky section navigation implementation",
      "Meta website showcase with interactive demo",
    ],
    aiInteractions: [
      "Strategic UX guidance for customer focus",
      "Interactive component architecture",
      "Meta-demonstration concept development",
    ],
    metrics: {
      componentsCreated: "3",
      animationsImplemented: "8",
      interactionTypes: "4",
      customerFocusShift: "100%",
    },
    images: [
      {
        src: "/images/portfolio-case-study-3.png",
        alt: "Engineering services page with sticky navigation",
        description:
          "Customer-focused engineering services page with sticky navigation and enhanced visualizations.",
      },
      {
        src: "/images/portfolio-case-study-4.png",
        alt: "Meta website demonstration with interactive scrolling",
        description:
          "Interactive meta website showcase demonstrating web development capabilities through the site itself.",
      },
    ],
  },
  {
    id: "phase-4",
    title: "AI Coding Services Implementation",
    status: "completed",
    date: "August 27, 2025",
    description:
      "Complete AI coding consultancy service page with interactive timeline",
    tasks: [
      "Comprehensive AI adoption program design",
      "Animated timeline component with scroll-triggered animations",
      "Program outcomes dashboard with measurable metrics",
    ],
    aiInteractions: [
      "AI-assisted program structure and timeline development",
      "Component architecture planning for reusable timeline system",
      "Animation implementation with intersection observer patterns",
    ],
    metrics: {
      componentsCreated: "4",
      animationsImplemented: "12",
      programWeeks: "8",
      outcomeMetrics: "4",
    },
    images: [
      {
        src: "/images/portfolio-case-study-5.png",
        alt: "AI Coding Consultancy service page with animated timeline",
        description:
          "Interactive AI coding consultancy page with program timeline and scroll-triggered animations.",
      },
      {
        src: "/images/portfolio-case-study-6.png",
        alt: "Program outcomes and Day0 vs MVP framework",
        description:
          "Program outcomes with measurable metrics and Day0 vs MVP educational framework for AI-first teams.",
      },
    ],
  },
  {
    id: "phase-5",
    title: "Optimization & Deployment",
    status: "completed",
    date: "August 27, 2025",
    description:
      "SEO implementation, Vercel deployment, and analytics integration",
    tasks: [
      "Centralized SEO configuration and metadata management",
      "Schema.org JSON-LD implementation (Person, Website, Service)",
      "Google Analytics 4 integration with custom event tracking",
    ],
    aiInteractions: [
      "AI-powered SEO strategy development",
      "Automated code generation for 15+ SEO components",
      "Zero manual configuration - complete AI implementation",
    ],
    metrics: {
      seoFiles: "15+",
      schemaTypes: "5",
      deployTime: "3 min",
      aiGenerated: "100%",
    },
  },
];

const aiToolsUsed = [
  {
    name: "GitHub Copilot Chat",
    purpose: "Real-time code generation and problem solving",
    impact: "300% faster development",
  },
  {
    name: "Copilot Workspace",
    purpose: "Project planning and architecture decisions",
    impact: "Systematic feature implementation",
  },
  {
    name: "AI-Powered Debugging",
    purpose: "Error resolution and code optimization",
    impact: "90% reduction in debugging time",
  },
];

export default function AIPortfolioCaseStudy() {
  return (
    <main className="min-h-screen pt-[60px] light:bg-white dark:bg-black">
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
              <Badge variant="light" color="green" size="lg">
                Completed Development Case Study
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
                Real-time documentation of building this website using
                AI-powered development workflows.
              </Text>
            </div>
          </div>

          {/* Development Speed Highlight */}
          <Card
            shadow="md"
            padding="xl"
            radius="lg"
            className="light:bg-gradient-to-r light:from-green-50 light:to-blue-50 dark:bg-gradient-to-r dark:from-green-900/20 dark:to-blue-900/20"
          >
            <div className="text-center">
              <Title
                order={2}
                size="1.75rem"
                className="light:text-gray-900 dark:text-white mb-4"
              >
                🚀 Built in 2 Days with AI
              </Title>
              <div className="max-w-4xl mx-auto">
                <Text
                  size="lg"
                  className="text-gray-700 dark:text-gray-300 mb-6 text-center"
                >
                  This complete portfolio website was developed from concept to
                  production-ready deployment in just{" "}
                  <Text
                    component="span"
                    fw={600}
                    className="text-green-600 dark:text-green-400"
                  >
                    2 days (8-12 hours total)
                  </Text>{" "}
                  using AI-powered development workflows.
                </Text>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 light:bg-white/50 dark:bg-black/20 rounded-lg">
                  <Text
                    size="2xl"
                    fw={700}
                    className="text-blue-600 dark:text-blue-400 mb-1"
                  >
                    2 Days
                  </Text>
                  <Text size="sm" className="text-gray-600 dark:text-gray-400">
                    Concept to Deployment
                  </Text>
                </div>
                <div className="text-center p-4 light:bg-white/50 dark:bg-black/20 rounded-lg">
                  <Text
                    size="2xl"
                    fw={700}
                    className="text-green-600 dark:text-green-400 mb-1"
                  >
                    8-12h
                  </Text>
                  <Text size="sm" className="text-gray-600 dark:text-gray-400">
                    Total Development Time
                  </Text>
                </div>
                <div className="text-center p-4 light:bg-white/50 dark:bg-black/20 rounded-lg">
                  <Text
                    size="2xl"
                    fw={700}
                    className="text-purple-600 dark:text-purple-400 mb-1"
                  >
                    90%
                  </Text>
                  <Text size="sm" className="text-gray-600 dark:text-gray-400">
                    AI-Assisted Development
                  </Text>
                </div>
              </div>

              <Group justify="center" gap="md">
                <Button
                  component="a"
                  href="https://github.com/cjennison/chrisjennison-personalsite"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="filled"
                  leftSection={<IconGitBranch size={16} />}
                  size="md"
                >
                  View Source Code
                </Button>
                <Button
                  component="a"
                  href="https://github.com/cjennison/chrisjennison-personalsite/commit/d7df18d9e2df40148646a96efe034d2dec22bc9b"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  leftSection={<IconRocket size={16} />}
                  size="md"
                >
                  Launch Commit
                </Button>
              </Group>
            </div>
          </Card>

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

              <Timeline active={4} bulletSize={24}>
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

                    {/*phase.metrics && (
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
                    ) */}

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
                  Experience the transformative potential of AI in software
                  development for your next project.
                </Text>
              </div>
              <Button
                size="lg"
                variant="filled"
                component={Link}
                href="/contact"
              >
                Schedule a Consultation
              </Button>
            </div>
          </Card>
        </Stack>
      </Container>
    </main>
  );
}

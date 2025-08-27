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
    title: "Engineering Services Page Enhancement",
    status: "completed",
    date: "August 27, 2025",
    description:
      "Transforming portfolio showcase into customer-focused services page with interactive features",
    tasks: [
      "Customer-centric content restructuring",
      "Sticky section navigation implementation",
      "Scroll-triggered animations and enlarged visualizations",
      "Meta website showcase with interactive demo",
      "Professional service positioning strategy",
    ],
    aiInteractions: [
      "Strategic UX guidance for customer focus",
      "Interactive component architecture",
      "Animation timing and scroll behavior optimization",
      "Meta-demonstration concept development",
      "Content positioning and value proposition refinement",
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
        alt: "Engineering services page with sticky navigation and customer-focused content",
        description:
          "Completed engineering services page showcasing customer-centric approach with sticky section navigation, enlarged visualizations, and scroll-triggered animations for enhanced user engagement.",
      },
      {
        src: "/images/portfolio-case-study-4.png",
        alt: "Meta website demonstration with interactive scrolling visualization",
        description:
          "Innovative meta website showcase section featuring a miniature version of our site that scrolls interactively based on main page scroll position, demonstrating our web development capabilities through the website itself.",
      },
    ],
  },
  {
    id: "phase-4",
    title: "AI Coding Services Implementation",
    status: "completed",
    date: "August 27, 2025",
    description:
      "Complete AI coding consultancy service page with interactive timeline and program structure",
    tasks: [
      "Comprehensive 6-8 week AI adoption program design",
      "Animated timeline component with scroll-triggered animations",
      "Program outcomes dashboard with measurable metrics",
      "Day0 vs MVP educational framework section",
      "Professional service positioning and consultant-led transformation messaging",
      "Interactive progress visualization and week-by-week breakdown",
    ],
    aiInteractions: [
      "AI-assisted program structure and timeline development",
      "Component architecture planning for reusable timeline system",
      "Animation implementation with intersection observer patterns",
      "Content strategy for professional service positioning",
      "Educational framework development for technical concepts",
      "Responsive design optimization across screen sizes",
    ],
    metrics: {
      componentsCreated: "4",
      animationsImplemented: "12",
      programWeeks: "8",
      outcomeMetrics: "4",
      scrollAnimations: "15+",
      responsiveBreakpoints: "5",
    },
    images: [
      {
        src: "/images/portfolio-case-study-5.png",
        alt: "AI Coding Consultancy service page with animated timeline and program structure",
        description:
          "Completed AI coding consultancy page featuring an interactive 6-8 week program timeline with scroll-triggered animations, progress visualization, and comprehensive program outcomes dashboard demonstrating structured AI adoption methodology.",
      },
      {
        src: "/images/portfolio-case-study-6.png",
        alt: "Program outcomes and Day0 vs MVP educational framework sections",
        description:
          "Professional service positioning sections including program outcomes with measurable metrics (80%+ AI adoption, automated solutions, etc.) and Day0 vs MVP educational framework explaining strategic development approaches for AI-first teams.",
      },
    ],
  },
  {
    id: "phase-5",
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

              <Timeline active={3} bulletSize={24}>
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
                    75+
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
                    12+
                  </Text>
                  <Text size="sm" className="text-gray-600 dark:text-gray-400">
                    Components Created
                  </Text>
                </div>
              </div>

              {/* Additional Metrics Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div className="text-center p-4 light:bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                  <Text
                    size="2xl"
                    fw={700}
                    className="text-teal-600 dark:text-teal-400"
                  >
                    35+
                  </Text>
                  <Text size="sm" className="text-gray-600 dark:text-gray-400">
                    Animations Implemented
                  </Text>
                </div>
                <div className="text-center p-4 light:bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                  <Text
                    size="2xl"
                    fw={700}
                    className="text-indigo-600 dark:text-indigo-400"
                  >
                    4
                  </Text>
                  <Text size="sm" className="text-gray-600 dark:text-gray-400">
                    Major Phases Completed
                  </Text>
                </div>
                <div className="text-center p-4 light:bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                  <Text
                    size="2xl"
                    fw={700}
                    className="text-pink-600 dark:text-pink-400"
                  >
                    6
                  </Text>
                  <Text size="sm" className="text-gray-600 dark:text-gray-400">
                    Implementation Screenshots
                  </Text>
                </div>
                <div className="text-center p-4 light:bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
                  <Text
                    size="2xl"
                    fw={700}
                    className="text-cyan-600 dark:text-cyan-400"
                  >
                    100%
                  </Text>
                  <Text size="sm" className="text-gray-600 dark:text-gray-400">
                    AI-Powered Development
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

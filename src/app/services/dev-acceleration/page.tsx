import { Metadata } from "next";
import {
  Container,
  Title,
  Text,
  Stack,
  Card,
  Group,
  Button,
  Progress,
  Badge,
} from "@mantine/core";
import {
  IconRocket,
  IconArrowLeft,
  IconClock,
  IconCode,
  IconTools,
  IconTarget,
} from "@tabler/icons-react";
import Link from "next/link";
import { Navigation } from "@/components/layout/Navigation";

export const metadata: Metadata = {
  title: "Development Acceleration | Christopher Jennison",
  description:
    "Rapid prototyping and MVP development with modern tools and methodologies.",
};

const accelerationAreas = [
  {
    icon: IconCode,
    title: "Rapid Prototyping",
    description: "From concept to working prototype in record time",
    techniques: [
      "AI-Assisted Development",
      "Modern Framework Utilization",
      "Component Library Integration",
      "Automated Testing Setup",
    ],
  },
  {
    icon: IconTools,
    title: "DevOps Automation",
    description: "Streamlined deployment and development workflows",
    techniques: [
      "CI/CD Pipeline Setup",
      "Infrastructure as Code",
      "Automated Testing",
      "Performance Monitoring",
    ],
  },
  {
    icon: IconTarget,
    title: "MVP Development",
    description: "Focused feature development for faster market validation",
    techniques: [
      "Feature Prioritization",
      "Iterative Development",
      "User Feedback Integration",
      "Scalability Planning",
    ],
  },
];

const speedMetrics = [
  {
    label: "Prototype Development",
    traditional: "4-6 weeks",
    accelerated: "1-2 weeks",
    improvement: 75,
  },
  {
    label: "MVP Launch",
    traditional: "3-6 months",
    accelerated: "4-8 weeks",
    improvement: 70,
  },
  {
    label: "Feature Development",
    traditional: "2-3 weeks",
    accelerated: "3-5 days",
    improvement: 80,
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Vercel",
  "GitHub Actions",
  "Docker",
  "AWS",
  "Tailwind CSS",
  "Mantine UI",
  "Prisma",
  "tRPC",
  "Zustand",
];

export default function DevAccelerationPage() {
  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "var(--mantine-color-body)" }}
    >
      <Navigation />
      <Container size="lg" className="py-20">
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
          <div className="text-center">
            <Group justify="center" gap="sm" className="mb-4">
              <IconRocket
                size={40}
                style={{ color: "var(--mantine-color-green-6)" }}
              />
              <Title
                order={1}
                size="3rem"
                fw={700}
                c="var(--mantine-color-text)"
              >
                Development Acceleration
              </Title>
            </Group>
            <div className="max-w-3xl mx-auto">
              <Text size="xl" c="dimmed" className="text-center">
                Rapid prototyping and MVP development with modern tools and
                methodologies. Get your ideas to market faster than ever before.
              </Text>
            </div>
          </div>

          {/* Speed Comparison Metrics */}
          <Card
            shadow="lg"
            padding="xl"
            radius="lg"
            bg="var(--mantine-color-body)"
            className="border-2"
            style={{ borderColor: "var(--mantine-color-green-6)" }}
          >
            <Title
              order={2}
              size="1.75rem"
              fw={600}
              c="var(--mantine-color-text)"
              className="text-center mb-8"
            >
              Development Speed Comparison
            </Title>
            <div className="space-y-6">
              {speedMetrics.map((metric) => (
                <div key={metric.label}>
                  <Group justify="space-between" className="mb-2">
                    <Text fw={500} c="var(--mantine-color-text)">
                      {metric.label}
                    </Text>
                    <Badge color="green" variant="light">
                      {metric.improvement}% faster
                    </Badge>
                  </Group>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Text size="sm" c="dimmed" className="mb-1">
                        Traditional: {metric.traditional}
                      </Text>
                      <Progress value={100} color="gray" size="md" />
                    </div>
                    <div>
                      <Text size="sm" c="dimmed" className="mb-1">
                        Accelerated: {metric.accelerated}
                      </Text>
                      <Progress
                        value={100 - metric.improvement}
                        color="green"
                        size="md"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Acceleration Areas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {accelerationAreas.map((area) => (
              <Card
                key={area.title}
                shadow="sm"
                padding="xl"
                radius="lg"
                bg="var(--mantine-color-body)"
                className="h-full border-2"
                style={{ borderColor: "var(--mantine-color-green-6)" }}
              >
                <Stack gap="md">
                  <Group gap="sm">
                    <area.icon
                      size={24}
                      style={{ color: "var(--mantine-color-green-6)" }}
                    />
                    <Title
                      order={3}
                      size="1.25rem"
                      fw={600}
                      c="var(--mantine-color-text)"
                    >
                      {area.title}
                    </Title>
                  </Group>

                  <Text size="md" c="dimmed" className="leading-relaxed">
                    {area.description}
                  </Text>

                  <Stack gap="xs">
                    {area.techniques.map((technique) => (
                      <Group key={technique} gap="xs">
                        <IconClock
                          size={16}
                          style={{ color: "var(--mantine-color-green-6)" }}
                        />
                        <Text size="sm" c="dimmed">
                          {technique}
                        </Text>
                      </Group>
                    ))}
                  </Stack>
                </Stack>
              </Card>
            ))}
          </div>

          {/* Technology Stack */}
          <Card
            shadow="lg"
            padding="xl"
            radius="lg"
            bg="var(--mantine-color-body)"
            className="border-2"
            style={{ borderColor: "var(--mantine-color-green-6)" }}
          >
            <div className="text-center">
              <Title
                order={2}
                size="1.75rem"
                fw={600}
                c="var(--mantine-color-text)"
                className="mb-4"
              >
                Modern Technology Stack
              </Title>
              <Text size="lg" c="dimmed" className="mb-6">
                Leveraging cutting-edge tools and frameworks for maximum
                development velocity
              </Text>
              <Group justify="center" gap="sm">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="light" color="green" size="lg">
                    {tech}
                  </Badge>
                ))}
              </Group>
            </div>
          </Card>

          {/* Development Process */}
          <Card
            shadow="lg"
            padding="xl"
            radius="lg"
            bg="var(--mantine-color-body)"
            className="border-2"
            style={{ borderColor: "var(--mantine-color-green-6)" }}
          >
            <Title
              order={2}
              size="1.75rem"
              fw={600}
              c="var(--mantine-color-text)"
              className="text-center mb-8"
            >
              Accelerated Development Process
            </Title>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Rapid Planning",
                  description:
                    "AI-assisted requirements gathering and planning",
                  duration: "1-2 days",
                },
                {
                  step: "2",
                  title: "Foundation Setup",
                  description: "Automated project setup and infrastructure",
                  duration: "1 day",
                },
                {
                  step: "3",
                  title: "Core Development",
                  description: "Feature development with AI assistance",
                  duration: "1-2 weeks",
                },
                {
                  step: "4",
                  title: "Deploy & Iterate",
                  description: "Automated deployment and feedback integration",
                  duration: "1-2 days",
                },
              ].map((phase) => (
                <div key={phase.step} className="text-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold"
                    style={{ backgroundColor: "var(--mantine-color-green-6)" }}
                  >
                    {phase.step}
                  </div>
                  <Title
                    order={4}
                    size="1rem"
                    fw={600}
                    c="var(--mantine-color-text)"
                    className="mb-2"
                  >
                    {phase.title}
                  </Title>
                  <Text size="sm" c="dimmed" className="mb-2">
                    {phase.description}
                  </Text>
                  <Badge color="green" variant="light">
                    {phase.duration}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>

          {/* Call to Action */}
          <div className="text-center">
            <Title
              order={2}
              size="2rem"
              fw={600}
              c="var(--mantine-color-text)"
              className="mb-4"
            >
              Ready to Accelerate Your Development?
            </Title>
            <div className="max-w-2xl mx-auto">
              <Text size="lg" c="dimmed" className="mb-6 text-center">
                Let's get your project from concept to deployment faster than
                you thought possible. Modern tools, proven methodologies.
              </Text>
            </div>
            <Group justify="center" gap="md">
              <Button size="xl" variant="filled" color="green">
                Start Your Project
              </Button>
              <Button
                component={Link}
                href="/case-studies"
                size="xl"
                variant="outline"
                color="green"
              >
                View Case Studies
              </Button>
            </Group>
          </div>
        </Stack>
      </Container>
    </main>
  );
}

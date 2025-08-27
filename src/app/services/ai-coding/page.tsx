import {
  Badge,
  Button,
  Card,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconArrowLeft,
  IconBrain,
  IconCheck,
  IconRobot,
  IconTrendingUp,
  IconUsers,
} from "@tabler/icons-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/layout/Navigation";

export const metadata: Metadata = {
  title: "AI Coding Consultancy | Christopher Jennison",
  description:
    "Transform your development team with AI-powered workflows and productivity enhancements.",
};

const offerings = [
  {
    icon: IconUsers,
    title: "Team AI Integration",
    description: "Seamlessly integrate AI tools into your existing workflows",
    items: [
      "GitHub Copilot Implementation",
      "AI-Powered Code Review",
      "Team Training & Onboarding",
      "Custom AI Tool Configuration",
    ],
  },
  {
    icon: IconTrendingUp,
    title: "Workflow Optimization",
    description: "Streamline development processes with AI assistance",
    items: [
      "Development Process Analysis",
      "AI Workflow Design",
      "Productivity Metrics Setup",
      "Continuous Improvement Plans",
    ],
  },
  {
    icon: IconRobot,
    title: "Culture Development",
    description: "Build an AI-first development culture in your organization",
    items: [
      "AI Adoption Strategy",
      "Best Practices Training",
      "Change Management",
      "Success Measurement",
    ],
  },
];

const benefits = [
  {
    metric: "300%+",
    label: "Development Speed Increase",
    description: "Accelerated coding with AI assistance",
  },
  {
    metric: "90%",
    label: "Debug Time Reduction",
    description: "Faster issue identification and resolution",
  },
  {
    metric: "50%",
    label: "Code Quality Improvement",
    description: "AI-powered code review and suggestions",
  },
];

export default function AICodingPage() {
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
              <IconBrain
                size={40}
                style={{ color: "var(--mantine-color-violet-6)" }}
              />
              <Title
                order={1}
                size="3rem"
                fw={700}
                c="var(--mantine-color-text)"
              >
                AI Coding Consultancy
              </Title>
            </Group>
            <div className="max-w-3xl mx-auto">
              <Text size="xl" c="dimmed" className="text-center">
                Transform your development team with AI-powered workflows and
                productivity enhancements. Learn from real-world experience
                implementing AI at enterprise scale.
              </Text>
            </div>
          </div>

          {/* Benefits Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <Card
                key={benefit.label}
                shadow="sm"
                padding="lg"
                radius="lg"
                bg="var(--mantine-color-body)"
                className="text-center border-2"
                style={{ borderColor: "var(--mantine-color-violet-6)" }}
              >
                <Text size="2.5rem" fw={700} c="violet.6" className="mb-2">
                  {benefit.metric}
                </Text>
                <Title
                  order={4}
                  size="1rem"
                  fw={600}
                  c="var(--mantine-color-text)"
                  className="mb-2"
                >
                  {benefit.label}
                </Title>
                <Text size="sm" c="dimmed">
                  {benefit.description}
                </Text>
              </Card>
            ))}
          </div>

          {/* Service Offerings */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offerings.map((offering) => (
              <Card
                key={offering.title}
                shadow="sm"
                padding="xl"
                radius="lg"
                bg="var(--mantine-color-body)"
                className="h-full border-2"
                style={{ borderColor: "var(--mantine-color-violet-6)" }}
              >
                <Stack gap="md">
                  <Group gap="sm">
                    <offering.icon
                      size={24}
                      style={{ color: "var(--mantine-color-violet-6)" }}
                    />
                    <Title
                      order={3}
                      size="1.25rem"
                      fw={600}
                      c="var(--mantine-color-text)"
                    >
                      {offering.title}
                    </Title>
                  </Group>

                  <Text size="md" c="dimmed" className="leading-relaxed">
                    {offering.description}
                  </Text>

                  <Stack gap="xs">
                    {offering.items.map((item) => (
                      <Group key={item} gap="xs">
                        <IconCheck
                          size={16}
                          style={{ color: "var(--mantine-color-green-6)" }}
                        />
                        <Text size="sm" c="dimmed">
                          {item}
                        </Text>
                      </Group>
                    ))}
                  </Stack>
                </Stack>
              </Card>
            ))}
          </div>

          {/* AI Tools & Technologies */}
          <Card
            shadow="lg"
            padding="xl"
            radius="lg"
            bg="var(--mantine-color-body)"
            className="border-2"
            style={{ borderColor: "var(--mantine-color-violet-6)" }}
          >
            <div className="text-center">
              <Title
                order={2}
                size="1.75rem"
                fw={600}
                c="var(--mantine-color-text)"
                className="mb-4"
              >
                AI Tools & Technologies
              </Title>
              <Text size="lg" c="dimmed" className="mb-6">
                Leverage the latest AI development tools and platforms for
                maximum productivity gains
              </Text>
              <Group justify="center" gap="sm">
                {[
                  "GitHub Copilot",
                  "Copilot Chat",
                  "Copilot Workspace",
                  "Claude",
                  "ChatGPT",
                  "Cursor IDE",
                  "AI Code Review",
                  "Automated Testing",
                ].map((tool) => (
                  <Badge key={tool} variant="light" color="violet" size="lg">
                    {tool}
                  </Badge>
                ))}
              </Group>
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
              Ready to Revolutionize Your Development Process?
            </Title>
            <div className="max-w-2xl mx-auto">
              <Text size="lg" c="dimmed" className="mb-6 text-center">
                Let's discuss how AI can transform your team's productivity and
                code quality while maintaining development best practices.
              </Text>
            </div>
            <Group justify="center" gap="md">
              <Button size="xl" variant="filled" color="violet">
                Transform Your Team
              </Button>
              <Button
                component={Link}
                href="/case-studies/ai-powered-portfolio-development"
                size="xl"
                variant="outline"
                color="violet"
              >
                See AI in Action
              </Button>
            </Group>
          </div>
        </Stack>
      </Container>
    </main>
  );
}

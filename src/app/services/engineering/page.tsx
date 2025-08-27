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
  IconCheck,
  IconCode,
  IconRocket,
  IconTool,
  IconUsers,
} from "@tabler/icons-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/layout/Navigation";

export const metadata: Metadata = {
  title: "Engineering Services | Christopher Jennison",
  description:
    "Full-stack development, architecture design, and MVP development for startups and enterprises.",
};

const capabilities = [
  {
    icon: IconCode,
    title: "Full-Stack Development",
    description: "Modern web applications built with cutting-edge technologies",
    items: [
      "React/Next.js Frontend Development",
      "Node.js/TypeScript Backend Systems",
      "Database Design & Implementation",
      "API Development & Integration",
    ],
  },
  {
    icon: IconTool,
    title: "Architecture Design",
    description: "Scalable systems designed for growth and performance",
    items: [
      "System Architecture Planning",
      "Microservices Design",
      "Cloud Infrastructure Setup",
      "Performance Optimization",
    ],
  },
  {
    icon: IconRocket,
    title: "MVP Development",
    description: "Rapid prototyping and minimum viable product creation",
    items: [
      "Rapid Prototyping",
      "MVP Planning & Strategy",
      "Time-to-Market Optimization",
      "Iterative Development Process",
    ],
  },
  {
    icon: IconUsers,
    title: "Technical Leadership",
    description: "Guidance and mentorship for development teams",
    items: [
      "Team Leadership & Mentoring",
      "Code Review & Quality Assurance",
      "Development Process Optimization",
      "Technical Decision Making",
    ],
  },
];

export default function EngineeringServicesPage() {
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
              <IconCode
                size={40}
                style={{ color: "var(--mantine-color-blue-6)" }}
              />
              <Title
                order={1}
                size="3rem"
                fw={700}
                c="var(--mantine-color-text)"
              >
                Engineering Services
              </Title>
            </Group>
            <div className="max-w-3xl mx-auto">
              <Text size="xl" c="dimmed" className="text-center">
                Comprehensive full-stack development, architecture design, and
                MVP development services for startups and enterprises looking to
                build scalable, high-performance applications.
              </Text>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((capability) => (
              <Card
                key={capability.title}
                shadow="sm"
                padding="xl"
                radius="lg"
                bg="var(--mantine-color-body)"
                className="h-full border-2"
                style={{ borderColor: "var(--mantine-color-blue-6)" }}
              >
                <Stack gap="md">
                  <Group gap="sm">
                    <capability.icon
                      size={24}
                      style={{ color: "var(--mantine-color-blue-6)" }}
                    />
                    <Title
                      order={3}
                      size="1.25rem"
                      fw={600}
                      c="var(--mantine-color-text)"
                    >
                      {capability.title}
                    </Title>
                  </Group>

                  <Text size="md" c="dimmed" className="leading-relaxed">
                    {capability.description}
                  </Text>

                  <Stack gap="xs">
                    {capability.items.map((item) => (
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

          {/* Technology Stack */}
          <Card
            shadow="lg"
            padding="xl"
            radius="lg"
            bg="var(--mantine-color-body)"
            className="border-2"
            style={{ borderColor: "var(--mantine-color-blue-6)" }}
          >
            <div className="text-center">
              <Title
                order={2}
                size="1.75rem"
                fw={600}
                c="var(--mantine-color-text)"
                className="mb-4"
              >
                Technology Stack
              </Title>
              <Text size="lg" c="dimmed" className="mb-6">
                Modern technologies and frameworks for building robust, scalable
                applications
              </Text>
              <Group justify="center" gap="sm">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "PostgreSQL",
                  "MongoDB",
                  "AWS",
                  "Docker",
                  "Kubernetes",
                ].map((tech) => (
                  <Badge key={tech} variant="light" color="blue" size="lg">
                    {tech}
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
              Ready to Build Something Amazing?
            </Title>
            <div className="max-w-2xl mx-auto">
              <Text size="lg" c="dimmed" className="mb-6 text-center">
                Let's discuss your engineering needs and how we can bring your
                vision to life with modern development practices.
              </Text>
            </div>
            <Group justify="center" gap="md">
              <Button size="xl" variant="filled" color="blue">
                Start Your Project
              </Button>
              <Button
                component={Link}
                href="/case-studies"
                size="xl"
                variant="outline"
                color="blue"
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

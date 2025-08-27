import {
  Button,
  Card,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconArrowRight,
  IconBrain,
  IconCode,
  IconRocket,
} from "@tabler/icons-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/layout/Navigation";

export const metadata: Metadata = {
  title: "Services | Christopher Jennison",
  description:
    "Professional engineering services, AI coding consultancy, and development acceleration for startups and enterprises.",
};

const services = [
  {
    icon: IconCode,
    title: "Engineering Services",
    description:
      "Full-stack development, architecture design, and MVP development for startups and enterprises.",
    href: "/services/engineering",
    color: "blue",
  },
  {
    icon: IconBrain,
    title: "AI Coding Consultancy",
    description:
      "Transform your development team with AI-powered workflows and productivity enhancements.",
    href: "/services/ai-coding",
    color: "purple",
  },
  {
    icon: IconRocket,
    title: "Dev Acceleration",
    description:
      "Rapid prototyping and development using cutting-edge AI tools and methodologies.",
    href: "/services/dev-acceleration",
    color: "green",
  },
];

export default function ServicesPage() {
  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "var(--mantine-color-body)" }}
    >
      <Navigation />
      <Container size="lg" className="py-20">
        <Stack gap="xl">
          {/* Page Header */}
          <div className="text-center">
            <Title
              order={1}
              size="3rem"
              fw={700}
              c="var(--mantine-color-text)"
              className="mb-4"
            >
              Professional Services
            </Title>
            <div className="max-w-3xl mx-auto">
              <Text size="xl" c="dimmed" className="text-center">
                Comprehensive engineering solutions designed to accelerate your
                development process while maintaining the highest standards of
                quality and innovation.
              </Text>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card
                key={service.title}
                component={Link}
                href={service.href}
                shadow="sm"
                padding="xl"
                radius="lg"
                bg="var(--mantine-color-body)"
                className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 border-2"
                style={{
                  borderColor: `var(--mantine-color-${service.color}-6)`,
                }}
              >
                <Stack gap="md" className="h-full">
                  <Group gap="sm" className="mb-4">
                    <service.icon
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
                  </Group>

                  <Text size="md" c="dimmed" className="leading-relaxed mb-4">
                    {service.description}
                  </Text>

                  <Group justify="flex-end" className="mt-auto">
                    <Button
                      variant="subtle"
                      size="sm"
                      rightSection={<IconArrowRight size={16} />}
                      color={service.color}
                    >
                      Learn More
                    </Button>
                  </Group>
                </Stack>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Title
              order={2}
              size="2rem"
              fw={600}
              c="var(--mantine-color-text)"
              className="mb-4"
            >
              Ready to Get Started?
            </Title>
            <div className="max-w-2xl mx-auto">
              <Text size="lg" c="dimmed" className="mb-6 text-center">
                Let's discuss your project and how we can accelerate your
                development with modern engineering practices.
              </Text>
            </div>
            <Button size="xl" variant="filled" color="blue">
              Schedule a Consultation
            </Button>
          </div>
        </Stack>
      </Container>
    </main>
  );
}

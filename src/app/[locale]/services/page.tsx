"use client";

import { Button, Container, Stack, Text, Title } from "@mantine/core";
import { Navigation } from "@/components/layout/Navigation";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Link } from "@/i18n/routing";

const services = [
  {
    iconType: "code" as const,
    title: "Engineering Services",
    description:
      "Full-stack development, architecture design, and custom business solutions for startups and enterprises.",
    features: [
      "Modern web applications",
      "Scalable architecture",
      "Performance optimization",
      "Technical leadership",
    ],
    href: "/services/engineering",
    color: "blue",
  },
  {
    iconType: "brain" as const,
    title: "AI Coding Consultancy",
    description:
      "Structured program to implement AI-first coding practices and increase engineering velocity.",
    features: [
      "Team AI integration",
      "Workflow optimization",
      "Culture development",
      "Productivity metrics",
    ],
    href: "/services/ai-coding",
    color: "purple",
  },
];

export default function ServicesPage() {
  return (
    <main
      className="min-h-screen pt-[70px]"
      style={{ backgroundColor: "var(--mantine-color-body)" }}
    >
      <Navigation />
      <Container size="lg" className="py-25">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
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
            <Button
              size="xl"
              variant="filled"
              color="blue"
              component={Link}
              href="/contact"
            >
              Schedule a Consultation
            </Button>
          </div>
        </Stack>
      </Container>
    </main>
  );
}

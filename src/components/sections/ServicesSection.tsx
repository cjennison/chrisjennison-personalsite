import {
  Button,
  Card,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { ServiceCard } from "@/components/ui/ServiceCard";

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
    color: "blue",
    href: "/services/engineering",
  },
  {
    iconType: "brain" as const,
    title: "AI Coding Consultancy",
    description:
      "~6-8 week structured program to implement AI-first coding practices and increase engineering velocity.",
    features: [
      "Team AI integration",
      "Workflow optimization",
      "Culture development",
      "Productivity metrics",
    ],
    color: "violet",
    href: "/services/ai-coding",
  },
];

export function ServicesSection() {
  return (
    <section className="py-5">
      <Container size="lg">
        <Stack gap="xl">
          {/* Section Header */}
          <div className="text-center">
            <Title
              order={2}
              size="2.5rem"
              fw={700}
              c="var(--mantine-color-text)"
              className="mb-4"
            >
              Services & Expertise
            </Title>
            <div className="max-w-3xl mx-auto">
              <Text size="xl" c="dimmed" className="text-center">
                Comprehensive engineering services with a focus on AI-enhanced
                development workflows that deliver exceptional results.
              </Text>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>

          {/* Case Study Highlight */}
          <Card shadow="lg" padding="xl" radius="lg">
            <div className="text-center">
              <Title
                order={3}
                size="1.5rem"
                fw={600}
                c="var(--mantine-color-text)"
                className="mb-4"
              >
                See AI Development in Action
              </Title>
              <div className="max-w-2xl mx-auto">
                <Text size="lg" c="dimmed" className="mb-6 text-center">
                  Watch how this very website is being built using AI-powered
                  development workflows. A live case study documenting real
                  productivity gains and methodologies.
                </Text>
              </div>
              <Group justify="center" gap="md">
                <Button
                  component={Link}
                  href="/case-studies/ai-powered-portfolio-development"
                  variant="filled"
                  size="lg"
                  rightSection={<IconArrowRight size={16} />}
                >
                  View Live Case Study
                </Button>
                <Button
                  component={Link}
                  href="/case-studies"
                  variant="outline"
                  size="lg"
                >
                  All Case Studies
                </Button>
              </Group>
            </div>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <Title
              order={3}
              size="1.75rem"
              fw={600}
              c="var(--mantine-color-text)"
              className="mb-4"
            >
              Ready to Transform Your Development Process?
            </Title>
            <div className="max-w-2xl mx-auto">
              <Text size="lg" c="dimmed" className="mb-6 text-center">
                Let's discuss how AI-powered development can accelerate your
                next project while maintaining the highest quality standards.
              </Text>
            </div>
            <Button size="xl" variant="filled" component={Link} href="/contact">
              Schedule Consultation
            </Button>
          </div>
        </Stack>
      </Container>
    </section>
  );
}

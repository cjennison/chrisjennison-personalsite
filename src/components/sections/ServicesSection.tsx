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
import Link from "next/link";

const services = [
  {
    icon: IconCode,
    title: "Engineering Services",
    description:
      "Full-stack development, architecture design, and MVP development for startups and enterprises.",
    features: [
      "Modern web applications",
      "Scalable architecture",
      "Performance optimization",
      "Technical leadership",
    ],
    color: "blue",
  },
  {
    icon: IconBrain,
    title: "AI Coding Consultancy",
    description:
      "Transform your development team with AI-powered workflows and productivity enhancements.",
    features: [
      "Team AI integration",
      "Workflow optimization",
      "Culture development",
      "Productivity metrics",
    ],
    color: "purple",
  },
  {
    icon: IconRocket,
    title: "Development Acceleration",
    description:
      "Rapid prototyping and development using cutting-edge AI tools and methodologies.",
    features: [
      "Accelerated delivery",
      "Quality assurance",
      "Modern tooling",
      "Best practices",
    ],
    color: "green",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <Container size="lg">
        <Stack gap="xl">
          {/* Section Header */}
          <div className="text-center">
            <Title
              order={2}
              size="2.5rem"
              fw={700}
              className="mb-4 text-gray-900 dark:text-white"
            >
              Services & Expertise
            </Title>
            <div className="max-w-3xl mx-auto">
              <Text
                size="xl"
                className="text-gray-600 dark:text-gray-300 text-center"
              >
                Comprehensive engineering services with a focus on AI-enhanced
                development workflows that deliver exceptional results.
              </Text>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card
                key={service.title}
                shadow="sm"
                padding="xl"
                radius="lg"
                className="h-full hover:shadow-lg transition-shadow duration-200"
              >
                <Stack gap="md" className="h-full">
                  <div className="flex-grow">
                    <Group gap="sm" className="mb-4">
                      <service.icon
                        size={32}
                        className={`text-${service.color}-600`}
                      />
                      <Title
                        order={3}
                        size="1.25rem"
                        fw={600}
                        className="text-gray-900 dark:text-white"
                      >
                        {service.title}
                      </Title>
                    </Group>

                    <Text
                      size="md"
                      className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4"
                    >
                      {service.description}
                    </Text>

                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 rounded-full bg-${service.color}-600`}
                          />
                          <Text
                            size="sm"
                            className="text-gray-600 dark:text-gray-300"
                          >
                            {feature}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Stack>
              </Card>
            ))}
          </div>

          {/* Case Study Highlight */}
          <Card
            shadow="lg"
            padding="xl"
            radius="lg"
            className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20"
          >
            <div className="text-center">
              <Title
                order={3}
                size="1.5rem"
                fw={600}
                className="text-gray-900 dark:text-white mb-4"
              >
                See AI Development in Action
              </Title>
              <div className="max-w-2xl mx-auto">
                <Text
                  size="lg"
                  className="text-gray-600 dark:text-gray-300 mb-6 text-center"
                >
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
              className="text-gray-900 dark:text-white mb-4"
            >
              Ready to Transform Your Development Process?
            </Title>
            <div className="max-w-2xl mx-auto">
              <Text
                size="lg"
                className="text-gray-600 dark:text-gray-300 mb-6 text-center"
              >
                Let's discuss how AI-powered development can accelerate your
                next project while maintaining the highest quality standards.
              </Text>
            </div>
            <Button size="xl" variant="filled">
              Schedule Consultation
            </Button>
          </div>
        </Stack>
      </Container>
    </section>
  );
}

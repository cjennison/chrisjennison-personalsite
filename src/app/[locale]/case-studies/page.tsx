"use client";

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
import { IconArrowRight, IconBrain, IconRocket } from "@tabler/icons-react";
import { Navigation } from "@/components/layout/Navigation";
import { ImageViewer } from "@/components/ui/ImageViewer";
import { Link } from "@/i18n/routing";

const caseStudies = [
  {
    id: "ai-powered-portfolio-development",
    title: "Building This Portfolio with AI",
    subtitle: "A Complete Development Case Study",
    description:
      "Complete documentation of how this website was built using AI-powered development workflows, from initial concept to production deployment.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Mantine UI",
      "GitHub Copilot",
      "AI Workflows",
    ],
    status: "Completed",
    statusColor: "green",
    highlights: [
      "Complete documentation of AI development process",
      "Real conversation history with GitHub Copilot",
      "Live problem-solving demonstrations",
      "Production deployment with SEO optimization",
    ],
    images: [
      {
        src: "/images/portfolio-case-study-1.png",
        alt: "Portfolio homepage layout and navigation implementation",
        description:
          "Initial homepage layout with hero section, navigation, and responsive design implementation",
      },
      {
        src: "/images/portfolio-case-study-2.png",
        alt: "Services section and component architecture",
        description:
          "Services section with case study integration and modern component architecture",
      },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen pt-[60px] light:bg-white dark:bg-black">
      <Navigation />
      <Container size="lg" className="py-20">
        <Stack gap="xl">
          {/* Page Header */}
          <div className="text-center">
            <Title
              order={1}
              size="3rem"
              fw={700}
              className="mb-4 light:text-gray-900 dark:text-white"
            >
              Case Studies
            </Title>
            <div className="max-w-2xl mx-auto">
              <Text
                size="xl"
                className="light:text-gray-600 dark:text-gray-300"
              >
                Real-world examples of AI-powered development methodologies,
                enterprise solutions, and the measurable impact of modern
                engineering practices.
              </Text>
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 gap-8">
            {caseStudies.map((study) => (
              <Card
                key={study.id}
                shadow="lg"
                padding="xl"
                radius="lg"
                className="hover:shadow-xl transition-shadow duration-300 light:bg-white dark:bg-black"
              >
                <Stack gap="lg">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <Group gap="sm" className="mb-2">
                        <Title
                          order={2}
                          size="1.75rem"
                          fw={600}
                          className="light:text-gray-900 dark:text-white"
                        >
                          {study.title}
                        </Title>
                        <Badge
                          variant="light"
                          color={study.statusColor}
                          size="sm"
                        >
                          {study.status}
                        </Badge>
                      </Group>
                      <Text
                        size="lg"
                        fw={500}
                        className="light:text-blue-600 dark:text-blue-400 mb-3"
                      >
                        {study.subtitle}
                      </Text>
                      <Text
                        size="md"
                        className="text-gray-600 dark:text-gray-300 leading-relaxed"
                      >
                        {study.description}
                      </Text>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <Text
                      size="sm"
                      fw={500}
                      className="text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Technologies & Tools:
                    </Text>
                    <Group gap="xs">
                      {study.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </Group>
                  </div>

                  {/* Highlights */}
                  <div>
                    <Text
                      size="sm"
                      fw={500}
                      className="text-gray-700 dark:text-gray-300 mb-3"
                    >
                      Key Highlights:
                    </Text>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {study.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-center gap-2"
                        >
                          <IconRocket
                            size={16}
                            className="text-blue-600 dark:text-blue-400 flex-shrink-0"
                          />
                          <Text
                            size="sm"
                            className="text-gray-600 dark:text-gray-300"
                          >
                            {highlight}
                          </Text>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Preview Images */}
                  {study.images && (
                    <div>
                      <Text
                        size="sm"
                        fw={500}
                        className="text-gray-700 dark:text-gray-300 mb-3"
                      >
                        Implementation Preview:
                      </Text>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {study.images.map((image) => (
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

                  {/* CTA */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Button
                      component={Link}
                      href={`/case-studies/${study.id}`}
                      variant="filled"
                      rightSection={<IconArrowRight size={16} />}
                      size="md"
                    >
                      View Full Case Study
                    </Button>
                  </div>
                </Stack>
              </Card>
            ))}
          </div>

          {/* Coming Soon */}
          <Card
            shadow="sm"
            padding="xl"
            radius="lg"
            className="border-2 border-dashed border-gray-300 dark:border-gray-600 light:bg-white dark:bg-black"
          >
            <div className="text-center">
              <IconBrain size={48} className="text-gray-400 mx-auto mb-4" />
              <Title
                order={3}
                size="1.25rem"
                fw={500}
                className="light:text-gray-600 dark:text-gray-400 mb-2"
              >
                More Case Studies Coming Soon
              </Title>
              <Text size="sm" className="text-gray-500 dark:text-gray-500">
                Additional enterprise and startup projects will be documented
                here, showcasing various AI-powered development methodologies
                and outcomes.
              </Text>
            </div>
          </Card>
        </Stack>
      </Container>
    </main>
  );
}

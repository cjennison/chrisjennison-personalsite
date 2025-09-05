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
import { useTranslations } from "next-intl";
import { Navigation } from "@/components/layout/Navigation";
import { ImageViewer } from "@/components/ui/ImageViewer";
import { Link } from "@/i18n/routing";

export default function CaseStudiesPage() {
  const t = useTranslations("CaseStudiesPage");

  // Get arrays from translations with proper typing
  const technologies = t.raw(
    "studies.aiPoweredPortfolio.technologies",
  ) as string[];
  const highlights = t.raw("studies.aiPoweredPortfolio.highlights") as string[];
  const images = t.raw("studies.aiPoweredPortfolio.images") as Array<{
    alt: string;
    description: string;
  }>;

  const caseStudy = {
    id: "ai-powered-portfolio-development",
    title: t("studies.aiPoweredPortfolio.title"),
    subtitle: t("studies.aiPoweredPortfolio.subtitle"),
    description: t("studies.aiPoweredPortfolio.description"),
    technologies,
    status: t("studies.aiPoweredPortfolio.status"),
    statusColor: "green",
    highlights,
    images: [
      {
        src: "/images/portfolio-case-study-1.png",
        alt: images[0].alt,
        description: images[0].description,
      },
      {
        src: "/images/portfolio-case-study-2.png",
        alt: images[1].alt,
        description: images[1].description,
      },
    ],
  };

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
              {t("title")}
            </Title>
            <div className="max-w-2xl mx-auto">
              <Text
                size="xl"
                className="light:text-gray-600 dark:text-gray-300"
              >
                {t("subtitle")}
              </Text>
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 gap-8">
            <Card
              key={caseStudy.id}
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
                        {caseStudy.title}
                      </Title>
                      <Badge
                        variant="light"
                        color={caseStudy.statusColor}
                        size="sm"
                      >
                        {caseStudy.status}
                      </Badge>
                    </Group>
                    <Text
                      size="lg"
                      fw={500}
                      className="light:text-blue-600 dark:text-blue-400 mb-3"
                    >
                      {caseStudy.subtitle}
                    </Text>
                    <Text
                      size="md"
                      className="text-gray-600 dark:text-gray-300 leading-relaxed"
                    >
                      {caseStudy.description}
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
                    {t("technologiesLabel")}
                  </Text>
                  <Group gap="xs">
                    {caseStudy.technologies.map((tech: string) => (
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
                    {t("highlightsLabel")}
                  </Text>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {caseStudy.highlights.map((highlight: string) => (
                      <div key={highlight} className="flex items-center gap-2">
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
                {caseStudy.images && (
                  <div>
                    <Text
                      size="sm"
                      fw={500}
                      className="text-gray-700 dark:text-gray-300 mb-3"
                    >
                      {t("previewLabel")}
                    </Text>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {caseStudy.images.map((image) => (
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
                    href={`/case-studies/${caseStudy.id}`}
                    variant="filled"
                    rightSection={<IconArrowRight size={16} />}
                    size="md"
                  >
                    {t("viewFullButton")}
                  </Button>
                </div>
              </Stack>
            </Card>
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
                {t("comingSoon.title")}
              </Title>
              <Text size="sm" className="text-gray-500 dark:text-gray-500">
                {t("comingSoon.description")}
              </Text>
            </div>
          </Card>
        </Stack>
      </Container>
    </main>
  );
}

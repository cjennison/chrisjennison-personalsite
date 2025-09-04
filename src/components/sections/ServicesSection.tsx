"use client";

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
import { useTranslations } from "next-intl";
import {
  ServiceCard,
  type ServiceCardProps,
} from "@/components/ui/ServiceCard";
import { Link } from "@/i18n/routing";

export function ServicesSection() {
  const t = useTranslations("Services");

  const services: ServiceCardProps["service"][] = [
    {
      iconType: "code" as const,
      title: t("engineering.title"),
      type: "engineering",
      description: t("engineering.description"),
      features: [
        t("engineering.features.0"),
        t("engineering.features.1"),
        t("engineering.features.2"),
        t("engineering.features.3"),
      ],
      color: "blue",
      href: "/services/engineering",
    },
    {
      iconType: "brain" as const,
      title: t("aiCoding.title"),
      type: "aicoding",
      description: t("aiCoding.description"),
      features: [
        t("aiCoding.features.0"),
        t("aiCoding.features.1"),
        t("aiCoding.features.2"),
        t("aiCoding.features.3"),
      ],
      color: "violet",
      href: "/services/ai-coding",
    },
  ];

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
              {t("title")}
            </Title>
            <div className="max-w-3xl mx-auto">
              <Text size="xl" c="dimmed" className="text-center">
                {t("subtitle")}
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
                {t("caseStudy.title")}
              </Title>
              <div className="max-w-2xl mx-auto">
                <Text size="lg" c="dimmed" className="mb-6 text-center">
                  {t("caseStudy.description")}
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
                  {t("caseStudy.cta.primary")}
                </Button>
                <Button
                  component={Link}
                  href="/case-studies"
                  variant="outline"
                  size="lg"
                >
                  {t("caseStudy.cta.secondary")}
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
              {t("finalCta.title")}
            </Title>
            <div className="max-w-2xl mx-auto">
              <Text size="lg" c="dimmed" className="mb-6 text-center">
                {t("finalCta.description")}
              </Text>
            </div>
            <Button size="xl" variant="filled" component={Link} href="/contact">
              {t("finalCta.button")}
            </Button>
          </div>
        </Stack>
      </Container>
    </section>
  );
}

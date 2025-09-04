"use client";

import { Button, Container, Stack, Text, Title } from "@mantine/core";
import { useTranslations } from "next-intl";
import { Navigation } from "@/components/layout/Navigation";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Link } from "@/i18n/routing";
import { createServicesConfig } from "@/lib/services-config";

export default function ServicesPage() {
  const t = useTranslations("ServicesPage");
  const servicesT = useTranslations("Services");

  // Use shared configuration to avoid duplication
  const services = createServicesConfig(servicesT);

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

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Title
              order={2}
              size="2rem"
              fw={600}
              c="var(--mantine-color-text)"
              className="mb-4"
            >
              {t("readyToStart.title")}
            </Title>
            <div className="max-w-2xl mx-auto">
              <Text size="lg" c="dimmed" className="mb-6 text-center">
                {t("readyToStart.description")}
              </Text>
            </div>
            <Button
              size="xl"
              variant="filled"
              color="blue"
              component={Link}
              href="/contact"
            >
              {t("readyToStart.button")}
            </Button>
          </div>
        </Stack>
      </Container>
    </main>
  );
}

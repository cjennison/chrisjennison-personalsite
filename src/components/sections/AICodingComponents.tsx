"use client";

import { Button, Group, Text, Title } from "@mantine/core";
import { IconBrain, IconChevronRight } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function AICodingPageHeader() {
  const t = useTranslations("AICodingPage");

  return (
    <div className="text-center">
      <Group justify="center" gap="sm" className="mb-4">
        <IconBrain
          size={40}
          style={{ color: "var(--mantine-color-violet-6)" }}
        />
        <Title order={1} size="3rem" fw={700} c="var(--mantine-color-text)">
          {t("header.title")}
        </Title>
      </Group>
      <div className="max-w-4xl mx-auto">
        <Text size="xl" c="dimmed" className="text-center mb-4">
          {t("header.subtitle")}
        </Text>
      </div>
    </div>
  );
}

export function AICodingCallToAction() {
  const t = useTranslations("AICodingPage");

  return (
    <div className="text-center">
      <Title
        order={2}
        size="2rem"
        fw={600}
        c="var(--mantine-color-text)"
        className="mb-4"
      >
        {t("callToAction.title")}
      </Title>
      <div className="max-w-2xl mx-auto mb-5">
        <Text size="lg" c="dimmed" className="mb-6 text-center">
          {t("callToAction.subtitle")}
        </Text>
      </div>
      <Group justify="center" gap="md">
        <Button
          component={Link}
          href="/contact"
          size="xl"
          variant="filled"
          color="violet"
        >
          {t("callToAction.primaryButton")}
        </Button>
        <Button
          component={Link}
          href="/case-studies/ai-powered-portfolio-development"
          size="xl"
          variant="outline"
          color="violet"
          rightSection={<IconChevronRight size={16} />}
        >
          {t("callToAction.secondaryButton")}
        </Button>
      </Group>
    </div>
  );
}

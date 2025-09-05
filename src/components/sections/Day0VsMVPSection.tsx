import { Card, Divider, Group, Stack, Text, Title } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

export function Day0VsMVPSection() {
  const t = useTranslations("AICodingPage");

  return (
    <Card
      shadow="lg"
      padding="xl"
      radius="lg"
      bg="var(--mantine-color-body)"
      className="border-2"
      style={{ borderColor: "var(--mantine-color-blue-4)" }}
    >
      <div className="text-center mb-6">
        <Title
          order={2}
          size="1.75rem"
          fw={600}
          c="var(--mantine-color-text)"
          className="mb-4"
        >
          {t("day0VsMvp.title")}
        </Title>
        <Text size="lg" c="dimmed">
          {t("day0VsMvp.subtitle")}
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div
            className="p-4 rounded-lg mb-4"
            style={{ backgroundColor: "var(--mantine-color-orange-0)" }}
          >
            <Title
              order={3}
              size="1.25rem"
              fw={600}
              c="orange.7"
              className="mb-2"
            >
              {t("day0VsMvp.mvp.title")}
            </Title>
            <Text size="sm" c="orange.8">
              {t("day0VsMvp.mvp.subtitle")}
            </Text>
          </div>
          <Text size="md" c="dimmed" className="mb-4">
            {t("day0VsMvp.mvp.description")}
          </Text>
          <Stack gap="xs">
            {(t.raw("day0VsMvp.mvp.features") as string[]).map((item) => (
              <Group key={item} gap="xs">
                <IconCheck
                  size={16}
                  style={{ color: "var(--mantine-color-orange-6)" }}
                />
                <Text size="sm" c="dimmed">
                  {item}
                </Text>
              </Group>
            ))}
          </Stack>
        </div>

        <div>
          <div
            className="p-4 rounded-lg mb-4"
            style={{ backgroundColor: "var(--mantine-color-blue-0)" }}
          >
            <Title
              order={3}
              size="1.25rem"
              fw={600}
              c="blue.7"
              className="mb-2"
            >
              {t("day0VsMvp.day0.title")}
            </Title>
            <Text size="sm" c="blue.8">
              {t("day0VsMvp.day0.subtitle")}
            </Text>
          </div>
          <Text size="md" c="dimmed" className="mb-4">
            {t("day0VsMvp.day0.description")}
          </Text>
          <Stack gap="xs">
            {(t.raw("day0VsMvp.day0.features") as string[]).map((item) => (
              <Group key={item} gap="xs">
                <IconCheck
                  size={16}
                  style={{ color: "var(--mantine-color-blue-6)" }}
                />
                <Text size="sm" c="dimmed">
                  {item}
                </Text>
              </Group>
            ))}
          </Stack>
        </div>
      </div>

      <Divider className="my-6" />

      <div
        className="p-4 rounded-lg text-center"
        style={{ backgroundColor: "var(--mantine-color-violet-0)" }}
      >
        <Text size="lg" fw={500} c="violet.8">
          {t("day0VsMvp.quote")}
        </Text>
        <Text size="md" c="violet.7" className="mt-2">
          {t("day0VsMvp.summary")}
        </Text>
      </div>
    </Card>
  );
}

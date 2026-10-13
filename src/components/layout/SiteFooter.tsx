import { Anchor, Button, Group, Text, Title } from "@mantine/core";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";
import { PROFILE } from "@/lib/profile";

export async function SiteFooter() {
  const t = await getTranslations("Site");

  return (
    <footer className="mx-auto max-w-3xl px-6 pb-16 print:hidden">
      <div
        className="border-t pt-12"
        style={{ borderColor: "var(--mantine-color-default-border)" }}
      >
        <Title order={2} fz="h3" fw={600}>
          {t("footer.title")}
        </Title>
        <Text mt="xs" c="dimmed">
          {t("footer.body")}
        </Text>
        <Button
          component="a"
          href={PROFILE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          mt="lg"
          leftSection={<IconBrandLinkedin size={18} aria-hidden />}
        >
          {t("actions.linkedin")}
        </Button>
        <Group mt={48} gap="lg">
          <Anchor
            href={PROFILE.sourceRepo}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            c="dimmed"
          >
            {t("footer.source")}
          </Anchor>
          <Text size="sm" c="dimmed">
            © {new Date().getFullYear()} {PROFILE.name}
          </Text>
        </Group>
      </div>
    </footer>
  );
}

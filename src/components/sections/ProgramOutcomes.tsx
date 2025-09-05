import { Card, Text, Title } from "@mantine/core";
import { useTranslations } from "next-intl";

interface ProgramOutcome {
  label: string;
  description: string;
}

export function ProgramOutcomes() {
  const t = useTranslations("AICodingPage");

  return (
    <Card
      shadow="lg"
      padding="xl"
      radius="lg"
      bg="var(--mantine-color-body)"
      className="border-2"
      style={{ borderColor: "var(--mantine-color-violet-6)" }}
    >
      <Title
        order={2}
        size="1.5rem"
        fw={600}
        c="var(--mantine-color-text)"
        className="text-center mb-6"
      >
        {t("programOutcomes.title")}
      </Title>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {(t.raw("programOutcomes.items") as ProgramOutcome[]).map((outcome) => (
          <div key={`outcome-${outcome.label.replace(/\s+/g, '-').toLowerCase()}`} className="text-center">
            <Text size="2rem" fw={700} c="violet.6" className="mb-2">
              ✓
            </Text>
            <Title
              order={4}
              size="1rem"
              fw={600}
              c="var(--mantine-color-text)"
              className="mb-2"
            >
              {outcome.label}
            </Title>
            <Text size="sm" c="dimmed">
              {outcome.description}
            </Text>
          </div>
        ))}
      </div>
    </Card>
  );
}

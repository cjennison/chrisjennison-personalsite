import { Card, Text, Title } from "@mantine/core";

interface ProgramOutcome {
  metric: string;
  label: string;
  description: string;
}

const outcomes: ProgramOutcome[] = [
  {
    metric: "✓",
    label: "Engineering AI Adoption",
    description: "Active usage across development team",
  },
  {
    metric: "✓",
    label: "Automate Routine Challenges",
    description: "Recurring development task automated",
  },
  {
    metric: "✓",
    label: "AI-Assisted Feature Development",
    description: "Complete feature delivered with AI",
  },
  {
    metric: "✓",
    label: "Culture of Innovation",
    description: "AI-first practices integrated into team",
  },
];

export function ProgramOutcomes() {
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
        Program Outcomes
      </Title>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {outcomes.map((outcome) => (
          <div key={outcome.label} className="text-center">
            <Text size="2rem" fw={700} c="violet.6" className="mb-2">
              {outcome.metric}
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

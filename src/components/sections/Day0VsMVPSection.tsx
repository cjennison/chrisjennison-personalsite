import { Card, Divider, Group, Stack, Text, Title } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

export function Day0VsMVPSection() {
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
          Day0 vs MVP: The Foundation Difference
        </Title>
        <Text size="lg" c="dimmed">
          Understanding the strategic difference between user value and
          developer velocity
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
              MVP (Minimum Viable Product)
            </Title>
            <Text size="sm" c="orange.8">
              For users and business validation
            </Text>
          </div>
          <Text size="md" c="dimmed" className="mb-4">
            A functional product with just enough features to validate business
            value with end-users. Focus is delivering customer value as fast as
            possible.
          </Text>
          <Stack gap="xs">
            {[
              "Customer-focused feature set",
              "Business value validation",
              "Market feedback collection",
              "Revenue generation potential",
            ].map((item) => (
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
              Day0 (Developer Foundation)
            </Title>
            <Text size="sm" c="blue.8">
              For builders and AI concurrency
            </Text>
          </div>
          <Text size="md" c="dimmed" className="mb-4">
            A working project shell designed to maximize developer and AI
            concurrency. Focus is building scaffolding for safe, productive
            parallel development.
          </Text>
          <Stack gap="xs">
            {[
              "Deployable from the start",
              "Clear separation of concerns",
              "AI-friendly architecture",
              "Risk containment & boundaries",
            ].map((item) => (
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
          "MVP is for users. Day0 is for builders."
        </Text>
        <Text size="md" c="violet.7" className="mt-2">
          Day0 establishes a working foundation that's deployable, testable, and
          structured so both humans and AI can build in parallel.
        </Text>
      </div>
    </Card>
  );
}

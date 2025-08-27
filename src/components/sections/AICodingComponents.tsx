import { Button, Group, Text, Title } from "@mantine/core";
import { IconBrain, IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

export function AICodingPageHeader() {
  return (
    <div className="text-center">
      <Group justify="center" gap="sm" className="mb-4">
        <IconBrain
          size={40}
          style={{ color: "var(--mantine-color-violet-6)" }}
        />
        <Title order={1} size="3rem" fw={700} c="var(--mantine-color-text)">
          AI Coding Adoption Program
        </Title>
      </Group>
      <div className="max-w-4xl mx-auto">
        <Text size="xl" c="dimmed" className="text-center mb-4">
          6-8 week structured program to implement AI-first coding practices and
          increase engineering velocity <strong>without reducing jobs</strong>.
        </Text>
      </div>
    </div>
  );
}

export function AICodingCallToAction() {
  return (
    <div className="text-center">
      <Title
        order={2}
        size="2rem"
        fw={600}
        c="var(--mantine-color-text)"
        className="mb-4"
      >
        Ready to Transform Your Development Team?
      </Title>
      <div className="max-w-2xl mx-auto">
        <Text size="lg" c="dimmed" className="mb-6 text-center">
          Start your AI coding adoption journey with a proven 6-8 week program
          that enhances your team without replacing anyone.
        </Text>
      </div>
      <Group justify="center" gap="md">
        <Button size="xl" variant="filled" color="violet">
          Start Your AI Transformation
        </Button>
        <Button
          component={Link}
          href="/case-studies/ai-powered-portfolio-development"
          size="xl"
          variant="outline"
          color="violet"
          rightSection={<IconChevronRight size={16} />}
        >
          See AI Development in Action
        </Button>
      </Group>
    </div>
  );
}

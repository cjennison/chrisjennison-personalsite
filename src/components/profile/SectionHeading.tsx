import { Title } from "@mantine/core";

interface SectionHeadingProps {
  id: string;
  children: React.ReactNode;
}

/**
 * Small uppercase section label used across the profile and resume pages
 */
export function SectionHeading({ id, children }: SectionHeadingProps) {
  return (
    <Title
      id={id}
      order={2}
      fz="xs"
      fw={600}
      c="dimmed"
      mb="lg"
      className="uppercase tracking-[0.12em]"
    >
      {children}
    </Title>
  );
}

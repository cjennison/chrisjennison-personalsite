import {
  Badge,
  Card,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconBrain,
  IconCode,
  IconRocket,
  IconUsers,
} from "@tabler/icons-react";

const skillCategories = [
  {
    title: "Frontend Excellence",
    icon: IconCode,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Mantine UI"],
    color: "blue",
  },
  {
    title: "Backend & Architecture",
    icon: IconRocket,
    skills: ["Node.js", "PostgreSQL", "AWS", "Docker", "Microservices"],
    color: "green",
  },
  {
    title: "AI & Productivity",
    icon: IconBrain,
    skills: ["GitHub Copilot", "AI Workflows", "Automation", "Code Generation"],
    color: "purple",
  },
  {
    title: "Team Leadership",
    icon: IconUsers,
    skills: [
      "Mentoring",
      "Code Review",
      "Architecture Design",
      "Best Practices",
    ],
    color: "orange",
  },
];

export function AboutSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <Container size="lg">
        <Stack gap="xl">
          {/* Section Header */}
          <div className="text-center">
            <Title
              order={2}
              size="2.5rem"
              fw={700}
              className="mb-4 text-gray-900 dark:text-white"
            >
              About Me
            </Title>
            <div className="max-w-3xl mx-auto">
              <Text
                size="xl"
                className="text-gray-600 dark:text-gray-300 text-center"
              >
                A passionate software engineer with extensive experience
                building scalable applications for startups and enterprise
                organizations.
              </Text>
            </div>
          </div>

          {/* Professional Introduction */}
          <Card
            shadow="sm"
            padding="xl"
            radius="lg"
            className="bg-gray-50 dark:bg-gray-800"
          >
            <Text
              size="lg"
              className="text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              With over a decade of experience in software development, I
              specialize in creating robust, scalable applications that solve
              real business problems. My expertise spans from modern frontend
              frameworks to cloud-native backend architectures, with a strong
              focus on AI-enhanced development workflows that dramatically
              improve team productivity.
            </Text>
            <Text
              size="lg"
              className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4"
            >
              I'm passionate about helping teams adopt cutting-edge development
              practices, implementing clean architectures, and fostering a
              culture of continuous learning and improvement through AI-powered
              tools and methodologies.
            </Text>
          </Card>

          {/* Skills Showcase */}
          <div>
            <Title
              order={3}
              size="1.5rem"
              fw={600}
              className="mb-6 text-center text-gray-900 dark:text-white"
            >
              Core Expertise
            </Title>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category) => (
                <Card
                  key={category.title}
                  shadow="sm"
                  padding="lg"
                  radius="md"
                  className="h-full hover:shadow-lg transition-shadow duration-200"
                >
                  <Group gap="sm" className="mb-4">
                    <category.icon
                      size={24}
                      className={`text-${category.color}-600`}
                    />
                    <Title
                      order={4}
                      size="1.125rem"
                      fw={600}
                      className="text-gray-900 dark:text-white"
                    >
                      {category.title}
                    </Title>
                  </Group>
                  <Group gap="xs">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="light"
                        color={category.color}
                        size="sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </Group>
                </Card>
              ))}
            </div>
          </div>

          {/* Professional Timeline/Highlights */}
          <div>
            <Title
              order={3}
              size="1.5rem"
              fw={600}
              className="mb-6 text-center text-gray-900 dark:text-white"
            >
              Professional Highlights
            </Title>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card
                shadow="sm"
                padding="lg"
                radius="md"
                className="text-center h-full"
              >
                <Title
                  order={4}
                  size="1.125rem"
                  fw={600}
                  className="mb-2 text-gray-900 dark:text-white"
                >
                  Startup Experience
                </Title>
                <Text size="sm" className="text-gray-600 dark:text-gray-400">
                  Built MVPs and scaling platforms for early-stage companies,
                  focusing on rapid development and product-market fit.
                </Text>
              </Card>
              <Card
                shadow="sm"
                padding="lg"
                radius="md"
                className="text-center h-full"
              >
                <Title
                  order={4}
                  size="1.125rem"
                  fw={600}
                  className="mb-2 text-gray-900 dark:text-white"
                >
                  Enterprise Solutions
                </Title>
                <Text size="sm" className="text-gray-600 dark:text-gray-400">
                  Designed and implemented large-scale systems for Fortune 500
                  companies, emphasizing reliability and maintainability.
                </Text>
              </Card>
              <Card
                shadow="sm"
                padding="lg"
                radius="md"
                className="text-center h-full"
              >
                <Title
                  order={4}
                  size="1.125rem"
                  fw={600}
                  className="mb-2 text-gray-900 dark:text-white"
                >
                  AI Integration
                </Title>
                <Text size="sm" className="text-gray-600 dark:text-gray-400">
                  Leading teams in adopting AI-powered development workflows,
                  achieving 40%+ productivity improvements.
                </Text>
              </Card>
            </div>
          </div>
        </Stack>
      </Container>
    </section>
  );
}

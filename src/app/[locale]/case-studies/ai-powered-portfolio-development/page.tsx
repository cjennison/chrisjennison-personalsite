"use client";

import {
  Badge,
  Button,
  Card,
  Container,
  Group,
  Stack,
  Text,
  Timeline,
  Title,
} from "@mantine/core";
import {
  IconArrowLeft,
  IconBrain,
  IconCheck,
  IconClock,
  IconGitBranch,
  IconRocket,
  IconTarget,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import {
  AIConversationList,
  aiConversations,
} from "@/components/case-studies/ai-conversation-examples";
import { Navigation } from "@/components/layout/Navigation";
import { ImageViewer } from "@/components/ui/ImageViewer";
import { Link } from "@/i18n/routing";

export default function AIPortfolioCaseStudy() {
  const t = useTranslations("AIPortfolioCaseStudy");

  // Get timeline phases and tools from translations
  const timelinePhases = t.raw("timeline.phases") as Array<{
    id: string;
    title: string;
    status: string;
    date: string;
    description: string;
    tasks: string[];
    aiInteractions: string[];
    images?: Array<{ alt: string; description: string }>;
  }>;

  const aiTools = t.raw("aiToolsMethodology.tools") as Array<{
    name: string;
    purpose: string;
    impact: string;
  }>;

  return (
    <main className="min-h-screen pt-[60px] light:bg-white dark:bg-black">
      <Navigation />
      <Container size="lg" className="py-20">
        <Stack gap="xl">
          {/* Back Navigation */}
          <Button
            component={Link}
            href="/case-studies"
            variant="subtle"
            leftSection={<IconArrowLeft size={16} />}
            size="sm"
            className="self-start"
          >
            {t("navigation.backButton")}
          </Button>

          {/* Header */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Badge variant="light" color="green" size="lg">
                {t("header.badge")}
              </Badge>
            </div>
            <Title
              order={1}
              size="3rem"
              fw={700}
              className="mb-4 light:text-gray-900 dark:text-white text-center"
            >
              {t("header.title")}
            </Title>
            <div className="max-w-3xl mx-auto">
              <Text
                size="xl"
                className="text-gray-600 dark:text-gray-300 text-center"
              >
                {t("header.subtitle")}
              </Text>
            </div>
          </div>

          {/* Development Speed Highlight */}
          <Card
            shadow="md"
            padding="xl"
            radius="lg"
            className="light:bg-gradient-to-r light:from-green-50 light:to-blue-50 dark:bg-gradient-to-r dark:from-green-900/20 dark:to-blue-900/20"
          >
            <div className="text-center">
              <Title
                order={2}
                size="1.75rem"
                className="light:text-gray-900 dark:text-white mb-4"
              >
                {t("speedHighlight.title")}
              </Title>
              <div className="max-w-4xl mx-auto">
                <Text
                  size="lg"
                  className="text-gray-700 dark:text-gray-300 mb-6 text-center"
                >
                  {t("speedHighlight.description")}{" "}
                  <Text
                    component="span"
                    fw={600}
                    className="text-green-600 dark:text-green-400"
                  >
                    {t("speedHighlight.timeSpan")}
                  </Text>{" "}
                  {t("speedHighlight.usingText")}
                </Text>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 light:bg-white/50 dark:bg-black/20 rounded-lg">
                  <Text
                    size="2xl"
                    fw={700}
                    className="text-blue-600 dark:text-blue-400 mb-1"
                  >
                    {t("speedHighlight.metrics.conceptToDeployment.value")}
                  </Text>
                  <Text size="sm" className="text-gray-600 dark:text-gray-400">
                    {t("speedHighlight.metrics.conceptToDeployment.label")}
                  </Text>
                </div>
                <div className="text-center p-4 light:bg-white/50 dark:bg-black/20 rounded-lg">
                  <Text
                    size="2xl"
                    fw={700}
                    className="text-green-600 dark:text-green-400 mb-1"
                  >
                    {t("speedHighlight.metrics.totalDevelopmentTime.value")}
                  </Text>
                  <Text size="sm" className="text-gray-600 dark:text-gray-400">
                    {t("speedHighlight.metrics.totalDevelopmentTime.label")}
                  </Text>
                </div>
                <div className="text-center p-4 light:bg-white/50 dark:bg-black/20 rounded-lg">
                  <Text
                    size="2xl"
                    fw={700}
                    className="text-purple-600 dark:text-purple-400 mb-1"
                  >
                    {t("speedHighlight.metrics.aiAssistedDevelopment.value")}
                  </Text>
                  <Text size="sm" className="text-gray-600 dark:text-gray-400">
                    {t("speedHighlight.metrics.aiAssistedDevelopment.label")}
                  </Text>
                </div>
              </div>

              <Group justify="center" gap="md">
                <Button
                  component="a"
                  href="https://github.com/cjennison/chrisjennison-personalsite"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="filled"
                  leftSection={<IconGitBranch size={16} />}
                  size="md"
                >
                  {t("speedHighlight.buttons.viewSourceCode")}
                </Button>
                <Button
                  component="a"
                  href="https://github.com/cjennison/chrisjennison-personalsite/commit/d7df18d9e2df40148646a96efe034d2dec22bc9b"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  leftSection={<IconRocket size={16} />}
                  size="md"
                >
                  {t("speedHighlight.buttons.launchCommit")}
                </Button>
              </Group>
            </div>
          </Card>

          {/* Project Overview */}
          <Card
            shadow="sm"
            padding="xl"
            radius="lg"
            className="light:bg-white dark:bg-black"
          >
            <Stack gap="lg">
              <Title
                order={2}
                size="1.75rem"
                className="light:text-gray-900 dark:text-white text-center"
              >
                {t("projectOverview.title")}
              </Title>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <IconTarget
                    size={32}
                    className="text-blue-600 mx-auto mb-2"
                  />
                  <Text fw={500} className="text-gray-900 dark:text-white">
                    {t("projectOverview.challenge.title")}
                  </Text>
                  <Text size="sm" className="text-gray-600 dark:text-gray-300">
                    {t("projectOverview.challenge.description")}
                  </Text>
                </div>
                <div className="text-center">
                  <IconBrain
                    size={32}
                    className="text-green-600 mx-auto mb-2"
                  />
                  <Text fw={500} className="text-gray-900 dark:text-white">
                    {t("projectOverview.solution.title")}
                  </Text>
                  <Text size="sm" className="text-gray-600 dark:text-gray-300">
                    {t("projectOverview.solution.description")}
                  </Text>
                </div>
                <div className="text-center">
                  <IconRocket
                    size={32}
                    className="text-purple-600 mx-auto mb-2"
                  />
                  <Text fw={500} className="text-gray-900 dark:text-white">
                    {t("projectOverview.outcome.title")}
                  </Text>
                  <Text size="sm" className="text-gray-600 dark:text-gray-300">
                    {t("projectOverview.outcome.description")}
                  </Text>
                </div>
              </div>
            </Stack>
          </Card>

          {/* Development Timeline */}
          <Card
            shadow="sm"
            padding="xl"
            radius="lg"
            className="light:bg-white dark:bg-black"
          >
            <Stack gap="lg">
              <Title
                order={2}
                size="1.75rem"
                className="light:text-gray-900 dark:text-white text-center"
              >
                {t("timeline.title")}
              </Title>

              <Timeline active={4} bulletSize={24}>
                {timelinePhases.map((phase) => (
                  <Timeline.Item
                    key={phase.id}
                    bullet={
                      phase.status === "completed" ||
                      phase.status === "terminé" ||
                      phase.status === "abgeschlossen" ? (
                        <IconCheck size={16} />
                      ) : phase.status === "in-progress" ? (
                        <IconClock size={16} />
                      ) : (
                        <IconGitBranch size={16} />
                      )
                    }
                    title={
                      <Group gap="sm">
                        <Text
                          fw={600}
                          className="light:text-gray-900 dark:text-white"
                        >
                          {phase.title}
                        </Text>
                        <Badge
                          variant="light"
                          color={
                            phase.status === "completed" ||
                            phase.status === "terminé" ||
                            phase.status === "abgeschlossen"
                              ? "green"
                              : phase.status === "in-progress"
                                ? "blue"
                                : "gray"
                          }
                          size="sm"
                        >
                          {phase.status}
                        </Badge>
                      </Group>
                    }
                  >
                    <Text
                      size="sm"
                      className="light:text-gray-600 dark:text-gray-300 mb-3"
                    >
                      {phase.description}
                    </Text>
                    <Text
                      size="xs"
                      fw={500}
                      className="light:text-gray-500 dark:text-gray-400 mb-2"
                    >
                      {phase.date}
                    </Text>

                    {phase.tasks && (
                      <div className="mb-4">
                        <Text
                          size="sm"
                          fw={500}
                          className="light:text-gray-700 dark:text-gray-300 mb-2"
                        >
                          {t("timeline.labels.keyTasks")}
                        </Text>
                        <ul className="list-disc list-inside text-sm light:text-gray-600 dark:text-gray-400 space-y-1">
                          {phase.tasks.map((task: string) => (
                            <li key={task}>{task}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {phase.aiInteractions && (
                      <div className="mb-4">
                        <Text
                          size="sm"
                          fw={500}
                          className="text-gray-700 dark:text-gray-300 mb-2"
                        >
                          {t("timeline.labels.aiInteractions")}
                        </Text>
                        <ul className="list-disc list-inside text-sm light:text-blue-600 dark:text-blue-800 space-y-1">
                          {phase.aiInteractions.map((interaction: string) => (
                            <li key={interaction}>{interaction}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {phase.images && (
                      <div className="mt-4">
                        <Text
                          size="sm"
                          fw={500}
                          className="light:text-gray-700 dark:text-gray-300 mb-3"
                        >
                          {t("timeline.labels.implementationScreenshots")}
                        </Text>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {phase.images.map((image, index) => {
                            // Map images from the phase data to static image paths
                            const imageMap = [
                              "/images/portfolio-case-study-1.png",
                              "/images/portfolio-case-study-2.png",
                              "/images/portfolio-case-study-3.png",
                              "/images/portfolio-case-study-4.png",
                              "/images/portfolio-case-study-5.png",
                              "/images/portfolio-case-study-6.png",
                            ];
                            const phaseImageIndex =
                              timelinePhases.indexOf(phase) * 2 + index;
                            const imageSrc =
                              imageMap[phaseImageIndex] || imageMap[0];

                            return (
                              <div
                                key={`${phase.id}-${index}`}
                                className="aspect-video"
                              >
                                <ImageViewer
                                  src={imageSrc}
                                  alt={image.alt}
                                  description={image.description}
                                  className="rounded-lg border border-gray-200 dark:border-gray-700 w-full h-full"
                                  width="100%"
                                  height="100%"
                                  fit="cover"
                                />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </Timeline.Item>
                ))}
              </Timeline>
            </Stack>
          </Card>

          {/* Additional Work & Polish Phase */}
          <Card
            shadow="sm"
            padding="xl"
            radius="lg"
            className="light:bg-white dark:bg-black"
          >
            <Stack gap="lg">
              <div className="text-center">
                <Title
                  order={2}
                  size="1.75rem"
                  className="light:text-gray-900 dark:text-white mb-4"
                >
                  {t("additionalWork.title")}
                </Title>
                <div className="max-w-3xl mx-auto">
                  <Text size="lg" c="dimmed" className="text-center">
                    {t("additionalWork.subtitle")}
                  </Text>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Mobile Responsiveness */}
                <Card
                  shadow="xs"
                  padding="lg"
                  radius="md"
                  className="light:bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
                >
                  <Stack gap="md">
                    {/* Animated Mobile/Desktop Icons */}
                    <div className="flex justify-center items-center mb-3 h-16">
                      <div className="relative flex items-center justify-center">
                        {/* Desktop Screen */}
                        <div className="w-16 h-10 border-2 border-blue-500 rounded opacity-75 animate-pulse">
                          <div className="w-full h-2 bg-blue-500 rounded-t"></div>
                          <div className="p-1">
                            <div className="w-full h-1 bg-gray-300 rounded mb-1"></div>
                            <div className="w-3/4 h-1 bg-gray-300 rounded"></div>
                          </div>
                        </div>
                        {/* Mobile Screen */}
                        <div
                          className="absolute left-20 top-1 w-6 h-10 border-2 border-green-500 rounded opacity-75 animate-bounce"
                          style={{ animationDelay: "0.5s" }}
                        >
                          <div className="w-full h-1 bg-green-500 rounded-t"></div>
                          <div className="p-0.5">
                            <div className="w-full h-0.5 bg-gray-300 rounded mb-0.5"></div>
                            <div className="w-2/3 h-0.5 bg-gray-300 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Title
                      order={4}
                      size="1rem"
                      fw={600}
                      c="var(--mantine-color-text)"
                    >
                      {t("additionalWork.mobileResponsiveness.title")}
                    </Title>
                    <Text size="sm" c="dimmed">
                      {t("additionalWork.mobileResponsiveness.description")}
                    </Text>
                    <Text
                      size="xs"
                      fw={500}
                      className="text-blue-600 dark:text-blue-400"
                    >
                      {t("additionalWork.mobileResponsiveness.technology")}
                    </Text>
                  </Stack>
                </Card>

                {/* Internationalization */}
                <Card
                  shadow="xs"
                  padding="lg"
                  radius="md"
                  className="light:bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
                >
                  <Stack gap="md">
                    {/* Animated Language Flags */}
                    <div className="flex justify-center items-center mb-3 h-16">
                      <div className="flex gap-2">
                        <div
                          className="w-8 h-6 bg-blue-500 rounded animate-pulse"
                          style={{ animationDelay: "0s" }}
                        >
                          <div className="text-white text-xs flex items-center justify-center h-full">
                            EN
                          </div>
                        </div>
                        <div
                          className="w-8 h-6 bg-red-500 rounded animate-pulse"
                          style={{ animationDelay: "0.3s" }}
                        >
                          <div className="text-white text-xs flex items-center justify-center h-full">
                            FR
                          </div>
                        </div>
                        <div
                          className="w-8 h-6 bg-yellow-500 rounded animate-pulse"
                          style={{ animationDelay: "0.6s" }}
                        >
                          <div className="text-white text-xs flex items-center justify-center h-full">
                            DE
                          </div>
                        </div>
                      </div>
                    </div>

                    <Title
                      order={4}
                      size="1rem"
                      fw={600}
                      c="var(--mantine-color-text)"
                    >
                      {t("additionalWork.internationalization.title")}
                    </Title>
                    <Text size="sm" c="dimmed">
                      {t("additionalWork.internationalization.description")}
                    </Text>
                    <Text
                      size="xs"
                      fw={500}
                      className="text-green-600 dark:text-green-400"
                    >
                      {t("additionalWork.internationalization.languages")}
                    </Text>
                  </Stack>
                </Card>

                {/* Content & UX Refinement */}
                <Card
                  shadow="xs"
                  padding="lg"
                  radius="md"
                  className="light:bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
                >
                  <Stack gap="md">
                    {/* Animated Polish Icon */}
                    <div className="flex justify-center items-center mb-3 h-16">
                      <div className="relative flex items-center justify-center">
                        <div
                          className="w-12 h-12 border-2 border-purple-500 rounded-full flex items-center justify-center animate-spin"
                          style={{ animationDuration: "3s" }}
                        >
                          <div className="w-8 h-8 bg-purple-500 rounded-full opacity-75 animate-ping"></div>
                        </div>
                      </div>
                    </div>

                    <Title
                      order={4}
                      size="1rem"
                      fw={600}
                      c="var(--mantine-color-text)"
                    >
                      {t("additionalWork.contentRefinement.title")}
                    </Title>
                    <Text size="sm" c="dimmed">
                      {t.rich("additionalWork.contentRefinement.description", {
                        consultant: (chunks) => (
                          <Text
                            component="a"
                            href={t(
                              "additionalWork.contentRefinement.consultantUrl",
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            fw={500}
                            className="text-purple-600 dark:text-purple-400 hover:underline"
                          >
                            {chunks}
                          </Text>
                        ),
                      })}
                    </Text>
                    <Text
                      size="xs"
                      fw={500}
                      className="text-purple-600 dark:text-purple-400"
                    >
                      {t("additionalWork.contentRefinement.label")}
                    </Text>
                  </Stack>
                </Card>
              </div>

              {/* Summary */}
              <div className="text-center">
                <div
                  className="max-w-2xl mx-auto p-6 rounded-lg"
                  style={{ backgroundColor: "var(--mantine-color-gray-1)" }}
                >
                  <Text fw={500} c="var(--mantine-color-text)" className="mb-2">
                    {t("additionalWork.summary.title")}
                  </Text>
                  <Text size="sm" c="dimmed">
                    {t("additionalWork.summary.description")}
                  </Text>
                </div>
              </div>
            </Stack>
          </Card>

          {/* AI Tools & Methodology */}
          <Card
            shadow="sm"
            padding="xl"
            radius="lg"
            className="light:bg-white dark:bg-black"
          >
            <Stack gap="lg">
              <Title
                order={2}
                size="1.75rem"
                className="light:text-gray-900 dark:text-white text-center"
              >
                {t("aiToolsMethodology.title")}
              </Title>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {aiTools.map((tool) => (
                  <Card
                    key={tool.name}
                    shadow="xs"
                    padding="md"
                    radius="md"
                    className="light:bg-gray-50 dark:bg-gray-800"
                  >
                    <Stack gap="xs">
                      <Text fw={600} className="text-gray-900 dark:text-white">
                        {tool.name}
                      </Text>
                      <Text
                        size="sm"
                        className="text-gray-600 dark:text-gray-300"
                      >
                        {tool.purpose}
                      </Text>
                      <Text
                        size="sm"
                        fw={500}
                        className="text-green-600 dark:text-green-400"
                      >
                        {t("aiToolsMethodology.impactLabel")} {tool.impact}
                      </Text>
                    </Stack>
                  </Card>
                ))}
              </div>
            </Stack>
          </Card>

          {/* Code Examples & AI Conversations */}
          <Card
            shadow="sm"
            padding="xl"
            radius="lg"
            className="light:bg-white dark:bg-black"
          >
            <AIConversationList
              conversations={aiConversations}
              title={t("aiConversations.title")}
              description={t("aiConversations.description")}
            />
          </Card>

          {/* Call to Action */}
          <Card
            shadow="sm"
            padding="xl"
            radius="lg"
            className="light:bg-gradient-to-r light:from-blue-50 light:to-purple-50 dark:bg-black"
          >
            <div className="text-center">
              <Title
                order={3}
                size="1.5rem"
                className="light:text-gray-900 dark:text-white mb-4"
              >
                {t("callToAction.title")}
              </Title>
              <div className="max-w-2xl mx-auto">
                <Text
                  size="lg"
                  className="text-gray-600 dark:text-gray-300 mb-6 text-center"
                >
                  {t("callToAction.description")}
                </Text>
              </div>
              <Button
                size="lg"
                variant="filled"
                component={Link}
                href="/contact"
              >
                {t("callToAction.button")}
              </Button>
            </div>
          </Card>
        </Stack>
      </Container>
    </main>
  );
}

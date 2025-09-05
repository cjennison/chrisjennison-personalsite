"use client";

import {
  Badge,
  Button,
  Card,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconClock, IconEye, IconTags, IconTarget } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import {
  type AIConversationData,
  AIConversationModal,
} from "./AIConversationModal";

interface AIConversationListProps {
  conversations: AIConversationData[];
  title?: string;
  description?: string;
}

export function AIConversationList({
  conversations,
  title,
  description,
}: AIConversationListProps) {
  const t = useTranslations("AIConversationList");
  const [selectedConversation, setSelectedConversation] =
    useState<AIConversationData | null>(null);
  const [modalOpened, setModalOpened] = useState(false);

  const handleViewConversation = (conversation: AIConversationData) => {
    setSelectedConversation(conversation);
    setModalOpened(true);
  };

  const handleCloseModal = () => {
    setModalOpened(false);
    setSelectedConversation(null);
  };

  // Use provided title/description or fall back to translated defaults
  const displayTitle = title || t("defaultTitle");
  const displayDescription = description || t("defaultDescription");

  return (
    <Stack gap="lg">
      {/* Header */}
      <div className="text-center">
        <Title order={2} size="1.75rem" className="mb-2">
          {displayTitle}
        </Title>
        <div className="max-w-2xl mx-auto">
          <Text size="lg" c="dimmed" className="text-center">
            {displayDescription}
          </Text>
        </div>
      </div>

      {/* Conversation Cards */}
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
        {conversations.map((conversation) => (
          <Card
            key={conversation.id}
            shadow="sm"
            padding="lg"
            radius="md"
            bg="var(--mantine-color-body)"
            className="hover:shadow-md transition-shadow duration-200 cursor-pointer"
            onClick={() => handleViewConversation(conversation)}
          >
            <Stack gap="sm">
              {/* Header */}
              <Group justify="space-between" align="flex-start">
                <div className="flex-1">
                  <Text fw={600} size="lg">
                    {conversation.title}
                  </Text>
                  <Badge variant="light" color="blue" size="sm" mt="xs">
                    {conversation.theme}
                  </Badge>
                </div>
              </Group>

              {/* Description */}
              <Text size="sm" c="dimmed" lineClamp={3}>
                {conversation.description}
              </Text>

              {/* Tags */}
              <Group gap="xs">
                <IconTags size={14} className="text-gray-500" />
                {conversation.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" size="xs">
                    {tag}
                  </Badge>
                ))}
                {conversation.tags.length > 3 && (
                  <Badge variant="outline" size="xs" color="gray">
                    +{conversation.tags.length - 3}
                  </Badge>
                )}
              </Group>

              {/* Metadata */}
              <Group justify="space-between" align="center" mt="sm">
                <Group gap="md">
                  <Group gap="xs">
                    <IconClock size={14} className="text-gray-500" />
                    <Text size="xs" className="text-gray-500">
                      {conversation.duration}
                    </Text>
                  </Group>

                  <Group gap="xs">
                    <IconTarget size={14} className="text-green-600" />
                    <Text size="xs" className="text-gray-500">
                      {conversation.messages.length} interactions
                    </Text>
                  </Group>
                </Group>

                <Button
                  variant="subtle"
                  size="xs"
                  leftSection={<IconEye size={14} />}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleViewConversation(conversation);
                  }}
                >
                  {t("viewDetailsButton")}
                </Button>
              </Group>

              {/* Outcome Preview */}
              <div
                className="mt-2 p-3 rounded-md"
                style={{
                  backgroundColor: "var(--mantine-color-gray-1)",
                }}
              >
                <Text size="xs" fw={500} c="green.7" className="mb-1">
                  {t("outcomeLabel")}
                </Text>
                <Text size="xs" c="gray.7" lineClamp={2}>
                  {conversation.outcome}
                </Text>
              </div>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>

      {/* Empty State */}
      {conversations.length === 0 && (
        <Card shadow="sm" padding="xl" radius="md" className="text-center">
          <Text size="lg" fw={500} c="dimmed" className="mb-2">
            {t("emptyState.title")}
          </Text>
          <Text size="sm" c="gray.6">
            {t("emptyState.description")}
          </Text>
        </Card>
      )}

      {/* Modal */}
      <AIConversationModal
        conversation={selectedConversation}
        opened={modalOpened}
        onClose={handleCloseModal}
      />
    </Stack>
  );
}

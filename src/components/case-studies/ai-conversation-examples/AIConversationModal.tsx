"use client";

import {
  Badge,
  Button,
  Card,
  Code,
  Divider,
  Group,
  Modal,
  ScrollArea,
  Stack,
  Text,
  Timeline,
} from "@mantine/core";
import {
  IconBulb,
  IconCheck,
  IconCode,
  IconFileText,
  IconRobot,
  IconUser,
  IconX,
} from "@tabler/icons-react";

export interface ConversationMessage {
  role: "user" | "assistant";
  content: string;
  timestamp?: string;
  type?: "text" | "code" | "file" | "insight" | "solution";
}

export interface AIConversationData {
  id: string;
  title: string;
  description: string;
  theme: string;
  duration: string;
  outcome: string;
  tags: string[];
  messages: ConversationMessage[];
  lessonLearned: string;
  implementedSolution: string;
}

interface AIConversationModalProps {
  conversation: AIConversationData | null;
  opened: boolean;
  onClose: () => void;
}

const getMessageIcon = (role: string, type?: string) => {
  if (role === "user") return <IconUser size={16} />;

  switch (type) {
    case "code":
      return <IconCode size={16} />;
    case "insight":
      return <IconBulb size={16} />;
    case "solution":
      return <IconCheck size={16} />;
    case "file":
      return <IconFileText size={16} />;
    default:
      return <IconRobot size={16} />;
  }
};

const getMessageColor = (role: string, type?: string) => {
  if (role === "user") return "blue";

  switch (type) {
    case "code":
      return "violet";
    case "insight":
      return "yellow";
    case "solution":
      return "green";
    case "file":
      return "orange";
    default:
      return "gray";
  }
};

export function AIConversationModal({
  conversation,
  opened,
  onClose,
}: AIConversationModalProps) {
  if (!conversation) return null;

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      size="xl"
      title={
        <Group gap="sm">
          <IconRobot size={20} className="text-blue-600" />
          <Text fw={600}>{conversation.title}</Text>
        </Group>
      }
      closeButtonProps={{
        icon: <IconX size={16} />,
        "aria-label": "Close modal",
      }}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
      transitionProps={{
        transition: "fade",
        duration: 200,
      }}
    >
      <Stack gap="lg">
        {/* Conversation Overview */}
        <Card
          shadow="xs"
          padding="md"
          radius="md"
          className="bg-gray-50 dark:bg-gray-800"
        >
          <Stack gap="sm">
            <Group justify="apart">
              <Badge variant="light" color="blue">
                {conversation.theme}
              </Badge>
              <Text size="sm" className="text-gray-600 dark:text-gray-400">
                Duration: {conversation.duration}
              </Text>
            </Group>

            <Text size="sm" className="text-gray-700 dark:text-gray-300">
              {conversation.description}
            </Text>

            <Group gap="xs">
              {conversation.tags.map((tag) => (
                <Badge key={tag} variant="outline" size="sm">
                  {tag}
                </Badge>
              ))}
            </Group>
          </Stack>
        </Card>

        {/* Conversation Messages */}
        <ScrollArea h={400} offsetScrollbars>
          <Timeline active={-1} bulletSize={24} lineWidth={2}>
            {conversation.messages.map((message, messageIndex) => (
              <Timeline.Item
                key={`${message.role}-${messageIndex}-${message.content.slice(0, 20)}`}
                bullet={getMessageIcon(message.role, message.type)}
                title={
                  <Group gap="sm">
                    <Text fw={500} size="sm">
                      {message.role === "user" ? "User" : "AI Assistant"}
                    </Text>
                    {message.timestamp && (
                      <Text size="xs" className="text-gray-500">
                        {message.timestamp}
                      </Text>
                    )}
                  </Group>
                }
                color={getMessageColor(message.role, message.type)}
              >
                <div className="mt-2 mb-4">
                  {message.type === "code" ? (
                    <Code block className="text-sm">
                      {message.content}
                    </Code>
                  ) : (
                    <Text
                      size="sm"
                      className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap"
                    >
                      {message.content}
                    </Text>
                  )}
                </div>
              </Timeline.Item>
            ))}
          </Timeline>
        </ScrollArea>

        <Divider />

        {/* Outcome and Learning */}
        <Stack gap="md">
          <div>
            <Text
              fw={600}
              size="sm"
              className="text-green-700 dark:text-green-400 mb-2"
            >
              Outcome Achieved:
            </Text>
            <Text size="sm" className="text-gray-700 dark:text-gray-300">
              {conversation.outcome}
            </Text>
          </div>

          <div>
            <Text
              fw={600}
              size="sm"
              className="text-blue-700 dark:text-blue-400 mb-2"
            >
              Lesson Learned:
            </Text>
            <Text size="sm" className="text-gray-700 dark:text-gray-300">
              {conversation.lessonLearned}
            </Text>
          </div>

          <div>
            <Text
              fw={600}
              size="sm"
              className="text-purple-700 dark:text-purple-400 mb-2"
            >
              Solution Implemented:
            </Text>
            <Text size="sm" className="text-gray-700 dark:text-gray-300">
              {conversation.implementedSolution}
            </Text>
          </div>
        </Stack>

        {/* Action Buttons */}
        <Group justify="flex-end" mt="md">
          <Button variant="subtle" onClick={onClose}>
            Close
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}

import type { AIConversationData } from "../AIConversationModal";
import { centeringConversation } from "./centeringConversation";
import { imageViewerConversation } from "./imageViewerConversation";

export const aiConversations: AIConversationData[] = [
  centeringConversation,
  imageViewerConversation,
  // Additional conversations can be added here as they are documented
];

export { centeringConversation, imageViewerConversation };

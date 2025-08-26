import type { AIConversationData } from "../AIConversationModal";
import { centeringConversation } from "./centeringConversation";

export const aiConversations: AIConversationData[] = [
  centeringConversation,
  // Additional conversations can be added here as they are documented
];

export { centeringConversation };

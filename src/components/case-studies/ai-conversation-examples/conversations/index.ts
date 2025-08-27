import type { AIConversationData } from "../AIConversationModal";
import { centeringConversation } from "./centeringConversation";
import { engineeringServicesConversation } from "./engineeringServicesConversation";
import { imageViewerConversation } from "./imageViewerConversation";
import { vercelDeploymentConversation } from "./vercelDeploymentConversation";

export const aiConversations: AIConversationData[] = [
  engineeringServicesConversation,
  centeringConversation,
  imageViewerConversation,
  vercelDeploymentConversation,
  // Additional conversations can be added here as they are documented
];

export {
  centeringConversation,
  imageViewerConversation,
  vercelDeploymentConversation,
};

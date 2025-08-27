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
];

export {
  centeringConversation,
  imageViewerConversation,
  vercelDeploymentConversation,
  engineeringServicesConversation,
};

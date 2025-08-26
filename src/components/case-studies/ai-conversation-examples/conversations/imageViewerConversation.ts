import type { AIConversationData } from "../AIConversationModal";

export const imageViewerConversation: AIConversationData = {
  id: "image-viewer-development",
  title: "ImageViewer Component Development",
  description:
    "Creating a professional image viewer with modal enlargement and description support for case study screenshots as well as setting a standard for showcase images.",
  theme: "Component Development",
  duration: "25 minutes",
  outcome:
    "Successfully created a professional ImageViewer component with modal enlargement, proper positioning, and description support",
  tags: [
    "React",
    "Mantine",
    "TypeScript",
    "Modal",
    "Image Component",
    "User Experience",
  ],
  lessonLearned:
    "Component requirements should be clearly defined upfront including user stories and acceptance criteria. Consistent image sizing requires wrapper containers with aspect ratios rather than direct image sizing.",
  implementedSolution:
    "Created a reusable ImageViewer component that can replace any image tag with click-to-enlarge functionality, proper modal positioning, and optional description text support.",
  messages: [
    {
      role: "user",
      content:
        "New micro-feature: ImageViewer. We need a component for image viewing. I want to be have a component where i can offer it a src url, but when clicked it should open a shadowbox that opens the image larger for easier viewing. Clicking out of the image or a small X button should close it. Use mantine principles.\n\nRequirements:\n- As a developer I can use this component in place of any <image> tag\n- As a user, when I click this image it opens it in a larger overlay with a shadowbox\n- As a user, I can close this box by clicking out of it or clicking an X button",
      timestamp: "2:23 PM",
      type: "text",
    },
    {
      role: "assistant",
      content:
        "I'll create an ImageViewer component that follows Mantine principles and meets your requirements. This will be a reusable component that can replace any img tag with click-to-enlarge functionality.",
      timestamp: "2:23 PM",
      type: "text",
    },
    {
      role: "assistant",
      content:
        "Created ImageViewer component with Mantine Modal, useDisclosure hook, and proper TypeScript interfaces. Includes thumbnail with hover effects and modal overlay with close functionality.",
      timestamp: "2:24 PM",
      type: "code",
    },
    {
      role: "user",
      content:
        "Is there a way to unify the sizes so they are the same ratio and adjust the inner content to fill? Second issue is the description text needs to be under the image, not over it in the overlay and it needs to be white without any background.",
      timestamp: "3:12 PM",
      type: "text",
    },
    {
      role: "assistant",
      content:
        "Fixed both issues: 1) Added aspect-video wrapper containers for consistent 16:9 ratios with w-full h-full on ImageViewer. 2) Restructured modal with flex-col layout, image above and description below with white text and text-shadow for readability.",
      timestamp: "3:13 PM",
      type: "code",
    },
    {
      role: "user",
      content:
        "Add the expected use of this component into the instructions for react instructions so that all images meant for showcasing use this component.",
      timestamp: "3:20 PM",
      type: "text",
    },
    {
      role: "assistant",
      content:
        "Added Image Display Standards section to React instructions with guidelines: 1) Use ImageViewer for showcase images instead of img tags, 2) Import from shared components, 3) Provide meaningful alt text and descriptions, 4) Use consistent aspect ratios with wrapper containers. Also added practical example showing proper usage pattern.",
      timestamp: "3:21 PM",
      type: "code",
    },
  ],
};

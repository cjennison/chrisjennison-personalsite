import type { AIConversationData } from "../AIConversationModal";

export const centeringConversation: AIConversationData = {
  id: "centering-text-elements",
  title: "Resolving Text Element Centering Issues",
  description:
    "A detailed conversation showing how we identified and solved text centering problems, then documented the solution in our style guidelines to prevent future occurrences.",
  theme: "UI/UX Problem Solving",
  duration: "15 minutes",
  outcome:
    "Established proper centering patterns using wrapper divs with width constraints, improved visual hierarchy across case study pages, and created reusable style guidelines.",
  tags: [
    "CSS",
    "Tailwind",
    "Mantine",
    "Centering",
    "Style Guidelines",
    "Best Practices",
  ],
  lessonLearned:
    "Text centering with width constraints requires a wrapper div pattern rather than applying constraints directly to text components. This ensures proper centering behavior and visual hierarchy.",
  implementedSolution:
    "Updated style instructions with comprehensive centering patterns, applied fixes to case study pages, and established a reusable methodology for future components.",
  messages: [
    {
      role: "user",
      content:
        "These text elements are not centered. Looking at the case studies page, the header and description text should be properly centered on the page.",
      timestamp: "2:15 PM",
      type: "text",
    },
    {
      role: "assistant",
      content:
        "I can see the centering issue. Let me examine the current styling and identify the problem. The issue appears to be with how we're applying centering styles to text components.",
      timestamp: "2:15 PM",
      type: "text",
    },
    {
      role: "assistant",
      content:
        "Let me check the current implementation in the case studies page to understand the styling approach being used.",
      timestamp: "2:16 PM",
      type: "file",
    },
    {
      role: "user",
      content:
        "The problem is the text does not span the whole width of the area it's in. I believe that's the real issue.",
      timestamp: "2:17 PM",
      type: "insight",
    },
    {
      role: "assistant",
      content:
        "Excellent insight! You're absolutely right. The issue is that we're applying width constraints directly to text components, which prevents proper centering. We need to use a wrapper div pattern instead.",
      timestamp: "2:17 PM",
      type: "insight",
    },
    {
      role: "assistant",
      content: `// ❌ INCORRECT: Direct width constraint on text\n<Text className="max-w-2xl mx-auto text-center">\n  This doesn't center properly\n</Text>\n\n// ✅ CORRECT: Wrapper div pattern\n<div className="max-w-2xl mx-auto">\n  <Text className="text-center">\n    This centers properly within the constrained width\n  </Text>\n</div>`,
      timestamp: "2:18 PM",
      type: "code",
    },
    {
      role: "assistant",
      content:
        "I'll apply this pattern to fix the centering issues in the case study headers and descriptions.",
      timestamp: "2:18 PM",
      type: "solution",
    },
    {
      role: "user",
      content:
        "What if I want it to be a smaller size of the text but be centered?",
      timestamp: "2:20 PM",
      type: "text",
    },
    {
      role: "assistant",
      content:
        "For smaller constrained widths while maintaining centering, you can adjust the max-width class on the wrapper div. For example:\n\n- `max-w-sm` for small width (384px)\n- `max-w-lg` for medium width (512px) \n- `max-w-2xl` for larger width (672px)\n- `max-w-4xl` for very wide content (896px)\n\nThe pattern remains the same - wrapper div controls width, inner element controls text alignment.",
      timestamp: "2:20 PM",
      type: "solution",
    },
    {
      role: "user",
      content: "But now the margin auto isn't applying. See screenshot.",
      timestamp: "2:22 PM",
      type: "text",
    },
    {
      role: "assistant",
      content:
        "I see the issue. When using Mantine components, we need to ensure the wrapper div has proper display properties for margin auto to work. Let me fix this by ensuring the wrapper div is properly configured.",
      timestamp: "2:22 PM",
      type: "text",
    },
    {
      role: "assistant",
      content: `<div className="text-center">\n  <Title className="mb-4">Section Title</Title>\n  <div className="max-w-3xl mx-auto">\n    <Text className="text-center">\n      Description text with proper width constraint and centering\n    </Text>\n  </div>\n</div>`,
      timestamp: "2:23 PM",
      type: "code",
    },
    {
      role: "user",
      content:
        "Add this paradigm for proper centered element styling into the Style instructions.",
      timestamp: "2:25 PM",
      type: "text",
    },
    {
      role: "assistant",
      content:
        "Excellent idea! This is exactly the kind of pattern that should be documented to prevent future issues. I'll add a comprehensive section to the Style instructions covering this centering paradigm with examples and principles.",
      timestamp: "2:25 PM",
      type: "solution",
    },
    {
      role: "assistant",
      content:
        "I've added a new section called 'Centered Content with Width Constraints' to the Style instructions that includes:\n\n- The correct wrapper div pattern\n- Examples of incorrect vs correct approaches\n- Key principles for centering with width constraints\n- Responsive width considerations\n- Semantic structure guidelines\n\nThis will prevent similar centering issues in the future and provide clear guidance for all team members.",
      timestamp: "2:27 PM",
      type: "solution",
    },
  ],
};

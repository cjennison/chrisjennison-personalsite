import type { AIConversationData } from "../AIConversationModal";

export const accessibilityImplementationConversation: AIConversationData = {
  id: "accessibility-implementation",
  title: "WCAG 2.1 AA Accessibility Implementation",
  description:
    "Step-by-step conversation on implementing comprehensive accessibility features, from semantic HTML to screen reader support.",
  theme: "Accessibility Engineering",
  duration: "30 minutes",
  outcome:
    "Achieved full WCAG 2.1 AA compliance with proper ARIA labels, keyboard navigation, color contrast ratios, and screen reader support across all components.",
  tags: [
    "Accessibility",
    "WCAG",
    "ARIA",
    "Screen Readers",
    "Keyboard Navigation",
  ],
  lessonLearned:
    "Accessibility should be built in from the start, not retrofitted. AI can help identify accessibility issues and suggest specific implementations for complex interactive components.",
  implementedSolution:
    "Implemented comprehensive accessibility patterns including focus management, semantic HTML, proper ARIA attributes, and testing strategies with accessibility tools.",
  messages: [
    {
      role: "user",
      content:
        "I need to ensure this portfolio website meets WCAG 2.1 AA standards. Where should I start with accessibility implementation?",
      timestamp: "2:45 PM",
      type: "text",
    },
    {
      role: "assistant",
      content:
        "Excellent priority! Let's start with a systematic accessibility audit and implementation plan. I'll help you with semantic HTML, ARIA attributes, keyboard navigation, and color contrast.",
      timestamp: "2:45 PM",
      type: "text",
    },
    {
      role: "assistant",
      content:
        "First, let me check your current components for accessibility issues and suggest specific improvements.",
      timestamp: "2:46 PM",
      type: "file",
    },
    {
      role: "assistant",
      content: `// Accessible button component example
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: React.ReactNode;
}

const Button = ({ loading, disabled, children, ...props }) => {
  return (
    <button
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="sr-only">Loading...</span>}
      <span aria-hidden={loading}>{children}</span>
    </button>
  );
};`,
      timestamp: "2:47 PM",
      type: "code",
    },
    {
      role: "user",
      content: "How do I handle focus management for the modal components?",
      timestamp: "2:50 PM",
      type: "text",
    },
    {
      role: "assistant",
      content:
        "Great question! Modal focus management is crucial for accessibility. I'll show you how to implement proper focus trapping and restoration.",
      timestamp: "2:50 PM",
      type: "insight",
    },
    {
      role: "assistant",
      content: `// Modal focus management\nuseEffect(() => {\n  if (isOpen) {\n    const previousActiveElement = document.activeElement;\n    \n    // Focus first interactive element\n    const focusableElements = modal.querySelectorAll(\n      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'\n    );\n    \n    const firstElement = focusableElements[0];\n    const lastElement = focusableElements[focusableElements.length - 1];\n    \n    firstElement?.focus();\n    \n    return () => {\n      previousActiveElement?.focus();\n    };\n  }\n}, [isOpen]);`,
      timestamp: "2:52 PM",
      type: "code",
    },
    {
      role: "user",
      content: "What about color contrast requirements?",
      timestamp: "2:55 PM",
      type: "text",
    },
    {
      role: "assistant",
      content:
        "For WCAG 2.1 AA compliance, you need minimum 4.5:1 contrast ratio for normal text and 3:1 for large text. I'll help you set up a color system that meets these requirements.",
      timestamp: "2:55 PM",
      type: "solution",
    },
    {
      role: "assistant",
      content: `/* Accessible color system */\n:root {\n  --color-text-primary: #171717; /* 21:1 contrast on white */\n  --color-text-secondary: #525252; /* 7.7:1 contrast on white */\n  --color-text-muted: #737373; /* 4.7:1 contrast on white */\n}\n\n[data-theme="dark"] {\n  --color-text-primary: #fafafa; /* 19.4:1 contrast on dark */\n  --color-text-secondary: #bababa; /* 9.5:1 contrast on dark */\n  --color-text-muted: #9a9a9a; /* 5.8:1 contrast on dark */\n}`,
      timestamp: "2:57 PM",
      type: "code",
    },
  ],
};

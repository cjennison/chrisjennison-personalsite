import type { AIConversationData } from "../AIConversationModal";

export const performanceOptimizationConversation: AIConversationData = {
  id: "performance-optimization",
  title: "Next.js Performance Optimization Strategy",
  description:
    "How AI assisted in identifying and implementing performance optimizations for the portfolio website, achieving 90+ Lighthouse scores.",
  theme: "Performance Engineering",
  duration: "25 minutes",
  outcome:
    "Implemented comprehensive performance optimizations including image optimization, code splitting, and bundle analysis, achieving target Core Web Vitals scores.",
  tags: [
    "Performance",
    "Next.js",
    "Lighthouse",
    "Core Web Vitals",
    "Optimization",
  ],
  lessonLearned:
    "Performance optimization requires systematic measurement and iterative improvement. AI can help identify bottlenecks and suggest specific optimizations based on modern best practices.",
  implementedSolution:
    "Integrated webpack-bundle-analyzer, optimized image loading with Next.js Image component, implemented proper code splitting strategies, and established performance monitoring pipeline.",
  messages: [
    {
      role: "user",
      content:
        "I need to optimize the performance of this portfolio website. What should be our strategy for achieving 90+ Lighthouse scores?",
      timestamp: "10:30 AM",
      type: "text",
    },
    {
      role: "assistant",
      content:
        "Let's approach this systematically. First, I'll help you set up proper performance monitoring and then we'll tackle the main areas: Core Web Vitals, bundle optimization, and image handling.",
      timestamp: "10:30 AM",
      type: "text",
    },
    {
      role: "assistant",
      content:
        "Let me check your current Next.js configuration and suggest specific optimizations for your tech stack.",
      timestamp: "10:31 AM",
      type: "file",
    },
    {
      role: "assistant",
      content: `// next.config.js performance optimizations\nconst nextConfig = {\n  images: {\n    formats: ['image/avif', 'image/webp'],\n    deviceSizes: [640, 750, 828, 1080, 1200, 1920],\n  },\n  webpack: (config, { dev, isServer }) => {\n    if (!dev && !isServer) {\n      config.optimization.splitChunks = {\n        chunks: 'all',\n        cacheGroups: {\n          vendor: {\n            test: /[\\\\/]node_modules[\\\\/]/,\n            name: 'vendors',\n            chunks: 'all',\n          },\n        },\n      };\n    }\n    return config;\n  },\n};`,
      timestamp: "10:32 AM",
      type: "code",
    },
    {
      role: "user",
      content: "How do I monitor these performance improvements over time?",
      timestamp: "10:35 AM",
      type: "text",
    },
    {
      role: "assistant",
      content:
        "Great question! I'll help you set up automated performance monitoring with Lighthouse CI and Core Web Vitals tracking.",
      timestamp: "10:35 AM",
      type: "solution",
    },
    {
      role: "assistant",
      content: `// Performance monitoring setup\nexport function reportWebVitals(metric) {\n  if (process.env.NODE_ENV === 'production') {\n    fetch('/api/analytics/web-vitals', {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify(metric),\n    });\n  }\n}`,
      timestamp: "10:36 AM",
      type: "code",
    },
    {
      role: "assistant",
      content:
        "I've also added bundle analysis scripts to your package.json so you can run `npm run analyze` to visualize your bundle size and identify optimization opportunities.",
      timestamp: "10:38 AM",
      type: "solution",
    },
  ],
};

"use client";

import { usePageTracking, useScrollTracking } from "@/hooks/useAnalytics";

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

/**
 * Analytics provider that automatically tracks page views and scroll depth
 */
export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  // Automatically track page views on route changes
  usePageTracking();

  // Automatically track scroll depth milestones
  useScrollTracking();

  return <>{children}</>;
}

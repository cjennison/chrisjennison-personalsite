"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { trackPageView } from "@/lib/analytics";

/**
 * Hook to automatically track page views on route changes
 */
export function usePageTracking() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      trackPageView(window.location.href, document.title);
    }
  }, [pathname]);
}

/**
 * Hook to track scroll depth at various milestones
 */
export function useScrollTracking() {
  useEffect(() => {
    let ticking = false;
    const milestones = [25, 50, 75, 90];
    const reached = new Set<number>();

    const trackScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      milestones.forEach((milestone) => {
        if (scrollPercent >= milestone && !reached.has(milestone)) {
          reached.add(milestone);
          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "scroll_depth", {
              event_category: "engagement",
              event_label: `${milestone}%`,
              value: milestone,
            });
          }
        }
      });
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          trackScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}

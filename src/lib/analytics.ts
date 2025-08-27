// Google Analytics tracking utilities
// These functions help track user interactions and events

declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js",
      targetId: string | Date,
      config?: Record<string, unknown>,
    ) => void;
    dataLayer: Record<string, unknown>[];
  }
}

/**
 * Track page views
 * @param url - The page URL
 * @param title - The page title
 */
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "page_view", {
      page_title: title || document.title,
      page_location: url,
    });
  }
};

/**
 * Track custom events
 * @param action - The action that was performed
 * @param category - The category of the event
 * @param label - Optional label for the event
 * @param value - Optional value for the event
 */
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number,
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

/**
 * Track contact form submissions
 * @param method - How the form was submitted (e.g., 'form', 'email', 'phone')
 */
export const trackContactForm = (method: string) => {
  trackEvent("contact_form_submit", "engagement", method);
};

/**
 * Track navigation clicks
 * @param section - The section that was navigated to
 * @param method - How navigation occurred (e.g., 'nav_click', 'scroll', 'hero_cta')
 */
export const trackNavigation = (section: string, method: string) => {
  trackEvent("navigate", "navigation", `${section}_${method}`);
};

/**
 * Track service page visits
 * @param service - The service page visited
 */
export const trackServiceView = (service: string) => {
  trackEvent("service_view", "services", service);
};

/**
 * Track case study interactions
 * @param caseStudy - The case study that was viewed
 * @param action - The action taken (e.g., 'view', 'expand', 'modal_open')
 */
export const trackCaseStudy = (caseStudy: string, action: string) => {
  trackEvent(action, "case_studies", caseStudy);
};

/**
 * Track external link clicks
 * @param url - The external URL that was clicked
 * @param context - Where the link was clicked from
 */
export const trackExternalLink = (url: string, context: string) => {
  trackEvent("external_link_click", "outbound", `${context}_${url}`);
};

/**
 * Track file downloads
 * @param fileName - The name of the file downloaded
 * @param fileType - The type of file (e.g., 'pdf', 'resume', 'portfolio')
 */
export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent("download", "engagement", `${fileType}_${fileName}`);
};

/**
 * Track scroll depth
 * @param depth - The scroll depth percentage
 */
export const trackScrollDepth = (depth: number) => {
  trackEvent("scroll_depth", "engagement", `${depth}%`, depth);
};

/**
 * Track theme changes
 * @param theme - The theme that was selected ('light' or 'dark')
 */
export const trackThemeChange = (theme: string) => {
  trackEvent("theme_change", "ui_interaction", theme);
};

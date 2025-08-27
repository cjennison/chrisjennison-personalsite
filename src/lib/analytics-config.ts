/**
 * Analytics configuration and setup
 */

export const ANALYTICS_CONFIG = {
  // Get the measurement ID from environment variables
  measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",

  // Enable analytics only in production or when measurement ID is provided
  enabled:
    Boolean(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) &&
    process.env.NODE_ENV === "production",

  // Debug mode for development
  debug: process.env.NODE_ENV === "development",
} as const;

/**
 * Check if analytics is properly configured
 */
export const isAnalyticsEnabled = (): boolean => {
  return ANALYTICS_CONFIG.enabled && ANALYTICS_CONFIG.measurementId.length > 0;
};

/**
 * Get the measurement ID
 */
export const getMeasurementId = (): string => {
  return ANALYTICS_CONFIG.measurementId;
};

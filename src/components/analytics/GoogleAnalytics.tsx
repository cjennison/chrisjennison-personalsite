"use client";

import Script from "next/script";
import { getMeasurementId, isAnalyticsEnabled } from "@/lib/analytics-config";

export function GoogleAnalytics() {
  // Only render analytics in production with valid measurement ID
  if (!isAnalyticsEnabled()) {
    return null;
  }

  const measurementId = getMeasurementId();

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_title: document.title,
            page_location: window.location.href,
            // Privacy-friendly settings
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false,
          });
        `}
      </Script>
    </>
  );
}

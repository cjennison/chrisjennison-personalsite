"use client";

import Script from "next/script";

interface StructuredDataProps {
  data: Record<string, unknown>;
}

/**
 * Component to inject structured data JSON-LD into the page
 */
export function StructuredData({ data }: StructuredDataProps) {
  const jsonLd = JSON.stringify(data, null, 2);

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      strategy="beforeInteractive"
    >
      {jsonLd}
    </Script>
  );
}

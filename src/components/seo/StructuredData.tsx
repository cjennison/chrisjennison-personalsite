interface StructuredDataProps {
  data: Record<string, unknown>;
}

/**
 * Server-rendered JSON-LD so crawlers see it in the initial HTML
 */
export function StructuredData({ data }: StructuredDataProps) {
  // Escape "<" so content can never close the script tag early
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD from trusted, escaped site data
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}

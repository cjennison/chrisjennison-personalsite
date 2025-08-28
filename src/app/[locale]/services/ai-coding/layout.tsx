import { StructuredData } from "@/components/seo/StructuredData";
import { generateAICodingServicesMetadata } from "@/lib/metadata";
import { generateAICodingServiceStructuredData } from "@/lib/structured-data";

export const metadata = generateAICodingServicesMetadata();

export default function AICodingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = generateAICodingServiceStructuredData();

  return (
    <>
      <StructuredData
        data={structuredData as unknown as Record<string, unknown>}
      />
      {children}
    </>
  );
}

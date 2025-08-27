import { StructuredData } from "@/components/seo/StructuredData";
import { generateAIPortfolioCaseStudyMetadata } from "@/lib/metadata";
import { generateAICodingServiceStructuredData } from "@/lib/structured-data";

export const metadata = generateAIPortfolioCaseStudyMetadata();

export default function AIPortfolioCaseStudyLayout({
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

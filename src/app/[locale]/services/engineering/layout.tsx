import { StructuredData } from "@/components/seo/StructuredData";
import { generateEngineeringServicesMetadata } from "@/lib/metadata";
import { generateEngineeringServiceStructuredData } from "@/lib/structured-data";

export const metadata = generateEngineeringServicesMetadata();

export default function EngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = generateEngineeringServiceStructuredData();

  return (
    <>
      <StructuredData
        data={structuredData as unknown as Record<string, unknown>}
      />
      {children}
    </>
  );
}

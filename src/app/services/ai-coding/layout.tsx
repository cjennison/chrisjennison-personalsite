import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Coding Adoption Program | Christopher Jennison",
  description:
    "6-8 week structured program to implement AI-first coding practices and increase engineering velocity without reducing jobs.",
};

export default function AICodingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

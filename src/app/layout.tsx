import type { Metadata } from "next";
import "@mantine/core/styles.css";
import "./globals.css";
import { SEO_CONFIG } from "@/lib/seo-config";

export const metadata: Metadata = {
  metadataBase: new URL(SEO_CONFIG.siteUrl),
};

// The <html> element lives in app/[locale]/layout.tsx so `lang` matches the locale
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

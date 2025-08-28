import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { Notifications } from "@mantine/notifications";
import { Analytics } from "@vercel/analytics/next";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { StructuredData } from "@/components/seo/StructuredData";
import { generateHomepageMetadata } from "@/lib/metadata";
import { generateWebsiteStructuredData } from "@/lib/structured-data";
import { ThemeProvider } from "@/lib/theme";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = generateHomepageMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteStructuredData = generateWebsiteStructuredData();

  // We'll let the middleware handle locale detection
  // and default to 'en' for the root html lang attribute
  const defaultLang = "en";

  return (
    <html lang={defaultLang}>
      <head>
        <StructuredData
          data={websiteStructuredData as unknown as Record<string, unknown>}
        />
      </head>
      <body
        className={`${inter.variable} antialiased transition-colors duration-200`}
      >
        <Analytics />
        <GoogleAnalytics />
        <ThemeProvider>
          <AnalyticsProvider>
            <Notifications />
            {children}
          </AnalyticsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

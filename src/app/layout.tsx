import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { Notifications } from "@mantine/notifications";
import { ThemeProvider } from "@/lib/theme";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christopher Jennison - Professional Software Engineer",
  description:
    "Professional portfolio showcasing enterprise-grade development practices, AI-enhanced workflows, and comprehensive software engineering services.",
  keywords: [
    "Software Engineer",
    "AI Development",
    "Enterprise Architecture",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Christopher Jennison" }],
  creator: "Christopher Jennison",
  openGraph: {
    title: "Christopher Jennison - Professional Software Engineer",
    description:
      "Professional portfolio showcasing enterprise-grade development practices and AI-enhanced workflows.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christopher Jennison - Professional Software Engineer",
    description:
      "Professional portfolio showcasing enterprise-grade development practices and AI-enhanced workflows.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased light:bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-200`}
      >
        <ThemeProvider>
          <Notifications />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

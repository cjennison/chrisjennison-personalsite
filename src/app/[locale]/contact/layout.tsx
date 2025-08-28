import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Christopher Jennison",
  description:
    "Get in touch with Christopher Jennison for engineering consultancy, AI coding services, and strategic technical guidance. Let's discuss your next project.",
  keywords: [
    "contact",
    "engineering consultant",
    "AI coding services",
    "technical consultation",
    "project discussion",
    "software development",
    "enterprise architecture",
    "startup engineering",
  ],
  openGraph: {
    title: "Contact - Christopher Jennison",
    description:
      "Get in touch for engineering consultancy, AI coding services, and strategic technical guidance.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Christopher Jennison",
    description:
      "Get in touch for engineering consultancy, AI coding services, and strategic technical guidance.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

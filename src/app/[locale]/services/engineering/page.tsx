"use client";

import {
  Badge,
  Button,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconArrowLeft,
  IconCode,
  IconDeviceMobile,
  IconRobot,
  IconServer,
  IconWorld,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { Navigation } from "@/components/layout/Navigation";
import {
  CRMVisualization,
  EngineeringExperience,
  HealthcareScaleVisualization,
  MobileTherapistVisualization,
  SalesAgentVisualization,
  SectionNavigation,
  WebsiteMetaVisualization,
} from "@/components/sections";
import { Link } from "@/i18n/routing";

export default function EngineeringServicesPage() {
  const t = useTranslations("EngineeringPage");

  const engineeringSections = [
    {
      id: "internal-tooling",
      label: t("sections.internalTooling"),
      icon: IconCode,
    },
    {
      id: "mobile-mvp",
      label: t("sections.mobileMvp"),
      icon: IconDeviceMobile,
    },
    {
      id: "ai-solutions",
      label: t("sections.aiSolutions"),
      icon: IconRobot,
    },
    {
      id: "platform-scaling",
      label: t("sections.platformScaling"),
      icon: IconServer,
    },
    {
      id: "website-showcase",
      label: t("sections.websiteShowcase"),
      icon: IconWorld,
    },
  ];

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Main navigation header
      const isSmallScreen = window.innerWidth < 700;
      // On small screens, section nav is not sticky, so don't account for its height
      const sectionNavHeight = isSmallScreen ? 0 : 80; // Section navigation bar
      const additionalPadding = 20; // Extra breathing room
      const totalOffset = headerHeight + sectionNavHeight + additionalPadding;
      const elementPosition = element.offsetTop - totalOffset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <main
      className="min-h-screen pt-[60px]"
      style={{ backgroundColor: "var(--mantine-color-body)" }}
    >
      <Navigation />
      <Container size="xl" className="py-20">
        <Stack gap="xl">
          {/* Back Navigation */}
          <Button
            component={Link}
            href="/services"
            variant="subtle"
            leftSection={<IconArrowLeft size={16} />}
            size="sm"
            className="self-start"
          >
            {t("navigation.backToServices")}
          </Button>

          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto">
            <Group justify="center" mb="md">
              <Badge
                size="lg"
                variant="light"
                color="blue"
                className="text-sm font-medium"
              >
                {t("header.badge")}
              </Badge>
            </Group>
            <Group justify="center" gap="sm" className="mb-4">
              <IconCode
                size={40}
                style={{ color: "var(--mantine-color-blue-6)" }}
              />
              <Title
                order={1}
                size="3rem"
                fw={700}
                c="var(--mantine-color-text)"
              >
                {t("header.title")}
              </Title>
            </Group>
            <Text size="xl" c="dimmed" className="leading-relaxed">
              {t("header.subtitle")}
            </Text>
          </div>

          {/* Section Navigation */}
          <SectionNavigation
            sections={engineeringSections}
            onSectionClick={handleSectionClick}
            color="blue"
          />

          {/* Customer Experiences */}
          <Stack gap={60} className="mt-8">
            {/* Internal Business Tooling */}
            <div id="internal-tooling">
              <EngineeringExperience
                experienceKey="internalTooling"
                technologies={[
                  "React",
                  "Node.js",
                  "PostgreSQL",
                  "MongoDB",
                  "Azure",
                  "PWA",
                ]}
                visualComponent={<CRMVisualization />}
                reverse={false}
              />
            </div>

            {/* Custom Mobile Applications & MVP Development */}
            <div id="mobile-mvp">
              <EngineeringExperience
                experienceKey="mobileMvp"
                technologies={[
                  "Flutter",
                  "Augmented Reality",
                  "TensorFlow",
                  "Push Notifications",
                  "Health APIs",
                ]}
                visualComponent={<MobileTherapistVisualization />}
                reverse={true}
              />
            </div>

            {/* Conversational AI & Generative AI Solutions */}
            <div id="ai-solutions">
              <EngineeringExperience
                experienceKey="aiSolutions"
                technologies={[
                  "Twilio",
                  "Node.js",
                  "Lead Management APIs",
                  "SMS/Voice Automation",
                  "CRM Integration",
                  "Redis",
                ]}
                visualComponent={<SalesAgentVisualization />}
                reverse={false}
              />
            </div>

            {/* Platform Scaling & Modernization */}
            <div id="platform-scaling">
              <EngineeringExperience
                experienceKey="platformScaling"
                technologies={[
                  "Azure",
                  "Kubernetes",
                  "React",
                  "Node.js",
                  "PostgreSQL",
                  "Docker",
                ]}
                visualComponent={<HealthcareScaleVisualization />}
                reverse={true}
              />
            </div>

            {/* Website Showcase - Meta Section */}
            <div id="website-showcase">
              <EngineeringExperience
                experienceKey="websiteShowcase"
                technologies={[
                  "Next.js",
                  "TypeScript",
                  "Mantine UI",
                  "Tailwind CSS",
                  "Responsive Design",
                  "SEO Optimization",
                ]}
                visualComponent={<WebsiteMetaVisualization />}
                reverse={false}
                techColor="violet"
              />
            </div>
          </Stack>

          {/* Bottom CTA */}
          <div
            className="text-center p-12 rounded-xl mt-10"
            style={{ backgroundColor: "var(--mantine-color-body)" }}
          >
            <Title order={2} c="var(--mantine-color-text)" className="mb-4">
              {t("cta.title")}
            </Title>
            <div className="max-w-2xl mx-auto">
              <Text size="lg" c="dimmed" className="mb-8 text-center">
                {t("cta.subtitle")}
              </Text>
            </div>
            <Group justify="center">
              <Button
                component={Link}
                href="/contact"
                size="lg"
                variant="filled"
                color="blue"
                className="text-lg px-8 py-4"
              >
                {t("cta.button")}
              </Button>
            </Group>
          </div>
        </Stack>
      </Container>
    </main>
  );
}

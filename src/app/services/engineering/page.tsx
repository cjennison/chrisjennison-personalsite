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
import Link from "next/link";
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

export default function EngineeringServicesPage() {
  const engineeringSections = [
    {
      id: "internal-tooling",
      label: "Internal Tooling",
      icon: IconCode,
    },
    {
      id: "mobile-mvp",
      label: "Mobile & MVP",
      icon: IconDeviceMobile,
    },
    {
      id: "ai-solutions",
      label: "AI Solutions",
      icon: IconRobot,
    },
    {
      id: "platform-scaling",
      label: "Platform Scaling",
      icon: IconServer,
    },
    {
      id: "website-showcase",
      label: "Website Showcase",
      icon: IconWorld,
    },
  ];

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Main navigation header
      const sectionNavHeight = 80; // Section navigation bar
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
      className="min-h-screen"
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
            Back to Services
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
                ENGINEERING SERVICES
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
                Engineering Services
              </Title>
            </Group>
            <Text size="xl" c="dimmed" className="leading-relaxed">
              We build exactly what your business needs. Here are four types of
              solutions we can create for you, with real examples of how we've
              delivered similar systems for other companies.
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
                title="Custom Internal Business Tooling"
                subtitle="Build exactly the tools your business needs to operate efficiently"
                challenge="Does your business have unique workflows that don't fit standard software solutions? We build custom internal tools that streamline operations, manage data, and integrate with existing systems - exactly how your business works."
                solution="We analyze your processes and design custom software that eliminates manual work and improves efficiency. You get exactly the functionality you need without paying for features you don't use."
                outcome="Your team works more efficiently with tools designed specifically for your workflows. Custom tooling typically saves hours of manual work per week while providing better data insights."
                realExample="We built a custom lightweight CRM for a company who didn't want to pay for Salesforce. We custom tailored the solution to only include what the customer needed and needed to pay for. It ended up costing a few dollars a month to run on their own Azure account."
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
                title="Custom Mobile Applications & MVP Development"
                subtitle="User-focused mobile apps and rapid MVP development for market validation"
                challenge="Need to bring a mobile app idea to market quickly or build a custom application for your user base? We specialize in rapid MVP development and custom mobile applications that prioritize user experience and core functionality."
                solution="We identify core features and build focused mobile applications that deliver real value to users. Our MVP approach gets you to market quickly while maintaining quality, with AI capabilities and custom functionality as needed."
                outcome="You'll have a market-ready mobile application or validated MVP that users actually want to use. Our focus on core functionality means faster time-to-market and better user adoption rates."
                realExample="We built two applications: One was to use AI to quickly assess calorie burn and calorie and micronutrient content of food, and using AI to assess daily health based on user defined health goals. The other was an alcohol moderation tool for reducing consumption using notifications."
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
                title="Conversational AI & Generative AI Solutions"
                subtitle="Custom AI-powered systems that handle conversations and automate interactions"
                challenge="Want to leverage AI to handle customer interactions or automate conversations? We build custom conversational AI solutions that integrate with your business processes, from chatbots and voice systems to intelligent automation that can qualify leads and guide users through complex workflows."
                solution="We design AI-powered conversation systems tailored to your specific use case. Whether you need voice AI, text-based chatbots, or intelligent automation with CRM integration, we create solutions that understand context and provide meaningful interactions."
                outcome="Your business can handle more customer interactions without scaling human resources. AI-powered systems work 24/7, provide consistent responses, and qualify leads before human intervention is needed."
                realExample="We built an automated reach out tool for calling and texting leads for truck driving opportunities at driverfly.co. Truck companies could run campaigns to automatically gauge interest in trucking jobs to ensure recruiters targeted interested and qualified candidates over cold calls."
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
                title="Platform Scaling & Technical Modernization"
                subtitle="Transform existing systems into high-performance, scalable platforms"
                challenge="Is your platform struggling with performance issues, technical debt, or scalability limitations? We transform legacy systems into modern, high-performance platforms that can handle growth and deliver competitive advantages."
                solution="We assess your current platform, identify bottlenecks and technical debt, then systematically modernize your architecture. This includes code refactoring, database optimization, containerization, and migration to auto-scaling cloud infrastructure."
                outcome="Your platform will deliver significantly better performance and reliability while requiring less operational overhead. Modern infrastructure gives you the foundation to grow without technical limitations."
                realExample="We have performed many scaling operations to both resolve tech debt from overseas engineering shortcomings and then running on updated and auto-scaling infrastructure. This was done for one particular enterprise organization looking to compete with other companies with less offerings, but better performance."
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
                title="Do you like this website? Let's make one for you!"
                subtitle="Marketing Front Page"
                challenge="Want to showcase your business with a professional, modern website? We build cutting-edge websites that not only look impressive but also demonstrate the quality of work you can expect from us."
                solution="We create custom websites with modern technology stacks, meaningful animations, responsive design, and features like light/dark mode. Every website is built to reflect your brand while providing an exceptional user experience."
                outcome="You'll have a professional online presence that attracts clients, showcases your capabilities, and serves as a powerful marketing tool. A well-designed website often becomes your best salesperson."
                realExample="This website! Built with cutting-edge technology including Next.js 15, Mantine UI, TypeScript, subtle meaningful animations, and seamless light/dark mode switching. It serves as both our portfolio and a live demonstration of our capabilities."
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
            className="text-center p-12 rounded-xl mt-20"
            style={{ backgroundColor: "var(--mantine-color-body)" }}
          >
            <Title order={2} c="var(--mantine-color-text)" className="mb-4">
              Ready to Build Your Custom Solution?
            </Title>
            <div className="max-w-2xl mx-auto">
              <Text size="lg" c="dimmed" className="mb-8 text-center">
                Every business has unique needs. Let's discuss your specific
                requirements and design a custom engineering solution that
                delivers exactly what you need.
              </Text>
            </div>
            <Group justify="center">
              <Badge
                size="xl"
                variant="filled"
                color="blue"
                className="text-lg px-8 py-4 cursor-pointer hover:opacity-90 transition-opacity"
              >
                Schedule Your Engineering Consultation
              </Badge>
            </Group>
          </div>
        </Stack>
      </Container>
    </main>
  );
}

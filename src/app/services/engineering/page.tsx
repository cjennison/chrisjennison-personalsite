import { Badge, Container, Group, Stack, Text, Title } from "@mantine/core";
import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import {
  CRMVisualization,
  EngineeringExperience,
  HealthcareScaleVisualization,
  MobileTherapistVisualization,
  SalesAgentVisualization,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Engineering Services | Christopher Jennison",
  description:
    "Proven engineering excellence with real customer solutions. Scalable platforms, AI integration, and enterprise-grade systems.",
};

export default function EngineeringServicesPage() {
  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "var(--mantine-color-body)" }}
    >
      <Navigation />
      <Container size="xl" className="py-20">
        <Stack gap="xl">
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto">
            <Group justify="center" mb="md">
              <Badge
                size="lg"
                variant="light"
                color="blue"
                className="text-sm font-medium"
              >
                Engineering Services
              </Badge>
            </Group>
            <Title
              order={1}
              size="3rem"
              c="var(--mantine-color-text)"
              className="mb-6"
            >
              Custom Engineering Solutions
            </Title>
            <Text size="xl" c="dimmed" className="leading-relaxed">
              We build exactly what your business needs. Here are four types of
              solutions we can create for you, with real examples of how we've
              delivered similar systems for other companies.
            </Text>
          </div>

          {/* Customer Experiences */}
          <Stack gap={60} className="mt-20">
            {/* Internal Business Tooling */}
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

            {/* Custom Mobile Applications & MVP Development */}
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

            {/* Conversational AI & Generative AI Solutions */}
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

            {/* Platform Scaling & Modernization */}
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

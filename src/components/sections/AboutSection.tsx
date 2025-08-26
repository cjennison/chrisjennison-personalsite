import {
  Badge,
  Card,
  Container,
  Group,
  Stack,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import {
  IconBrain,
  IconCode,
  IconRocket,
  IconUsers,
} from "@tabler/icons-react";
import Image from "next/image";

const skillCategories = [
  {
    title: "Leadership & Management",
    icon: IconUsers,
    skills: [
      "Engineering Management",
      "Team Scaling",
      "Process Optimization",
      "Strategic Planning",
      "International Teams",
    ],
    color: "blue",
  },
  {
    title: "Frontend & Modern Web",
    icon: IconCode,
    skills: ["React", "TypeScript", "Next.js", "Redux", "RxJS", "Modern SPA"],
    color: "green",
  },
  {
    title: "AI & Enterprise Systems",
    icon: IconBrain,
    skills: [
      "Microsoft Copilot Studio",
      "AI Integration",
      "Enterprise Architecture",
      "Low/No-Code Platforms",
    ],
    color: "purple",
  },
  {
    title: "Business & Strategy",
    icon: IconRocket,
    skills: [
      "Strategic Partnerships",
      "Revenue Growth",
      "CTO Leadership",
      "Process Innovation",
    ],
    color: "orange",
  },
];

export function AboutSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <Container size="lg">
        <Stack gap="xl">
          {/* Section Header */}
          <div className="text-center">
            <Title
              order={2}
              size="2.5rem"
              fw={700}
              className="mb-4 text-gray-900 dark:text-white"
            >
              About Me
            </Title>
            <div className="max-w-3xl mx-auto">
              <Text
                size="xl"
                className="text-gray-600 dark:text-gray-300 text-center"
              >
                Principal Engineering Manager at Microsoft and AI Strategic
                Advisor, specializing in scaling engineering organizations and
                building cutting-edge AI solutions.
              </Text>
            </div>
          </div>

          {/* Career Journey Timeline */}
          <div>
            <Title
              order={3}
              size="1.5rem"
              fw={600}
              className="mb-6 text-center text-gray-900 dark:text-white"
            >
              My Journey
            </Title>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-600 via-blue-600 via-purple-600 via-orange-600 to-red-600 rounded-full"></div>

              {/* Timeline Items */}
              <div className="space-y-6">
                {/* Academic Excellence */}
                <div className="flex items-center group">
                  <div className="flex-1 text-right pr-8">
                    <Card
                      padding="lg"
                      radius="md"
                      className="hover:shadow-lg transition-all duration-300 bg-green-50 dark:bg-green-900/20"
                    >
                      <Group gap="sm" justify="flex-end" className="mb-2">
                        <Title
                          order={5}
                          size="lg"
                          fw={600}
                          className="text-green-700 dark:text-green-400"
                        >
                          Academic Foundation
                        </Title>
                      </Group>
                      <Text
                        size="sm"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        UMass Amherst CompSci Summa Cum Laude → USGS Anadromous Fish Research Data Visualizations
                      </Text>
                    </Card>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-green-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  <div className="flex-1 pl-8"></div>
                </div>

                {/* Digital Marketing Innovation */}
                <div className="flex items-center group">
                  <div className="flex-1 pr-8"></div>
                  <div className="relative z-10 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  <div className="flex-1 text-left pl-8">
                    <Card
                      padding="lg"
                      radius="md"
                      className="hover:shadow-lg transition-all duration-300 bg-blue-50 dark:bg-blue-900/20"
                    >
                      <Group gap="sm" className="mb-2">
                        <Title
                          order={5}
                          size="lg"
                          fw={600}
                          className="text-blue-700 dark:text-blue-400"
                        >
                          Digital Marketing Innovation
                        </Title>
                      </Group>
                      <Text
                        size="sm"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Promoboxx - Boston, building enterprise digital marketing platforms for retailers
                      </Text>
                    </Card>
                  </div>
                </div>

                {/* Startup CTO Success */}
                <div className="flex items-center group">
                  <div className="flex-1 text-right pr-8">
                    <Card
                      padding="lg"
                      radius="md"
                      className="hover:shadow-lg transition-all duration-300 bg-purple-50 dark:bg-purple-900/20"
                    >
                      <Group gap="sm" justify="flex-end" className="mb-2">
                        <Title
                          order={5}
                          size="lg"
                          fw={600}
                          className="text-purple-700 dark:text-purple-400"
                        >
                          Startup CTO Success
                        </Title>
                      </Group>
                      <Text
                        size="sm"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Komodal CTO - Port of LA logistics innovation → Successful acquisition in 2022
                      </Text>
                    </Card>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  <div className="flex-1 pl-8"></div>
                </div>

                {/* AI Platform Pioneer */}
                <div className="flex items-center group">
                  <div className="flex-1 pr-8"></div>
                  <div className="relative z-10 w-4 h-4 bg-orange-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  <div className="flex-1 text-left pl-8">
                    <Card
                      padding="lg"
                      radius="md"
                      className="hover:shadow-lg transition-all duration-300 bg-orange-50 dark:bg-orange-900/20"
                    >
                      <Group gap="sm" className="mb-2">
                        <Title
                          order={5}
                          size="lg"
                          fw={600}
                          className="text-orange-700 dark:text-orange-400"
                        >
                          AI Platform Pioneer
                        </Title>
                      </Group>
                      <Text
                        size="sm"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Nuance - Built Mix.dialog conversational AI platform, pioneering voice AI technology
                      </Text>
                    </Card>
                  </div>
                </div>

                {/* Strategic Advisory */}
                <div className="flex items-center group">
                  <div className="flex-1 text-right pr-8">
                    <Card
                      padding="lg"
                      radius="md"
                      className="hover:shadow-lg transition-all duration-300 bg-red-50 dark:bg-red-900/20"
                    >
                      <Group gap="sm" justify="flex-end" className="mb-2">
                        <Title
                          order={5}
                          size="lg"
                          fw={600}
                          className="text-red-700 dark:text-red-400"
                        >
                          Strategic Advisory
                        </Title>
                      </Group>
                      <Text
                        size="sm"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Code Upscale - Strategic Advisor & Consultant, achieving $1M+ in contract revenue
                      </Text>
                    </Card>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-red-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  <div className="flex-1 pl-8"></div>
                </div>

                {/* Enterprise AI Leadership */}
                <div className="flex items-center group">
                  <div className="flex-1 pr-8"></div>
                  <div className="relative z-10 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg animate-pulse"></div>
                  <div className="flex-1 text-left pl-8">
                    <Card
                      padding="lg"
                      radius="md"
                      className="hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-800"
                    >
                      <Group gap="sm" className="mb-2">
                        <Title
                          order={5}
                          size="lg"
                          fw={600}
                          className="text-blue-700 dark:text-blue-400"
                        >
                          Enterprise AI Leadership (Current)
                        </Title>
                      </Group>
                      <Text
                        size="sm"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Microsoft - Copilot Studio innovator and AI engineering advisor, scaling teams 200→500+
                      </Text>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Logos with Role Information */}
          <div>
            <Title
              order={3}
              size="1.5rem"
              fw={600}
              className="mb-6 text-center text-gray-900 dark:text-white"
            >
              Professional Experience
            </Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Microsoft */}
              <Card
                shadow="sm"
                padding="lg"
                radius="md"
                className="text-center h-full hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="mb-3 flex justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                  <Image
                    src="/images/microsoft-logo.png"
                    alt="Microsoft"
                    width={128}
                    height={32}
                    className="h-8 object-contain"
                  />
                </div>
                <Title
                  order={5}
                  size="sm"
                  fw={600}
                  className="mb-1 text-gray-900 dark:text-white"
                >
                  Copilot Studio
                </Title>
                <Text size="xs" className="text-gray-500 dark:text-gray-400">
                  Principal Engineer and Manager
                </Text>
              </Card>

              {/* Nuance Communications */}
              <Card
                shadow="sm"
                padding="lg"
                radius="md"
                className="text-center h-full hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="mb-3 flex justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                  <Image
                    src="/images/nuance-logo.png"
                    alt="Nuance Communications"
                    width={160}
                    height={69}
                    className="h-10 object-contain"
                  />
                </div>
                <Title
                  order={5}
                  size="sm"
                  fw={600}
                  className="mb-1 text-gray-900 dark:text-white"
                >
                  Mix Dialog Lead Engineer
                </Title>
                <Text size="xs" className="text-gray-500 dark:text-gray-400">
                  Voice AI Platform
                </Text>
              </Card>

              {/* USGS */}
              <Card
                shadow="sm"
                padding="lg"
                radius="md"
                className="text-center h-full hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="mb-3 flex justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                  <Image
                    src="/images/usgs-logo.png"
                    alt="USGS"
                    width={128}
                    height={32}
                    className="h-8 object-contain"
                  />
                </div>
                <Title
                  order={5}
                  size="sm"
                  fw={600}
                  className="mb-1 text-gray-900 dark:text-white"
                >
                  Data Visualization Engineering
                </Title>
                <Text size="xs" className="text-gray-500 dark:text-gray-400">
                  Government Services
                </Text>
              </Card>

              {/* Code Upscale */}
              <Card
                shadow="sm"
                padding="lg"
                radius="md"
                className="text-center h-full hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="mb-3 flex justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                  <Image
                    src="/images/codeupscale-logo.svg"
                    alt="Code Upscale"
                    width={128}
                    height={32}
                    className="h-8 object-contain brightness-0 dark:brightness-100"
                  />
                </div>
                <Title
                  order={5}
                  size="sm"
                  fw={600}
                  className="mb-1 text-gray-900 dark:text-white"
                >
                  International Technical Sales & Contracting
                </Title>
                <Text size="xs" className="text-gray-500 dark:text-gray-400">
                  CTO & Strategic Advisor
                </Text>
              </Card>

              {/* Promoboxx */}
              <Card
                shadow="sm"
                padding="lg"
                radius="md"
                className="text-center h-full hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="mb-3 flex justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                  <Image
                    src="/images/promoboxx-logo.svg"
                    alt="Promoboxx"
                    width={128}
                    height={32}
                    className="h-8 object-contain"
                  />
                </div>
                <Title
                  order={5}
                  size="sm"
                  fw={600}
                  className="mb-1 text-gray-900 dark:text-white"
                >
                  Digital Marketing Software Engineering
                </Title>
                <Text size="xs" className="text-gray-500 dark:text-gray-400">
                  Enterprise and Retailer Platform
                </Text>
              </Card>

              {/* Komodal */}
              <Card
                shadow="sm"
                padding="lg"
                radius="md"
                className="text-center h-full hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="mb-3 flex justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                  <Image
                    src="/images/komodal-logo.png"
                    alt="Komodal"
                    width={190}
                    height={64}
                    className="h-8 object-contain"
                  />
                </div>
                <Title
                  order={5}
                  size="sm"
                  fw={600}
                  className="mb-1 text-gray-900 dark:text-white"
                >
                  Port of LA, Drayage Logistics Engineering
                </Title>
                <Text size="xs" className="text-gray-500 dark:text-gray-400">
                  CTO, Acquired in 2022
                </Text>
              </Card>
            </div>
          </div>

          {/* Skills Showcase */}
          <div>
            <Title
              order={3}
              size="1.5rem"
              fw={600}
              className="mb-6 text-center text-gray-900 dark:text-white"
            >
              Core Expertise
            </Title>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category) => (
                <Card
                  key={category.title}
                  shadow="sm"
                  padding="lg"
                  radius="md"
                  className="h-full hover:shadow-lg transition-shadow duration-200"
                >
                  <Group gap="sm" className="mb-4">
                    <category.icon
                      size={24}
                      className={`text-${category.color}-600`}
                    />
                    <Title
                      order={4}
                      size="1.125rem"
                      fw={600}
                      className="text-gray-900 dark:text-white"
                    >
                      {category.title}
                    </Title>
                  </Group>
                  <Group gap="xs">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="light"
                        color={category.color}
                        size="sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </Group>
                </Card>
              ))}
            </div>
          </div>

          {/* Professional Timeline/Highlights */}
          <div>
            <Title
              order={3}
              size="1.5rem"
              fw={600}
              className="mb-6 text-center text-gray-900 dark:text-white"
            >
              Career Highlights
            </Title>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card
                shadow="sm"
                padding="lg"
                radius="md"
                className="text-center h-full"
              >
                <Title
                  order={4}
                  size="1.125rem"
                  fw={600}
                  className="mb-2 text-gray-900 dark:text-white"
                >
                  Microsoft Leadership
                </Title>
                <Text size="sm" className="text-gray-600 dark:text-gray-400">
                  Leading engineering teams in Microsoft Copilot Studio, scaling
                  organizations from 200 to 500+ engineers with data-driven
                  processes and systems optimization.
                </Text>
              </Card>
              <Card
                shadow="sm"
                padding="lg"
                radius="md"
                className="text-center h-full"
              >
                <Title
                  order={4}
                  size="1.125rem"
                  fw={600}
                  className="mb-2 text-gray-900 dark:text-white"
                >
                  Business Impact
                </Title>
                <Text size="sm" className="text-gray-600 dark:text-gray-400">
                  Achieved $1M in sales revenue through strategic partnerships
                  with 38 businesses as CTO at Code Upscale, specializing in AI
                  integration and enterprise architecture.
                </Text>
              </Card>
              <Card
                shadow="sm"
                padding="lg"
                radius="md"
                className="text-center h-full"
              >
                <Title
                  order={4}
                  size="1.125rem"
                  fw={600}
                  className="mb-2 text-gray-900 dark:text-white"
                >
                  Technical Excellence
                </Title>
                <Text size="sm" className="text-gray-600 dark:text-gray-400">
                  Built innovative solutions from shipping container tracking
                  systems to voice AI platforms, with expertise spanning React,
                  TypeScript, and modern enterprise architectures.
                </Text>
              </Card>
            </div>
          </div>
        </Stack>
      </Container>
    </section>
  );
}

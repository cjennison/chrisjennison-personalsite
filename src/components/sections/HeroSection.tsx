"use client";

import { Button, Container, Group, Stack, Text, Title } from "@mantine/core";
import { IconArrowRight, IconMail } from "@tabler/icons-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20">
      <Container size="lg" className="text-center">
        <Stack gap="xl">
          {/* Professional Headshot Placeholder */}
          <div className="mx-auto w-32 h-32 rounded-full bg-blue-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
            CJ
          </div>

          {/* Main Title and Value Proposition */}
          <div>
            <Title
              order={1}
              size="3.5rem"
              fw={700}
              className="mb-4 text-gray-900 dark:text-white"
              style={{ lineHeight: 1.1 }}
            >
              Christopher Jennison
            </Title>
            <Title
              order={2}
              size="1.75rem"
              fw={400}
              className="mb-6 text-blue-600 dark:text-blue-400"
            >
              Professional Startup and Enterprise Engineer
            </Title>
          </div>

          {/* Value Proposition */}
          <div className="max-w-3xl mx-auto">
            <Text
              size="xl"
              className="text-gray-600 dark:text-gray-300 leading-relaxed text-center"
            >
              Building scalable, enterprise-grade applications with cutting-edge
              AI-enhanced development practices. Specializing in React, Next.js,
              and modern TypeScript architectures that drive business results.
            </Text>
          </div>

          {/* Key Stats/Highlights */}
          <Group justify="center" gap="xl" className="mt-8">
            <div className="text-center">
              <Text
                size="2xl"
                fw={700}
                className="text-blue-600 dark:text-blue-400"
              >
                10+
              </Text>
              <Text size="sm" className="text-gray-600 dark:text-gray-400">
                Years Experience
              </Text>
            </div>
            <div className="text-center">
              <Text
                size="2xl"
                fw={700}
                className="text-blue-600 dark:text-blue-400"
              >
                50+
              </Text>
              <Text size="sm" className="text-gray-600 dark:text-gray-400">
                Projects Delivered
              </Text>
            </div>
            <div className="text-center">
              <Text
                size="2xl"
                fw={700}
                className="text-blue-600 dark:text-blue-400"
              >
                100%
              </Text>
              <Text size="sm" className="text-gray-600 dark:text-gray-400">
                Client Satisfaction
              </Text>
            </div>
          </Group>

          {/* Call-to-Action Buttons */}
          <Group justify="center" gap="lg" className="mt-8">
            <Button
              size="lg"
              rightSection={<IconArrowRight size={20} />}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start a Project
            </Button>
            <Button
              variant="outline"
              size="lg"
              leftSection={<IconMail size={20} />}
              className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Get in Touch
            </Button>
          </Group>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </Stack>
      </Container>
    </section>
  );
}

"use client";

import {
  Alert,
  Button,
  Card,
  Container,
  Group,
  Loader,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import {
  IconAlertCircle,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBuilding,
  IconCalendar,
  IconCheck,
  IconMail,
  IconMessage,
  IconUser,
} from "@tabler/icons-react";
import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { trackContactForm, trackEvent } from "@/lib/analytics";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

const projectTypes = [
  { value: "engineering", label: "Engineering Services" },
  { value: "ai-coding", label: "AI Coding Consultancy" },
  { value: "mvp", label: "MVP Development" },
  { value: "architecture", label: "Architecture Review" },
  { value: "consultation", label: "Strategic Consultation" },
  { value: "other", label: "Other" },
];

const budgetRanges = [
  { value: "10k-25k", label: "$10K - $25K" },
  { value: "25k-50k", label: "$25K - $50K" },
  { value: "50k-100k", label: "$50K - $100K" },
  { value: "100k+", label: "$100K+" },
  { value: "not-sure", label: "Not Sure Yet" },
];

const timelineOptions = [
  { value: "asap", label: "ASAP" },
  { value: "1-2-months", label: "1-2 Months" },
  { value: "3-6-months", label: "3-6 Months" },
  { value: "6-12-months", label: "6-12 Months" },
  { value: "planning", label: "Just Planning" },
];

const CONTACT_TIME_HOURS = 48;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const form = useForm<ContactFormData>({
    initialValues: {
      name: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      timeline: "",
      message: "",
    },
    validate: {
      name: (value) =>
        value.trim().length < 2 ? "Name must be at least 2 characters" : null,
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email address",
      message: (value) =>
        value.trim().length < 10
          ? "Please provide more details about your project"
          : null,
    },
  });

  const handleSubmit = async (values: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // TODO: Replace with your preferred email service (Resend, EmailJS, etc.)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSubmitStatus("success");

        // Track successful contact form submission
        trackContactForm("contact_page");
        trackEvent("contact_success", "engagement", values.projectType);

        form.reset();
        notifications.show({
          title: "Message sent!",
          message: `Thank you for reaching out. I'll get back to you within ${CONTACT_TIME_HOURS} hours.`,
          color: "green",
          icon: <IconCheck size={16} />,
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitStatus("error");

      // Track form submission errors
      trackEvent("contact_error", "engagement", "form_submission_failed");

      notifications.show({
        title: "Failed to send message",
        message: "Please try again or reach out directly via email.",
        color: "red",
        icon: <IconAlertCircle size={16} />,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main
      className="min-h-screen pt-[60px]"
      style={{ backgroundColor: "var(--mantine-color-body)" }}
    >
      <Navigation />
      <Container size="lg" className="py-20">
        <Stack gap="xl">
          {/* Page Header */}
          <div className="text-center">
            <Title
              order={1}
              size="3rem"
              fw={700}
              className="mb-4"
              c="var(--mantine-color-text)"
            >
              Let's Build Something Great
            </Title>
            <div className="max-w-3xl mx-auto">
              <Text
                size="xl"
                c="dimmed"
                className="leading-relaxed text-center"
              >
                Ready to accelerate your development with AI-powered workflows
                and enterprise-grade engineering? Let's discuss your project and
                how we can achieve your goals together.
              </Text>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card shadow="sm" padding="xl" radius="lg" className="h-fit">
                <Stack gap="lg">
                  <div>
                    <Title order={2} size="1.5rem" mb="sm">
                      Project Details
                    </Title>
                    <Text size="sm" c="dimmed">
                      Tell me about your project and I'll get back to you within{" "}
                      {CONTACT_TIME_HOURS} hours.
                    </Text>
                  </div>

                  <form onSubmit={form.onSubmit(handleSubmit)}>
                    <Stack gap="md">
                      {/* Personal Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                        <TextInput
                          label="Full Name"
                          placeholder="John Doe"
                          leftSection={<IconUser size={16} />}
                          required
                          {...form.getInputProps("name")}
                        />
                        <TextInput
                          label="Email Address"
                          placeholder="john@company.com"
                          leftSection={<IconMail size={16} />}
                          required
                          {...form.getInputProps("email")}
                        />
                      </div>

                      <TextInput
                        label="Company/Organization"
                        placeholder="Acme Inc."
                        leftSection={<IconBuilding size={16} />}
                        {...form.getInputProps("company")}
                      />

                      {/* Project Information */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
                        <Select
                          label="Project Type"
                          placeholder="Select service"
                          data={projectTypes}
                          {...form.getInputProps("projectType")}
                        />
                        <Select
                          label="Budget Range"
                          placeholder="Select budget"
                          data={budgetRanges}
                          {...form.getInputProps("budget")}
                        />
                        <Select
                          label="Timeline"
                          placeholder="Select timeline"
                          leftSection={<IconCalendar size={16} />}
                          data={timelineOptions}
                          {...form.getInputProps("timeline")}
                        />
                      </div>

                      <Textarea
                        label="Project Description"
                        placeholder="Tell me about your project, challenges you're facing, and what you'd like to achieve..."
                        leftSection={<IconMessage size={16} />}
                        minRows={4}
                        required
                        {...form.getInputProps("message")}
                      />

                      {/* Submit Button */}
                      <Group justify="flex-end">
                        <Button
                          type="submit"
                          size="lg"
                          loading={isSubmitting}
                          leftSection={
                            isSubmitting ? (
                              <Loader size={16} />
                            ) : (
                              <IconMail size={16} />
                            )
                          }
                          className="px-8"
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </Group>
                    </Stack>
                  </form>

                  {/* Status Alerts */}
                  {submitStatus === "success" && (
                    <Alert
                      icon={<IconCheck size={16} />}
                      title="Message sent successfully!"
                      color="green"
                      variant="light"
                    >
                      Thank you for reaching out. I'll review your project
                      details and get back to you within {CONTACT_TIME_HOURS}{" "}
                      hours.
                    </Alert>
                  )}

                  {submitStatus === "error" && (
                    <Alert
                      icon={<IconAlertCircle size={16} />}
                      title="Failed to send message"
                      color="red"
                      variant="light"
                    >
                      There was an issue sending your message. Please try again
                      or contact me directly at the email below.
                    </Alert>
                  )}
                </Stack>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Direct Contact */}
              <Card shadow="sm" padding="lg" radius="lg">
                <Stack gap="md">
                  <Title order={3} size="1.25rem">
                    Get In Touch
                  </Title>
                  <div>
                    <Text size="sm" c="dimmed" mb={4}>
                      Email
                    </Text>
                    <Text fw={500}>cjennison92@gmail.com</Text>
                  </div>
                  <div>
                    <Text size="sm" c="dimmed" mb={4}>
                      Response Time
                    </Text>
                    <Text fw={500}>Within {CONTACT_TIME_HOURS} hours</Text>
                  </div>
                  <div>
                    <Text size="sm" c="dimmed" mb={4}>
                      Location
                    </Text>
                    <Text fw={500}>Manchester, NH (EST)</Text>
                  </div>
                </Stack>
              </Card>

              {/* Social Links */}
              <Card shadow="sm" padding="lg" radius="lg">
                <Stack gap="md">
                  <Title order={3} size="1.25rem">
                    Connect
                  </Title>
                  <Button
                    variant="subtle"
                    leftSection={<IconBrandLinkedin size={16} />}
                    component="a"
                    href="https://www.linkedin.com/in/christopher-jennison-27223825/"
                    target="_blank"
                    fullWidth
                    justify="flex-start"
                  >
                    LinkedIn
                  </Button>
                  <Button
                    variant="subtle"
                    leftSection={<IconBrandGithub size={16} />}
                    component="a"
                    href="https://github.com/cjennison"
                    target="_blank"
                    fullWidth
                    justify="flex-start"
                  >
                    GitHub
                  </Button>
                </Stack>
              </Card>

              {/* What to Expect */}
              <Card shadow="sm" padding="lg" radius="lg">
                <Stack gap="md">
                  <Title order={3} size="1.25rem">
                    What to Expect
                  </Title>
                  <div>
                    <Text size="sm" fw={500} mb={2}>
                      1. Initial Response
                    </Text>
                    <Text size="sm" c="dimmed">
                      I'll review your project and respond within{" "}
                      {CONTACT_TIME_HOURS} hours.
                    </Text>
                  </div>
                  <div>
                    <Text size="sm" fw={500} mb={2}>
                      2. Discovery Call
                    </Text>
                    <Text size="sm" c="dimmed">
                      We'll schedule a 30-minute call to discuss your needs.
                    </Text>
                  </div>
                  <div>
                    <Text size="sm" fw={500} mb={2}>
                      3. Proposal
                    </Text>
                    <Text size="sm" c="dimmed">
                      You'll receive a detailed proposal with timeline and
                      pricing.
                    </Text>
                  </div>
                </Stack>
              </Card>
            </div>
          </div>
        </Stack>
      </Container>
    </main>
  );
}

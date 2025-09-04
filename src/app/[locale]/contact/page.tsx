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
import { useLocale, useTranslations } from "next-intl";
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

const CONTACT_TIME_HOURS = 48;

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  const locale = useLocale();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Create options arrays using translations
  const projectTypes = [
    {
      value: "engineering",
      label: t("form.fields.projectType.options.engineering"),
    },
    {
      value: "ai-coding",
      label: t("form.fields.projectType.options.ai-coding"),
    },
    { value: "mvp", label: t("form.fields.projectType.options.mvp") },
    {
      value: "architecture",
      label: t("form.fields.projectType.options.architecture"),
    },
    {
      value: "consultation",
      label: t("form.fields.projectType.options.consultation"),
    },
    { value: "other", label: t("form.fields.projectType.options.other") },
  ];

  const budgetRanges = [
    { value: "10k-25k", label: t("form.fields.budget.options.10k-25k") },
    { value: "25k-50k", label: t("form.fields.budget.options.25k-50k") },
    { value: "50k-100k", label: t("form.fields.budget.options.50k-100k") },
    { value: "100k+", label: t("form.fields.budget.options.100k+") },
    { value: "not-sure", label: t("form.fields.budget.options.not-sure") },
  ];

  const timelineOptions = [
    { value: "asap", label: t("form.fields.timeline.options.asap") },
    {
      value: "1-2-months",
      label: t("form.fields.timeline.options.1-2-months"),
    },
    {
      value: "3-6-months",
      label: t("form.fields.timeline.options.3-6-months"),
    },
    {
      value: "6-12-months",
      label: t("form.fields.timeline.options.6-12-months"),
    },
    { value: "planning", label: t("form.fields.timeline.options.planning") },
  ];

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
        value.trim().length < 2 ? t("form.fields.name.required") : null,
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : t("form.fields.email.required"),
      message: (value) =>
        value.trim().length < 10 ? t("form.fields.message.required") : null,
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
              {t("header.title")}
            </Title>
            <div className="max-w-3xl mx-auto">
              <Text
                size="xl"
                c="dimmed"
                className="leading-relaxed text-center"
              >
                {t("header.subtitle")}
              </Text>
            </div>
          </div>

          {/* Language Warning Banners */}
          {locale === "fr" && (
            <Alert
              color="yellow"
              variant="light"
              title={`🇫🇷 ${t("languageWarning.title")}`}
              className="max-w-4xl mx-auto"
            >
              {t("languageWarning.french")}
            </Alert>
          )}

          {locale === "de" && (
            <Alert
              color="blue"
              variant="light"
              title={`🇩🇪 ${t("languageWarning.title")}`}
              className="max-w-4xl mx-auto"
            >
              {t("languageWarning.german")}
            </Alert>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card shadow="sm" padding="xl" radius="lg" className="h-fit">
                <Stack gap="lg">
                  <div>
                    <Title order={2} size="1.5rem" mb="sm">
                      {t("form.title")}
                    </Title>
                    <Text size="sm" c="dimmed">
                      {t("form.subtitle", { hours: CONTACT_TIME_HOURS })}
                    </Text>
                  </div>

                  <form onSubmit={form.onSubmit(handleSubmit)}>
                    <Stack gap="md">
                      {/* Personal Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                        <TextInput
                          label={t("form.fields.name.label")}
                          placeholder={t("form.fields.name.placeholder")}
                          leftSection={<IconUser size={16} />}
                          required
                          {...form.getInputProps("name")}
                        />
                        <TextInput
                          label={t("form.fields.email.label")}
                          placeholder={t("form.fields.email.placeholder")}
                          leftSection={<IconMail size={16} />}
                          required
                          {...form.getInputProps("email")}
                        />
                      </div>

                      <TextInput
                        label={t("form.fields.company.label")}
                        placeholder={t("form.fields.company.placeholder")}
                        leftSection={<IconBuilding size={16} />}
                        {...form.getInputProps("company")}
                      />

                      {/* Project Information */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
                        <Select
                          label={t("form.fields.projectType.label")}
                          placeholder={t("form.fields.projectType.placeholder")}
                          data={projectTypes}
                          {...form.getInputProps("projectType")}
                        />
                        <Select
                          label={t("form.fields.budget.label")}
                          placeholder={t("form.fields.budget.placeholder")}
                          data={budgetRanges}
                          {...form.getInputProps("budget")}
                        />
                        <Select
                          label={t("form.fields.timeline.label")}
                          placeholder={t("form.fields.timeline.placeholder")}
                          leftSection={<IconCalendar size={16} />}
                          data={timelineOptions}
                          {...form.getInputProps("timeline")}
                        />
                      </div>

                      <Textarea
                        label={t("form.fields.message.label")}
                        placeholder={t("form.fields.message.placeholder")}
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
                          {isSubmitting
                            ? t("form.submit.sending")
                            : t("form.submit.button")}
                        </Button>
                      </Group>
                    </Stack>
                  </form>

                  {/* Status Alerts */}
                  {submitStatus === "success" && (
                    <Alert
                      icon={<IconCheck size={16} />}
                      title={t("form.submit.success.title")}
                      color="green"
                      variant="light"
                    >
                      {t("form.submit.success.message", {
                        hours: CONTACT_TIME_HOURS,
                      })}
                    </Alert>
                  )}

                  {submitStatus === "error" && (
                    <Alert
                      icon={<IconAlertCircle size={16} />}
                      title={t("form.submit.error.title")}
                      color="red"
                      variant="light"
                    >
                      {t("form.submit.error.message")}
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
                    {t("contact.title")}
                  </Title>
                  <div>
                    <Text size="sm" c="dimmed" mb={4}>
                      {t("contact.email")}
                    </Text>
                    <Text fw={500}>cjennison92@gmail.com</Text>
                  </div>
                  <div>
                    <Text size="sm" c="dimmed" mb={4}>
                      {t("contact.responseTime")}
                    </Text>
                    <Text fw={500}>
                      {t("contact.responseTimeValue", {
                        hours: CONTACT_TIME_HOURS,
                      })}
                    </Text>
                  </div>
                  <div>
                    <Text size="sm" c="dimmed" mb={4}>
                      {t("contact.location")}
                    </Text>
                    <Text fw={500}>{t("contact.locationValue")}</Text>
                  </div>
                </Stack>
              </Card>

              {/* Social Links */}
              <Card shadow="sm" padding="lg" radius="lg">
                <Stack gap="md">
                  <Title order={3} size="1.25rem">
                    {t("connect.title")}
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
                    {t("connect.linkedin")}
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
                    {t("connect.github")}
                  </Button>
                </Stack>
              </Card>

              {/* What to Expect */}
              <Card shadow="sm" padding="lg" radius="lg">
                <Stack gap="md">
                  <Title order={3} size="1.25rem">
                    {t("process.title")}
                  </Title>
                  <div>
                    <Text size="sm" fw={500} mb={2}>
                      {t("process.steps.response.title")}
                    </Text>
                    <Text size="sm" c="dimmed">
                      {t("process.steps.response.description", {
                        hours: CONTACT_TIME_HOURS,
                      })}
                    </Text>
                  </div>
                  <div>
                    <Text size="sm" fw={500} mb={2}>
                      {t("process.steps.call.title")}
                    </Text>
                    <Text size="sm" c="dimmed">
                      {t("process.steps.call.description")}
                    </Text>
                  </div>
                  <div>
                    <Text size="sm" fw={500} mb={2}>
                      {t("process.steps.proposal.title")}
                    </Text>
                    <Text size="sm" c="dimmed">
                      {t("process.steps.proposal.description")}
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

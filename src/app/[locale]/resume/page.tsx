import { Anchor, Text, Title } from "@mantine/core";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { DownloadResumeButton } from "@/components/profile/DownloadResumeButton";
import { EducationList } from "@/components/profile/EducationList";
import { ExperienceList } from "@/components/profile/ExperienceList";
import { ImpactList } from "@/components/profile/ImpactList";
import { SectionHeading } from "@/components/profile/SectionHeading";
import { SkillsList } from "@/components/profile/SkillsList";
import { StructuredData } from "@/components/seo/StructuredData";
import { generatePageMetadata } from "@/lib/metadata";
import { PROFILE, RESUME_PDF_FILES } from "@/lib/profile";
import { getSkillKeywords } from "@/lib/profile-messages";
import { SEO_CONFIG } from "@/lib/seo-config";
import { generateProfileStructuredData } from "@/lib/structured-data";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Site.meta" });

  return generatePageMetadata({
    locale,
    path: "/resume",
    title: t("resumeTitle"),
    description: t("resumeDescription"),
  });
}

export default async function ResumePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Profile");
  const tSite = await getTranslations("Site");
  const tResume = await getTranslations("ResumePage");
  const linkedinDisplay = PROFILE.linkedin.replace(/^https:\/\/(www\.)?/, "");
  const siteDisplay = SEO_CONFIG.siteUrl.replace(/^https:\/\/(www\.)?/, "");

  const structuredData = generateProfileStructuredData({
    locale,
    path: "/resume",
    description: t("summary"),
    knowsAbout: await getSkillKeywords(locale),
  });

  return (
    <>
      <StructuredData data={structuredData} />
      <SiteHeader current="resume" />
      <main id="main-content" className="resume mx-auto max-w-3xl px-6 pb-24">
        <header className="pt-6 sm:pt-10 print:pt-0">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <Title order={1} fz={{ base: "2rem", sm: "2.5rem" }} fw={700}>
                {t("name")}
              </Title>
              <Text fz="lg" fw={500} mt={6}>
                {t("headline")}
              </Text>
              <Text c="dimmed">{t("location")}</Text>
            </div>
            <DownloadResumeButton
              href={RESUME_PDF_FILES[locale] ?? RESUME_PDF_FILES.en ?? ""}
              label={tSite("actions.downloadPdf")}
            />
          </div>
          <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-1">
            <div className="flex items-baseline gap-2">
              <dt>
                <Text size="sm" fw={600}>
                  {tResume("linkedinLabel")}
                </Text>
              </dt>
              <dd>
                <Anchor
                  href={PROFILE.linkedin}
                  size="sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {linkedinDisplay}
                </Anchor>
              </dd>
            </div>
            <div className="flex items-baseline gap-2">
              <dt>
                <Text size="sm" fw={600}>
                  {tResume("websiteLabel")}
                </Text>
              </dt>
              <dd>
                <Anchor href={SEO_CONFIG.siteUrl} size="sm">
                  {siteDisplay}
                </Anchor>
              </dd>
            </div>
          </dl>
          {locale !== "en" && (
            <Text size="sm" c="dimmed" mt="md" className="print:hidden">
              {tSite(`languageNotice.${locale}`)}
            </Text>
          )}
        </header>

        <div className="mt-14 space-y-14 print:mt-8 print:space-y-8">
          <section aria-labelledby="summary-heading">
            <SectionHeading id="summary-heading">
              {tSite("sections.summary")}
            </SectionHeading>
            <Text lh={1.7}>{t("summary")}</Text>
            <Text size="sm" mt="sm">
              <Text span size="sm" fw={600}>
                {t("strongestFit.label")}
              </Text>
              {" · "}
              {t("strongestFit.roles")}
            </Text>
          </section>
          <ImpactList variant="compact" />
          <ExperienceList variant="detailed" />
          <SkillsList />
          <EducationList />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

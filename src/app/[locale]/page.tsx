import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AtAGlance } from "@/components/profile/AtAGlance";
import { EducationList } from "@/components/profile/EducationList";
import { ExperienceList } from "@/components/profile/ExperienceList";
import { ImpactList } from "@/components/profile/ImpactList";
import { ProfileIntro } from "@/components/profile/ProfileIntro";
import { SkillsList } from "@/components/profile/SkillsList";
import { StructuredData } from "@/components/seo/StructuredData";
import { generatePageMetadata } from "@/lib/metadata";
import { getSkillKeywords } from "@/lib/profile-messages";
import { generateProfileStructuredData } from "@/lib/structured-data";

type Props = {
  params: Promise<{ locale: string }>;
};

// Re-render daily so the age in the personal note stays current
export const revalidate = 86400;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Site.meta" });

  return generatePageMetadata({
    locale,
    path: "",
    title: t("homeTitle"),
    description: t("homeDescription"),
    absoluteTitle: true,
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Profile");
  const structuredData = generateProfileStructuredData({
    locale,
    path: "",
    description: t("summary"),
    knowsAbout: await getSkillKeywords(locale),
  });

  return (
    <>
      <StructuredData data={structuredData} />
      <SiteHeader current="home" />
      <main id="main-content" className="mx-auto max-w-3xl px-6 pb-24">
        <ProfileIntro locale={locale} />
        <div className="mt-20 space-y-20">
          <AtAGlance />
          <ImpactList variant="full" />
          <ExperienceList variant="summary" resumeHref={`/${locale}/resume`} />
          <SkillsList />
          <EducationList />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

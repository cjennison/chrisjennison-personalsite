import { getTranslations } from "next-intl/server";
import { Navigation } from "@/components/layout/Navigation";
import { AboutSection } from "@/components/sections/AboutSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StructuredData } from "@/components/seo/StructuredData";
import { generatePersonStructuredData } from "@/lib/structured-data";

export default async function Home() {
  const personStructuredData = generatePersonStructuredData();
  const t = await getTranslations("Page");

  return (
    <>
      <StructuredData
        data={personStructuredData as unknown as Record<string, unknown>}
      />
      <main className="pt-[60px]">
        <Navigation />
        <section id="home" aria-label={t("ariaLabels.introduction")}>
          <HeroSection />
        </section>
        <section id="about" aria-label={t("ariaLabels.aboutChristopher")}>
          <AboutSection />
        </section>
        <section
          id="services"
          aria-label={t("ariaLabels.professionalServices")}
        >
          <ServicesSection />
        </section>
      </main>
    </>
  );
}

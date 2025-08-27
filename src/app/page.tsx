import { Navigation } from "@/components/layout/Navigation";
import { AboutSection } from "@/components/sections/AboutSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StructuredData } from "@/components/seo/StructuredData";
import { generatePersonStructuredData } from "@/lib/structured-data";

export default function Home() {
  const personStructuredData = generatePersonStructuredData();

  return (
    <>
      <StructuredData
        data={personStructuredData as unknown as Record<string, unknown>}
      />
      <main>
        <Navigation />
        <section id="home" aria-label="Introduction">
          <HeroSection />
        </section>
        <section id="about" aria-label="About Christopher Jennison">
          <AboutSection />
        </section>
        <section id="services" aria-label="Professional Services">
          <ServicesSection />
        </section>
      </main>
    </>
  );
}

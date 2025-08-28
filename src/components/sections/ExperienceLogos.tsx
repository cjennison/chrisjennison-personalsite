"use client";

import { Card, Text, Title, useMantineColorScheme } from "@mantine/core";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface ExperienceItem {
  id: string;
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
  };
  title: string;
  subtitle: string;
}

interface ExperienceLogosProps {
  title?: string;
  experiences?: ExperienceItem[];
}

export function ExperienceLogos({ title, experiences }: ExperienceLogosProps) {
  const { colorScheme } = useMantineColorScheme();
  const t = useTranslations("About.experienceLogos");

  const defaultExperiences: ExperienceItem[] = [
    {
      id: "microsoft",
      logo: {
        src: "/images/microsoft-logo.png",
        alt: "Microsoft",
        width: 128,
        height: 32,
        className: "h-8 object-contain",
      },
      title: t("experiences.0.title"),
      subtitle: t("experiences.0.subtitle"),
    },
    {
      id: "nuance",
      logo: {
        src: "/images/nuance-logo.png",
        alt: "Nuance Communications",
        width: 160,
        height: 69,
        className: "h-10 object-contain",
      },
      title: t("experiences.1.title"),
      subtitle: t("experiences.1.subtitle"),
    },
    {
      id: "usgs",
      logo: {
        src: "/images/usgs-logo.png",
        alt: "USGS",
        width: 128,
        height: 32,
        className: "h-8 object-contain",
      },
      title: t("experiences.2.title"),
      subtitle: t("experiences.2.subtitle"),
    },
    {
      id: "codeupscale",
      logo: {
        src: "/images/codeupscale-logo.svg", // Will be dynamically replaced
        alt: "Code Upscale",
        width: 128,
        height: 32,
        className: "h-8 object-contain",
      },
      title: t("experiences.3.title"),
      subtitle: t("experiences.3.subtitle"),
    },
    {
      id: "promoboxx",
      logo: {
        src: "/images/promoboxx-logo.svg",
        alt: "Promoboxx",
        width: 128,
        height: 32,
        className: "h-8 object-contain",
      },
      title: t("experiences.4.title"),
      subtitle: t("experiences.4.subtitle"),
    },
    {
      id: "komodal",
      logo: {
        src: "/images/komodal-logo.png",
        alt: "Komodal",
        width: 190,
        height: 64,
        className: "h-8 object-contain",
      },
      title: t("experiences.5.title"),
      subtitle: t("experiences.5.subtitle"),
    },
  ];

  return (
    <div>
      <Title
        order={3}
        size="1.5rem"
        fw={600}
        c="var(--mantine-color-text)"
        className="mb-6 text-center"
      >
        {title || t("title")}
      </Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(experiences || defaultExperiences).map((experience) => (
          <Card
            key={experience.id}
            shadow="sm"
            padding="lg"
            radius="md"
            bg="var(--mantine-color-body)"
            className="text-center h-full hover:shadow-lg transition-all duration-300 cursor-pointer group"
          >
            <div className="mb-3 flex justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
              <Image
                src={(() => {
                  // Use theme-specific Code Upscale logos
                  if (experience.id === "codeupscale") {
                    return colorScheme === "dark"
                      ? "/images/CodeUpscaleLight.svg" // Light logo for dark theme
                      : "/images/CodeUpscaleDark.svg"; // Dark logo for light theme
                  }
                  return experience.logo.src;
                })()}
                alt={experience.logo.alt}
                width={experience.logo.width}
                height={experience.logo.height}
                className={experience.logo.className}
                style={{
                  filter: (() => {
                    // Only apply invert filter to Nuance logo in dark mode
                    if (experience.id === "nuance" && colorScheme === "dark") {
                      return "invert(1)";
                    }
                    return undefined;
                  })(),
                }}
              />
            </div>
            <Title
              order={5}
              size="sm"
              fw={600}
              c="var(--mantine-color-text)"
              className="mb-1"
            >
              {experience.title}
            </Title>
            <Text size="xs" c="dimmed">
              {experience.subtitle}
            </Text>
          </Card>
        ))}
      </div>
    </div>
  );
}

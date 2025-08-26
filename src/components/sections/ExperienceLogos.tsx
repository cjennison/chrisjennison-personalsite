import { Card, Text, Title } from "@mantine/core";
import Image from "next/image";

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

const defaultExperiences: ExperienceItem[] = [
  {
    id: "microsoft",
    logo: {
      src: "/images/microsoft-logo.png",
      alt: "Microsoft",
      width: 128,
      height: 32,
      className: "h-8 object-contain"
    },
    title: "Copilot Studio",
    subtitle: "Principal Engineer and Manager"
  },
  {
    id: "nuance",
    logo: {
      src: "/images/nuance-logo.png",
      alt: "Nuance Communications",
      width: 160,
      height: 69,
      className: "h-10 object-contain"
    },
    title: "Mix Dialog Lead Engineer",
    subtitle: "Voice AI Platform"
  },
  {
    id: "usgs",
    logo: {
      src: "/images/usgs-logo.png",
      alt: "USGS",
      width: 128,
      height: 32,
      className: "h-8 object-contain"
    },
    title: "Data Visualization Engineering",
    subtitle: "Government Services"
  },
  {
    id: "codeupscale",
    logo: {
      src: "/images/codeupscale-logo.svg",
      alt: "Code Upscale",
      width: 128,
      height: 32,
      className: "h-8 object-contain brightness-0 dark:brightness-100"
    },
    title: "International Technical Sales & Contracting",
    subtitle: "CTO & Strategic Advisor"
  },
  {
    id: "promoboxx",
    logo: {
      src: "/images/promoboxx-logo.svg",
      alt: "Promoboxx",
      width: 128,
      height: 32,
      className: "h-8 object-contain"
    },
    title: "Digital Marketing Software Engineering",
    subtitle: "Enterprise and Retailer Platform"
  },
  {
    id: "komodal",
    logo: {
      src: "/images/komodal-logo.png",
      alt: "Komodal",
      width: 190,
      height: 64,
      className: "h-8 object-contain"
    },
    title: "Port of LA, Drayage Logistics Engineering",
    subtitle: "CTO, Acquired in 2022"
  }
];

export function ExperienceLogos({
  title = "Professional Experience",
  experiences = defaultExperiences
}: ExperienceLogosProps) {
  return (
    <div>
      <Title
        order={3}
        size="1.5rem"
        fw={600}
        className="mb-6 text-center text-gray-900 dark:text-white"
      >
        {title}
      </Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((experience) => (
          <Card
            key={experience.id}
            shadow="sm"
            padding="lg"
            radius="md"
            className="text-center h-full hover:shadow-lg transition-all duration-300 cursor-pointer group"
          >
            <div className="mb-3 flex justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
              <Image
                src={experience.logo.src}
                alt={experience.logo.alt}
                width={experience.logo.width}
                height={experience.logo.height}
                className={experience.logo.className}
              />
            </div>
            <Title
              order={5}
              size="sm"
              fw={600}
              className="mb-1 text-gray-900 dark:text-white"
            >
              {experience.title}
            </Title>
            <Text size="xs" className="text-gray-500 dark:text-gray-400">
              {experience.subtitle}
            </Text>
          </Card>
        ))}
      </div>
    </div>
  );
}

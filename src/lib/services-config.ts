import type { ServiceCardProps } from "@/components/ui/ServiceCard";

/**
 * Shared service configuration factory function
 * Generates service data using translation functions
 */
export function createServicesConfig(
  servicesT: (key: string) => string,
): ServiceCardProps["service"][] {
  return [
    {
      iconType: "code" as const,
      title: servicesT("engineering.title"),
      type: "engineering",
      description: servicesT("engineering.description"),
      features: [
        servicesT("engineering.features.0"),
        servicesT("engineering.features.1"),
        servicesT("engineering.features.2"),
        servicesT("engineering.features.3"),
      ],
      href: "/services/engineering",
      color: "blue",
    },
    {
      iconType: "brain" as const,
      title: servicesT("aiCoding.title"),
      type: "aicoding",
      description: servicesT("aiCoding.description"),
      features: [
        servicesT("aiCoding.features.0"),
        servicesT("aiCoding.features.1"),
        servicesT("aiCoding.features.2"),
        servicesT("aiCoding.features.3"),
      ],
      href: "/services/ai-coding",
      color: "violet",
    },
  ];
}

import { Text, Title } from "@mantine/core";
import { getTranslations } from "next-intl/server";
import { EDUCATION } from "@/lib/profile";
import { SectionHeading } from "./SectionHeading";

export async function EducationList() {
  const t = await getTranslations("Profile.education");
  const tSite = await getTranslations("Site.sections");

  return (
    <section aria-labelledby="education-heading" className="break-inside-avoid">
      <SectionHeading id="education-heading">
        {tSite("education")}
      </SectionHeading>
      <ul className="space-y-5">
        {EDUCATION.map((item) => (
          <li key={item.id}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <Title order={3} fz="md" fw={600}>
                {item.school}
              </Title>
              <Text size="sm" c="dimmed">
                <time dateTime={String(item.startYear)}>{item.startYear}</time>
                {" – "}
                <time dateTime={String(item.endYear)}>{item.endYear}</time>
              </Text>
            </div>
            <Text size="sm">{t(`${item.id}.degree`)}</Text>
            <Text size="sm" c="dimmed">
              {t(`${item.id}.honors`)}
            </Text>
          </li>
        ))}
      </ul>
    </section>
  );
}

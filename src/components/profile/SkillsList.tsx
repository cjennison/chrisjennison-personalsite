import { Text } from "@mantine/core";
import { getTranslations } from "next-intl/server";
import { SKILL_GROUP_IDS } from "@/lib/profile";
import { SectionHeading } from "./SectionHeading";

export async function SkillsList() {
  const t = await getTranslations("Profile.skills");
  const tSite = await getTranslations("Site.sections");

  return (
    <section aria-labelledby="skills-heading" className="break-inside-avoid">
      <SectionHeading id="skills-heading">{tSite("skills")}</SectionHeading>
      <dl className="space-y-4">
        {SKILL_GROUP_IDS.map((group) => (
          <div
            key={group}
            className="sm:grid sm:grid-cols-[13rem_1fr] sm:gap-x-6"
          >
            <dt>
              <Text size="sm" fw={600}>
                {t(`${group}.title`)}
              </Text>
            </dt>
            <dd>
              <Text size="sm" lh={1.7}>
                {(t.raw(`${group}.items`) as string[]).join(" · ")}
              </Text>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

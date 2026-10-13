import { Text } from "@mantine/core";
import { getTranslations } from "next-intl/server";
import { STAT_IDS } from "@/lib/profile";
import { SectionHeading } from "./SectionHeading";

export async function AtAGlance() {
  const t = await getTranslations("Profile.stats");
  const tSite = await getTranslations("Site.sections");

  return (
    <section aria-labelledby="glance-heading">
      <SectionHeading id="glance-heading">{tSite("glance")}</SectionHeading>
      <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
        {STAT_IDS.map((id) => (
          <div key={id} className="flex flex-col-reverse justify-end gap-1">
            <dt>
              <Text
                size="sm"
                c="dimmed"
                lh={1.4}
                className="hyphens-auto break-words"
              >
                {t(`${id}.label`)}
              </Text>
            </dt>
            <dd>
              <Text fz="1.75rem" fw={700} lh={1.1} c="var(--site-accent)">
                {t(`${id}.value`)}
              </Text>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

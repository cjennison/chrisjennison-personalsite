import { Anchor, Text, Title } from "@mantine/core";
import { getTranslations } from "next-intl/server";
import { COMPANIES } from "@/lib/profile";
import { DateRange } from "./DateRange";
import { SectionHeading } from "./SectionHeading";

interface ExperienceListProps {
  /** "summary" shows one line per role; "detailed" shows location and highlights */
  variant: "summary" | "detailed";
  /** Href of the full resume, shown after the summary list */
  resumeHref?: string;
}

export async function ExperienceList({
  variant,
  resumeHref,
}: ExperienceListProps) {
  const t = await getTranslations("Profile");
  const tSite = await getTranslations("Site");
  const isDetailed = variant === "detailed";

  return (
    <section aria-labelledby="experience-heading">
      <SectionHeading id="experience-heading">
        {tSite("sections.experience")}
      </SectionHeading>
      <ol className={isDetailed ? "space-y-10 print:space-y-6" : "space-y-8"}>
        {COMPANIES.map((company) => (
          <li key={company.id}>
            <Title order={3} fz="lg" fw={600}>
              {company.name}
            </Title>
            <ol className="mt-2 space-y-4">
              {company.roles.map((role) => {
                const highlights = isDetailed
                  ? (t.raw(`roles.${role.id}.highlights`) as string[])
                  : [];
                return (
                  <li key={role.id} className="break-inside-avoid">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <Text fw={500}>
                        {t(`roles.${role.id}.title`)}
                        {role.type !== "fullTime" && (
                          <Text span size="sm" c="dimmed" fw={400}>
                            {" · "}
                            {t(`employmentTypes.${role.type}`)}
                          </Text>
                        )}
                      </Text>
                      <Text size="sm" c="dimmed">
                        <DateRange start={role.start} end={role.end} />
                      </Text>
                    </div>
                    {isDetailed ? (
                      <>
                        <Text size="sm" c="dimmed">
                          {t(`roles.${role.id}.location`)}
                        </Text>
                        <ul className="mt-2 list-disc space-y-1.5 pl-5">
                          {highlights.map((highlight) => (
                            <li key={highlight}>
                              <Text size="sm" lh={1.6}>
                                {highlight}
                              </Text>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Text size="sm" c="dimmed" mt={2}>
                        {t(`roles.${role.id}.summary`)}
                      </Text>
                    )}
                  </li>
                );
              })}
            </ol>
          </li>
        ))}
      </ol>
      {resumeHref && (
        <Anchor href={resumeHref} mt="xl" display="inline-block" fw={500}>
          {tSite("actions.resume")} →
        </Anchor>
      )}
    </section>
  );
}

import { Text, Title } from "@mantine/core";
import { getTranslations } from "next-intl/server";
import { IMPACT, type MetricKind } from "@/lib/profile";
import { SectionHeading } from "./SectionHeading";

interface ImpactListProps {
  /** "full" shows descriptions (home page); "compact" is denser for the resume */
  variant?: "full" | "compact";
}

interface MetricValueProps {
  base: string;
  kind: MetricKind;
}

async function MetricValue({ base, kind }: MetricValueProps) {
  const t = await getTranslations("Profile.impact");
  const tSite = await getTranslations("Site");

  if (kind === "value") {
    return (
      <Text size="sm" fw={600} c="var(--site-accent)">
        {t(`${base}.value`)}
      </Text>
    );
  }

  const before = t(`${base}.before`);
  const after = t(`${base}.after`);

  return (
    <Text size="sm" fw={600}>
      <span aria-hidden="true">
        <Text span size="sm" c="dimmed" fw={400}>
          {before}
        </Text>
        {" → "}
        <Text span size="sm" fw={600} c="var(--site-accent)">
          {after}
        </Text>
      </span>
      <span className="sr-only">
        {tSite("metricChange", { before, after })}
      </span>
    </Text>
  );
}

export async function ImpactList({ variant = "full" }: ImpactListProps) {
  const t = await getTranslations("Profile.impact");
  const tSite = await getTranslations("Site.sections");
  const isFull = variant === "full";

  return (
    <section aria-labelledby="impact-heading">
      <SectionHeading id="impact-heading">{tSite("impact")}</SectionHeading>
      <ol className={isFull ? "space-y-14" : "space-y-6 print:space-y-4"}>
        {IMPACT.map((item) => (
          <li key={item.id} className="break-inside-avoid">
            <article>
              <Text
                size="xs"
                fw={600}
                c="dimmed"
                className="uppercase tracking-[0.08em]"
              >
                {t(`${item.id}.org`)}
              </Text>
              <Title order={3} fz={isFull ? "h3" : "h4"} fw={600} mt={6}>
                {t(`${item.id}.title`)}
              </Title>
              {isFull && (
                <Text mt="sm" lh={1.7}>
                  {t(`${item.id}.description`)}
                </Text>
              )}
              <dl
                className={`grid gap-3 border-l-2 pl-4 ${isFull ? "mt-5" : "mt-3"}`}
                style={{ borderColor: "var(--site-accent)" }}
              >
                {item.metrics.map((metric) => {
                  const base = `${item.id}.metrics.${metric.id}`;
                  return (
                    <div
                      key={metric.id}
                      className="grid gap-0.5 sm:grid-cols-[1fr_auto] sm:gap-6"
                    >
                      <dt>
                        <Text size="sm" c="dimmed">
                          {t(`${base}.label`)}
                        </Text>
                      </dt>
                      <dd className="sm:text-right">
                        <MetricValue base={base} kind={metric.kind} />
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}

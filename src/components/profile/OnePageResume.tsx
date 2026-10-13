import { getTranslations } from "next-intl/server";
import { Fragment, type ReactNode } from "react";
import {
  COMPANIES,
  EDUCATION,
  IMPACT,
  ONE_PAGE_DETAILED_ROLE_IDS,
  ONE_PAGE_HIDDEN_ROLE_IDS,
  PROFILE,
  SKILL_GROUP_IDS,
} from "@/lib/profile";
import type { PrivateContact, ResumeVariant } from "@/lib/resume-variants";
import { SEO_CONFIG } from "@/lib/seo-config";
import { DateRange } from "./DateRange";

interface OnePageResumeProps {
  /** Role-tailored overrides (private resumes only) */
  variant?: ResumeVariant | null;
  /** Email/phone shown only on private resumes */
  contact?: PrivateContact | null;
}

const displayUrl = (url: string) =>
  url.replace(/^https:\/\/(www\.)?/, "").replace(/\/$/, "");

/** Renders "<b>lead</b> rest" variant strings with the lead phrase in bold */
function withBoldLead(text: string): ReactNode {
  return text.split(/(<b>.*?<\/b>)/g).map((part, index) => {
    const bold = part.match(/^<b>(.*)<\/b>$/);
    // biome-ignore lint/suspicious/noArrayIndexKey: static split of a fixed string
    return bold ? <strong key={index}>{bold[1]}</strong> : part;
  });
}

/**
 * Single-page, single-column resume designed for PDF export.
 * Plain semantic HTML with standard section headings so ATS and LLM parsers
 * read it in order; styled by the .resume-sheet rules in globals.css.
 */
export async function OnePageResume({
  variant,
  contact,
}: OnePageResumeProps = {}) {
  const t = await getTranslations("Profile");

  const contactItems: ReactNode[] = [
    contact?.phone && (
      <a key="phone" href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}>
        {contact.phone}
      </a>
    ),
    contact?.email && (
      <a key="email" href={`mailto:${contact.email}`}>
        {contact.email}
      </a>
    ),
    <a key="linkedin" href={PROFILE.linkedin}>
      {displayUrl(PROFILE.linkedin)}
    </a>,
    <a key="site" href={SEO_CONFIG.siteUrl}>
      {displayUrl(SEO_CONFIG.siteUrl)}
    </a>,
  ].filter(Boolean);

  const achievements: ReactNode[] = variant
    ? variant.achievements.map(withBoldLead)
    : IMPACT.map((item) =>
        t.rich(`onePage.impact.${item.id}`, {
          b: (chunks) => <strong>{chunks}</strong>,
        }),
      );

  const skills = variant?.skills
    ? variant.skills
    : SKILL_GROUP_IDS.map((group) => ({
        title: t(`skills.${group}.title`),
        items: t.raw(`skills.${group}.items`) as string[],
      }));

  const bulletsFor = (roleId: string): string[] =>
    variant?.roles?.[roleId] ??
    (ONE_PAGE_DETAILED_ROLE_IDS.includes(roleId)
      ? (t.raw(`onePage.roles.${roleId}`) as string[])
      : []);

  return (
    <article className="resume-sheet">
      <header>
        <h1>{t("name")}</h1>
        <p className="resume-sheet__headline">
          {variant?.headline ?? t("headline")}
        </p>
        {contact ? (
          <>
            <p className="resume-sheet__contact">{t("location")}</p>
            <p className="resume-sheet__contact">
              {contactItems.map((item, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: fixed-order list
                <Fragment key={index}>
                  {index > 0 && " · "}
                  {item}
                </Fragment>
              ))}
            </p>
          </>
        ) : (
          <p className="resume-sheet__contact">
            {t("location")}
            {contactItems.map((item, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: fixed-order list
              <Fragment key={index}>
                {" · "}
                {item}
              </Fragment>
            ))}
          </p>
        )}
      </header>

      <section>
        <h2>{t("onePage.headings.summary")}</h2>
        <p>{variant?.summary ?? t("onePage.summary")}</p>
      </section>

      <section>
        <h2>{t("onePage.headings.achievements")}</h2>
        <ul>
          {achievements.map((achievement, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: ordered, static content
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>{t("onePage.headings.experience")}</h2>
        {COMPANIES.map((company) =>
          company.roles
            .filter((role) => !ONE_PAGE_HIDDEN_ROLE_IDS.includes(role.id))
            .map((role) => {
              const bullets = bulletsFor(role.id);
              return (
                <div key={role.id} className="resume-sheet__role">
                  <p className="resume-sheet__row">
                    <span>
                      <strong>{t(`roles.${role.id}.title`)}</strong>
                      {", "}
                      {company.name}
                      {role.type !== "fullTime" &&
                        ` (${t(`employmentTypes.${role.type}`)})`}
                    </span>
                    <DateRange start={role.start} end={role.end} />
                  </p>
                  {bullets.length > 0 && (
                    <ul>
                      {bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            }),
        )}
      </section>

      <section>
        <h2>{t("onePage.headings.skills")}</h2>
        <dl className="resume-sheet__skills">
          {skills.map((group) => (
            <div key={group.title}>
              <dt>{group.title}:</dt> <dd>{group.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2>{t("onePage.headings.education")}</h2>
        {EDUCATION.map((school) => (
          <p key={school.id} className="resume-sheet__row">
            <span>
              <strong>{t(`education.${school.id}.degree`)}</strong>
              {", "}
              {school.school}
              {" · "}
              {t(`education.${school.id}.honors`)}
            </span>
            <span>
              {school.startYear} – {school.endYear}
            </span>
          </p>
        ))}
      </section>
    </article>
  );
}

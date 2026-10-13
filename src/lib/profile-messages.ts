import { getTranslations } from "next-intl/server";
import { SKILL_GROUP_IDS } from "./profile";

/**
 * Flattened professional skills (excluding spoken languages) for JSON-LD knowsAbout
 */
export async function getSkillKeywords(locale: string): Promise<string[]> {
  const t = await getTranslations({ locale, namespace: "Profile.skills" });
  return SKILL_GROUP_IDS.filter((group) => group !== "languages").flatMap(
    (group) => t.raw(`${group}.items`) as string[],
  );
}

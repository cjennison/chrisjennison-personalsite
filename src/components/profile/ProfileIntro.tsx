import { Button, Group, Text, Title } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { getAgeInYears, PROFILE } from "@/lib/profile";

interface ProfileIntroProps {
  locale: string;
}

export async function ProfileIntro({ locale }: ProfileIntroProps) {
  const t = await getTranslations("Profile");
  const tSite = await getTranslations("Site");
  const age = getAgeInYears(PROFILE.daughterBirthDate);

  return (
    <section aria-labelledby="profile-name" className="pt-6 sm:pt-14">
      <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Title
            id="profile-name"
            order={1}
            fz={{ base: "2.25rem", sm: "3rem" }}
            fw={700}
            lh={1.1}
          >
            {t("name")}
          </Title>
          <Text fz="lg" fw={500} mt="sm">
            {t("headline")}
          </Text>
          <Text c="dimmed" mt={4}>
            {t("location")}
          </Text>
        </div>
        <Image
          src={PROFILE.photo}
          alt={tSite("photoAlt")}
          width={112}
          height={112}
          priority
          className="h-24 w-24 shrink-0 rounded-full object-cover sm:h-28 sm:w-28"
        />
      </div>

      <Text fz="lg" lh={1.7} mt={32}>
        {t("summary")}
      </Text>

      <dl className="mt-6">
        <dt>
          <Text
            size="xs"
            fw={600}
            c="dimmed"
            className="uppercase tracking-[0.08em]"
          >
            {t("strongestFit.label")}
          </Text>
        </dt>
        <dd className="mt-1">
          <Text>{t("strongestFit.roles")}</Text>
        </dd>
      </dl>

      <Group mt={32} gap="sm">
        <Button
          component="a"
          href={PROFILE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          leftSection={<IconBrandLinkedin size={18} aria-hidden />}
        >
          {tSite("actions.linkedin")}
        </Button>
        <Button component="a" href={`/${locale}/resume`} variant="default">
          {tSite("actions.resume")}
        </Button>
        <Button
          component="a"
          href={PROFILE.github}
          target="_blank"
          rel="noopener noreferrer"
          variant="subtle"
          color="gray"
          leftSection={<IconBrandGithub size={18} aria-hidden />}
        >
          {tSite("actions.github")}
        </Button>
      </Group>

      {locale !== "en" && (
        <Text size="sm" c="dimmed" mt="lg">
          {tSite(`languageNotice.${locale}`)}
        </Text>
      )}

      <Text size="sm" c="dimmed" mt="lg">
        {t("personalNote", { age })}
      </Text>
    </section>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { OnePageResume } from "@/components/profile/OnePageResume";
import { PROFILE } from "@/lib/profile";
import { getPrivateContact, loadResumeVariant } from "@/lib/resume-variants";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ variant?: string }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const { variant: variantId } = await searchParams;
  const t = await getTranslations({ locale, namespace: "Site.meta" });
  const variant = variantId ? await loadResumeVariant(variantId) : null;
  const label = variant ? `${variant.targetTitle} Resume` : t("resumeTitle");

  // The document title becomes the PDF title; the page itself is a print source, not for search
  return {
    title: { absolute: `${PROFILE.name} · ${label}` },
    robots: { index: false, follow: false },
  };
}

export default async function ResumePdfPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const { variant: variantId } = await searchParams;
  setRequestLocale(locale);

  // Private variants (and contact details) exist only locally, never in production
  const variant = variantId ? await loadResumeVariant(variantId) : null;
  if (variantId && !variant) notFound();

  return (
    <main className="resume-sheet-page">
      <OnePageResume
        variant={variant}
        contact={variant ? getPrivateContact() : null}
      />
    </main>
  );
}

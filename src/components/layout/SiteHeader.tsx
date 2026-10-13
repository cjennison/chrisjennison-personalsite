import { Anchor } from "@mantine/core";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { PROFILE } from "@/lib/profile";
import { HeaderControls } from "./HeaderControls";

interface SiteHeaderProps {
  current: "home" | "resume";
}

const linkStyle = { color: "var(--mantine-color-text)" };

export async function SiteHeader({ current }: SiteHeaderProps) {
  const t = await getTranslations("Site.nav");

  return (
    <header className="print:hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:px-4 focus:py-2"
        style={{
          backgroundColor: "var(--mantine-color-body)",
          color: "var(--mantine-color-text)",
          outline: "2px solid var(--site-accent)",
        }}
      >
        {t("skipToContent")}
      </a>
      <nav
        aria-label={t("label")}
        className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-5"
      >
        <Link
          href="/"
          aria-label={t("home")}
          aria-current={current === "home" ? "page" : undefined}
          className="font-semibold hover:opacity-80"
          style={linkStyle}
        >
          <span className="sm:hidden">CJ</span>
          <span className="hidden sm:inline">{PROFILE.name}</span>
        </Link>
        <div className="flex items-center gap-3 text-sm sm:gap-5">
          <Link
            href="/resume"
            aria-current={current === "resume" ? "page" : undefined}
            className={
              current === "resume"
                ? "font-semibold underline underline-offset-4"
                : "hover:underline hover:underline-offset-4"
            }
            style={linkStyle}
          >
            {t("resume")}
          </Link>
          <Anchor
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            c="var(--mantine-color-text)"
          >
            {t("linkedin")}
          </Anchor>
          <HeaderControls themeLabel={t("themeToggle")} />
        </div>
      </nav>
    </header>
  );
}

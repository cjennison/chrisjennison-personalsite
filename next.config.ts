import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// Pages removed in the minimal redesign permanently redirect to the profile page
const RETIRED_SECTIONS = ["services", "case-studies", "contact"];

const nextConfig: NextConfig = {
  async redirects() {
    return RETIRED_SECTIONS.flatMap((section) => [
      {
        source: `/:locale(en|fr|de)/${section}/:path*`,
        destination: "/:locale",
        permanent: true,
      },
      {
        source: `/${section}/:path*`,
        destination: "/en",
        permanent: true,
      },
    ]);
  },
};

export default withNextIntl(nextConfig);

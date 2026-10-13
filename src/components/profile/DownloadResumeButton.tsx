"use client";

import { Button } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
import { trackDownload } from "@/lib/analytics";

interface DownloadResumeButtonProps {
  href: string;
  label: string;
}

export function DownloadResumeButton({
  href,
  label,
}: DownloadResumeButtonProps) {
  return (
    // Wrapper hides the button in print; Mantine's own display rule would win on the button itself
    <div className="print:hidden">
      <Button
        component="a"
        href={href}
        download
        variant="default"
        size="sm"
        leftSection={<IconDownload size={16} aria-hidden />}
        onClick={() => trackDownload(href, "resume_pdf")}
      >
        {label}
      </Button>
    </div>
  );
}

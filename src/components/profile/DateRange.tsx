import { getFormatter, getTranslations } from "next-intl/server";
import { type YearMonth, yearMonthToDate } from "@/lib/profile";

interface DateRangeProps {
  start: YearMonth;
  end: YearMonth | null;
}

/**
 * Localized "Sep 2024 – Present" range with machine-readable <time> elements
 */
export async function DateRange({ start, end }: DateRangeProps) {
  const format = await getFormatter();
  const t = await getTranslations("Profile");
  const options = {
    year: "numeric",
    month: "short",
    timeZone: "UTC",
  } as const;

  return (
    <span className="whitespace-nowrap">
      <time dateTime={start}>
        {format.dateTime(yearMonthToDate(start), options)}
      </time>
      {" – "}
      {end ? (
        <time dateTime={end}>
          {format.dateTime(yearMonthToDate(end), options)}
        </time>
      ) : (
        t("present")
      )}
    </span>
  );
}

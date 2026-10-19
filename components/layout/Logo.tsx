import Link from "next/link";
import { cn } from "@/lib/utils";

/** Text mark: gold skyline glyph + CITY VASTGOED. Replace with brand SVG when supplied. */
export function Logo({
  light = true,
  className,
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="City Vastgoed – home"
      className={cn("inline-flex items-center gap-3", className)}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect x="1" y="12" width="5" height="13" fill="#B89A5A" />
        <rect x="8.5" y="6" width="5" height="19" fill="#B89A5A" />
        <rect x="16" y="1" width="5" height="24" fill="#B89A5A" />
        <rect x="23" y="16" width="2" height="9" fill="#B89A5A" opacity="0.6" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.45rem] font-semibold tracking-[0.12em]",
            light ? "text-cream" : "text-ink",
          )}
        >
          CITY
        </span>
        <span
          className={cn(
            "mt-[3px] text-[0.5625rem] uppercase tracking-[0.32em]",
            light ? "text-gold-2" : "text-gold",
          )}
        >
          Vastgoed
        </span>
      </span>
    </Link>
  );
}

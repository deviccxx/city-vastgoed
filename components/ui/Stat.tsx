import { cn } from "@/lib/utils";

export function Stat({
  value,
  label,
  light = false,
  className,
  size = "md",
}: {
  value: React.ReactNode;
  label: string;
  light?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "text-2xl md:text-3xl",
    md: "text-3xl md:text-4xl",
    lg: "text-4xl md:text-5xl",
  };
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <span className={cn("font-display tnum leading-none", sizes[size])}>
        {value}
      </span>
      <span
        className={cn(
          "text-[0.6875rem] uppercase tracking-[0.16em]",
          light ? "text-cream/55" : "text-muted",
        )}
      >
        {label}
      </span>
    </div>
  );
}

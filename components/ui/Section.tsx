import { cn } from "@/lib/utils";

type Tone = "cream" | "cream-2" | "ink" | "ink-2" | "white";

const tones: Record<Tone, string> = {
  cream: "bg-cream text-ink",
  "cream-2": "bg-cream-2 text-ink",
  white: "bg-white text-ink",
  ink: "bg-ink text-cream",
  "ink-2": "bg-ink-2 text-cream",
};

export function Section({
  tone = "cream",
  className,
  children,
  id,
  tight = false,
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
  id?: string;
  tight?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        tones[tone],
        tight ? "py-14 md:py-20" : "py-20 md:py-28 lg:py-32",
        className,
      )}
    >
      {children}
    </section>
  );
}

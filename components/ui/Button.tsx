import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "gold" | "outline-light" | "outline-dark" | "ink" | "text";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-3 font-sans text-[0.75rem] font-medium uppercase tracking-[0.16em] transition-all duration-300 ease-[var(--ease-luxe)] focus:outline-none focus-visible:ring-1 focus-visible:ring-gold";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-ink hover:bg-gold-2",
  ink: "bg-ink text-cream hover:bg-ink-2",
  "outline-light":
    "border border-cream/40 text-cream hover:border-gold-2 hover:text-gold-2",
  "outline-dark":
    "border border-ink/30 text-ink hover:border-gold hover:text-ink",
  text: "text-current hover:text-gold px-0 py-0",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-3",
  md: "px-7 py-4",
  lg: "px-9 py-5",
};

export function Button({
  href,
  variant = "gold",
  size = "md",
  arrow = false,
  className,
  children,
  external = false,
  type = "button",
  onClick,
}: {
  href?: string;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const cls = cn(
    base,
    variants[variant],
    variant === "text" ? "" : sizes[size],
    className,
  );
  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={1.5}
        />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noreferrer" className={cls}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}

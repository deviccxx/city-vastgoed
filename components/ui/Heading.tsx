import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <p className={cn("eyebrow", light && "text-gold-2", className)}>
      {children}
    </p>
  );
}

export function Title({
  as: Tag = "h2",
  size = "lg",
  className,
  children,
}: {
  as?: "h1" | "h2" | "h3" | "h4";
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  className?: string;
  children: React.ReactNode;
}) {
  const sizes = {
    sm: "text-2xl md:text-3xl",
    md: "text-3xl md:text-4xl",
    lg: "text-4xl md:text-5xl lg:text-[3.5rem]",
    xl: "text-5xl md:text-6xl lg:text-[4.5rem]",
    hero: "text-[2.75rem] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.5rem]",
  };
  return (
    <Tag
      className={cn(
        "font-display font-medium leading-[1.05] tracking-[-0.01em] text-balance",
        sizes[size],
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Lead({
  className,
  children,
  light = false,
}: {
  className?: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={cn(
        "text-base leading-relaxed md:text-lg",
        light ? "text-cream/70" : "text-muted",
        className,
      )}
    >
      {children}
    </p>
  );
}

/** Eyebrow + title + optional lead, aligned left or centered */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  light = false,
  className,
  titleSize = "lg",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
  titleSize?: "sm" | "md" | "lg" | "xl";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Eyebrow light={light} className="mb-5">
          {eyebrow}
        </Eyebrow>
      )}
      <Title size={titleSize}>{title}</Title>
      {lead && (
        <Lead light={light} className="mt-6">
          {lead}
        </Lead>
      )}
    </div>
  );
}

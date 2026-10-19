import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
  wide = false,
}: {
  className?: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        wide ? "max-w-[1440px]" : "max-w-[1240px]",
        className,
      )}
    >
      {children}
    </div>
  );
}

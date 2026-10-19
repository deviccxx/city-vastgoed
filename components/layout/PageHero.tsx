import { Image } from "@/components/ui/Img";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Title } from "@/components/ui/Heading";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  children,
  compact = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  image?: string;
  children?: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-cream">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover opacity-40"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
        </>
      )}
      <Container className={cn(compact ? "py-16 md:py-24" : "py-24 md:py-36")}>
        <div className="max-w-3xl">
          {eyebrow && (
            <Eyebrow light className="mb-6">
              {eyebrow}
            </Eyebrow>
          )}
          <Title as="h1" size="xl">
            {title}
          </Title>
          {lead && (
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-cream/70 md:text-lg">
              {lead}
            </p>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}

import { Star, BadgeCheck } from "lucide-react";
import { Image } from "@/components/ui/Img";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { DummyNote } from "@/components/trust/DummyNote";
import { testimonials, externalReviews } from "@/lib/data/trust";

export function Testimonials() {
  return (
    <Section tone="white">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center">
          <Eyebrow>Investeerders aan het woord</Eyebrow>
          <div className="flex items-center gap-3 text-[0.75rem] text-muted">
            <span className="flex gap-0.5 text-gold">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={1} />
              ))}
            </span>
            <span className="tnum">
              {externalReviews.score.toLocaleString("nl-NL")} / 5 · {externalReviews.count} beoordelingen op {externalReviews.platform}
            </span>
          </div>
          <DummyNote />
        </div>

        <div className="mt-14 grid gap-14 md:grid-cols-2 md:gap-16">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120} as="article">
              <div className="grid gap-8 sm:grid-cols-[9rem_1fr]">
                <div className="relative aspect-[4/5] overflow-hidden bg-ink-2">
                  <Image src={t.photo} alt={t.name} fill sizes="144px" className="object-cover" />
                </div>
                <div>
                  <blockquote className="font-display text-2xl leading-snug md:text-[1.6rem]">
                    <span className="text-gold">“</span>
                    {t.quote}
                    <span className="text-gold">”</span>
                  </blockquote>
                  <figcaption className="mt-6">
                    <p className="flex items-center gap-2 text-[0.9375rem]">
                      {t.name}
                      {t.verified && <BadgeCheck className="h-4 w-4 text-gold" strokeWidth={1.5} />}
                    </p>
                    <p className="text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
                      {t.role} · {t.place} · investeerder sinds {t.since}
                    </p>
                  </figcaption>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

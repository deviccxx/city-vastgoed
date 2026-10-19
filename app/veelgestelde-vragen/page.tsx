import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ContactSection } from "@/components/home/ContactSection";
import { faqCategories } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "Veelgestelde vragen",
  description: "Antwoorden op de meest gestelde vragen over beleggen bij City Vastgoed, Briks, rendement, beheer en uw account.",
};

export default function FaqIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Veelgestelde vragen"
        title="Helder over hoe het werkt."
        lead="Wij beleggen in panden die zijn gebouwd of getransformeerd tot energiezuinige woningen, appartementen en studio's. Hieronder vindt u per onderwerp de antwoorden op de vragen die wij het meest ontvangen."
        compact
      />
      <Section tone="cream">
        <Container>
          <div className="grid gap-px border border-stone-2 bg-stone-2 md:grid-cols-2 lg:grid-cols-3">
            {faqCategories.map((c, i) => (
              <Reveal key={c.slug} delay={i * 80}>
                <Link
                  href={`/veelgestelde-vragen/${c.slug}/`}
                  className="group flex h-full flex-col justify-between bg-cream p-8 transition-colors hover:bg-white"
                >
                  <div>
                    <p className="eyebrow mb-4">0{i + 1}</p>
                    <h2 className="font-display text-3xl leading-tight group-hover:text-gold">{c.title}</h2>
                    <p className="mt-3 text-[0.9rem] leading-relaxed text-muted">{c.intro}</p>
                  </div>
                  <span className="mt-8 flex items-center gap-2 text-[0.6875rem] uppercase tracking-[0.16em] text-ink">
                    {c.items.length} vragen
                    <ArrowRight className="h-3.5 w-3.5 text-gold transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <ContactSection />
    </>
  );
}

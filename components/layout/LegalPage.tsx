import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export type LegalSection = { heading: string; paragraphs: string[] };

export function LegalPage({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow="Juridisch" title={title} lead={`Laatst bijgewerkt: ${updated}`} compact />
      <Section tone="cream">
        <Container>
          <div className="mx-auto max-w-3xl">
            {sections.map((s, i) => (
              <section key={s.heading} className="border-t border-stone-2 py-10 first:border-t-0 first:pt-0">
                <p className="eyebrow mb-3">Artikel {i + 1}</p>
                <h2 className="font-display text-3xl">{s.heading}</h2>
                <div className="prose-luxe mt-5 text-[0.9875rem] leading-relaxed text-ink/80">
                  {s.paragraphs.map((p) => (
                    <p key={p.slice(0, 32)}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

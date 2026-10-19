import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ArticleCard } from "@/components/home/ArticlesPreview";
import { ContactSection } from "@/components/home/ContactSection";
import { articles } from "@/lib/data/articles";

export const metadata: Metadata = {
  title: "Artikelen",
  description: "Kennisartikelen over beleggen in vastgoed, obligaties en rendement.",
};

export default function ArtikelenPage() {
  return (
    <>
      <PageHero eyebrow="Artikelen" title="Kennis over beleggen in vastgoed." compact />
      <Section tone="cream">
        <Container>
          <div className="grid gap-14 md:grid-cols-3 md:gap-10">
            {articles.map((a, i) => (
              <Reveal key={a.slug} delay={i * 100} as="article">
                <ArticleCard article={a} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <ContactSection />
    </>
  );
}

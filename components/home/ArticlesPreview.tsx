import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { articles, type Article } from "@/lib/data/articles";
import { dateNl } from "@/lib/format";

export function ArticleCard({ article: a }: { article: Article }) {
  return (
    <Link href={`/artikelen/${a.slug}/`} className="group block">
      <div className="img-zoom relative aspect-[3/2] overflow-hidden bg-ink-2">
        <Image src={a.image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
      </div>
      <p className="eyebrow mt-6">{dateNl(a.date)}</p>
      <h3 className="mt-3 font-display text-2xl leading-snug transition-colors group-hover:text-gold md:text-[1.75rem]">
        {a.title}
      </h3>
      <p className="mt-3 text-[0.9rem] leading-relaxed text-muted">{a.excerpt}</p>
    </Link>
  );
}

export function ArticlesPreview() {
  return (
    <Section tone="cream">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Artikelen" title="Kennis over beleggen in vastgoed." titleSize="md" />
          <Button href="/artikelen/" variant="text" arrow className="shrink-0">
            Alle artikelen
          </Button>
        </div>
        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={i * 120} as="article">
              <ArticleCard article={a} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

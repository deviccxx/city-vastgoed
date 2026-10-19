import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Title } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { ArticleCard } from "@/components/home/ArticlesPreview";
import { ContactSection } from "@/components/home/ContactSection";
import { articles, getArticle } from "@/lib/data/articles";
import { dateNl } from "@/lib/format";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/artikelen/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  return a ? { title: a.title, description: a.excerpt } : {};
}

export default async function ArticlePage({ params }: PageProps<"/artikelen/[slug]">) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const others = articles.filter((o) => o.slug !== a.slug);

  return (
    <>
      <section className="bg-ink text-cream">
        <Container className="py-20 md:py-28">
          <div className="max-w-3xl">
            <Eyebrow light className="mb-6">
              {dateNl(a.date)}
            </Eyebrow>
            <Title as="h1" size="xl">
              {a.title}
            </Title>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream/70">{a.excerpt}</p>
          </div>
        </Container>
      </section>

      <div className="relative aspect-[21/9] w-full bg-ink-2">
        <Image src={a.image} alt="" fill priority sizes="100vw" className="object-cover" />
      </div>

      <Section tone="cream">
        <Container>
          <article className="prose-luxe mx-auto max-w-2xl text-[1.0625rem] leading-[1.8] text-ink/85">
            {a.body.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
            <div className="mt-12 border-t border-stone-2 pt-8">
              <Button href="/aanbod/" variant="ink" arrow>
                Bekijk het aanbod
              </Button>
            </div>
          </article>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <Eyebrow className="mb-10">Meer artikelen</Eyebrow>
          <div className="grid gap-12 md:grid-cols-2 lg:gap-10">
            {others.map((o) => (
              <ArticleCard key={o.slug} article={o} />
            ))}
          </div>
        </Container>
      </Section>

      <ContactSection />
    </>
  );
}

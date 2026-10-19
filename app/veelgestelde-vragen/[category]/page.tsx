import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { ContactSection } from "@/components/home/ContactSection";
import { faqCategories, getFaqCategory } from "@/lib/data/faq";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return faqCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/veelgestelde-vragen/[category]">): Promise<Metadata> {
  const { category } = await params;
  const c = getFaqCategory(category);
  return c ? { title: `${c.title} – Veelgestelde vragen`, description: c.intro } : {};
}

export default async function FaqCategoryPage({
  params,
}: PageProps<"/veelgestelde-vragen/[category]">) {
  const { category } = await params;
  const c = getFaqCategory(category);
  if (!c) notFound();

  return (
    <>
      <PageHero eyebrow="Veelgestelde vragen" title={c.title} lead={c.intro} compact />
      <Section tone="cream">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <aside className="lg:col-span-3">
              <p className="eyebrow mb-5">Onderwerpen</p>
              <ul className="flex flex-col gap-3 text-[0.875rem]">
                {faqCategories.map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/veelgestelde-vragen/${o.slug}/`}
                      className={cn(
                        "link-gold",
                        o.slug === c.slug ? "text-ink" : "text-muted hover:text-ink",
                      )}
                    >
                      {o.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
            <div className="lg:col-span-8 lg:col-start-5">
              <Accordion items={c.items} />
            </div>
          </div>
        </Container>
      </Section>
      <ContactSection />
    </>
  );
}

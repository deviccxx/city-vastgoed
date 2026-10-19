import Link from "next/link";
import { site } from "@/lib/data/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-cream">
      <div className="rule-gold" />
      <Container className="grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-cream/60">
            {site.description}
          </p>
          <p className="mt-6 text-[0.6875rem] uppercase tracking-[0.16em] text-cream/40">
            KvK {site.contact.kvk}
          </p>
        </div>

        <div className="md:col-span-2">
          <p className="eyebrow mb-5 text-gold-2">Sitemap</p>
          <ul className="flex flex-col gap-3 text-[0.875rem] text-cream/70">
            {site.nav.main.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-gold hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/inloggen/" className="link-gold hover:text-cream">
                Mijn account
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="eyebrow mb-5 text-gold-2">Informatie</p>
          <ul className="flex flex-col gap-3 text-[0.875rem] text-cream/70">
            {site.nav.main
              .find((i) => i.label === "Informatie")
              ?.children?.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="link-gold hover:text-cream">
                    {c.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow mb-5 text-gold-2">Contact</p>
          <ul className="flex flex-col gap-3 text-[0.875rem] text-cream/70">
            <li>
              <a href={site.contact.phoneHref} className="link-gold hover:text-cream">
                {site.contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`} className="link-gold hover:text-cream">
                {site.contact.email}
              </a>
            </li>
            <li className="text-cream/50">{site.contact.address}</li>
          </ul>
          <a
            href={site.contact.calendly}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block border border-gold px-5 py-3 text-[0.6875rem] uppercase tracking-[0.16em] text-gold-2 transition-colors hover:bg-gold hover:text-ink"
          >
            Plan een gesprek
          </a>
        </div>
      </Container>

      <div className="border-t border-cream/10">
        <Container className="flex flex-col gap-4 py-6 text-[0.75rem] text-cream/45 md:flex-row md:items-center md:justify-between">
          <p>© {year} City Vastgoed B.V. Alle rechten voorbehouden.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {site.nav.legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-cream">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}

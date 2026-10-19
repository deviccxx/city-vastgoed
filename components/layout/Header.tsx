"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { site, type NavItem } from "@/lib/data/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { cn } from "@/lib/utils";

const nav = site.nav.main as readonly NavItem[];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu after navigation (state adjustment during render).
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-ink text-cream transition-shadow duration-500",
        scrolled && "shadow-[0_1px_0_0_rgba(184,154,90,0.35)]",
      )}
    >
      <Container
        className={cn(
          "flex items-center justify-between transition-[padding] duration-500",
          scrolled ? "py-4" : "py-6",
        )}
      >
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Hoofdmenu">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1.5 py-2 text-[0.8125rem] tracking-wide text-cream/80 transition-colors hover:text-cream",
                    isActive(item.href) && "text-cream",
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className="h-3.5 w-3.5 text-gold transition-transform duration-300 group-hover:rotate-180"
                    strokeWidth={1.5}
                  />
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="border border-gold/30 bg-ink-2 p-2">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block px-4 py-3 text-[0.8125rem] text-cream/80 transition-colors hover:bg-ink-3 hover:text-gold-2"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "py-2 text-[0.8125rem] tracking-wide text-cream/80 transition-colors hover:text-cream",
                  isActive(item.href) && "text-cream",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-7 lg:flex">
          <Link
            href="/inloggen/"
            className="link-gold text-[0.75rem] uppercase tracking-[0.16em] text-cream/80 hover:text-cream"
          >
            Inloggen
          </Link>
          <Link
            href="/inloggen/#registreren"
            className="border border-gold px-5 py-2.5 text-[0.75rem] uppercase tracking-[0.16em] text-gold-2 transition-colors duration-300 hover:bg-gold hover:text-ink"
          >
            Registreren
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="-mr-2 p-2 lg:hidden"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="h-6 w-6" strokeWidth={1.25} />
          ) : (
            <Menu className="h-6 w-6" strokeWidth={1.25} />
          )}
        </button>
      </Container>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 top-[73px] z-40 overflow-y-auto bg-ink transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <Container className="flex flex-col py-8">
          {nav.map((item) => (
            <div key={item.label} className="border-b border-cream/10 py-5">
              <Link
                href={item.href}
                className="font-display text-2xl text-cream"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="mt-3 flex flex-col gap-2.5 pl-1">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="text-[0.875rem] text-cream/65"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-8 flex flex-col gap-4">
            <Link
              href="/inloggen/#registreren"
              className="border border-gold py-4 text-center text-[0.75rem] uppercase tracking-[0.16em] text-gold-2"
            >
              Registreren
            </Link>
            <Link
              href="/inloggen/"
              className="py-2 text-center text-[0.75rem] uppercase tracking-[0.16em] text-cream/80"
            >
              Inloggen
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
}

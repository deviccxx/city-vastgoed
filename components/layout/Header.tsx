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
        "sticky top-0 z-50 border-b bg-cream/92 text-ink backdrop-blur-md transition-[border-color,box-shadow] duration-500",
        scrolled ? "border-gold/40 shadow-[0_10px_30px_-20px_rgba(14,20,32,0.35)]" : "border-stone",
      )}
    >
      <Container
        className={cn(
          "flex items-center justify-between transition-[padding] duration-500",
          scrolled ? "py-3.5" : "py-5",
        )}
      >
        <Logo light={false} />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Hoofdmenu">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1.5 py-2 text-[0.8125rem] tracking-wide text-ink/70 transition-colors hover:text-ink",
                    isActive(item.href) && "text-ink",
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className="h-3.5 w-3.5 text-gold transition-transform duration-300 group-hover:rotate-180"
                    strokeWidth={1.5}
                  />
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="border border-stone-2 bg-cream p-2 shadow-[0_20px_40px_-24px_rgba(14,20,32,0.4)]">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block px-4 py-3 text-[0.8125rem] text-ink/75 transition-colors hover:bg-white hover:text-ink"
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
                  "py-2 text-[0.8125rem] tracking-wide text-ink/70 transition-colors hover:text-ink",
                  isActive(item.href) && "text-ink",
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
            className="link-gold text-[0.75rem] uppercase tracking-[0.16em] text-ink/70 hover:text-ink"
          >
            Inloggen
          </Link>
          <Link
            href="/inloggen/#registreren"
            className="bg-ink px-5 py-2.5 text-[0.75rem] uppercase tracking-[0.16em] text-cream transition-colors duration-300 hover:bg-gold hover:text-ink"
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
          "fixed inset-x-0 bottom-0 top-[65px] z-40 overflow-y-auto bg-cream transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <Container className="flex flex-col py-8">
          {nav.map((item) => (
            <div key={item.label} className="border-b border-stone-2 py-5">
              <Link href={item.href} className="font-display text-2xl text-ink">
                {item.label}
              </Link>
              {item.children && (
                <div className="mt-3 flex flex-col gap-2.5 pl-1">
                  {item.children.map((c) => (
                    <Link key={c.href} href={c.href} className="text-[0.875rem] text-ink/60">
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
              className="bg-ink py-4 text-center text-[0.75rem] uppercase tracking-[0.16em] text-cream"
            >
              Registreren
            </Link>
            <Link
              href="/inloggen/"
              className="py-2 text-center text-[0.75rem] uppercase tracking-[0.16em] text-ink/70"
            >
              Inloggen
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
}

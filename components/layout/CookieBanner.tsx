"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "cv-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Deferred so the banner slides in after first paint and never blocks hydration.
    const t = setTimeout(() => {
      let consented = false;
      try {
        consented = Boolean(localStorage.getItem(KEY));
      } catch {
        consented = false;
      }
      if (!consented) setVisible(true);
    }, 800);
    return () => clearTimeout(t);
  }, []);

  const choose = (value: "all" | "necessary") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookievoorkeuren"
      className="fixed bottom-4 left-4 right-4 z-[60] border border-gold/40 bg-ink p-6 text-cream shadow-2xl md:left-auto md:right-6 md:bottom-6 md:max-w-md"
    >
      <p className="eyebrow mb-3 text-gold-2">Cookies</p>
      <p className="text-[0.875rem] leading-relaxed text-cream/75">
        Wij gebruiken strikt noodzakelijke cookies om de website te laten werken.
        Analytische cookies plaatsen wij alleen met uw toestemming. Lees meer in
        onze{" "}
        <Link href="/privacy-policy/" className="underline underline-offset-4 hover:text-gold-2">
          privacy policy
        </Link>
        .
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => choose("necessary")}
          className="border border-cream/30 px-5 py-3 text-[0.6875rem] uppercase tracking-[0.16em] text-cream/80 transition-colors hover:border-cream hover:text-cream"
        >
          Alleen noodzakelijk
        </button>
        <button
          type="button"
          onClick={() => choose("all")}
          className="bg-gold px-5 py-3 text-[0.6875rem] uppercase tracking-[0.16em] text-ink transition-colors hover:bg-gold-2"
        >
          Alles accepteren
        </button>
      </div>
    </div>
  );
}

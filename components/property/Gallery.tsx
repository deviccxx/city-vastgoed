"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const [i, setI] = useState(0);
  const prev = () => setI((v) => (v - 1 + images.length) % images.length);
  const next = () => setI((v) => (v + 1) % images.length);

  return (
    <div>
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-2">
        {images.map((src, idx) => (
          <Image
            key={src}
            src={src}
            alt={`${alt} – foto ${idx + 1}`}
            fill
            priority={idx === 0}
            sizes="(min-width: 1024px) 66vw, 100vw"
            className={cn(
              "object-cover transition-opacity duration-700 ease-[var(--ease-luxe)]",
              idx === i ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Vorige foto"
              className="absolute left-4 top-1/2 -translate-y-1/2 border border-cream/40 bg-ink/50 p-3 text-cream backdrop-blur transition-colors hover:border-gold hover:text-gold-2"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Volgende foto"
              className="absolute right-4 top-1/2 -translate-y-1/2 border border-cream/40 bg-ink/50 p-3 text-cream backdrop-blur transition-colors hover:border-gold hover:text-gold-2"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <span className="tnum absolute bottom-4 right-5 text-[0.6875rem] tracking-[0.16em] text-cream/80">
              {String(i + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-5 gap-3 md:grid-cols-10">
          {images.map((src, idx) => (
            <button
              key={src}
              type="button"
              onClick={() => setI(idx)}
              aria-label={`Foto ${idx + 1}`}
              className={cn(
                "relative aspect-[4/3] overflow-hidden transition-opacity",
                idx === i ? "opacity-100 ring-1 ring-gold" : "opacity-50 hover:opacity-90",
              )}
            >
              <Image src={src} alt="" fill sizes="120px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

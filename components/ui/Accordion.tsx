"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type AccordionItem = { q: string; a: string };

export function Accordion({
  items,
  light = false,
  defaultOpen = 0,
}: {
  items: AccordionItem[];
  light?: boolean;
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div
      className={cn(
        "divide-y border-y",
        light ? "divide-cream/15 border-cream/15" : "divide-stone-2 border-stone-2",
      )}
    >
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-6 py-6 text-left"
            >
              <span className="font-display text-xl leading-snug md:text-2xl">
                {item.q}
              </span>
              <Plus
                strokeWidth={1}
                className={cn(
                  "mt-1 h-5 w-5 shrink-0 text-gold transition-transform duration-500 ease-[var(--ease-luxe)]",
                  isOpen && "rotate-45",
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-500 ease-[var(--ease-luxe)]",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p
                  className={cn(
                    "max-w-2xl pb-7 text-[0.9375rem] leading-relaxed",
                    light ? "text-cream/70" : "text-muted",
                  )}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

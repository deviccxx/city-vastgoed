"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

/** UI only. Submission will be wired to the backend later. */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="border border-gold/40 p-10">
        <p className="eyebrow mb-4 text-gold-2">Dank u wel</p>
        <p className="font-display text-3xl">Uw bericht is ontvangen.</p>
        <p className="mt-4 text-[0.9375rem] text-cream/70">
          Wij nemen binnen één werkdag contact met u op.
        </p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-x-8 gap-y-7 sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <Field label="Bedrijfsnaam" name="company" placeholder="Optioneel" />
      <Field label="Naam" name="name" required />
      <Field label="Telefoon" name="phone" type="tel" required />
      <Field label="E-mailadres" name="email" type="email" required />
      <div className="sm:col-span-2">
        <Field label="Adres" name="address" />
      </div>
      <div className="sm:col-span-2">
        <label className="block">
          <span className="eyebrow mb-2 block text-cream/60">Bericht</span>
          <textarea name="message" rows={4} className="field field-dark resize-none" />
        </label>
      </div>
      <div className="sm:col-span-2">
        <Field
          label="Gewenste data en tijden voor een gesprek"
          name="availability"
          placeholder="Bijv. dinsdag- of donderdagochtend"
        />
      </div>
      <label className="flex items-start gap-3 text-[0.8125rem] leading-relaxed text-cream/60 sm:col-span-2">
        <input type="checkbox" required className="mt-1 h-4 w-4 accent-gold" />
        <span>
          Ik geef toestemming om relevante informatie over beleggen in vastgoed
          te ontvangen.
        </span>
      </label>
      <div className="sm:col-span-2">
        <Button type="submit" variant="gold" arrow>
          Verstuur
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="eyebrow mb-2 block text-cream/60">
        {label}
        {required && <span className="ml-1 text-gold">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="field field-dark"
      />
    </label>
  );
}

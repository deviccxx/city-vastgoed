"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

/**
 * UI-only login and registration forms, mirroring the fields of the current
 * platform. Submit handlers are stubs until the backend is connected.
 */
export function AuthForms() {
  const [loginSent, setLoginSent] = useState(false);
  const [regSent, setRegSent] = useState(false);

  return (
    <div className="grid gap-16 lg:grid-cols-12">
      {/* Login */}
      <div className="lg:col-span-4">
        <p className="eyebrow mb-4">Inloggen</p>
        <h2 className="font-display text-3xl">Welkom terug.</h2>
        {loginSent ? (
          <p className="mt-8 border border-gold/40 p-6 text-[0.9rem] text-muted">
            De inlogfunctie wordt gekoppeld zodra het portaal gereed is.
          </p>
        ) : (
          <form
            className="mt-8 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              setLoginSent(true);
            }}
          >
            <Field label="E-mailadres" name="email" type="email" required autoComplete="username" />
            <Field label="Wachtwoord" name="password" type="password" required autoComplete="current-password" />
            <label className="flex items-center gap-3 text-[0.8125rem] text-muted">
              <input type="checkbox" className="h-4 w-4 accent-gold" /> Onthouden
            </label>
            <Button type="submit" variant="ink" arrow className="w-full">
              Inloggen
            </Button>
            <Link href="#" className="link-gold inline-block text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
              Wachtwoord vergeten?
            </Link>
          </form>
        )}
      </div>

      {/* Register */}
      <div id="registreren" className="scroll-mt-28 lg:col-span-7 lg:col-start-6">
        <p className="eyebrow mb-4">Registreren</p>
        <h2 className="font-display text-3xl">Vrijblijvend een account aanmaken.</h2>
        {regSent ? (
          <div className="mt-8 border border-gold/40 bg-white p-8">
            <p className="font-display text-2xl">Dank u voor uw registratie.</p>
            <p className="mt-3 text-[0.9rem] text-muted">
              De registratie wordt gekoppeld aan het portaal zodra de backend gereed is.
            </p>
          </div>
        ) : (
          <form
            className="mt-8 space-y-10"
            onSubmit={(e) => {
              e.preventDefault();
              setRegSent(true);
            }}
          >
            <fieldset className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              <legend className="eyebrow mb-6 text-ink">Persoonlijke gegevens</legend>
              <div className="sm:col-span-2">
                <Field label="Bedrijfsnaam" name="company" placeholder="Indien van toepassing" />
              </div>
              <Field label="Voornaam" name="firstName" required autoComplete="given-name" />
              <Field label="Achternaam" name="lastName" required autoComplete="family-name" />
              <Field label="Mobiele telefoon" name="phone" type="tel" required autoComplete="tel" />
              <Field label="E-mailadres" name="email" type="email" required autoComplete="email" />
            </fieldset>

            <fieldset className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              <legend className="eyebrow mb-6 text-ink">Adres</legend>
              <div className="sm:col-span-2">
                <Field label="Straat en huisnummer" name="address1" required autoComplete="address-line1" />
              </div>
              <div className="sm:col-span-2">
                <Field label="Toevoeging" name="address2" autoComplete="address-line2" />
              </div>
              <Field label="Postcode" name="postcode" required autoComplete="postal-code" />
              <Field label="Stad" name="city" required autoComplete="address-level2" />
              <label className="block sm:col-span-2">
                <span className="eyebrow mb-2 block text-muted">Land</span>
                <select name="country" className="field" defaultValue="NL">
                  <option value="NL">Nederland</option>
                  <option value="BE">België</option>
                  <option value="DE">Duitsland</option>
                </select>
              </label>
            </fieldset>

            <fieldset className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              <legend className="eyebrow mb-6 text-ink">Betaalgegevens</legend>
              <Field label="IBAN" name="iban" required placeholder="NL00 BANK 0000 0000 00" />
              <Field label="BIC / Swift" name="bic" />
              <p className="text-[0.75rem] leading-relaxed text-muted sm:col-span-2">
                Uw IBAN wordt uitsluitend gebruikt voor het uitkeren van rendement en het
                terugbetalen van uw inleg.
              </p>
            </fieldset>

            <fieldset className="space-y-4">
              <legend className="eyebrow mb-4 text-ink">Ik ontvang graag e-mail over</legend>
              <label className="flex items-center gap-3 text-[0.875rem]">
                <input type="checkbox" name="mail_offers" className="h-4 w-4 accent-gold" defaultChecked /> Nieuw aanbod vastgoed
              </label>
              <label className="flex items-center gap-3 text-[0.875rem]">
                <input type="checkbox" name="mail_knowledge" className="h-4 w-4 accent-gold" /> Kennis en artikelen
              </label>
            </fieldset>

            <p className="text-[0.75rem] leading-relaxed text-muted">
              Uw persoonlijke gegevens worden gebruikt om uw ervaring op deze site te
              ondersteunen, om toegang tot uw account te beheren en voor doeleinden zoals
              omschreven in onze{" "}
              <Link href="/privacy-policy/" className="underline underline-offset-4">
                privacy policy
              </Link>
              . Een link om uw wachtwoord in te stellen wordt naar uw e-mailadres verzonden.
            </p>

            <Button type="submit" variant="gold" arrow>
              Registreren
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="eyebrow mb-2 block text-muted">
        {label}
        {required && <span className="ml-1 text-gold">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="field"
      />
    </label>
  );
}

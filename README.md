# City Vastgoed – frontend

Nieuwe frontend voor city-vastgoed.nl in de "Private Bank"-stijl: ink-navy, crème en champagne-goud, Cormorant Garamond voor koppen, Inter voor tekst en cijfers.

## Stack

- Next.js 16 (App Router, static export) + TypeScript
- Tailwind CSS v4 (design tokens in `app/globals.css`)
- `lucide-react` voor iconen

## Ontwikkelen

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm lint
pnpm build      # statische export naar ./out
```

Hosting onder een sub-pad (bijv. GitHub Pages): `NEXT_PUBLIC_BASE_PATH=/repo-naam pnpm build`.

## Structuur

- `app/` – routes (home, aanbod, panddetail, informatie, FAQ, artikelen, contact, inloggen, legal)
- `components/layout` – header, footer, AFM-balk, cookiebanner, page hero
- `components/ui` – Button, Heading, Section, Accordion, Reveal, Stat
- `components/home`, `components/property`, `components/auth` – secties per domein
- `lib/data` – getypeerde statische data (panden, FAQ, artikelen, site). Later te vervangen door API/DB.
- `lib/calc.ts` – rendementscalculator (pure functies, gedeeld met toekomstige backend)

## Nog niet gekoppeld

Formulieren (contact, inloggen, registreren) zijn UI-only. Het investeerdersportaal en de backend-logica (Briks, uitbetalingen, aanbrengbonus) volgen in een volgende fase.

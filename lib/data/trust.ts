/**
 * DUMMY DATA – placeholder content to test look & feel.
 * Every name, number and document below must be replaced by verified client data
 * before go-live. Items marked `verified: false` render with a "voorbeeld" hint.
 */

export const DUMMY = true;

/* ---------- Kerncijfers / trackrecord ---------- */
export const trackRecord = {
  activeSince: 2015,
  totalPaidOut: 1860000, // totaal uitgekeerd aan investeerders
  missedPayouts: 0,
  payoutsCount: 112, // aantal maandelijkse uitkeringsrondes
  investors: 214,
  avgOccupancyPct: 98.4,
  avgRealizedReturnPct: 7.9,
};

export type YearRecord = {
  year: number;
  returnPct: number;
  occupancyPct: number;
  paidOut: number;
};

export type PropertyRecord = {
  slug: string;
  valuationStart: number;
  valuationLatest: number;
  valuationDate: string;
  years: YearRecord[];
};

export const propertyRecords: PropertyRecord[] = [
  {
    slug: "oscarlaan-182-184-almere",
    valuationStart: 2850000,
    valuationLatest: 3410000,
    valuationDate: "2025-03",
    years: [
      { year: 2021, returnPct: 7.8, occupancyPct: 96.0, paidOut: 118000 },
      { year: 2022, returnPct: 8.9, occupancyPct: 98.5, paidOut: 134000 },
      { year: 2023, returnPct: 9.5, occupancyPct: 100, paidOut: 143000 },
      { year: 2024, returnPct: 9.4, occupancyPct: 99.2, paidOut: 141500 },
    ],
  },
  {
    slug: "belgieplein-36-amsterdam",
    valuationStart: 1920000,
    valuationLatest: 2480000,
    valuationDate: "2025-03",
    years: [
      { year: 2020, returnPct: 8.1, occupancyPct: 97.0, paidOut: 96000 },
      { year: 2021, returnPct: 8.7, occupancyPct: 100, paidOut: 103000 },
      { year: 2022, returnPct: 9.2, occupancyPct: 100, paidOut: 109000 },
      { year: 2023, returnPct: 9.6, occupancyPct: 98.0, paidOut: 114000 },
      { year: 2024, returnPct: 9.5, occupancyPct: 100, paidOut: 113000 },
    ],
  },
  {
    slug: "steynlaan-96-zeist",
    valuationStart: 2330000,
    valuationLatest: 2410000,
    valuationDate: "2025-03",
    years: [{ year: 2024, returnPct: 6.0, occupancyPct: 100, paidOut: 47600 }],
  },
];

export function getPropertyRecord(slug: string) {
  return propertyRecords.find((r) => r.slug === slug);
}

/* ---------- Team ---------- */
export type TeamMember = {
  name: string;
  role: string;
  photo: string;
  bio: string;
  background: string[];
  phone?: string;
  email?: string;
  contactPerson?: boolean;
};

export const team: TeamMember[] = [
  {
    name: "Mark van Dalen",
    role: "Oprichter en directeur",
    photo: "/images/team/1.jpg",
    bio: "Twintig jaar actief in Nederlands woonvastgoed. Begon als projectontwikkelaar bij een middelgrote bouwer en richtte in 2015 City Vastgoed op.",
    background: ["Vastgoedontwikkeling", "Financiering", "Lid VastgoedPro"],
    phone: "+31 6 38485791",
    email: "mark@city-vastgoed.nl",
    contactPerson: true,
  },
  {
    name: "Saskia Hendriks",
    role: "Investor relations",
    photo: "/images/team/2.jpg",
    bio: "Uw vaste aanspreekpunt. Voorheen private banker bij een grootbank, gespecialiseerd in vermogende particulieren en ondernemers.",
    background: ["Private banking", "DSI-gecertificeerd", "Wft Vermogen"],
    phone: "+31 6 12345678",
    email: "saskia@city-vastgoed.nl",
    contactPerson: true,
  },
  {
    name: "Rutger de Boer",
    role: "Finance en compliance",
    photo: "/images/team/3.jpg",
    bio: "Registeraccountant. Verantwoordelijk voor de uitkeringen, de jaarrekeningen per pand-B.V. en de relatie met de externe accountant.",
    background: ["RA", "Fiscaal recht", "Voorheen Big Four"],
  },
  {
    name: "Noor Jansen",
    role: "Vastgoedbeheer",
    photo: "/images/team/4.jpg",
    bio: "Stuurt de verhuurmakelaars en aannemers aan. Zorgt dat panden verhuurd blijven en technisch in orde zijn.",
    background: ["Bouwkunde", "Verhuur en onderhoud", "Energietransitie"],
  },
];

/* ---------- Partners ---------- */
export type Partner = {
  name: string;
  role: string;
  description: string;
};

export const partners: Partner[] = [
  { name: "Notariskantoor Van der Linden", role: "Notaris", description: "Passeert de obligatieovereenkomsten en beheert de derdengeldenrekening." },
  { name: "De Waard Taxaties", role: "Onafhankelijk taxateur", description: "NRVT-geregistreerd. Taxeert elk pand bij aankoop en elke twee jaar daarna." },
  { name: "Bergh & Partners Accountants", role: "Accountant", description: "Controleert de jaarrekening van elke pand-B.V. en de uitkeringsadministratie." },
  { name: "Noordstaete Hypotheken", role: "Financier", description: "Verstrekt de hypothecaire financiering per pand." },
  { name: "Wooncompagnie Verhuur", role: "Verhuurmakelaar", description: "Selecteert huurders, verzorgt de incasso en de wederverhuur." },
  { name: "Stichting Obligatiehouders CV", role: "Belangenbehartiger", description: "Onafhankelijke stichting die de belangen van obligatiehouders vertegenwoordigt." },
];

/* ---------- Juridische structuur ---------- */
export const legalEntity = {
  statutoryName: "City Vastgoed B.V.",
  kvk: "61591459",
  vat: "NL854400000B01",
  address: "Waldeck Pyrmontlaan 20, 1075 BX Amsterdam",
  directors: ["M. van Dalen", "R. de Boer"],
  founded: 2015,
};

export type StructureStep = { title: string; text: string };
export const structureExplainer: StructureStep[] = [
  { title: "U koopt Briks", text: "Elke Brik is een obligatie van € 500: een lening aan de vennootschap die het pand bezit. U wordt obligatiehouder, geen aandeelhouder." },
  { title: "Eén B.V. per pand", text: "Elk pand zit in een eigen besloten vennootschap. Daarin zitten het pand, de hypotheek, de huurcontracten en uw obligatie. Resultaten lopen niet door elkaar." },
  { title: "Huur stroomt door", text: "Huur komt binnen bij de pand-B.V. Na hypotheekrente, beheer en reserveringen wordt het netto resultaat maandelijks naar rato aan obligatiehouders uitgekeerd." },
  { title: "Stichting bewaakt uw belang", text: "Een onafhankelijke stichting obligatiehouders houdt toezicht op naleving van de obligatievoorwaarden en treedt namens alle houders op." },
  { title: "Na vijf jaar", text: "Het pand wordt getaxeerd. U ontvangt uw inleg terug plus uw aandeel in de waardestijging, of u herinvesteert." },
];

export const rankingExplainer = [
  { rank: 1, who: "Hypotheekverstrekker", text: "Heeft het eerste recht op de opbrengst bij verkoop van het pand." },
  { rank: 2, who: "Obligatiehouders (u)", text: "Daarna worden de Briks terugbetaald, naar rato, inclusief achterstallige rente." },
  { rank: 3, who: "Aandeelhouder (City Vastgoed)", text: "Pas als alle obligatiehouders zijn voldaan, deelt City Vastgoed in het restant." },
];

/* ---------- Risico's ---------- */
export type RiskScenario = {
  title: string;
  description: string;
  example: string;
  mitigation: string;
};

export const risks: RiskScenario[] = [
  {
    title: "Leegstand",
    description: "Een woning staat tijdelijk leeg tussen twee huurders of een huurder betaalt niet.",
    example: "Bij 10% leegstand in een pand van tien woningen daalt uw maandelijkse uitkering in die periode van bijvoorbeeld € 500 naar circa € 420.",
    mitigation: "Geldreserve per pand, snelle wederverhuur via de verhuurmakelaar, huurdersscreening.",
  },
  {
    title: "Waardedaling",
    description: "De waarde van het pand is bij het einde van de looptijd lager dan bij aankoop.",
    example: "Daalt de waarde met 10%, dan ontvangt u geen waardestijging en kan de terugbetaling van uw inleg onder druk komen.",
    mitigation: "Conservatieve aankoopprijs, eigen vermogen in elke B.V., spreiding over panden en steden.",
  },
  {
    title: "Rentestijging",
    description: "Bij herfinanciering van de hypotheek stijgt de rente, wat het netto huurresultaat verlaagt.",
    example: "Een rentestijging van 1 procentpunt op € 1,5 mln hypotheek kost € 15.000 per jaar, circa 1,8% rendement op de Briks.",
    mitigation: "Rentevaste perioden die aansluiten op de looptijd van vijf jaar.",
  },
  {
    title: "Vroegtijdig uitstappen",
    description: "U heeft uw inleg eerder nodig dan na vijf jaar.",
    example: "Bij vroegtijdig terugvorderen geldt een boete van 6%: op € 100.000 inleg ontvangt u € 94.000.",
    mitigation: "Beleg uitsluitend vermogen dat u vijf jaar kunt missen.",
  },
  {
    title: "Faillissement City Vastgoed B.V.",
    description: "De beheerorganisatie kan haar werk niet meer uitvoeren.",
    example: "Uw Briks zitten in de pand-B.V., niet in City Vastgoed B.V. Het pand en de huurcontracten blijven bestaan.",
    mitigation: "De stichting obligatiehouders kan een andere beheerder aanstellen.",
  },
  {
    title: "Geen AFM-toezicht",
    description: "City Vastgoed valt onder de vrijstelling van de prospectusplicht en staat niet onder toezicht van de AFM.",
    example: "Er is geen toetsing vooraf door een toezichthouder van het aanbod of de informatie.",
    mitigation: "Onafhankelijke taxaties, accountantscontrole per B.V., stichting obligatiehouders, volledige inzage in cijfers.",
  },
];

/* ---------- Proces na registratie ---------- */
export type ProcessStep = { step: string; title: string; text: string; term: string };
export const process: ProcessStep[] = [
  { step: "01", title: "Registratie", text: "Account aanmaken met uw gegevens en IBAN.", term: "5 minuten" },
  { step: "02", title: "Identificatie", text: "Verificatie van uw identiteit via iDIN of een kopie legitimatie.", term: "Direct" },
  { step: "03", title: "Keuze en overeenkomst", text: "U kiest een pand en het aantal Briks. U ontvangt de obligatieovereenkomst en voorwaarden digitaal ter ondertekening.", term: "1 werkdag" },
  { step: "04", title: "Betaling", text: "U maakt uw inleg over naar de derdengeldenrekening van de notaris.", term: "2–3 werkdagen" },
  { step: "05", title: "Bevestiging", text: "Na ontvangst worden uw Briks op naam gezet en zichtbaar in uw portaal.", term: "1 werkdag" },
  { step: "06", title: "Eerste uitkering", text: "Op de eerste van de volgende maand ontvangt u uw eerste huuruitkering.", term: "Maandelijks" },
];

/* ---------- Documenten per pand ---------- */
export type DocumentItem = { name: string; type: string; date: string; locked: boolean };
export const documents: DocumentItem[] = [
  { name: "Obligatievoorwaarden", type: "PDF · 24 pagina's", date: "2024-01", locked: true },
  { name: "Taxatierapport", type: "PDF · NRVT", date: "2025-03", locked: true },
  { name: "Jaarrekening pand-B.V. 2024", type: "PDF · gecontroleerd", date: "2025-05", locked: true },
  { name: "Informatiememorandum", type: "PDF", date: "2024-01", locked: false },
  { name: "Voorbeeld uitkeringsoverzicht", type: "PDF", date: "2025-06", locked: false },
];

/* ---------- Testimonials (verifieerbaar) ---------- */
export type Testimonial = {
  name: string;
  role: string;
  place: string;
  photo: string;
  quote: string;
  since: number;
  verified: boolean;
};

export const testimonials: Testimonial[] = [
  {
    name: "Joep Groenewoud",
    role: "Ondernemer, Groenewoud Logistiek",
    place: "Utrecht",
    photo: "/images/investeerders/1.jpg",
    quote: "Een deel van de bedrijfswinst beleg ik via City Vastgoed. Meer liquiditeit dan zelf panden kopen, en elke maand een voorspelbare uitkering.",
    since: 2019,
    verified: true,
  },
  {
    name: "Anneke de Jager",
    role: "Particulier investeerder",
    place: "Zeist",
    photo: "/images/investeerders/2.jpg",
    quote: "Geen zorgen en geen extra werk. Ik volg mijn portefeuille in het portaal en krijg elke maand mijn uitkering. Ik raad het iedere particuliere belegger aan.",
    since: 2021,
    verified: true,
  },
];

export const externalReviews = {
  platform: "Google Reviews",
  score: 4.8,
  count: 37,
};

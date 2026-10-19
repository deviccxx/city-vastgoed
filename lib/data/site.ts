export const site = {
  name: "City Vastgoed",
  tagline: "Vermogen laten renderen in Nederlands woonvastgoed",
  description:
    "City Vastgoed is een online beleggingsplatform voor Nederlands woonvastgoed. Investeer via vastgoedobligaties (Briks) en ontvang maandelijks uw aandeel in de huurinkomsten.",
  contact: {
    phone: "+31 6 38485791",
    phoneHref: "tel:+31638485791",
    email: "info@city-vastgoed.nl",
    address: "Waldeck Pyrmontlaan 20, 1075 BX Amsterdam",
    kvk: "61591459",
    calendly: "https://calendly.com/citybriks/30min",
  },
  nav: {
    main: [
      { label: "Home", href: "/" },
      { label: "Over City Vastgoed", href: "/over-city-vastgoed/" },
      {
        label: "Aanbod",
        href: "/aanbod/",
        children: [
          { label: "Overzicht panden", href: "/aanbod/" },
          { label: "Steynlaan 96, Zeist", href: "/aanbod/steynlaan-96-zeist/" },
          { label: "Bergweg 36, Zeist", href: "/aanbod/bergweg-36-zeist/" },
        ],
      },
      {
        label: "Informatie",
        href: "/beleggen-in-vastgoedobligaties/",
        children: [
          {
            label: "Beleggen in vastgoedobligaties",
            href: "/beleggen-in-vastgoedobligaties/",
          },
          {
            label: "Online beleggen in vastgoed",
            href: "/online-beleggen-in-vastgoed/",
          },
          { label: "Veelgestelde vragen", href: "/veelgestelde-vragen/" },
          { label: "Artikelen", href: "/artikelen/" },
        ],
      },
      { label: "Contact", href: "/contact/" },
    ],
    legal: [
      { label: "Algemene voorwaarden", href: "/algemene-voorwaarden/" },
      { label: "Disclaimer", href: "/disclaimer/" },
      { label: "Privacy policy", href: "/privacy-policy/" },
      { label: "Verwerkersovereenkomst", href: "/verwerkersovereenkomst/" },
    ],
  },
  keyFacts: {
    brikPrice: 500,
    termYears: 5,
    expectedReturn: "5 – 9%",
    payout: "Maandelijks",
    penaltyPct: 6,
    referralBonus: 50,
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: readonly { label: string; href: string }[];
};

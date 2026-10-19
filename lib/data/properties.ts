export type PropertyStatus = "open" | "volgefinancierd" | "gerealiseerd";

export type Property = {
  slug: string;
  name: string;
  city: string;
  address: string;
  status: PropertyStatus;
  cover: string;
  images: string[];
  summary: string;
  description: string[];
  usps: string[];
  accessibility: { center: string; publicTransport: string; car: string };
  mapsUrl?: string;
  facts: {
    surfaceM2: number;
    units: number;
    unitsLabel: string;
    propertyCost: number;
    investors: number;
  };
  financials?: {
    purchasePrice: number;
    mortgage: number;
    transferTax: number;
    fees: number;
    reserves: number;
    totalInvestment: number;
    monthlyRent: number;
    monthlyCosts: {
      interest: number;
      management: number;
      insurance: number;
      taxes: number;
      utilities: number;
      maintenance: number;
    };
    monthlyNet: number;
    rentYieldPct: number;
  };
  briks: { total: number; remaining: number };
  fundedPct: number;
  expectedReturnPct?: number;
  realizedReturnPct?: number;
  termYears: number;
  wozContext: string;
};

export const BRIK_PRICE = 500;

export const properties: Property[] = [
  {
    slug: "bergweg-36-zeist",
    name: "Bergweg 36",
    city: "Zeist",
    address: "Bergweg 36, Zeist",
    status: "open",
    cover: "/images/panden/bergweg/cover.jpg",
    images: [
      "/images/panden/bergweg/cover.jpg",
      "/images/panden/bergweg/2.jpg",
      "/images/panden/bergweg/3.jpg",
      "/images/panden/bergweg/4.jpg",
    ],
    summary:
      "Kwalitatieve transformatie van een voormalige winkel met bovenwoningen tot tien volledig gemeubileerde appartementen in het centrum van Zeist.",
    description: [
      "U investeert in compleet gerenoveerd en gemoderniseerd vastgoed aan de Bergweg in Zeist. De voormalige winkel en bovenwoningen zijn getransformeerd naar tien zelfstandige wooneenheden: acht tweekamerappartementen en twee driekamerappartementen, elk met eigen keuken, badkamer en berging.",
      "Bij de transformatie zijn de oude materialen vervangen door hedendaagse. De voorgevel is volledig vernieuwd, evenals al het leidingwerk. Alle buitenmuren zijn geïsoleerd, er zijn interne trappen aangebracht en het pand is voorzien van nieuwe aluminium kozijnen. Het pand verkeert daarmee in uitstekende staat van onderhoud.",
    ],
    usps: [
      "Ligging in het centrum",
      "Vriendelijke woonwijk",
      "Stadscentrum Zeist op loopafstand",
      "Bushalte op loopafstand",
      "Parkeergelegenheid",
    ],
    accessibility: {
      center:
        "De Bergweg ligt in het stadscentrum van Zeist, op loopafstand van het horeca- en winkelgebied.",
      publicTransport:
        "NS-station Driebergen-Zeist is op fietsafstand bereikbaar. Op loopafstand bevindt zich een bushalte.",
      car: "De op- en afritten van de A28 (Amersfoort–Utrecht) en de A2/A12 zijn binnen enkele minuten te bereiken.",
    },
    mapsUrl: "https://maps.google.com/?q=Bergweg+36+Zeist",
    facts: {
      surfaceM2: 686.4,
      units: 10,
      unitsLabel: "8 tweekamer- en 2 driekamerappartementen",
      propertyCost: 2314000,
      investors: 6,
    },
    financials: {
      purchasePrice: 1950000,
      mortgage: 1500000,
      transferTax: 74000,
      fees: 250000,
      reserves: 40000,
      totalInvestment: 814000,
      monthlyRent: 15440,
      monthlyCosts: {
        interest: 5689,
        management: 3000,
        insurance: 300,
        taxes: 500,
        utilities: 1150,
        maintenance: 500,
      },
      monthlyNet: 4051,
      rentYieldPct: 5.97,
    },
    briks: { total: 1628, remaining: 152 },
    fundedPct: 90.66,
    expectedReturnPct: 5.97,
    termYears: 5,
    wozContext:
      "De gemiddelde WOZ-waarde in Zeist bedroeg in 2022 € 439.000, een stijging van 60% in tien jaar.",
  },
  {
    slug: "steynlaan-96-zeist",
    name: "Steynlaan 96",
    city: "Zeist",
    address: "Steynlaan 96, Zeist",
    status: "volgefinancierd",
    cover: "/images/panden/steynlaan/cover.webp",
    images: [
      "/images/panden/steynlaan/cover.webp",
      "/images/panden/steynlaan/1.webp",
      "/images/panden/steynlaan/2.webp",
      "/images/panden/steynlaan/3.webp",
      "/images/panden/steynlaan/4.webp",
      "/images/panden/steynlaan/5.webp",
      "/images/panden/steynlaan/6.webp",
      "/images/panden/steynlaan/7.webp",
      "/images/panden/steynlaan/8.webp",
      "/images/panden/steynlaan/9.webp",
    ],
    summary:
      "Drie bouwlagen met schuin dak, getransformeerd tot zes appartementen en vier studio's. Volledig gemeubileerd, middensegment, nabij het centrum van Zeist.",
    description: [
      "U investeert in compleet gerenoveerd en gemoderniseerd vastgoed nabij de hoek van de Bergweg en Steynlaan in Zeist. De voormalige winkel is getransformeerd naar nieuwe en zelfstandige wooneenheden: vier studio's en zes tweekamerappartementen, elk met keuken, badkamer en berging.",
      "Het pand verkeert in uitstekende staat van onderhoud. Bij de transformatie zijn de oude materialen vervangen door hedendaagse. De voorgevel is volledig vernieuwd, evenals het leidingwerk. Alle buitenmuren zijn geïsoleerd, er zijn interne trappen aangebracht en het pand is voorzien van nieuwe aluminium kozijnen.",
    ],
    usps: [
      "Ligging in het centrum",
      "Vriendelijke woonwijk",
      "Stadscentrum Zeist op loopafstand",
      "Bushalte op loopafstand",
      "Parkeergelegenheid",
    ],
    accessibility: {
      center:
        "De Steynlaan ligt in het stadscentrum van Zeist, op loopafstand van het bruisende horeca- en winkelgebied.",
      publicTransport:
        "NS-station Driebergen-Zeist is op fietsafstand bereikbaar. Op loopafstand bevindt zich een bushalte.",
      car: "De op- en afritten van de A28 (Amersfoort–Utrecht) en de A2/A12 (Arnhem–Rotterdam, Utrecht–Amsterdam) zijn binnen enkele minuten te bereiken.",
    },
    mapsUrl: "https://maps.google.com/?q=Steynlaan+96+Zeist",
    facts: {
      surfaceM2: 657.1,
      units: 10,
      unitsLabel: "6 appartementen en 4 studio's",
      propertyCost: 2330000,
      investors: 8,
    },
    financials: {
      purchasePrice: 1970000,
      mortgage: 1537500,
      transferTax: 70000,
      fees: 250000,
      reserves: 40000,
      totalInvestment: 792500,
      monthlyRent: 14350,
      monthlyCosts: {
        interest: 4610,
        management: 3000,
        insurance: 270,
        taxes: 500,
        utilities: 1500,
        maintenance: 500,
      },
      monthlyNet: 3970,
      rentYieldPct: 6.01,
    },
    briks: { total: 1585, remaining: 0 },
    fundedPct: 100,
    expectedReturnPct: 6.01,
    termYears: 5,
    wozContext:
      "De gemiddelde WOZ-waarde in Zeist bedroeg in 2022 € 439.000, een stijging van 60% in tien jaar.",
  },
  {
    slug: "oscarlaan-182-184-almere",
    name: "Oscarlaan 182 – 184",
    city: "Almere",
    address: "Oscarlaan 182 – 184, Almere",
    status: "gerealiseerd",
    cover: "/images/panden/oscarlaan/cover.webp",
    images: ["/images/panden/oscarlaan/cover.webp"],
    summary:
      "Verbouwing van een voormalig kinderdagverblijf tot een appartementencomplex met vijftien woningen over vier woonlagen. Gestart in 2020, inmiddels volledig verhuurd.",
    description: [
      "Een voormalig kinderdagverblijf aan de Oscarlaan in Almere is getransformeerd tot een modern appartementencomplex met vijftien zelfstandige woningen verdeeld over vier woonlagen. De verbouwing is in 2020 gestart en inmiddels afgerond.",
      "Het project is volledig gefinancierd en verhuurd. Investeerders in dit pand ontvangen maandelijks hun aandeel in de huurinkomsten.",
    ],
    usps: [
      "Volledig verhuurd",
      "Jonge, groeiende stad",
      "Goede bereikbaarheid naar Amsterdam",
      "Energiezuinig gebouwd",
    ],
    accessibility: {
      center: "Gelegen in een rustige woonwijk van Almere, nabij voorzieningen.",
      publicTransport:
        "Busverbindingen naar station Almere Centrum op loopafstand.",
      car: "De A6 is binnen enkele minuten bereikbaar.",
    },
    facts: {
      surfaceM2: 0,
      units: 15,
      unitsLabel: "15 appartementen over 4 woonlagen",
      propertyCost: 0,
      investors: 0,
    },
    briks: { total: 0, remaining: 0 },
    fundedPct: 100,
    realizedReturnPct: 9.5,
    termYears: 5,
    wozContext:
      "De gemiddelde WOZ-waarde in Almere bedroeg in 2022 € 310.000, een stijging van 70% in tien jaar.",
  },
  {
    slug: "belgieplein-36-amsterdam",
    name: "Belgiëplein 36",
    city: "Amsterdam",
    address: "Belgiëplein 36, Amsterdam",
    status: "gerealiseerd",
    cover: "/images/panden/belgieplein/cover.webp",
    images: ["/images/panden/belgieplein/cover.webp"],
    summary:
      "Uniek wonen aan een rustig plein in Amsterdam Nieuw-West, in een buurt met relatief veel bewoners tussen de 25 en 44 jaar.",
    description: [
      "Het Belgiëplein en omgeving vormen een rustige buurt in Amsterdam met relatief veel bewoners tussen de 25 en 44 jaar. Het pand is volledig gefinancierd en verhuurd.",
      "Investeerders in dit pand ontvangen maandelijks hun aandeel in de huurinkomsten.",
    ],
    usps: [
      "Volledig verhuurd",
      "Amsterdam: sterke huurmarkt",
      "Rustige, groene omgeving",
      "Goede OV-verbindingen",
    ],
    accessibility: {
      center:
        "Gelegen in Amsterdam Nieuw-West, met winkels en voorzieningen op loopafstand.",
      publicTransport: "Tram- en bushaltes op loopafstand; metro Lelylaan nabij.",
      car: "De A10 ring is binnen enkele minuten bereikbaar.",
    },
    facts: {
      surfaceM2: 0,
      units: 0,
      unitsLabel: "Appartementen",
      propertyCost: 0,
      investors: 0,
    },
    briks: { total: 0, remaining: 0 },
    fundedPct: 100,
    realizedReturnPct: 9.5,
    termYears: 5,
    wozContext:
      "De gemiddelde WOZ-waarde in Amsterdam bedroeg in 2022 € 430.000, een stijging van 111% in tien jaar.",
  },
];

export function getProperty(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export const openProperties = properties.filter((p) => p.status !== "gerealiseerd");
export const realizedProperties = properties.filter((p) => p.status === "gerealiseerd");

export const statusLabel: Record<PropertyStatus, string> = {
  open: "Open voor investering",
  volgefinancierd: "Volledig gefinancierd",
  gerealiseerd: "Gerealiseerd",
};

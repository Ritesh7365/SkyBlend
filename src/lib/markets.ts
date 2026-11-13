export type Market = {
  id: string;
  name: string;
  description: string;
  productIds: string[];
};

export const MARKETS: Market[] = [
  {
    id: "blown-film",
    name: "Blown Film",
    description:
      "Masterbatches for monolayer and multilayer blown film lines where dispersion, opacity and process stability matter run after run.",
    productIds: ["white", "black", "colour", "additive", "filler"],
  },
  {
    id: "cast-film",
    name: "Cast Film",
    description:
      "Formulations suited to cast film clarity, colour strength and additive performance across packaging and specialty webs.",
    productIds: ["white", "colour", "additive", "filler"],
  },
  {
    id: "extrusion-coating",
    name: "Extrusion Coating & Lamination",
    description:
      "Carrier-matched colours and additives for coating and lamination processes that demand clean melt flow and consistent laydown.",
    productIds: ["white", "black", "colour", "additive"],
  },
  {
    id: "injection-moulding",
    name: "Injection Moulding",
    description:
      "Colour, white, black and filler systems engineered for mould filling, surface finish and repeatable shade across cycles.",
    productIds: ["white", "black", "colour", "additive", "filler"],
  },
  {
    id: "blow-moulding",
    name: "Blow Moulding",
    description:
      "Masterbatches for bottles, containers and industrial blow-moulded parts with stable colour and processing behaviour.",
    productIds: ["white", "black", "colour", "additive"],
  },
  {
    id: "rotational-moulding",
    name: "Rotational Moulding",
    description:
      "Grades selected for rotational moulding cycles, colour uniformity and polymer compatibility in PE systems.",
    productIds: ["white", "black", "colour", "additive"],
  },
  {
    id: "raffia-fibc",
    name: "Raffia & FIBC",
    description:
      "White, black, colour and filler masterbatches for woven sacks and FIBC where strength, opacity and cost balance are critical.",
    productIds: ["white", "black", "colour", "filler"],
  },
  {
    id: "pipe-profile",
    name: "Pipe & Profile Extrusion",
    description:
      "Black, colour and additive solutions for pipes and profiles that require colour consistency and process reliability.",
    productIds: ["black", "colour", "additive", "white"],
  },
  {
    id: "mono-multifilament",
    name: "Mono & Multifilament",
    description:
      "Dispersed colour and additive packages for filament lines where drawability and shade control affect downstream performance.",
    productIds: ["white", "black", "colour", "additive"],
  },
  {
    id: "agricultural-films",
    name: "Agricultural Films",
    description:
      "White, black and additive masterbatches supporting greenhouse, mulch and related agri-film applications.",
    productIds: ["white", "black", "additive", "colour"],
  },
  {
    id: "sheet-extrusion",
    name: "Sheet Extrusion (PP, HIPS, PC & PET)",
    description:
      "Colour and functional masterbatches for sheet lines in PP, HIPS, PC and PET — contact us for polymer-specific grades.",
    productIds: ["white", "black", "colour", "additive"],
  },
];

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
      "White, black, colour, additive, filler, desiccant and transparent grades mapped to blown film lines.",
    productIds: [
      "white",
      "black",
      "colour",
      "additive",
      "filler",
      "desiccant",
      "transparent",
    ],
  },
  {
    id: "cast-film",
    name: "Cast Film",
    description:
      "White, colour, additive, filler and transparent sodium-filler grades for cast film webs.",
    productIds: ["white", "colour", "additive", "filler", "transparent"],
  },
  {
    id: "extrusion-coating",
    name: "Extrusion Coating & Lamination",
    description:
      "Colour and additive systems for coating and lamination processes — discuss grade suitability with our team.",
    productIds: ["white", "black", "colour", "additive"],
  },
  {
    id: "injection-moulding",
    name: "Injection Moulding",
    description:
      "Colour and desiccant grades suited to moulding, with white/black options on request.",
    productIds: ["colour", "desiccant", "white", "black", "additive"],
  },
  {
    id: "blow-moulding",
    name: "Blow Moulding",
    description:
      "Colour and related masterbatches for blow-moulded parts — confirm grade with application details.",
    productIds: ["colour", "white", "black", "desiccant"],
  },
  {
    id: "rotational-moulding",
    name: "Rotational Moulding",
    description:
      "Colour systems for rotational moulding — share polymer and shade targets for grade selection.",
    productIds: ["colour", "white", "black"],
  },
  {
    id: "raffia-fibc",
    name: "Raffia & FIBC",
    description:
      "White, black, colour, UV additive and CaCO₃ filler grades for woven sacks and FIBC.",
    productIds: ["white", "black", "colour", "additive", "filler"],
  },
  {
    id: "pipe-profile",
    name: "Pipe & Profile Extrusion",
    description:
      "Black pipe and drip-pipe grades, with colour options for profiles.",
    productIds: ["black", "colour", "white", "additive"],
  },
  {
    id: "mono-multifilament",
    name: "Mono & Multifilament",
    description:
      "Colour and additive packages for filament lines — discuss drawability and shade needs with us.",
    productIds: ["white", "black", "colour", "additive"],
  },
  {
    id: "agricultural-films",
    name: "Agricultural Films",
    description:
      "White, black and additive grades for agri-film constructions.",
    productIds: ["white", "black", "additive", "colour"],
  },
  {
    id: "sheet-extrusion",
    name: "Sheet Extrusion (PP, HIPS, PC & PET)",
    description:
      "Includes PP sheet white grade SWHITE S4901 — contact us for polymer-specific recommendations.",
    productIds: ["white", "black", "colour", "additive"],
  },
];

export type ProductGrade = {
  code: string;
  specs: { label: string; value: string }[];
  colour?: string;
  application: string;
  group?: string;
};

export type ProductPhoto = {
  src: string;
  alt: string;
};

export type ProductFamily = {
  id: string;
  name: string;
  shortDesc: string;
  carriers: string[];
  benefits: string[];
  applications: string[];
  grades: ProductGrade[];
  highlight?: boolean;
  note?: string;
  photos?: ProductPhoto[];
};

function pct(n: number | string) {
  const num = typeof n === "number" ? n : Number(n);
  if (!Number.isFinite(num)) return String(n);
  // Excel sometimes stores 80% as 0.8
  const value = num > 0 && num < 1 ? num * 100 : num;
  return `${value}%`;
}

export const PRODUCT_FAMILIES: ProductFamily[] = [
  {
    id: "white",
    name: "White Masterbatch",
    shortDesc:
      "Catalogue white masterbatches with defined TiO₂ content and filler options for film, raffia/FIBC and sheet applications.",
    carriers: ["PE", "PP"],
    benefits: [
      "Grades from 20% to 70% TiO₂ content",
      "Pure white, blue tone, violet tone and optical brightener options",
      "Film, raffia/FIBC and PP sheet focussed grades",
    ],
    applications: [
      "Blown / cast film",
      "Raffia / FIBC",
      "PP sheet",
    ],
    photos: [
      {
        src: "/photos/products/white-pellets.webp",
        alt: "White masterbatch pellets — TiO₂ grades",
      },
    ],
    grades: [
      { code: "SWHITE S4901", specs: [{ label: "TiO₂ content", value: pct(20) }, { label: "Filler presence", value: "Yes" }], colour: "Blue tone", application: "PP sheet" },
      { code: "SWHITE F 4902", specs: [{ label: "TiO₂ content", value: pct(25) }, { label: "Filler presence", value: "Yes" }], colour: "White + OB", application: "Blown / cast film" },
      { code: "SWHITE 4903", specs: [{ label: "TiO₂ content", value: pct(20) }, { label: "Filler presence", value: "Yes" }], colour: "Pure white", application: "Blown / cast film" },
      { code: "SWHITE 4905", specs: [{ label: "TiO₂ content", value: pct(30) }, { label: "Filler presence", value: "Yes" }], colour: "White + OB", application: "Blown / cast film" },
      { code: "SWHITE L 4910", specs: [{ label: "TiO₂ content", value: pct(40) }, { label: "Filler presence", value: "Yes" }], colour: "White + OB", application: "Blown / cast film" },
      { code: "SWHITE R 4939", specs: [{ label: "TiO₂ content", value: pct(20) }, { label: "Filler presence", value: "Yes" }], colour: "White + OB", application: "Raffia / FIBC" },
      { code: "SWHITE F 4943", specs: [{ label: "TiO₂ content", value: pct(35) }, { label: "Filler presence", value: "Yes" }], colour: "White + OB", application: "Blown / cast film" },
      { code: "SWHITE F 4941", specs: [{ label: "TiO₂ content", value: pct(60) }, { label: "Filler presence", value: "No" }], colour: "Pure white", application: "Blown / cast film" },
      { code: "SWHITE F 4945", specs: [{ label: "TiO₂ content", value: pct(50) }, { label: "Filler presence", value: "Yes" }], colour: "Pure white", application: "Blown / cast film" },
      { code: "SWHITE F 4944", specs: [{ label: "TiO₂ content", value: pct(45) }, { label: "Filler presence", value: "Yes" }], colour: "White + OB", application: "Blown / cast film" },
      { code: "SWHITE F 4920", specs: [{ label: "TiO₂ content", value: pct(70) }, { label: "Filler presence", value: "No" }], colour: "Pure white", application: "Blown / cast film" },
      { code: "SWHITE F 4940", specs: [{ label: "TiO₂ content", value: pct(55) }, { label: "Filler presence", value: "Yes" }], colour: "Pure white", application: "Blown / cast film" },
      { code: "SWHITE F 4915", specs: [{ label: "TiO₂ content", value: pct(70) }, { label: "Filler presence", value: "No" }], colour: "Pure white", application: "Blown / cast film" },
      { code: "SWHITE P 4912", specs: [{ label: "TiO₂ content", value: pct(25) }, { label: "Filler presence", value: "Yes" }], colour: "Blue tone", application: "Blown / cast film" },
      { code: "SWHITE M 4911", specs: [{ label: "TiO₂ content", value: pct(55) }, { label: "Filler presence", value: "Yes" }], colour: "Pure white", application: "Blown / cast film" },
      { code: "SWHITE M 4907", specs: [{ label: "TiO₂ content", value: pct(25) }, { label: "Filler presence", value: "Yes" }], colour: "Violet tone + OB", application: "Blown / cast film" },
    ],
  },
  {
    id: "black",
    name: "Black Masterbatch",
    shortDesc:
      "Catalogue black masterbatches with specified carbon black content for film, pipe, drip pipe and compounding.",
    carriers: ["PE", "PP"],
    benefits: [
      "Carbon black loadings from 40% to 50%",
      "Film, pipe and drip-pipe focussed grades",
      "Compounding grade with filler option",
    ],
    applications: [
      "Blown / cast film",
      "Pipe",
      "Drip pipe",
      "Compounding",
    ],
    photos: [
      {
        src: "/photos/products/black-pellets.webp",
        alt: "Black masterbatch pellets — carbon black grades",
      },
    ],
    grades: [
      { code: "SBLACK F 4001", specs: [{ label: "Carbon black content", value: pct(40) }, { label: "Filler presence", value: "No" }], application: "Blown / cast film" },
      { code: "SBLACK P4005", specs: [{ label: "Carbon black content", value: pct(50) }, { label: "Filler presence", value: "No" }], application: "Pipe" },
      { code: "SBLACK C 4003", specs: [{ label: "Carbon black content", value: pct(40) }, { label: "Filler presence", value: "Yes" }], application: "Compounding" },
      { code: "SBLACK F 4006", specs: [{ label: "Carbon black content", value: pct(40) }, { label: "Filler presence", value: "No" }], application: "Blown / cast film" },
      { code: "SBLACK F 4035", specs: [{ label: "Carbon black content", value: pct(40) }, { label: "Filler presence", value: "No" }], application: "Drip pipe" },
      { code: "SBLACK F 4058", specs: [{ label: "Carbon black content", value: pct(40) }, { label: "Filler presence", value: "No" }], application: "Blown / cast film" },
      { code: "SBLACK P 4061", specs: [{ label: "Carbon black content", value: pct(40) }, { label: "Filler presence", value: "No" }], application: "Drip pipe" },
    ],
  },
  {
    id: "colour",
    name: "Colour Masterbatch",
    shortDesc:
      "Catalogue colour masterbatches across blue, yellow, red, silver grey and green — organic and inorganic pigment systems.",
    carriers: ["PE", "PP"],
    benefits: [
      "Standard shade range with clear grade codes",
      "Organic and inorganic pigment options",
      "Suitable for film, moulding and selected raffia grades",
    ],
    applications: [
      "Blown / cast film",
      "Moulding",
      "Raffia",
    ],
    photos: [
      {
        src: "/photos/products/colour-pellets.webp",
        alt: "Colour masterbatch pellets — blue, yellow, red, green and silver grey",
      },
    ],
    grades: [
      { group: "Blue", code: "SBLUE 4601", specs: [{ label: "Pigment type", value: "Organic" }, { label: "Filler presence", value: "Yes" }], colour: "Royal blue", application: "Blown / cast film / moulding" },
      { group: "Blue", code: "SBLUE 4602", specs: [{ label: "Pigment type", value: "Organic" }, { label: "Filler presence", value: "Yes" }], colour: "Sky blue", application: "Blown / cast film / moulding" },
      { group: "Blue", code: "SBLUE 4603", specs: [{ label: "Pigment type", value: "Organic" }, { label: "Filler presence", value: "Yes" }], colour: "Navy blue", application: "Blown / cast film / moulding" },
      { group: "Blue", code: "SBLUE 4604", specs: [{ label: "Pigment type", value: "Inorganic" }, { label: "Filler presence", value: "Yes" }], colour: "Sky blue", application: "Blown / cast film / moulding" },
      { group: "Blue", code: "SBLUE 4605", specs: [{ label: "Pigment type", value: "Organic" }, { label: "Filler presence", value: "Yes" }], colour: "Dark blue", application: "Blown / cast film / moulding" },
      { group: "Blue", code: "SBLUE 4606", specs: [{ label: "Pigment type", value: "Organic" }, { label: "Filler presence", value: "Yes" }], colour: "Deep blue", application: "Blown / cast film / moulding" },
      { group: "Yellow", code: "SYELLOW 4401", specs: [{ label: "Pigment type", value: "Organic" }, { label: "Filler presence", value: "Yes" }], colour: "Ivory yellow", application: "Blown / cast film / moulding" },
      { group: "Yellow", code: "SYELLOW 4402", specs: [{ label: "Pigment type", value: "Inorganic" }, { label: "Filler presence", value: "Yes" }], colour: "Golden yellow", application: "Blown / cast film / moulding" },
      { group: "Yellow", code: "SYELLOW 4403", specs: [{ label: "Pigment type", value: "Organic" }, { label: "Filler presence", value: "Yes" }], colour: "Lemon yellow", application: "Blown / cast film / moulding" },
      { group: "Yellow", code: "SYELLOW 4404", specs: [{ label: "Pigment type", value: "Organic" }, { label: "Filler presence", value: "Yes" }], colour: "Mustard yellow", application: "Blown / cast film / moulding" },
      { group: "Yellow", code: "SYELLOW 4405", specs: [{ label: "Pigment type", value: "Organic" }, { label: "Filler presence", value: "Yes" }], colour: "Saffron yellow", application: "Blown / cast film / moulding" },
      { group: "Yellow", code: "SYELLOW 4406", specs: [{ label: "Pigment type", value: "Organic" }, { label: "Filler presence", value: "Yes" }], colour: "Honey yellow", application: "Blown / cast film / moulding" },
      { group: "Yellow", code: "SYELLOW 4407", specs: [{ label: "Pigment type", value: "Inorganic" }, { label: "Filler presence", value: "Yes" }], colour: "Khaki yellow", application: "Blown / cast film / moulding" },
      { group: "Red", code: "SRED 4201", specs: [{ label: "Pigment type", value: "Organic" }, { label: "Filler presence", value: "Yes" }], colour: "Pure red", application: "Blown / cast film / moulding" },
      { group: "Red", code: "SRED 4202", specs: [{ label: "Pigment type", value: "Organic" }, { label: "Filler presence", value: "Yes" }], colour: "Tomato red", application: "Blown / cast film / moulding" },
      { group: "Red", code: "SRED 4203", specs: [{ label: "Pigment type", value: "Organic" }, { label: "Filler presence", value: "Yes" }], colour: "Wine red", application: "Blown / cast film / moulding" },
      { group: "Red", code: "SRED 4204", specs: [{ label: "Pigment type", value: "Organic" }, { label: "Filler presence", value: "Yes" }], colour: "Cherry red", application: "Blown / cast film / moulding" },
      { group: "Red", code: "SRED 4205", specs: [{ label: "Pigment type", value: "Organic" }, { label: "Filler presence", value: "Yes" }], colour: "Coral red", application: "Blown / cast film / moulding" },
      { group: "Red", code: "SRED 4206", specs: [{ label: "Pigment type", value: "Organic" }, { label: "Filler presence", value: "Yes" }], colour: "Burgundy red", application: "Blown / cast film / moulding" },
      { group: "Red", code: "SRED 4207", specs: [{ label: "Pigment type", value: "Organic" }, { label: "Filler presence", value: "Yes" }], colour: "—", application: "Raffia" },
      { group: "Silver grey", code: "SSIL 4801", specs: [{ label: "Pigment type", value: "Inorganic" }, { label: "Filler presence", value: "Yes" }], colour: "Standard silver grey", application: "Blown / cast film / moulding" },
      { group: "Silver grey", code: "SSIL 4802", specs: [{ label: "Pigment type", value: "Inorganic" }, { label: "Filler presence", value: "No" }], colour: "Dark silver grey", application: "Blown / cast film / moulding" },
      { group: "Silver grey", code: "SSIL 4803", specs: [{ label: "Pigment type", value: "Inorganic" }, { label: "Filler presence", value: "No" }], colour: "Light silver grey", application: "Blown / cast film / moulding" },
      { group: "Silver grey", code: "SSIL 4804", specs: [{ label: "Pigment type", value: "Inorganic" }, { label: "Filler presence", value: "No" }], colour: "Steel grey", application: "Blown / cast film / moulding" },
      { group: "Green", code: "SGREEN 4501", specs: [{ label: "Pigment type", value: "Organic" }, { label: "Filler presence", value: "Yes" }], colour: "Parrot green", application: "Blown / cast film / moulding" },
      { group: "Green", code: "SGREEN 4502", specs: [{ label: "Pigment type", value: "Organic" }, { label: "Filler presence", value: "Yes" }], colour: "Olive green", application: "Blown / cast film / moulding" },
      { group: "Green", code: "SGREEN 4503", specs: [{ label: "Pigment type", value: "Inorganic" }, { label: "Filler presence", value: "Yes" }], colour: "Lime green", application: "Blown / cast film / moulding" },
      { group: "Green", code: "SGREEN 4504", specs: [{ label: "Pigment type", value: "Organic" }, { label: "Filler presence", value: "Yes" }], colour: "Sea green", application: "Blown / cast film / moulding" },
      { group: "Green", code: "SGREEN 4505", specs: [{ label: "Pigment type", value: "Organic" }, { label: "Filler presence", value: "Yes" }], colour: "Bottle green", application: "Blown / cast film / moulding" },
      { group: "Green", code: "SGREEN 4506", specs: [{ label: "Pigment type", value: "Organic" }, { label: "Filler presence", value: "Yes" }], colour: "Forest green", application: "Blown / cast film / moulding" },
    ],
  },
  {
    id: "additive",
    name: "Additive Masterbatch",
    shortDesc:
      "Catalogue additive masterbatches for UV, slip, antiblock, antioxidant, process aid and brightener needs.",
    carriers: ["PE", "PP"],
    benefits: [
      "UV, slip, antiblock, AO, process aid and brightener grades",
      "Defined active content for each grade",
      "Film and raffia focussed packages",
    ],
    applications: [
      "Blown / cast film",
      "Raffia",
    ],
    photos: [
      {
        src: "/photos/products/additive-pellets.webp",
        alt: "Natural additive masterbatch pellets — close-up",
      },
      {
        src: "/photos/products/additive-bags.webp",
        alt: "Additive masterbatch bags and natural pellets",
      },
    ],
    note: "Additive types and loadings are as listed in the SkyBlend product catalogue. Contact us to match a grade to your line.",
    grades: [
      { code: "SUV NC 42001", specs: [{ label: "Type", value: "UV" }, { label: "Active content", value: pct(20) }], colour: "Natural", application: "Raffia" },
      { code: "SSL EF 41002", specs: [{ label: "Type", value: "Slip" }, { label: "Active content", value: pct(10) }], colour: "Natural", application: "Blown / cast film" },
      { code: "SAB NF 41003", specs: [{ label: "Type", value: "Antiblock — natural" }, { label: "Active content", value: pct(20) }], colour: "Natural", application: "Blown / cast film" },
      { code: "SAB SF 41004", specs: [{ label: "Type", value: "Antiblock — synthetic" }, { label: "Active content", value: pct(20) }], colour: "Natural", application: "Blown / cast film" },
      { code: "SAO NP 41005", specs: [{ label: "Type", value: "Antioxidant" }, { label: "Active content", value: pct(10) }], colour: "Natural", application: "Blown / cast film" },
      { code: "SSL EF 41006", specs: [{ label: "Type", value: "Slip" }, { label: "Active content", value: pct(5) }], colour: "Natural", application: "Blown / cast film" },
      { code: "SPA NF 41007", specs: [{ label: "Type", value: "Process aid" }, { label: "Active content", value: pct(2) }], colour: "Natural", application: "Blown / cast film" },
      { code: "SPA NF 41008", specs: [{ label: "Type", value: "Process aid" }, { label: "Active content", value: pct(3) }], colour: "Natural", application: "Blown / cast film" },
      { code: "SPA NF 41009", specs: [{ label: "Type", value: "Process aid" }, { label: "Active content", value: pct(4) }], colour: "Natural", application: "Blown / cast film" },
      { code: "SOB NF 41010", specs: [{ label: "Type", value: "Brightener" }, { label: "Active content", value: pct(1.5) }], colour: "Natural (OB)", application: "Blown / cast film" },
      { code: "SAO NP 41011", specs: [{ label: "Type", value: "Antioxidant" }, { label: "Active content", value: pct(20) }], colour: "Natural", application: "Blown / cast film" },
      { code: "SAB NF 41012", specs: [{ label: "Type", value: "Antioxidant" }, { label: "Active content", value: pct(40) }], colour: "Natural", application: "Blown / cast film" },
    ],
  },
  {
    id: "filler",
    name: "Filler Masterbatch (CaCO₃)",
    shortDesc:
      "PE/PP CaCO₃ filler masterbatches — a SkyBlend core strength — with high active content for film, cast film, FIBC and raffia.",
    carriers: ["PE", "PP"],
    benefits: [
      "High CaCO₃ active content (78–81%)",
      "Film and raffia/FIBC focussed grades",
      "Optical brightener option for raffia (SMODFILL OB RC 46)",
    ],
    applications: [
      "Blown film",
      "Blown / cast film",
      "FIBC / raffia",
    ],
    highlight: true,
    photos: [
      {
        src: "/photos/products/filler-pellets.webp",
        alt: "CaCO₃ filler masterbatch pellets",
      },
    ],
    grades: [
      { code: "SFILL FC 41", specs: [{ label: "Active content", value: pct(80) }], colour: "Natural", application: "Blown film" },
      { code: "SFILL FC 49", specs: [{ label: "Active content", value: pct(78) }], colour: "Natural", application: "Blown / cast film" },
      { code: "SFILL RC 45", specs: [{ label: "Active content", value: pct(81) }], colour: "Natural", application: "FIBC / raffia" },
      { code: "SMODFILL OB RC 46", specs: [{ label: "Active content", value: pct(80) }], colour: "Natural (OB)", application: "FIBC / raffia" },
      { code: "SFILL RC 51", specs: [{ label: "Active content", value: pct(81) }], colour: "Natural", application: "FIBC / raffia" },
    ],
  },
  {
    id: "desiccant",
    name: "Desiccant Masterbatch",
    shortDesc:
      "Moisture-guard desiccant masterbatches for blown film and moulding where residual moisture control supports process stability.",
    carriers: ["PE", "PP"],
    benefits: [
      "Active content from 40% to 70%",
      "Natural colour grades",
      "Suitable for blown film and moulding",
    ],
    applications: ["Blown film / moulding"],
    photos: [
      {
        src: "/photos/products/desiccant-pellets.webp",
        alt: "Desiccant masterbatch pellets — moisture guard grades",
      },
    ],
    grades: [
      { code: "SMOIST GUARD 44", specs: [{ label: "Active content", value: pct(50) }], colour: "Natural", application: "Blown film / moulding" },
      { code: "SMOIST GUARD 43", specs: [{ label: "Active content", value: pct(40) }], colour: "Natural", application: "Blown film / moulding" },
      { code: "SMOIST GUARD 47", specs: [{ label: "Active content", value: pct(70) }], colour: "Natural", application: "Blown film / moulding" },
      { code: "SMOIST GUARD 46", specs: [{ label: "Active content", value: pct(60) }], colour: "Natural", application: "Blown film / moulding" },
      { code: "SMOISTGUARD 45", specs: [{ label: "Active content", value: pct(50) }], colour: "Natural", application: "Blown film / moulding" },
      { code: "SMOISTGUARD 49", specs: [{ label: "Active content", value: pct(40) }], colour: "Natural", application: "Blown film / moulding" },
    ],
  },
  {
    id: "transparent",
    name: "Transparent / Sodium Filler",
    shortDesc:
      "Sodium filler transparent masterbatches for blown and cast film — natural and bluetone options at high active content.",
    carriers: ["PE", "PP"],
    benefits: [
      "High active content (75–82%)",
      "Natural and bluetone options",
      "Blown / cast film focussed",
    ],
    applications: ["Blown / cast film"],
    photos: [
      {
        src: "/photos/products/transparent-pellets.webp",
        alt: "Transparent sodium filler masterbatch pellets",
      },
    ],
    grades: [
      { code: "NATURAL SODIUM FILLER 82%", specs: [{ label: "Active content", value: pct(82) }], colour: "Natural", application: "Blown / cast film" },
      { code: "BLUETONE SODIUM FILLER 82%", specs: [{ label: "Active content", value: pct(80) }], colour: "Bluetone", application: "Blown / cast film" },
      { code: "NATURAL SODIUM FILLER 75%", specs: [{ label: "Active content", value: pct(75) }], colour: "Natural", application: "Blown / cast film" },
    ],
  },
];

export function getProductById(id: string) {
  return PRODUCT_FAMILIES.find((p) => p.id === id);
}

export function getAllGradeCodes() {
  return PRODUCT_FAMILIES.flatMap((f) =>
    f.grades.map((g) => ({ familyId: f.id, familyName: f.name, ...g })),
  );
}

/** Unique application labels from the product catalogue (for enquiry forms). */
export const CATALOGUE_APPLICATIONS = Array.from(
  new Set(
    PRODUCT_FAMILIES.flatMap((f) => [
      ...f.applications,
      ...f.grades.map((g) => g.application),
    ]),
  ),
).sort((a, b) => a.localeCompare(b));

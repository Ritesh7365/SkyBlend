export type ProductFamily = {
  id: string;
  name: string;
  shortDesc: string;
  carriers: string[];
  benefits: string[];
  applications: string[];
  highlight?: boolean;
  note?: string;
};

export const PRODUCT_FAMILIES: ProductFamily[] = [
  {
    id: "white",
    name: "White Masterbatch",
    shortDesc:
      "High-opacity white masterbatches formulated for consistent brightness, dispersion and processing across film, moulding and extrusion applications.",
    carriers: ["PE", "PP", "Engineering polymers"],
    benefits: [
      "Reliable opacity and whiteness",
      "Good dispersion for smooth surfaces",
      "Grades tailored to process and polymer",
    ],
    applications: [
      "Blown & cast film",
      "Injection & blow moulding",
      "Sheet extrusion",
      "Raffia & FIBC",
    ],
  },
  {
    id: "black",
    name: "Black Masterbatch",
    shortDesc:
      "Jet-black and process-stable black masterbatches engineered for colour strength, UV-related performance needs and clean handling on the line.",
    carriers: ["PE", "PP", "Engineering polymers"],
    benefits: [
      "Strong colour development",
      "Stable processing across runs",
      "Suitable for outdoor and industrial parts when specified",
    ],
    applications: [
      "Pipe & profile",
      "Injection moulding",
      "Agricultural films",
      "Raffia & FIBC",
    ],
  },
  {
    id: "colour",
    name: "Colour Masterbatch",
    shortDesc:
      "Standard and custom colour masterbatches matched to brand, application and polymer systems — from subtle tones to high-visibility shades.",
    carriers: ["PE", "PP", "Engineering polymers"],
    benefits: [
      "Custom shade matching",
      "Consistent batch-to-batch colour",
      "Formulated for target process windows",
    ],
    applications: [
      "Consumer packaging",
      "Injection & blow moulding",
      "Sheet & profile",
      "Rotational moulding",
    ],
  },
  {
    id: "additive",
    name: "Additive Masterbatch",
    shortDesc:
      "Functional additive concentrates that support processing, surface performance and product durability — supplied as representative grades or customised packages.",
    carriers: ["PE", "PP", "Engineering polymers"],
    benefits: [
      "Slip, antiblock, antioxidant and UV options",
      "Antifog and processing-aid packages",
      "Combinable with colour or filler systems where suitable",
    ],
    applications: [
      "Films & flexible packaging",
      "Agricultural films",
      "Extrusion coating",
      "Moulded and extruded parts",
    ],
    note: "Additive types shown are representative and customisable to your application.",
  },
  {
    id: "filler",
    name: "Filler Masterbatch",
    shortDesc:
      "PE- and PP-based filler masterbatches — a core SkyBlend strength — helping balance cost, stiffness, opacity and processability without compromising run consistency.",
    carriers: ["PE", "PP"],
    benefits: [
      "Cost-effective polymer extension",
      "Improved stiffness and dimensional feel where required",
      "Optimised for film, raffia, moulding and related lines",
    ],
    applications: [
      "Blown & cast film",
      "Raffia & FIBC",
      "Injection moulding",
      "Sheet extrusion",
    ],
    highlight: true,
  },
];

export function getProductById(id: string) {
  return PRODUCT_FAMILIES.find((p) => p.id === id);
}

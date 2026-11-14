import { PRODUCT_FAMILIES, type ProductFamily } from "@/lib/products";
import { MARKETS } from "@/lib/markets";

export const POLYMERS = [
  { id: "pe", label: "PE (LDPE / LLDPE / HDPE)" },
  { id: "pp", label: "PP" },
  { id: "engineering", label: "Engineering polymers" },
] as const;

export const NEEDS = [
  {
    id: "opacity-white",
    label: "Opacity / whiteness",
    productIds: ["white", "filler", "transparent"],
  },
  {
    id: "jet-black",
    label: "Jet black / pipe black",
    productIds: ["black"],
  },
  {
    id: "custom-colour",
    label: "Colour / shade",
    productIds: ["colour"],
  },
  {
    id: "surface-process",
    label: "UV, slip, antiblock, AO, process aid or brightener",
    productIds: ["additive"],
  },
  {
    id: "cost-stiffness",
    label: "CaCO₃ filler / cost optimisation",
    productIds: ["filler", "transparent"],
  },
  {
    id: "moisture",
    label: "Moisture control (desiccant)",
    productIds: ["desiccant"],
  },
  {
    id: "multi",
    label: "Combination / not sure yet",
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
] as const;

export type FinderAnswers = {
  polymer: string;
  marketId: string;
  needId: string;
};

export type FinderResult = {
  products: ProductFamily[];
  marketName: string;
  polymerLabel: string;
  needLabel: string;
  notes: string[];
};

export function runFinder(answers: FinderAnswers): FinderResult | null {
  const polymer = POLYMERS.find((p) => p.id === answers.polymer);
  const market = MARKETS.find((m) => m.id === answers.marketId);
  const need = NEEDS.find((n) => n.id === answers.needId);
  if (!polymer || !market || !need) return null;

  const byNeed = new Set<string>(need.productIds);
  const byMarket = new Set<string>(market.productIds);

  let products = PRODUCT_FAMILIES.filter(
    (p) => byNeed.has(p.id) && byMarket.has(p.id),
  );

  products = products.filter((p) => {
    if (answers.polymer === "engineering") {
      return p.carriers.some((c) => c.toLowerCase().includes("engineering"));
    }
    if (answers.polymer === "pe" || answers.polymer === "pp") {
      const label = answers.polymer.toUpperCase();
      return p.carriers.some(
        (c) => c.includes(label) || c.toLowerCase().includes("engineering"),
      );
    }
    return true;
  });

  if (products.length === 0) {
    products = PRODUCT_FAMILIES.filter(
      (p) => byNeed.has(p.id) && byMarket.has(p.id),
    );
  }

  const notes: string[] = [
    "Recommendations point to catalogue families — open each family for exact grade codes and specs.",
    "Ask for TDS or a sample once you shortlist a grade.",
  ];

  if (answers.needId === "cost-stiffness") {
    notes.unshift(
      "CaCO₃ filler and sodium transparent fillers are listed with active content in the catalogue.",
    );
  }

  return {
    products,
    marketName: market.name,
    polymerLabel: polymer.label,
    needLabel: need.label,
    notes,
  };
}

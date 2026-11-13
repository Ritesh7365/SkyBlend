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
    productIds: ["white", "filler"],
  },
  {
    id: "jet-black",
    label: "Jet black / outdoor black",
    productIds: ["black"],
  },
  {
    id: "custom-colour",
    label: "Custom or brand colour",
    productIds: ["colour"],
  },
  {
    id: "surface-process",
    label: "Slip, antiblock, AO, UV, antifog or processing aid",
    productIds: ["additive"],
  },
  {
    id: "cost-stiffness",
    label: "Cost optimisation / stiffness (filler)",
    productIds: ["filler"],
  },
  {
    id: "multi",
    label: "Combination / not sure yet",
    productIds: ["white", "black", "colour", "additive", "filler"],
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

  // Polymer filter: filler is PE/PP only; engineering excludes filler
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

  // If intersection empty, fall back to market ∩ need without polymer strictness
  if (products.length === 0) {
    products = PRODUCT_FAMILIES.filter(
      (p) => byNeed.has(p.id) && byMarket.has(p.id),
    );
  }

  const notes: string[] = [
    "Recommendations are starting points — final grades depend on machine, film structure, loading and end-use tests.",
    "Ask for TDS or a sample once you shortlist a family.",
  ];

  if (answers.needId === "cost-stiffness") {
    notes.unshift(
      "Filler masterbatches (PE & PP) are a SkyBlend core strength for cost and stiffness balance.",
    );
  }
  if (answers.polymer === "engineering") {
    notes.unshift(
      "Engineering polymer grades are application-specific — share resin grade and process for a precise match.",
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

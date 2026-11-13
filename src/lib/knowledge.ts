export type KnowledgeArticle = {
  slug: string;
  title: string;
  summary: string;
  readingMinutes: number;
  tags: string[];
  relatedProductIds: string[];
  relatedMarketIds: string[];
  sections: { heading: string; body: string[] }[];
};

export const KNOWLEDGE_ARTICLES: KnowledgeArticle[] = [
  {
    slug: "dispersion-in-raffia-and-fibc",
    title: "Dispersion that holds up in raffia & FIBC",
    summary:
      "Why tape lines punish poorly dispersed masterbatch — and what to specify when opacity, colour strength and loom efficiency all matter.",
    readingMinutes: 4,
    tags: ["Raffia", "FIBC", "Dispersion"],
    relatedProductIds: ["white", "black", "colour", "filler"],
    relatedMarketIds: ["raffia-fibc"],
    sections: [
      {
        heading: "Why raffia is unforgiving",
        body: [
          "Woven sack and FIBC tape lines stretch polymer hard. Undispersed pigment or filler agglomerates show up as weak spots, broken tapes, die lines or shade variation across the loom.",
          "A masterbatch that looks acceptable in a lab plaque can still struggle if it was not formulated for the draw ratios and throughputs common in raffia.",
        ],
      },
      {
        heading: "What to share with your supplier",
        body: [
          "Polymer (PE or PP), tape denier targets, whether you need white opacity, jet black, brand colour or filler for cost balance, and any recycling content in the recipe.",
          "SkyBlend can then discuss PE/PP white, black, colour or filler grades suited to raffia & FIBC — contact us for TDS and trial quantities.",
        ],
      },
    ],
  },
  {
    slug: "antiblock-and-slip-in-blown-film",
    title: "Antiblock & slip in blown film — practical pairing",
    summary:
      "How antiblock and slip work together on blown film lines, and what to clarify before ordering an additive package.",
    readingMinutes: 5,
    tags: ["Blown film", "Additive", "Slip", "Antiblock"],
    relatedProductIds: ["additive", "white", "colour"],
    relatedMarketIds: ["blown-film", "cast-film"],
    sections: [
      {
        heading: "Two jobs, one film structure",
        body: [
          "Antiblock reduces blocking between film layers in the roll. Slip reduces coefficient of friction for converting and packaging lines. They are often used together, but loadings and additive chemistry must match film thickness, polymer and converting needs.",
          "Overloading either can haze clear films, plate-out on dies or migrate differently than expected in multilayer structures.",
        ],
      },
      {
        heading: "Specification checklist",
        body: [
          "Note monolayer vs multilayer, target COF, whether food-contact or outdoor use applies, and if you already run white or colour masterbatch in the same layer.",
          "SkyBlend additive masterbatches (slip, antiblock and related packages) are representative and customisable — request a TDS discussion for your line.",
        ],
      },
    ],
  },
  {
    slug: "filler-loading-trade-offs",
    title: "Filler loading trade-offs in PE & PP",
    summary:
      "A clear look at what higher filler loadings buy you — and what they can cost in strength, optics and process stability.",
    readingMinutes: 4,
    tags: ["Filler", "Cost", "PE", "PP"],
    relatedProductIds: ["filler", "white"],
    relatedMarketIds: ["blown-film", "raffia-fibc", "injection-moulding"],
    sections: [
      {
        heading: "What filler is for",
        body: [
          "PE- and PP-based filler masterbatches help extend polymer, influence stiffness and opacity, and support cost targets. They are a core SkyBlend strength — but loading is never one-size-fits-all.",
          "Film, raffia and injection moulding tolerate filler differently. The right loading depends on mechanical specs, appearance and how hard your screw and die already work.",
        ],
      },
      {
        heading: "How to trial sensibly",
        body: [
          "Start from your current recipe cost and performance baseline. Trial stepwise loadings, watch melt pressure, gauge variation and finished-part tests — then lock a grade that your operators can run every shift.",
          "Discuss your process with SkyBlend for PE/PP filler options and TDS support rather than copying a loading from another plant.",
        ],
      },
    ],
  },
  {
    slug: "colour-matching-for-moulding",
    title: "Colour matching for injection & blow moulding",
    summary:
      "Shade approval fails more often from process mismatch than from a ‘wrong’ pantone — here’s what to align before sampling.",
    readingMinutes: 4,
    tags: ["Colour", "Injection", "Blow moulding"],
    relatedProductIds: ["colour", "white", "black"],
    relatedMarketIds: ["injection-moulding", "blow-moulding", "rotational-moulding"],
    sections: [
      {
        heading: "Match the process, not only the chip",
        body: [
          "Wall thickness, gloss, polymer grade, regrind level and mould temperature all shift perceived colour. A match approved on a thick plaque can miss on a thin bottle or textured part.",
          "Share resin grade, part photos or physical standards, target lighting (D65 / shop floor), and whether the part sits next to other branded components.",
        ],
      },
      {
        heading: "Working with SkyBlend",
        body: [
          "Colour masterbatches can be standard or custom. Use Request a Sample or Request TDS on the colour family page, or start from Find a Grade and choose custom colour as your need.",
        ],
      },
    ],
  },
  {
    slug: "uv-and-agricultural-films",
    title: "UV & durability thinking for agricultural films",
    summary:
      "Outdoor films ask more of masterbatch than colour alone — frame the UV and durability conversation with your real exposure conditions.",
    readingMinutes: 3,
    tags: ["Agricultural films", "UV", "Additive"],
    relatedProductIds: ["additive", "white", "black", "colour"],
    relatedMarketIds: ["agricultural-films"],
    sections: [
      {
        heading: "Exposure defines the package",
        body: [
          "Greenhouse, mulch and related agri-films see different UV intensity, heat and chemical exposure. Additive packages (including UV) should be discussed against season length, region and film construction — not a generic outdoor label.",
          "White and black masterbatches also affect heat build-up and light management; colour and additive choices should be made together where possible.",
        ],
      },
      {
        heading: "Next step",
        body: [
          "Use Find a Grade with Agricultural Films selected, or contact SkyBlend for additive and colour/black/white options with a TDS request describing your film type and region.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return KNOWLEDGE_ARTICLES.find((a) => a.slug === slug);
}

export type PhiladelphiaArea = {
  slug: string;
  name: string;
  href: string;
  description: string;
};

export const PHILADELPHIA_HUB_HREF = "/philadelphia-property-tax-appeal";

export const philadelphiaAreas: PhiladelphiaArea[] = [
  {
    slug: "center-city",
    name: "Center City",
    href: `${PHILADELPHIA_HUB_HREF}/center-city`,
    description: "High-rise condos, co-ops, historic conversions, and deeded parking as separate assessed items.",
  },
  {
    slug: "south-philadelphia",
    name: "South Philadelphia",
    href: `${PHILADELPHIA_HUB_HREF}/south-philadelphia`,
    description: "Dense rowhomes and trinities, expired 10-year abatements, and narrow-block comparable sales.",
  },
  {
    slug: "north-philadelphia",
    name: "North Philadelphia",
    href: `${PHILADELPHIA_HUB_HREF}/north-philadelphia`,
    description: "New construction and flipped sales that pull comps above older, unrenovated rowhomes.",
  },
  {
    slug: "river-wards",
    name: "River Wards",
    href: `${PHILADELPHIA_HUB_HREF}/river-wards`,
    description: "Infill next to older rowhomes, industrial conversions, and fast-moving sale prices.",
  },
  {
    slug: "northwest-philadelphia",
    name: "Northwest Philadelphia",
    href: `${PHILADELPHIA_HUB_HREF}/northwest-philadelphia`,
    description: "Detached and twin homes, historic stone houses, and hillside lots in Manayunk and beyond.",
  },
  {
    slug: "west-philadelphia",
    name: "West Philadelphia",
    href: `${PHILADELPHIA_HUB_HREF}/west-philadelphia`,
    description: "University-area rentals, twins, rowhomes, and large historic houses near Penn and Drexel.",
  },
  {
    slug: "northeast-philadelphia",
    name: "Northeast Philadelphia",
    href: `${PHILADELPHIA_HUB_HREF}/northeast-philadelphia`,
    description: "Larger lots and suburban-style twins and detached homes with a different comparable pool.",
  },
];

export function getPhiladelphiaArea(slug: string): PhiladelphiaArea {
  const area = philadelphiaAreas.find((entry) => entry.slug === slug);
  if (!area) {
    throw new Error(`Unknown Philadelphia area slug "${slug}"`);
  }
  return area;
}

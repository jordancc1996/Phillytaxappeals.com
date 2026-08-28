export type FaqTopicId =
  | "general"
  | "philadelphia"
  | "bucks"
  | "delaware"
  | "montgomery";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type FaqTopic = {
  id: FaqTopicId;
  heading: string;
  href?: string;
  hrefLabel?: string;
  source: string;
  items: FaqItem[];
};

export const FAQ_DEADLINES_VERIFIED_AS_OF = "August 28, 2026";

export const faqDeadlineNote = `Filing deadlines and related dates on this page were confirmed as of ${FAQ_DEADLINES_VERIFIED_AS_OF}. Check the county's official website before you file, because these dates change each year.`;

export const faqTopics: Record<FaqTopicId, FaqTopic> = {
  general: {
    id: "general",
    heading: "Pennsylvania property tax appeals",
    source: "Statewide practice (no single state deadline)",
    items: [
      {
        id: "pa-no-statewide-deadline",
        question: "Does Pennsylvania have one statewide property tax appeal deadline?",
        answer:
          "Pennsylvania has no single statewide property tax appeal deadline. Each of the state's counties sets its own annual deadline.",
      },
      {
        id: "typical-appeal-evidence",
        question: "What does a typical property tax appeal focus on?",
        answer:
          "A typical appeal centers on comparable sales data and documentation showing the assessed value does not match market value.",
      },
      {
        id: "change-of-assessment-notice",
        question: "What if I receive a Change of Assessment Notice?",
        answer:
          "Property owners who receive a Change of Assessment Notice (for example after new construction or an addition) generally get a separate, shorter filing window tied to that notice date, distinct from the standard annual deadline. The exact number of days varies by county.",
      },
    ],
  },
  philadelphia: {
    id: "philadelphia",
    heading: "Philadelphia",
    href: "/philadelphia-property-tax-appeal",
    hrefLabel: "Philadelphia property tax appeal page",
    source: "phila.gov, Board of Revision of Taxes",
    items: [
      {
        id: "phila-brt-deadline-2027",
        question: "When is the Philadelphia 2027 tax year formal appeal deadline?",
        answer:
          "The 2027 tax year formal appeal deadline with the Board of Revision of Taxes (BRT) is October 5, 2026.",
      },
      {
        id: "phila-flr-deadline-2027",
        question: "What is Philadelphia's First Level Review, and do I have to file it first?",
        answer:
          "The First Level Review (FLR) is a separate, informal option filed directly with the Office of Property Assessment (OPA). The FLR deadline is September 1, 2026. Property owners can file an FLR, a BRT appeal, or both. There is no requirement to file FLR first.",
      },
      {
        id: "phila-nov-mailing-2027",
        question: "When did the OPA mail 2027 Notices of Valuation?",
        answer: "The OPA began mailing 2027 Notices of Valuation on June 29, 2026.",
      },
      {
        id: "phila-2027-tax-calendar",
        question: "When do 2027 Philadelphia assessments and tax bills take effect?",
        answer:
          "New assessments take effect January 1, 2027. Real Estate Tax bills begin mailing December 1, 2026. Payment is due March 31, 2027.",
      },
      {
        id: "phila-how-to-file",
        question: "How can I file a Philadelphia BRT appeal?",
        answer:
          "Appeals can be filed by mail, in person, or by emailing the PDF form to appealinquiry@phila.gov. Mailed appeals carry no proof of timely filing.",
      },
      {
        id: "phila-brt-address",
        question: "Where is the Board of Revision of Taxes located?",
        answer: "BRT address: 601 Walnut Street, Suite 325 East, Philadelphia, PA 19106.",
      },
    ],
  },
  bucks: {
    id: "bucks",
    heading: "Bucks County",
    href: "/bucks-county-property-tax-appeal",
    hrefLabel: "Bucks County property tax appeal page",
    source: "buckscounty.gov",
    items: [
      {
        id: "bucks-deadline-2027",
        question: "When is the Bucks County 2027 annual appeal deadline?",
        answer:
          "The 2027 annual appeal deadline is August 3, 2026. The application, required fee, and documents must be on file or postmarked by that date.",
      },
      {
        id: "bucks-where-to-file",
        question: "Where do I file a Bucks County assessment appeal?",
        answer:
          "Filed with the Bucks County Board of Assessment Appeals, 55 E. Court Street, Doylestown, PA 18901. Phone: 215-348-6219. Email: boa@buckscounty.org.",
      },
      {
        id: "bucks-board-meetings",
        question: "When does the Bucks County Board of Assessment Appeals meet?",
        answer: "The Board meets the 1st and 3rd Tuesday of each month at 10 AM.",
      },
    ],
  },
  delaware: {
    id: "delaware",
    heading: "Delaware County",
    href: "/delaware-county-property-tax-appeal",
    hrefLabel: "Delaware County property tax appeal page",
    source: "delcopa.gov",
    items: [
      {
        id: "delco-deadline-2027",
        question: "When is the Delaware County 2027 annual appeal deadline?",
        answer: "The 2027 annual appeal deadline is August 1, 2026.",
      },
      {
        id: "delco-how-to-file",
        question: "Can I email or fax a Delaware County appeal?",
        answer:
          "Delaware County does not accept email or fax filings. Appeals must be mailed or hand-delivered.",
      },
      {
        id: "delco-address",
        question: "Where do I file a Delaware County assessment appeal?",
        answer:
          "Address: Board of Assessment & Appeals, Government Center Building, 201 West Front Street, Media, PA 19063. Phone: 610-891-4273.",
      },
      {
        id: "delco-court-appeal",
        question: "Can I appeal a Delaware County Board decision further?",
        answer:
          "A Board decision can be further appealed to the Court of Common Pleas within 30 days of the Board's findings, through the Office of Judicial Support (610-891-4388).",
      },
    ],
  },
  montgomery: {
    id: "montgomery",
    heading: "Montgomery County",
    href: "/montgomery-county-property-tax-appeal",
    hrefLabel: "Montgomery County property tax appeal page",
    source: "montcopa.org",
    items: [
      {
        id: "montco-deadline-2027",
        question: "When is the Montgomery County annual appeal deadline for the 2027 tax year?",
        answer:
          "The annual appeal deadline is August 1, effective for the following tax year. For 2026 filings, this is August 1, 2026, covering the 2027 tax year.",
      },
      {
        id: "montco-residential-fee",
        question: "What is the Montgomery County filing fee for a single-family home?",
        answer:
          "The filing fee for single-family residential properties is $50 (non-refundable), confirmed on the official appeal form.",
      },
      {
        id: "montco-how-to-file",
        question: "Can I file a Montgomery County annual appeal by email or online?",
        answer:
          "No email, fax, or online filing is accepted for annual appeals. Mail: Montgomery County Board of Assessment Appeals, PO Box 311, Norristown, PA 19404-0311. Hand-deliver: One Montgomery Plaza, 3rd Floor, Suite 301, 425 Swede Street, Norristown, PA 19401. Phone: 610-278-3761.",
      },
      {
        id: "montco-hearing-window",
        question: "When are Montgomery County annual appeal hearings held?",
        answer: "Annual appeal hearings run from May through October 31.",
      },
    ],
  },
};

export type FaqHubSection = {
  topicId: FaqTopicId;
  itemIds: string[];
};

export const faqHubSections: FaqHubSection[] = [
  { topicId: "general", itemIds: ["pa-no-statewide-deadline", "typical-appeal-evidence", "change-of-assessment-notice"] },
  { topicId: "philadelphia", itemIds: ["phila-brt-deadline-2027", "phila-flr-deadline-2027"] },
  { topicId: "bucks", itemIds: ["bucks-deadline-2027"] },
  { topicId: "delaware", itemIds: ["delco-deadline-2027", "delco-how-to-file"] },
  { topicId: "montgomery", itemIds: ["montco-deadline-2027", "montco-residential-fee"] },
];

export function getFaqItemsByIds(topicId: FaqTopicId, ids: string[]): FaqItem[] {
  const topic = faqTopics[topicId];
  return ids.map((id) => {
    const item = topic.items.find((entry) => entry.id === id);
    if (!item) {
      throw new Error(`Unknown FAQ id "${id}" on topic "${topicId}"`);
    }
    return item;
  });
}

export function getFaqHubAccordionItems(): FaqItem[] {
  return getFaqItemsByIds("general", faqHubSections.find((section) => section.topicId === "general")?.itemIds ?? []);
}

export const homepageCopyFaqItems: FaqItem[] = [
  {
    id: "home-residential-commercial",
    question: "Do you handle residential and commercial properties?",
    answer:
      "We provide tax appeal solutions for our clients whether it be for residential or commercial real estate.",
  },
  {
    id: "home-counties-served",
    question: "Which counties do you serve?",
    answer:
      "Whether you are in Bucks County, Delaware County, Montgomery County, or Philadelphia, we support our clients and the communities they call home.",
  },
  {
    id: "home-based-in-philadelphia",
    question: "Where is Philly Tax Appeals based?",
        answer:
          "Philly Tax Appeals is based in Philadelphia and deeply integrated into the real estate sector. We work tirelessly with property owners in Philadelphia and throughout the surrounding counties.",
  },
  {
    id: "home-why-few-appeal",
    question: "Why do so few homeowners appeal their assessments?",
    answer:
      "The National Taxpayers Union estimates 60% of all United States properties are over assessed while fewer than 5% of homeowners appeal their assessments because they do not know they can.",
  },
];

export const contactFaqItems: FaqItem[] = [
  {
    id: "contact-evaluation-free",
    question: "Is the property tax evaluation free?",
    answer:
      "Request your free property tax evaluation by filling out the form on this page. Our team will review your assessment at no cost.",
  },
  {
    id: "contact-upfront-costs",
    question: "Are there upfront costs?",
    answer:
      "We work on contingency, which means you only pay if we successfully reduce your property tax assessment.",
  },
  {
    id: "contact-counties-served",
    question: "Which counties can I request an evaluation for?",
    answer: "We serve Philadelphia, Bucks County, Delaware County, and Montgomery County.",
  },
  {
    id: "contact-how-to-start",
    question: "How do I request an evaluation?",
    answer: "Fill out the form on this page and our team will review your assessment at no cost.",
  },
];

export function getCountyFaqItems(
  topicId: Exclude<FaqTopicId, "general">,
): FaqItem[] {
  return faqTopics[topicId].items;
}

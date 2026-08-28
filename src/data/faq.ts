export type FaqTopicId = "general" | "philadelphia";

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
};

export type FaqHubSection = {
  topicId: FaqTopicId;
  itemIds: string[];
};

export const faqHubSections: FaqHubSection[] = [
  { topicId: "general", itemIds: ["pa-no-statewide-deadline", "typical-appeal-evidence", "change-of-assessment-notice"] },
  { topicId: "philadelphia", itemIds: ["phila-brt-deadline-2027", "phila-flr-deadline-2027"] },
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
    question: "Which parts of Philadelphia do you serve?",
    answer:
      "We handle Philadelphia property tax appeals across Center City, South Philadelphia, North Philadelphia, the River Wards, Northwest Philadelphia, West Philadelphia, and Northeast Philadelphia.",
  },
  {
    id: "home-based-in-philadelphia",
    question: "Where is Philly Tax Appeals based?",
        answer:
          "Philly Tax Appeals is based in Philadelphia and works with property owners across the city's neighborhoods.",
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
    question: "Which areas can I request an evaluation for?",
    answer: "We serve Philadelphia property owners, including Center City, South Philadelphia, North Philadelphia, the River Wards, Northwest Philadelphia, West Philadelphia, and Northeast Philadelphia.",
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

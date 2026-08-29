// Centralized schema.org definitions for all pages

const baseOrganization = {
  "@type": "LocalBusiness",
  "@id": "https://phillytaxappeals.com/#organization",
  "name": "Philly Tax Appeals",
  "url": "https://phillytaxappeals.com",
  "logo": "https://phillytaxappeals.com/icon-512.png",
  "description": "Professional property tax appeal services in Philadelphia. We help homeowners and businesses reduce their property tax burden with no upfront costs.",
  "priceRange": "$$",
  "telephone": "(267) 632-3162",
  "email": "jordancchaplin@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Philadelphia",
    "addressRegion": "PA",
    "addressCountry": "US"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Philadelphia",
      "containedInPlace": { "@type": "State", "name": "Pennsylvania" }
    }
  ],
  "knowsAbout": [
    "Property Tax Appeals",
    "Real Estate Tax Assessment",
    "Property Valuation",
    "Tax Reduction Services"
  ]
};

const baseWebsite = {
  "@type": "WebSite",
  "@id": "https://phillytaxappeals.com/#website",
  "url": "https://phillytaxappeals.com",
  "name": "Philly Tax Appeals",
  "publisher": { "@id": "https://phillytaxappeals.com/#organization" }
};

export type FaqSchemaItem = {
  question: string;
  answer: string;
};

const SITE_URL = "https://phillytaxappeals.com";

export const breadcrumbListNode = (
  pageUrl: string,
  crumbs: { name: string; item: string }[],
) => ({
  "@type": "BreadcrumbList",
  "@id": `${pageUrl}#breadcrumb`,
  itemListElement: crumbs.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: crumb.item,
  })),
});

const faqPageNode = (
  url: string,
  items: FaqSchemaItem[],
  meta?: { name: string; description: string },
) => ({
  "@type": "FAQPage",
  "@id": `${url}#faq`,
  "url": url,
  ...(meta ? { name: meta.name, description: meta.description } : {}),
  "isPartOf": { "@id": "https://phillytaxappeals.com/#website" },
  "mainEntity": items.map((item) => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer,
    },
  })),
});

export const createHomePageSchema = (faqItems: FaqSchemaItem[] = []) => ({
  "@context": "https://schema.org",
  "@graph": [
    baseOrganization,
    {
      "@type": "ProfessionalService",
      "@id": "https://phillytaxappeals.com/#service",
      "name": "Property Tax Appeal Services",
      "provider": { "@id": "https://phillytaxappeals.com/#organization" },
      "serviceType": "Property Tax Appeal",
      "description": "Expert property tax appeal representation with no upfront costs. We analyze your property assessment and file appeals to reduce your tax burden.",
      "areaServed": ["Philadelphia, PA"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Tax Appeal Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Property Tax Appeal" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Property Tax Appeal" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Property Assessment Analysis" } }
        ]
      }
    },
    ...(faqItems.length ? [faqPageNode("https://phillytaxappeals.com", faqItems)] : []),
    baseWebsite
  ]
});

export const homePageSchema = createHomePageSchema();

export const createCountyPageSchema = (
  county: string,
  url: string,
  faqItems: FaqSchemaItem[] = [],
) => ({
  "@context": "https://schema.org",
  "@graph": [
    baseOrganization,
    {
      "@type": "Service",
      "@id": `${url}#service`,
      "name": `${county} Property Tax Appeal Services`,
      "provider": { "@id": "https://phillytaxappeals.com/#organization" },
      "serviceType": "Property Tax Appeal",
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": county,
        "containedInPlace": { "@type": "State", "name": "Pennsylvania" }
      },
      "description": `Expert property tax appeal services for ${county}, Pennsylvania. We help property owners reduce their tax burden with no upfront costs.`
    },
    {
      "@type": "WebPage",
      "@id": `${url}#page`,
      "url": url,
      "name": `${county} Property Tax Appeals`,
      "isPartOf": { "@id": "https://phillytaxappeals.com/#website" },
      "about": { "@id": `${url}#service` },
      "breadcrumb": breadcrumbListNode(url, [
        { name: "Home", item: SITE_URL },
        { name: county, item: url },
      ])
    },
    ...(faqItems.length ? [faqPageNode(url, faqItems)] : []),
    baseWebsite
  ]
});

export const createPhiladelphiaAreaSchema = (
  areaName: string,
  url: string,
  description: string,
) => ({
  "@context": "https://schema.org",
  "@graph": [
    baseOrganization,
    {
      "@type": "Service",
      "@id": `${url}#service`,
      "name": `${areaName} Property Tax Appeal Services`,
      "provider": { "@id": "https://phillytaxappeals.com/#organization" },
      "serviceType": "Property Tax Appeal",
      "areaServed": {
        "@type": "Place",
        "name": `${areaName}, Philadelphia`,
        "containedInPlace": {
          "@type": "City",
          "name": "Philadelphia",
          "containedInPlace": { "@type": "State", "name": "Pennsylvania" },
        },
      },
      "description": description,
    },
    {
      "@type": "WebPage",
      "@id": `${url}#page`,
      "url": url,
      "name": `Philadelphia Property Tax Appeals in ${areaName}`,
      "isPartOf": { "@id": "https://phillytaxappeals.com/#website" },
      "about": { "@id": `${url}#service` },
      "breadcrumb": breadcrumbListNode(url, [
        { name: "Home", item: SITE_URL },
        { name: "Philadelphia Property Tax Appeal", item: `${SITE_URL}/philadelphia-property-tax-appeal` },
        { name: areaName, item: url },
      ]),
    },
    baseWebsite,
  ],
});

export const createContactPageSchema = (faqItems: FaqSchemaItem[] = []) => ({
  "@context": "https://schema.org",
  "@graph": [
    baseOrganization,
    {
      "@type": "ContactPage",
      "@id": "https://phillytaxappeals.com/contact#page",
      "url": "https://phillytaxappeals.com/contact",
      "name": "Contact Philly Tax Appeals",
      "description": "Get a free property tax assessment evaluation. Contact our team of property tax appeal experts serving Philadelphia.",
      "isPartOf": { "@id": "https://phillytaxappeals.com/#website" },
      "about": { "@id": "https://phillytaxappeals.com/#organization" },
      "breadcrumb": breadcrumbListNode("https://phillytaxappeals.com/contact", [
        { name: "Home", item: SITE_URL },
        { name: "Contact", item: "https://phillytaxappeals.com/contact" },
      ])
    },
    ...(faqItems.length ? [faqPageNode("https://phillytaxappeals.com/contact", faqItems)] : []),
    baseWebsite
  ]
});

export const contactPageSchema = createContactPageSchema();

export const createFaqPageSchema = (
  url: string,
  name: string,
  description: string,
  items: FaqSchemaItem[],
) => ({
  "@context": "https://schema.org",
  "@graph": [
    baseOrganization,
    {
      ...faqPageNode(url, items, { name, description }),
      breadcrumb: breadcrumbListNode(url, [
        { name: "Home", item: SITE_URL },
        { name: "FAQ", item: url },
      ]),
    },
    baseWebsite,
  ],
});

export const privacyPolicySchema = {
  "@context": "https://schema.org",
  "@graph": [
    baseOrganization,
    {
      "@type": "WebPage",
      "@id": "https://phillytaxappeals.com/privacy-policy#page",
      "url": "https://phillytaxappeals.com/privacy-policy",
      "name": "Privacy Policy | Philly Tax Appeals",
      "description": "Privacy policy for Philly Tax Appeals. Learn how we collect, use, and protect your personal information.",
      "isPartOf": { "@id": "https://phillytaxappeals.com/#website" }
    },
    baseWebsite
  ]
};

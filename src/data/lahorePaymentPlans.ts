/**
 * Legacy shape — kept only so islamabadPaymentPlans.ts (which shares the
 * generic PaymentPlanFamilySection/PaymentPlanCard components) keeps compiling.
 * Lahore itself now uses LahorePaymentPlan below.
 */
export interface PaymentPlan {
  id: string;
  city: string;
  family: string;
  category: "Residential" | "Commercial";
  title: string;
  details: string;
  thumbnail: string | null;
  pdfUrl: string | null;
  status: "available" | "coming-soon";
}

export interface LahorePaymentPlan {
  /** Unique slug used for /lahore/payment-plans/:slug */
  slug: string;
  /** Groups related plans under one heading on the list page (also drives the anchor id) */
  family: string;
  section: "residential" | "commercial";
  category: "Residential" | "Commercial";
  title: string;
  planType: string;
  image: string;
  description: string;
  tableColumns: string[];
  tableRows: string[][];
  notes?: string[];
  pdfUrl: string | null;
}

export const lahoreResidentialPlans: LahorePaymentPlan[] = [
  {
    slug: "tulip-extension-on-cash",
    family: "Tulip Blocks",
    section: "residential",
    category: "Residential",
    title: "Tulip Extension",
    planType: "On Cash",
    image: "/Tulip-Overseas-Block-HERO.webp",
    description:
      "Tulip Extension offers on-cash residential plots ready for possession, set within ParkView City Lahore's established Tulip community.",
    tableColumns: ["Plot Size", "Total Price (PKR)"],
    tableRows: [
      ["5 Marla", "6,500,000"],
      ["1 Kanal", "28,000,000"],
    ],
    pdfUrl: null,
  },
  {
    slug: "tulip-overseas-key-25",
    family: "Tulip Blocks",
    section: "residential",
    category: "Residential",
    title: "Tulip Overseas",
    planType: "Possession on 25% DP",
    image: "/Image (Tulip Overseas Block).webp",
    description:
      "Tulip Overseas brings ParkView City's KEY-25 deal to overseas Pakistanis — take possession on just 25% down payment and pay the balance in easy quarterly installments.",
    tableColumns: ["Plot Size", "Plot Price (PKR)", "Downpayment 25%", "Balance Payment", "6 Quarterly Installments"],
    tableRows: [
      ["5 Marla", "8,000,000", "2,000,000", "6,000,000", "1,000,000"],
      ["10 Marla", "16,000,000", "4,000,000", "12,000,000", "2,000,000"],
    ],
    pdfUrl: null,
  },
  {
    slug: "tulip-overseas-block-near-broadway",
    family: "Tulip Blocks",
    section: "residential",
    category: "Residential",
    title: "Tulip Overseas Block",
    planType: "Near Broadway Commercial",
    image: "/Tulip-Overseas-Block (1).webp",
    description:
      "Plots in Tulip Overseas Block positioned close to Broadway Commercial, combining residential comfort with convenient access to retail and business activity.",
    tableColumns: ["Plot Size", "Total Price (PKR)"],
    tableRows: [
      ["5 Marla", "7,500,000"],
      ["10 Marla", "14,500,000"],
    ],
    pdfUrl: null,
  },
  {
    slug: "tulip-overseas-block-ready-possession",
    family: "Tulip Blocks",
    section: "residential",
    category: "Residential",
    title: "Tulip Overseas Block",
    planType: "Ready for Possession Plots",
    image: "/Tulip-Overseas-Block (2).webp",
    description:
      "Ready-for-possession plots in Tulip Overseas Block, available immediately within a secure, fully planned residential community.",
    tableColumns: ["Plot Size", "Total Price (PKR)"],
    tableRows: [
      ["5 Marla", "6,500,000"],
      ["10 Marla", "13,000,000"],
    ],
    pdfUrl: null,
  },
  {
    slug: "broadway-residential-key-25",
    family: "Tulip Blocks",
    section: "residential",
    category: "Residential",
    title: "Broadway Residential",
    planType: "Possession on 25% Down Payment",
    image: "/LAHORE-PROJECT2.webp",
    description:
      "Broadway Residential offers possession on 25% down payment with the balance spread across easy quarterly installments, close to Broadway Commercial.",
    tableColumns: ["Plot Size", "Plot Price (PKR)", "Downpayment 25%", "Balance Payment", "6 Quarterly Installments"],
    tableRows: [
      ["10 Marla", "14,000,000", "3,500,000", "10,500,000", "1,750,000"],
    ],
    pdfUrl: null,
  },
  {
    slug: "crystal-block-on-cash",
    family: "Crystal Block",
    section: "residential",
    category: "Residential",
    title: "Crystal Block",
    planType: "On Cash / On Ground Plots",
    image: "/Crystal Block hero.webp",
    description:
      "Crystal Block presents an on-cash, on-ground residential opportunity with modern infrastructure, wide roads, parks, and full utilities.",
    tableColumns: ["Plot Size / Category", "Total Price (PKR)"],
    tableRows: [
      ["10 Marla", "11,000,000"],
      ["1 Kanal", "23,000,000"],
    ],
    pdfUrl: null,
  },
  {
    slug: "jade-extension-on-cash",
    family: "JADE Extension",
    section: "residential",
    category: "Residential",
    title: "JADE Extension",
    planType: "On Cash / Ready for Possession Plots on 100% Payment",
    image: "/JADE Extension hero.webp",
    description:
      "JADE Extension offers premium on-ground plots ready for immediate possession in one of ParkView City Lahore's most peaceful residential settings.",
    tableColumns: ["Plot Size / Category", "Total Price (PKR)"],
    tableRows: [
      ["5 Marla", "7,500,000"],
    ],
    pdfUrl: null,
  },
  {
    slug: "rose-block-payment-plan",
    family: "Rose Block",
    section: "residential",
    category: "Residential",
    title: "Rose Block",
    planType: "Payment Plan",
    image: "/Rose Market hero.webp",
    description:
      "Rose Block is a residential offering near The Walk and ParkView Zoo, well suited for families seeking a connected, amenity-rich location.",
    tableColumns: ["Plot Size / Category", "Total Price (PKR)"],
    tableRows: [
      ["5 Marla", "9,000,000"],
    ],
    pdfUrl: null,
  },
];

export const lahoreCommercialPlans: LahorePaymentPlan[] = [
  {
    slug: "tulip-commercial-on-cash",
    family: "Tulip Commercial",
    section: "commercial",
    category: "Commercial",
    title: "Tulip Commercial",
    planType: "On Cash",
    image: "/Tulip-Overseas-Block (4).webp",
    description:
      "Tulip Commercial is positioned as a community-facing retail and business address near residential movement for daily convenience and long-term value.",
    tableColumns: ["Plot Size / Category", "Total Price (PKR)"],
    tableRows: [
      ["5 Marla", "25,000,000"],
    ],
    pdfUrl: null,
  },
  {
    slug: "broadway-commercial-ready-possession",
    family: "Broadway Commercial",
    section: "commercial",
    category: "Commercial",
    title: "Broadway Commercial",
    planType: "On-Ground Ready for Possession Plots",
    image: "/LAHORE-PROJECTS.webp",
    description:
      "Broadway Commercial brings wide boulevard planning and business visibility to a destination-style commercial environment in ParkView City Lahore.",
    tableColumns: ["Plot Size", "Plot Price (PKR)"],
    tableRows: [
      ["8 Marla", "60,000,000"],
    ],
    pdfUrl: null,
  },
  {
    slug: "the-walk-ii-on-cash",
    family: "The Walk II",
    section: "commercial",
    category: "Commercial",
    title: "The Walk II",
    planType: "On Cash",
    image: "/LAHORE-Last_Section.webp",
    description:
      "The Walk II extends the walkable retail concept with premium storefront opportunities and lifestyle-led commercial planning.",
    tableColumns: ["Plot Size / Category", "Total Price (PKR)"],
    tableRows: [
      ["10 Marla", "120,000,000"],
    ],
    pdfUrl: null,
  },
  {
    slug: "the-walk-on-cash",
    family: "The Walk",
    section: "commercial",
    category: "Commercial",
    title: "The Walk",
    planType: "On Cash",
    image: "/LAHORE-first_Section.webp",
    description:
      "The Walk is a modern retail destination built around outdoor promenades, mixed-use commercial activity, and premium brand visibility.",
    tableColumns: ["Plot Size / Category", "Total Price (PKR)"],
    tableRows: [
      ["10 Marla", "100,000,000"],
    ],
    pdfUrl: null,
  },
  {
    slug: "imperial-block-on-cash",
    family: "Imperial Block",
    section: "commercial",
    category: "Commercial",
    title: "Imperial Block",
    planType: "On Cash",
    image: "/ProjectLahore.png",
    description:
      "Imperial Block offers on-cash commercial plots within ParkView City Lahore's growing commercial footprint.",
    tableColumns: ["Plot Size", "Plot Price (PKR)"],
    tableRows: [
      ["5 Marla", "7,000,000"],
      ["10 Marla", "14,000,000"],
    ],
    pdfUrl: null,
  },
  {
    slug: "tulip-extension-ready-possession",
    family: "Tulip Extension Commercial",
    section: "commercial",
    category: "Commercial",
    title: "Tulip Extension",
    planType: "Ready for Possession Plots",
    image: "/Tulip-Overseas-Block (5).webp",
    description:
      "Ready-for-possession commercial plots in Tulip Extension, available for immediate development within the Tulip community.",
    tableColumns: ["Plot Size", "Actual Price (PKR)"],
    tableRows: [
      ["10 Marla", "14,500,000"],
    ],
    pdfUrl: null,
  },
  {
    slug: "rose-market-on-cash",
    family: "Rose Commercial",
    section: "commercial",
    category: "Commercial",
    title: "Rose Market",
    planType: "On Cash",
    image: "/Rose Market hero.webp",
    description:
      "Rose Market is a boutique commercial development offering limited inventory in a high-demand location within ParkView City Lahore.",
    tableColumns: ["Floor", "Actual Price (PKR)", "Limited Time Offer (PKR)"],
    tableRows: [
      ["Ground Floor", "SOLD OUT", "SOLD OUT"],
      ["First Floor", "15,000,000", "12,500,000"],
    ],
    notes: ["Ground Floor inventory is sold out; First Floor units remain available."],
    pdfUrl: null,
  },
  {
    slug: "commercial-plots-ready-possession",
    family: "Commercial Plots",
    section: "commercial",
    category: "Commercial",
    title: "Commercial Plots",
    planType: "On-Ground Ready for Possession Plots",
    image: "/LAHORE-PROJECT2.webp",
    description:
      "Flexible on-ground commercial plots ready for possession, suited to businesses and investors seeking a planned commercial presence.",
    tableColumns: ["Plot Size", "Price (PKR)"],
    tableRows: [
      ["4 Marla", "25,000,000"],
      ["5 Marla", "30,000,000"],
      ["8 Marla", "100,000,000"],
    ],
    pdfUrl: null,
  },
  {
    slug: "crystal-block-ready-possession-commercial",
    family: "Crystal Commercial",
    section: "commercial",
    category: "Commercial",
    title: "Crystal Block",
    planType: "On-Ground Ready for Possession Plots",
    image: "/Crystal Block Gallery (1).webp",
    description:
      "Crystal Block's commercial plots are ready for possession on-ground, with an exclusive pre-launch offer for early investors.",
    tableColumns: ["Plot Size", "Plot Price (PKR)", "Exclusive Pre-Launch Offer (PKR)"],
    tableRows: [
      ["5 Marla", "9,000,000", "8,500,000"],
      ["10 Marla", "12,000,000", "11,000,000"],
    ],
    pdfUrl: null,
  },
];

export const lahorePaymentPlans: LahorePaymentPlan[] = [
  ...lahoreResidentialPlans,
  ...lahoreCommercialPlans,
];

export function getLahorePaymentPlanBySlug(slug: string): LahorePaymentPlan | undefined {
  return lahorePaymentPlans.find(plan => plan.slug === slug);
}

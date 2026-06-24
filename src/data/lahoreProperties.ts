import type { PropertyDetailData } from "@/components/lahore/PropertyDetailOverlay";

export const TULIP_DETAIL: PropertyDetailData = {
  id: "tulip-overseas-block",
  titleId: "tulip-detail-title",
  title: "Tulip Overseas Block",
  heroImage: "/Tulip-Overseas-Block-HERO.webp",
  heroAlt: "Tulip Overseas Block aerial hero view",
  badges: ["KEY-25 Deal", "Residential"],
  location: "Tulip Overseas Block, ParkView City Lahore",
  description:
    "Purpose-built for overseas Pakistanis, the Tulip Overseas Block offers ParkView City's landmark KEY-25 deal — get possession with just 25% down payment and pay the rest in easy quarterly installments.",
  features: [
    "Possession on 25% Down",
    "6 Easy Quarterly Installments",
    "Near Broadway Commercial",
    "Overseas Block Exclusives",
    "Gated Community",
    "24/7 Security",
  ],
  gallery: [
    { src: "/LAHORE-first_Section.webp", alt: "ParkView City Lahore residential streetscape" },
    { src: "/LAHORE-Last_Section.webp", alt: "ParkView City Lahore landscaped community view" },
    { src: "/LAHORE-PROJECT2.webp", alt: "ParkView City Lahore premium project view" },
    { src: "/LAHORE-PROJECTS.webp", alt: "ParkView City Lahore project exterior" },
    { src: "/Tulip-Overseas-Block%20(1).webp", alt: "Tulip Overseas Block residential area" },
    { src: "/Tulip-Overseas-Block%20(2).webp", alt: "Tulip Overseas Block green landscape" },
  ],
  galleryId: "tulip-gallery",
  galleryAriaLabel: "Enlarge Tulip Overseas Block gallery image",
  paymentPlanRoute: "/lahore/payment-plans#tulip-blocks-plans",
  closeAriaLabel: "Close Tulip Overseas Block details",
};

// ── Temporary gallery images for JADE Extension ─────────────────────────────
// Client has not yet supplied dedicated JADE Extension gallery photos.
// Replace the six src paths below with the final JADE Extension assets when
// provided — no other file needs to change.
const JADE_TEMP_GALLERY = [
  { src: "/LAHORE-PROJECTS.webp", alt: "JADE Extension Lahore project exterior" },
  { src: "/LAHORE-PROJECT2.webp", alt: "JADE Extension ParkView City Lahore view" },
  { src: "/LAHORE-first_Section.webp", alt: "ParkView City Lahore residential community" },
  { src: "/Tulip-Overseas-Block%20(1).webp", alt: "Temporary JADE Extension gallery image 1" },
  { src: "/Tulip-Overseas-Block%20(2).webp", alt: "Temporary JADE Extension gallery image 2" },
  { src: "/LAHORE-Last_Section.webp", alt: "ParkView City Lahore evening project view" },
];

export const JADE_DETAIL: PropertyDetailData = {
  id: "jade-extension",
  titleId: "jade-detail-title",
  title: "JADE Extension",
  heroImage: "/JADE%20Extension%20hero.webp",
  heroAlt: "JADE Extension at ParkView City Lahore",
  badges: ["Ready for Possession", "Residential"],
  location: "JADE Extension, ParkView City Lahore",
  description:
    "JADE Extension offers premium on-ground plots in one of ParkView City Lahore's most peaceful residential settings, providing immediate possession alongside parks, a mosque, complete security, and convenient access to essential amenities.",
  features: [
    "Ready for Possession",
    "On-Ground Plots",
    "Serene Setting",
    "Parks",
    "Mosque",
    "Security",
  ],
  gallery: JADE_TEMP_GALLERY,
  galleryId: "jade-gallery",
  galleryAriaLabel: "Enlarge JADE Extension gallery image",
  paymentPlanRoute: "/lahore/payment-plans#jade-extension-plans",
  closeAriaLabel: "Close JADE Extension details",
};

export const CRYSTAL_DETAIL: PropertyDetailData = {
  id: "crystal-block",
  titleId: "crystal-detail-title",
  title: "Crystal Block",
  heroImage: "/Crystal%20Block%20hero.webp",
  heroAlt: "Crystal Block at ParkView City Lahore",
  badges: ["Pre-Launch Offer", "Residential"],
  location: "Crystal Block, ParkView City Lahore",
  description:
    "Crystal Block presents an exciting pre-launch investment opportunity with on-ground residential plots, attractive pricing, modern infrastructure, wide roads, parks, and complete utilities.",
  features: [
    "Pre-Launch Pricing",
    "On-Ground Plots",
    "Ready for Development",
    "Wide Roads",
    "Parks",
    "Full Utilities",
  ],
  gallery: [
    { src: "/LAHORE-PROJECT2.webp", alt: "Crystal Block Lahore project view" },
    { src: "/LAHORE-PROJECTS.webp", alt: "Crystal Block ParkView City Lahore exterior" },
    { src: "/Crystal%20Block%20Gallery%20(1).webp", alt: "Crystal Block gallery image 1" },
    { src: "/Crystal%20Block%20Gallery%20(2).webp", alt: "Crystal Block gallery image 2" },
    { src: "/Crystal%20Block%20Gallery%20(3).webp", alt: "Crystal Block gallery image 3" },
    { src: "/Crystal%20Block%20Gallery%20(4).webp", alt: "Crystal Block gallery image 4" },
  ],
  galleryId: "crystal-gallery",
  galleryAriaLabel: "Enlarge Crystal Block gallery image",
  paymentPlanRoute: "/lahore/payment-plans#crystal-block-plans",
  closeAriaLabel: "Close Crystal Block details",
};

// Temporary Rose Market gallery images. Replace these with final Rose Market
// commercial photography when dedicated assets are supplied.
const ROSE_MARKET_TEMP_GALLERY = [
  { src: "/Rose%20Market%20hero.webp", alt: "Rose Market commercial hero view" },
  { src: "/LAHORE-PROJECT2.webp", alt: "Rose Market Lahore commercial project view" },
  { src: "/LAHORE-PROJECTS.webp", alt: "Rose Market commercial exterior" },
  { src: "/LAHORE-first_Section.webp", alt: "ParkView City Lahore commercial access" },
  { src: "/LAHORE-Last_Section.webp", alt: "ParkView City Lahore premium commercial view" },
  { src: "/ProjectLahore.png", alt: "ParkView City Lahore community aerial view" },
];

export const ROSE_MARKET_DETAIL: PropertyDetailData = {
  id: "rose-market",
  titleId: "rose-market-detail-title",
  title: "Rose Market",
  heroImage: "/Rose%20Market%20hero.webp",
  heroAlt: "Rose Market at ParkView City Lahore",
  badges: ["Limited Inventory", "Commercial"],
  location: "Rose Market, ParkView City Lahore",
  description:
    "Rose Market is a boutique commercial development in ParkView City Lahore, offering limited commercial inventory in a high-demand location with special pricing opportunities.",
  features: [
    "Boutique Market",
    "Limited Inventory",
    "Ground Floor: Sold Out",
    "First Floor Available",
    "Special Pricing",
    "High Demand Location",
  ],
  gallery: ROSE_MARKET_TEMP_GALLERY,
  galleryId: "rose-market-gallery",
  galleryAriaLabel: "Enlarge Rose Market gallery image",
  paymentPlanRoute: "/lahore/payment-plans#rose-commercial-plans",
  closeAriaLabel: "Close Rose Market details",
};

const LAHORE_COMMERCIAL_GALLERY = [
  { src: "/LAHORE-PROJECT2.webp", alt: "ParkView City Lahore commercial project frontage" },
  { src: "/LAHORE-PROJECTS.webp", alt: "ParkView City Lahore commercial architecture" },
  { src: "/LAHORE-first_Section.webp", alt: "ParkView City Lahore boulevard and community view" },
  { src: "/LAHORE-Last_Section.webp", alt: "ParkView City Lahore premium evening view" },
  { src: "/Rose%20Market%20hero.webp", alt: "ParkView City Lahore commercial market view" },
  { src: "/ProjectLahore.png", alt: "ParkView City Lahore aerial overview" },
];

function commercialDetail({
  id,
  title,
  badge,
  location,
  description,
  features,
  heroImage = "/LAHORE-PROJECT2.webp",
}: {
  id: string;
  title: string;
  badge: string;
  location: string;
  description: string;
  features: string[];
  heroImage?: string;
}): PropertyDetailData {
  return {
    id,
    titleId: `${id}-detail-title`,
    title,
    heroImage,
    heroAlt: `${title} at ParkView City Lahore`,
    badges: [badge, "Commercial"],
    location,
    description,
    features,
    gallery: LAHORE_COMMERCIAL_GALLERY,
    galleryId: `${id}-gallery`,
    galleryAriaLabel: `Enlarge ${title} gallery image`,
    paymentPlanRoute: "/lahore/payment-plans",
    closeAriaLabel: `Close ${title} details`,
  };
}

export const TULIP_COMMERCIAL_DETAIL = commercialDetail({
  id: "tulip-commercial",
  title: "Tulip Commercial",
  badge: "Commercial",
  location: "Tulip Commercial, ParkView City Lahore",
  description:
    "Tulip Commercial is planned as a community-facing retail and business address, positioned near residential movement to support visibility, daily convenience, and long-term commercial value.",
  features: ["Retail Frontage", "Community Access", "Investor Focused", "High Visibility", "Flexible Commercial Use", "Gated Community"],
  heroImage: "/LAHORE-PROJECT2.webp",
});

export const BROADWAY_COMMERCIAL_DETAIL = commercialDetail({
  id: "broadway-commercial",
  title: "Broadway Commercial",
  badge: "Premium Phase",
  location: "Broadway Commercial, ParkView City Lahore",
  description:
    "Broadway Commercial brings wide boulevard planning, business visibility, and a destination-style commercial environment to ParkView City Lahore.",
  features: ["Wide Boulevards", "Premium Commercial Address", "Retail Visibility", "High Footfall Planning", "Modern Infrastructure", "Business-Friendly Layout"],
  heroImage: "/LAHORE-PROJECTS.webp",
});

export const THE_WALK_II_DETAIL = commercialDetail({
  id: "the-walk-ii",
  title: "The Walk II",
  badge: "Retail Avenue",
  location: "The Walk II, ParkView City Lahore",
  description:
    "The Walk II extends the walkable retail concept with premium storefront opportunities, outdoor movement, dining potential, and lifestyle-led commercial planning.",
  features: ["Walkable Retail", "Dining Potential", "Premium Storefronts", "Outdoor Promenade", "Modern Streetscape", "Commercial Lifestyle Zone"],
  heroImage: "/LAHORE-Last_Section.webp",
});

export const THE_WALK_DETAIL = commercialDetail({
  id: "the-walk",
  title: "The Walk",
  badge: "Retail Block",
  location: "The Walk, ParkView City Lahore",
  description:
    "The Walk is a modern retail destination designed around outdoor promenades, mixed-use commercial activity, and premium brand visibility.",
  features: ["Retail Promenade", "Mixed-Use Planning", "Premium Visibility", "Modern Architecture", "Outdoor Experience", "Brand-Friendly Frontage"],
  heroImage: "/LAHORE-first_Section.webp",
});

export const COMMERCIAL_PLOTS_DETAIL = commercialDetail({
  id: "commercial-plots",
  title: "Commercial Plots",
  badge: "Commercial Plots",
  location: "Commercial Plots, ParkView City Lahore",
  description:
    "Commercial Plots at ParkView City Lahore offer flexible opportunities for businesses and investors seeking a planned commercial presence inside a growing gated community.",
  features: ["Flexible Plot Options", "Planned Commercial Zones", "Investor Opportunity", "Community Access", "Modern Infrastructure", "Long-Term Value"],
  heroImage: "/ProjectLahore.png",
});

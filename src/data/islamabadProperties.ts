import type { PropertyDetailData } from "@/components/lahore/PropertyDetailOverlay";

const TEMP_GALLERY = [
  { src: "/Tulip-Overseas-Block%20(1).webp", alt: "ParkView City Islamabad community landscape" },
  { src: "/Tulip-Overseas-Block%20(2).webp", alt: "ParkView City Islamabad green spaces" },
  { src: "/Crystal%20Block%20Gallery%20(1).webp", alt: "ParkView City Islamabad streetscape" },
  { src: "/Crystal%20Block%20Gallery%20(2).webp", alt: "ParkView City Islamabad community view" },
  { src: "/A%20Place%20to%20call%20home.webp", alt: "ParkView City Islamabad aerial overview" },
  { src: "/VirtualTourSection.webp", alt: "ParkView City Islamabad drone view" },
];

export const J_BLOCK_DETAIL: PropertyDetailData = {
  id: "j-block-privilege",
  titleId: "j-block-detail-title",
  title: "J Block Privilege",
  heroImage: "/J_Block_Privilege.png",
  heroAlt: "J Block Privilege aerial view, ParkView City Islamabad",
  badges: ["Privilege Block", "Residential"],
  location: "J Block, ParkView City Islamabad",
  description:
    "J Block Privilege offers an elevated residential experience within ParkView City Islamabad — a thoughtfully planned enclave with premium plot sizes, wide tree-lined boulevards, and direct access to the community's finest amenities.",
  features: [
    "5 Marla, 10 Marla, 1 Kanal",
    "Premium Boulevard Access",
    "Proximity to Commercial Hub",
    "Landscaped Green Belts",
    "Gated Community",
    "24/7 Security",
  ],
  gallery: TEMP_GALLERY,
  galleryId: "j-block-gallery",
  galleryAriaLabel: "Enlarge J Block Privilege gallery image",
  paymentPlanRoute: "/islamabad/payment-plans#j-block-privilege-plans",
  closeAriaLabel: "Close J Block Privilege details",
};

export const D_BLOCK_DETAIL: PropertyDetailData = {
  id: "d-block",
  titleId: "d-block-detail-title",
  title: "D Block",
  heroImage: "/Block_D.png",
  heroAlt: "D Block ParkView City Islamabad aerial view",
  badges: ["Residential Plots", "Available"],
  location: "D Block, ParkView City Islamabad",
  description:
    "D Block offers well-positioned residential plots within ParkView City Islamabad, blending accessibility, value, and modern community infrastructure in one of the society's most established residential zones.",
  features: [
    "5 Marla, 10 Marla, 1 Kanal",
    "Established Residential Zone",
    "Wide Internal Roads",
    "Utility Connections Available",
    "Gated Community",
    "24/7 Security",
  ],
  gallery: [
    { src: "/Crystal%20Block%20Gallery%20(1).webp", alt: "D Block community view" },
    { src: "/Crystal%20Block%20Gallery%20(2).webp", alt: "D Block residential streetscape" },
    { src: "/Tulip-Overseas-Block%20(3).webp", alt: "D Block green landscape" },
    { src: "/Tulip-Overseas-Block%20(4).webp", alt: "D Block aerial overview" },
    { src: "/Crystal%20Block%20Gallery%20(3).webp", alt: "D Block entrance" },
    { src: "/Crystal%20Block%20Gallery%20(4).webp", alt: "D Block roads and landscaping" },
  ],
  galleryId: "d-block-gallery",
  galleryAriaLabel: "Enlarge D Block gallery image",
  paymentPlanRoute: "/islamabad/payment-plans#d-block-plans",
  closeAriaLabel: "Close D Block details",
};

export const OVERSEAS_PREMIUM_DETAIL: PropertyDetailData = {
  id: "overseas-premium",
  titleId: "overseas-premium-detail-title",
  title: "Overseas Premium",
  heroImage: "/OverseasPremium.png",
  heroAlt: "Overseas Premium block, ParkView City Islamabad",
  badges: ["Overseas Block", "Premium Residential"],
  location: "Overseas Premium Block, ParkView City Islamabad",
  description:
    "Overseas Premium is designed for the Pakistani diaspora — offering premium residential plots with flexible investment terms, dedicated overseas support, and full access to all ParkView City Islamabad community features.",
  features: [
    "Overseas Investor Friendly",
    "Flexible Payment Terms",
    "5 Marla, 10 Marla, 1 Kanal",
    "Premium Community Location",
    "Gated Community",
    "24/7 Security",
  ],
  gallery: [
    { src: "/Tulip-Overseas-Block%20(1).webp", alt: "Overseas Premium block community" },
    { src: "/Tulip-Overseas-Block%20(5).webp", alt: "Overseas Premium block landscape" },
    { src: "/Crystal%20Block%20Gallery%20(5).webp", alt: "Overseas Premium block view" },
    { src: "/Crystal%20Block%20Gallery%20(6).webp", alt: "Overseas Premium residential area" },
    { src: "/A%20Place%20to%20call%20home.webp", alt: "Overseas Premium community overview" },
    { src: "/VirtualTourSection.webp", alt: "Overseas Premium aerial view" },
  ],
  galleryId: "overseas-premium-gallery",
  galleryAriaLabel: "Enlarge Overseas Premium gallery image",
  paymentPlanRoute: "/islamabad/payment-plans#overseas-premium-plans",
  closeAriaLabel: "Close Overseas Premium details",
};

export const AB_BLOCK_DETAIL: PropertyDetailData = {
  id: "ab-block",
  titleId: "ab-block-detail-title",
  title: "AB Block",
  heroImage: "/Block_A%26B.png",
  heroAlt: "AB Block, ParkView City Islamabad aerial view",
  badges: ["Residential Plots", "Available"],
  location: "AB Block, ParkView City Islamabad",
  description:
    "AB Block is a well-connected residential zone within ParkView City Islamabad, offering modern plot sizes with easy access to central amenities, wide roads, and a secure, community-focused environment.",
  features: [
    "5 Marla, 10 Marla, 1 Kanal",
    "Central Community Location",
    "Wide Internal Roads",
    "Utility Connections Available",
    "Gated Community",
    "24/7 Security",
  ],
  gallery: TEMP_GALLERY,
  galleryId: "ab-block-gallery",
  galleryAriaLabel: "Enlarge AB Block gallery image",
  paymentPlanRoute: "/islamabad/payment-plans#ab-block-plans",
  closeAriaLabel: "Close AB Block details",
};

export const TERRACE_C_BLOCK_DETAIL: PropertyDetailData = {
  id: "terrace-c-block",
  titleId: "terrace-c-block-detail-title",
  title: "Terrace C Block",
  heroImage: "/Terrace_Block_C.png",
  heroAlt: "Terrace C Block, ParkView City Islamabad",
  badges: ["Terrace Block", "Residential"],
  location: "Terrace C Block, ParkView City Islamabad",
  description:
    "Terrace C Block offers elevated residential living with scenic views of the surrounding landscape. Thoughtfully planned with terraced topography, this block combines natural beauty with modern community infrastructure.",
  features: [
    "5 Marla, 10 Marla, 1 Kanal",
    "Terraced Scenic Views",
    "Landscaped Surroundings",
    "Premium Plot Positioning",
    "Gated Community",
    "24/7 Security",
  ],
  gallery: [
    { src: "/Crystal%20Block%20Gallery%20(1).webp", alt: "Terrace C Block scenic view" },
    { src: "/Crystal%20Block%20Gallery%20(2).webp", alt: "Terrace C Block landscape" },
    { src: "/Tulip-Overseas-Block%20(1).webp", alt: "Terrace C Block community view" },
    { src: "/Tulip-Overseas-Block%20(2).webp", alt: "Terrace C Block green spaces" },
    { src: "/Crystal%20Block%20Gallery%20(3).webp", alt: "Terrace C Block roads" },
    { src: "/A%20Place%20to%20call%20home.webp", alt: "Terrace C Block overview" },
  ],
  galleryId: "terrace-c-block-gallery",
  galleryAriaLabel: "Enlarge Terrace C Block gallery image",
  paymentPlanRoute: "/islamabad/payment-plans#terrace-c-block-plans",
  closeAriaLabel: "Close Terrace C Block details",
};

export const E_BLOCK_DETAIL: PropertyDetailData = {
  id: "e-block",
  titleId: "e-block-detail-title",
  title: "E Block",
  heroImage: "/Block_E.png",
  heroAlt: "E Block, ParkView City Islamabad",
  badges: ["Residential Plots", "Available"],
  location: "E Block, ParkView City Islamabad",
  description:
    "E Block is an established residential sector within ParkView City Islamabad, offering convenient plot sizes with proximity to the community's key facilities, schools, and parks — ideal for families looking to build their home.",
  features: [
    "5 Marla, 10 Marla, 1 Kanal",
    "Proximity to Key Amenities",
    "Family-Oriented Community",
    "Wide Internal Roads",
    "Gated Community",
    "24/7 Security",
  ],
  gallery: [
    { src: "/Crystal%20Block%20Gallery%20(4).webp", alt: "E Block community view" },
    { src: "/Crystal%20Block%20Gallery%20(5).webp", alt: "E Block streetscape" },
    { src: "/Tulip-Overseas-Block%20(3).webp", alt: "E Block green landscape" },
    { src: "/Tulip-Overseas-Block%20(4).webp", alt: "E Block residential area" },
    { src: "/Crystal%20Block%20Gallery%20(6).webp", alt: "E Block overhead view" },
    { src: "/VirtualTourSection.webp", alt: "E Block drone view" },
  ],
  galleryId: "e-block-gallery",
  galleryAriaLabel: "Enlarge E Block gallery image",
  paymentPlanRoute: "/islamabad/payment-plans#e-block-plans",
  closeAriaLabel: "Close E Block details",
};

export const F_BLOCK_DETAIL: PropertyDetailData = {
  id: "f-block",
  titleId: "f-block-detail-title",
  title: "F Block",
  heroImage: "/Block_F.png",
  heroAlt: "F Block, ParkView City Islamabad",
  badges: ["Residential Plots", "Available"],
  location: "F Block, ParkView City Islamabad",
  description:
    "F Block provides a balanced residential setting within ParkView City Islamabad, offering plot options suited to a range of budgets. The block benefits from mature community infrastructure and access to all society facilities.",
  features: [
    "5 Marla, 10 Marla, 1 Kanal",
    "Established Infrastructure",
    "Community Park Access",
    "Utility Connections Available",
    "Gated Community",
    "24/7 Security",
  ],
  gallery: TEMP_GALLERY,
  galleryId: "f-block-gallery",
  galleryAriaLabel: "Enlarge F Block gallery image",
  paymentPlanRoute: "/islamabad/payment-plans#f-block-plans",
  closeAriaLabel: "Close F Block details",
};

export const H_BLOCK_DETAIL: PropertyDetailData = {
  id: "h-block",
  titleId: "h-block-detail-title",
  title: "H Block",
  heroImage: "/Block_H.png",
  heroAlt: "H Block, ParkView City Islamabad",
  badges: ["Residential Plots", "Available"],
  location: "H Block, ParkView City Islamabad",
  description:
    "H Block is a well-positioned residential sector in ParkView City Islamabad, featuring generously sized plots with access to green belts, boulevards, and the community's comprehensive lifestyle amenities.",
  features: [
    "5 Marla, 10 Marla, 1 Kanal",
    "Boulevard Access",
    "Green Belt Surroundings",
    "Convenient Internal Network",
    "Gated Community",
    "24/7 Security",
  ],
  gallery: [
    { src: "/Tulip-Overseas-Block%20(5).webp", alt: "H Block community landscape" },
    { src: "/Tulip-Overseas-Block%20(6).webp", alt: "H Block green spaces" },
    { src: "/Crystal%20Block%20Gallery%20(1).webp", alt: "H Block streetscape" },
    { src: "/Crystal%20Block%20Gallery%20(2).webp", alt: "H Block residential view" },
    { src: "/A%20Place%20to%20call%20home.webp", alt: "H Block aerial overview" },
    { src: "/VirtualTourSection.webp", alt: "H Block drone view" },
  ],
  galleryId: "h-block-gallery",
  galleryAriaLabel: "Enlarge H Block gallery image",
  paymentPlanRoute: "/islamabad/payment-plans#h-block-plans",
  closeAriaLabel: "Close H Block details",
};

export const FOUNTAIN_VIEW_DETAIL: PropertyDetailData = {
  id: "fountain-view-residences",
  titleId: "fountain-view-detail-title",
  title: "Fountain View Residences",
  heroImage: "/A Place to call home.webp",
  heroAlt: "Fountain View Residences, Downtown ParkView City Islamabad",
  badges: ["Residential Apartments", "Downtown"],
  location: "Downtown, ParkView City Islamabad",
  description:
    "Aesthetically designed apartments and penthouses overlooking the community's iconic dancing fountain, surrounding Margalla Hills, and a central lake — offering luxury vertical living in the heart of Downtown ParkView City Islamabad.",
  features: [
    "1-Bed, 2-Bed, 3-Bed & Penthouses",
    "Fountain & Lake Views",
    "Downtown Location",
    "25% Down Payment",
    "Gated Community",
    "24/7 Security",
  ],
  gallery: TEMP_GALLERY,
  galleryId: "fountain-view-gallery",
  galleryAriaLabel: "Enlarge Fountain View Residences gallery image",
  paymentPlanRoute: "/islamabad/payment-plans",
  closeAriaLabel: "Close Fountain View Residences details",
};

export const THE_WALK_DETAIL: PropertyDetailData = {
  id: "the-walk",
  titleId: "the-walk-detail-title",
  title: "The Walk",
  heroImage: "/The_Walk_isb.png",
  heroAlt: "The Walk commercial promenade, ParkView City Islamabad",
  badges: ["Boutique Commercial"],
  location: "The Walk, ParkView City Islamabad",
  description:
    "A boutique commercial promenade offering retail, food, and lifestyle spaces in a walkable, architecturally curated environment — designed to bring vibrant street-level commerce to ParkView City Islamabad.",
  features: [
    "1 Kanal Plots",
    "Boutique Retail & Dining",
    "Walkable Promenade Design",
    "High Community Footfall",
    "Gated Community",
    "24/7 Security",
  ],
  gallery: TEMP_GALLERY,
  galleryId: "the-walk-gallery",
  galleryAriaLabel: "Enlarge The Walk gallery image",
  paymentPlanRoute: "/islamabad/payment-plans",
  closeAriaLabel: "Close The Walk details",
};

export const DOWNTOWN_ISLAMABAD_DETAIL: PropertyDetailData = {
  id: "downtown-islamabad",
  titleId: "downtown-islamabad-detail-title",
  title: "Downtown Islamabad",
  heroImage: "/Downtown_Islamabad.png",
  heroAlt: "Downtown Islamabad commercial zone, ParkView City",
  badges: ["Downtown", "Premium Commercial"],
  location: "Downtown, ParkView City Islamabad",
  description:
    "Premium commercial plots at the heart of ParkView City Islamabad — designed to attract leading national and international brands with high footfall, lake-facing options, and unmatched visibility.",
  features: [
    "6 Marla & 8 Marla Plots",
    "Lake-Facing Options Available",
    "Prime Downtown Location",
    "High Brand Visibility",
    "Gated Community",
    "24/7 Security",
  ],
  gallery: TEMP_GALLERY,
  galleryId: "downtown-islamabad-gallery",
  galleryAriaLabel: "Enlarge Downtown Islamabad gallery image",
  paymentPlanRoute: "/islamabad/payment-plans",
  closeAriaLabel: "Close Downtown Islamabad details",
};

export const OVERSEAS_COMMERCIAL_DETAIL: PropertyDetailData = {
  id: "overseas-commercial",
  titleId: "overseas-commercial-detail-title",
  title: "Overseas Commercial",
  heroImage: "/Overseas_commercial_isb.png",
  heroAlt: "Overseas Commercial zone, ParkView City Islamabad",
  badges: ["Overseas", "Commercial"],
  location: "Overseas Commercial Block, ParkView City Islamabad",
  description:
    "Commercial investment opportunities for the Pakistani diaspora — a dedicated overseas commercial zone within ParkView City Islamabad with competitive pricing and a 10% discount on full cash payment.",
  features: [
    "5 Marla Plots",
    "10% Cash Payment Discount",
    "Overseas Investor Friendly",
    "Flexible Payment Terms",
    "Gated Community",
    "24/7 Security",
  ],
  gallery: TEMP_GALLERY,
  galleryId: "overseas-commercial-gallery",
  galleryAriaLabel: "Enlarge Overseas Commercial gallery image",
  paymentPlanRoute: "/islamabad/payment-plans",
  closeAriaLabel: "Close Overseas Commercial details",
};

export const BOULEVARD_DETAIL: PropertyDetailData = {
  id: "boulevard",
  titleId: "boulevard-detail-title",
  title: "The Boulevard",
  heroImage: "/Boulevard.png",
  heroAlt: "The Boulevard, ParkView City Islamabad",
  badges: ["Signature Address", "Residential & Commercial"],
  location: "The Boulevard, ParkView City Islamabad",
  description:
    "The Boulevard is ParkView City Islamabad's most prestigious address — a grand tree-lined thoroughfare flanked by premium residential and commercial plots, designed to set a new standard for urban living in the capital.",
  features: [
    "Residential & Commercial Plots",
    "Signature Boulevard Address",
    "Tree-Lined Grand Thoroughfare",
    "Highest Community Visibility",
    "Gated Community",
    "24/7 Security",
  ],
  gallery: [
    { src: "/Crystal%20Block%20Gallery%20(5).webp", alt: "The Boulevard panoramic view" },
    { src: "/Crystal%20Block%20Gallery%20(6).webp", alt: "The Boulevard tree-lined road" },
    { src: "/Tulip-Overseas-Block%20(1).webp", alt: "The Boulevard community landscape" },
    { src: "/Tulip-Overseas-Block%20(2).webp", alt: "The Boulevard streetscape" },
    { src: "/A%20Place%20to%20call%20home.webp", alt: "The Boulevard aerial view" },
    { src: "/VirtualTourSection.webp", alt: "The Boulevard drone overview" },
  ],
  galleryId: "boulevard-gallery",
  galleryAriaLabel: "Enlarge The Boulevard gallery image",
  paymentPlanRoute: "/islamabad/payment-plans#boulevard-plans",
  closeAriaLabel: "Close The Boulevard details",
};

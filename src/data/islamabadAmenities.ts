import type {
  AmenityIcon,
  AmenitySummary,
  FeaturedAmenity,
  SupportingAmenity,
  GalleryImage,
} from "@/data/lahoreAmenities";

export type { AmenityIcon };

export const islamabadAmenitiesHeroImage = "/AmenetiesHerosection-isb.png";
export const islamabadAmenitiesCtaImage  = "/VirtualTourSection.webp";

export const islamabadMainAmenities: AmenitySummary[] = [
  {
    id: "underground-electricity",
    category: "Infrastructure",
    title: "Underground Electricity",
    shortDescription:
      "Underground utility infrastructure keeps the streetscape clean, safe, and aesthetically consistent throughout ParkView City Islamabad.",
    icon: "zap",
  },
  {
    id: "parks",
    category: "Green Spaces",
    title: "Community Parks",
    shortDescription:
      "Landscaped parks and open green zones give residents welcoming spaces for leisure, recreation, family time, and outdoor activity.",
    icon: "trees",
  },
  {
    id: "security",
    category: "Safety",
    title: "24/7 Security",
    shortDescription:
      "Trained security personnel and controlled access points maintain a secure, monitored residential environment around the clock.",
    icon: "shield",
  },
  {
    id: "dancing-fountain",
    category: "Recreation",
    title: "Dancing Fountain",
    shortDescription:
      "A landmark recreational feature at the heart of ParkView City Islamabad — the dancing fountain serves as an iconic community gathering point.",
    icon: "map",
  },
  {
    id: "commercial-hub",
    category: "Commerce",
    title: "Commercial Hub",
    shortDescription:
      "A dedicated commercial hub within the community provides residents with convenient access to retail, dining, and everyday services.",
    icon: "store",
  },
  {
    id: "food-court",
    category: "Dining",
    title: "Food Court & Food Valley",
    shortDescription:
      "A diverse food court and food valley bring a wide range of dining options directly within the ParkView City Islamabad community.",
    icon: "users",
  },
];

export const islamabadFeaturedAmenities: FeaturedAmenity[] = [
  {
    id: "underground-electricity-feature",
    eyebrow: "Infrastructure",
    title: "A Cleaner, Safer Community Infrastructure",
    description:
      "ParkView City Islamabad uses underground electricity to protect the community's visual environment and support a safer, more organized layout for residents and visitors alike.",
    benefits: [
      "Cleaner, unobstructed streetscapes",
      "Protected and reliable utility network",
      "Modern community infrastructure standard",
    ],
    image: "/Tulip-Overseas-Block-HERO.webp",
    imageAlt: "Modern infrastructure at ParkView City Islamabad",
  },
  {
    id: "dancing-fountain-feature",
    eyebrow: "Recreation",
    title: "The Dancing Fountain — A Community Icon",
    description:
      "The dancing fountain at ParkView City Islamabad is more than a landmark — it is a dynamic, beautifully lit centrepiece that brings residents together for family evenings, community events, and recreational moments.",
    benefits: [
      "Iconic community gathering point",
      "Illuminated evening displays",
      "Family-friendly recreational feature",
    ],
    image: "/A Place to call home.webp",
    imageAlt: "ParkView City Islamabad community centrepiece",
  },
  {
    id: "security-feature",
    eyebrow: "Safety",
    title: "A Secure Gated Community",
    description:
      "ParkView City Islamabad is a fully gated community with 24/7 security patrol, trained personnel at access points, and monitoring across key residential and commercial zones.",
    benefits: [
      "Controlled entry and exit points",
      "Trained security personnel on patrol",
      "Residential and commercial monitoring",
    ],
    image: "/Crystal Block hero.webp",
    imageAlt: "Secure gated entry at ParkView City Islamabad",
  },
  {
    id: "grand-mosque-feature",
    eyebrow: "Community",
    title: "Grand Mosque",
    description:
      "A grand mosque within ParkView City Islamabad serves as a spiritual and community anchor for residents — offering a beautiful, accessible space for worship and reflection.",
    benefits: [
      "Centrally located within the community",
      "Accessible from all residential zones",
      "Grand architectural design",
    ],
    image: "/ProjectIslamabad.png",
    imageAlt: "ParkView City Islamabad community mosque aerial view",
  },
];

export const islamabadSupportingAmenities: SupportingAmenity[] = [
  {
    id: "wide-roads",
    category: "Infrastructure",
    title: "Wide Roads & Boulevards",
    description: "Spacious internal roads and tree-lined boulevards support smooth traffic flow throughout the community.",
    icon: "car",
  },
  {
    id: "grand-mosque",
    category: "Community",
    title: "Grand Mosque",
    description: "A landmark mosque within the community provides a place of worship close to every resident.",
    icon: "landmark",
  },
  {
    id: "complete-utilities",
    category: "Infrastructure",
    title: "Complete Utilities",
    description: "Planned utility connections — water, gas, electricity, and sewerage — are integrated throughout the society.",
    icon: "zap",
  },
  {
    id: "gated-community",
    category: "Safety",
    title: "Gated Community",
    description: "Controlled entry and exit across the community boundary ensures privacy, organization, and security.",
    icon: "shield",
  },
  {
    id: "food-valley",
    category: "Dining",
    title: "Food Valley",
    description: "A dedicated food valley brings multiple dining options together in one accessible, family-friendly zone.",
    icon: "users",
  },
  {
    id: "commercial-areas",
    category: "Convenience",
    title: "Commercial & Retail Areas",
    description: "Multiple commercial zones provide residents with everyday shopping, services, and business conveniences.",
    icon: "store",
  },
];

export const islamabadAmenitiesGallery: GalleryImage[] = [
  { src: "/ProjectIslamabad.png",            alt: "Aerial view of ParkView City Islamabad" },
  { src: "/Pakistan's-Biggest-Dancing-Fountain.webp", alt: "Dancing fountain at ParkView City Islamabad" },
  { src: "/A Place to call home.webp",       alt: "Residential landscape at ParkView City Islamabad" },
  { src: "/VirtualTourSection.webp",         alt: "ParkView City Islamabad community view" },
  { src: "/Tulip-Overseas-Block-HERO.webp",  alt: "ParkView City Islamabad community streetscape" },
  { src: "/Crystal Block hero.webp",         alt: "ParkView City Islamabad entrance area" },
  { src: "/JADE Extension hero.webp",        alt: "ParkView City Islamabad residential zone" },
];

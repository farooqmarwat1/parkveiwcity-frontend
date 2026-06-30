import type {
  FeaturedAmenity,
  GalleryImage,
} from "@/data/lahoreAmenities";

export const islamabadAmenitiesHeroImage = "/AmenetiesHerosection-isb.png";
export const islamabadAmenitiesCtaImage  = "/VirtualTourSection.webp";

export const islamabadFeaturedAmenities: FeaturedAmenity[] = [
  {
    id: "underground-electricity-feature",
    eyebrow: "Infrastructure",
    title: "Underground Electricity",
    description:
      "ParkView City Islamabad uses underground electricity to protect the community's visual environment and support a safer, more organized layout for residents and visitors alike.",
    benefits: [
      "Cleaner, unobstructed streetscapes",
      "Protected and reliable utility network",
      "Modern community infrastructure standard",
    ],
    image: "/Underground- Electricity.png",
    imageAlt: "Underground electricity infrastructure at ParkView City Islamabad",
  },
  {
    id: "commercial-hub-feature",
    eyebrow: "Commerce",
    title: "Commercial Hub",
    description:
      "The commercial hub at ParkView City Islamabad brings retail, dining, and everyday services within easy reach, giving residents a convenient, walkable commercial centre.",
    benefits: [
      "Retail and everyday services on-site",
      "Convenient, walkable commercial centre",
      "Designed for residents and visitors alike",
    ],
    image: "/Commercial-Hub.png",
    imageAlt: "Commercial hub at ParkView City Islamabad",
  },
  {
    id: "dancing-fountain-feature",
    eyebrow: "Recreation",
    title: "The Dancing Fountain",
    description:
      "The dancing fountain at ParkView City Islamabad is more than a landmark — it is a dynamic, beautifully lit centrepiece that brings residents together for family evenings, community events, and recreational moments.",
    benefits: [
      "Iconic community gathering point",
      "Illuminated evening displays",
      "Family-friendly recreational feature",
    ],
    image: "/Dancing-Fountain.png",
    imageAlt: "Dancing fountain at ParkView City Islamabad",
  },
  {
    id: "food-valley-feature",
    eyebrow: "Dining",
    title: "Food Valley",
    description:
      "Food Valley brings together a wide range of restaurants and food outlets, creating a dedicated dining destination for residents and visitors within ParkView City Islamabad.",
    benefits: [
      "Wide variety of dining options",
      "Dedicated, accessible food destination",
      "A social hub for residents and visitors",
    ],
    image: "/Food-Valley.png",
    imageAlt: "Food Valley dining area at ParkView City Islamabad",
  },
  {
    id: "parks-feature",
    eyebrow: "Green Spaces",
    title: "Community Parks",
    description:
      "Landscaped parks throughout ParkView City Islamabad give residents welcoming green spaces for leisure, recreation, family time, and outdoor activity.",
    benefits: [
      "Landscaped green spaces community-wide",
      "Spaces for leisure and family time",
      "Outdoor recreation close to home",
    ],
    image: "/Parks.png",
    imageAlt: "Community parks at ParkView City Islamabad",
  },
  {
    id: "security-feature",
    eyebrow: "Safety",
    title: "24/7 Security",
    description:
      "ParkView City Islamabad is a fully gated community with 24/7 security patrol, trained personnel at access points, and monitoring across key residential and commercial zones.",
    benefits: [
      "Controlled entry and exit points",
      "Trained security personnel on patrol",
      "Residential and commercial monitoring",
    ],
    image: "/Security.png",
    imageAlt: "Security at ParkView City Islamabad",
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

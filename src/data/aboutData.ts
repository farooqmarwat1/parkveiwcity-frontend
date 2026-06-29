/* ─────────────────────────────────────────────────────────────────
   ParkView City — About Us page content data
   Single source of truth. Update statistics, awards, values, etc. here.
   ───────────────────────────────────────────────────────────────── */

export interface StatItem {
  value: string;
  suffix: string;
  label: string;
}

export interface VisionCard {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
}

export interface CommunityItem {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  logo: string;
  route: string;
  status: "available" | "coming-soon";
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface AwardItem {
  title: string;
  year: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  city: string;
}

/* ── Statistics ──────────────────────────────────────────────── */
export const aboutStats: StatItem[] = [
  { value: "3",     suffix: "",   label: "Key City Developments"     },
  { value: "3,000", suffix: "+",  label: "Acres Green Pledge Target" },
  { value: "1.5",   suffix: "M+", label: "Trees Reported Planted"    },
  { value: "2",     suffix: "",   label: "2024 Brand Recognitions"    },
];

/* ── Vision / Mission / Purpose cards ───────────────────────── */
export const aboutVisionCards: VisionCard[] = [
  {
    number: "01",
    eyebrow: "Our Vision",
    title: "Communities That Inspire Progress",
    description:
      "To shape urban communities that combine better living, sustainable environments, modern infrastructure, and meaningful long-term opportunity.",
  },
  {
    number: "02",
    eyebrow: "Our Mission",
    title: "Deliver with Purpose",
    description:
      "To plan, develop, and support secure residential and commercial destinations built around quality, accessibility, transparency, and customer experience.",
  },
  {
    number: "03",
    eyebrow: "Our Purpose",
    title: "Create Lasting Value",
    description:
      "To create places where people can build homes, businesses, relationships, and futures within connected and thoughtfully designed environments.",
  },
];

/* ── Communities ─────────────────────────────────────────────── */
export const aboutCommunities: CommunityItem[] = [
  {
    id: "lahore",
    name: "ParkView City Lahore",
    location: "Lahore, Pakistan",
    description:
      "A connected residential and commercial community focused on accessibility, lifestyle, green spaces, amenities, and modern urban living.",
    image: "/ProjectLahore.png",
    logo: "/PVLahore.png",
    route: "/lahore",
    status: "available",
  },
  {
    id: "islamabad",
    name: "ParkView City Islamabad",
    location: "Islamabad, Pakistan",
    description:
      "A scenic capital-city destination combining natural surroundings, residential communities, commercial opportunities, and modern amenities.",
    image: "/ProjectIslamabad.png",
    logo: "/PVIsb.png",
    route: "/islamabad",
    status: "available",
  },
  {
    id: "uk",
    name: "ParkView City UK",
    location: "United Kingdom",
    description:
      "ParkView City's international presence extending world-class community development standards to the United Kingdom.",
    image: "/Crystal Block hero.webp",
    logo: "/PVLahore.png",
    route: "/uk",
    status: "available",
  },
];

/* ── Core values ─────────────────────────────────────────────── */
export const aboutValues: ValueItem[] = [
  {
    title: "Quality",
    description:
      "A consistent focus on thoughtful planning, infrastructure, design, and community experience.",
  },
  {
    title: "Integrity",
    description:
      "Clear communication, responsible decision-making, and a commitment to building customer confidence.",
  },
  {
    title: "Innovation",
    description:
      "Using technology and new ideas to improve convenience, connectivity, and service.",
  },
  {
    title: "Community",
    description:
      "Creating places that support families, businesses, social connection, and shared experiences.",
  },
  {
    title: "Sustainability",
    description:
      "Supporting greener environments and responsible long-term urban development.",
  },
  {
    title: "Progress",
    description:
      "Continuously improving developments, services, amenities, and opportunities.",
  },
];

/* ── Awards and recognition ──────────────────────────────────── */
export const aboutAwards: AwardItem[] = [
  { title: "Brand of the Year",      year: "2024" },
  { title: "Brand Icon of Pakistan", year: "2024" },
];

/* ── Gallery ─────────────────────────────────────────────────── */
export const aboutGallery: GalleryItem[] = [
  { src: "/10.png", alt: "ParkView City landscaped residential boulevard", city: "Community" },
  { src: "/11.png", alt: "ParkView City residential master plan aerial", city: "Community" },
  { src: "/12.png", alt: "ParkView City modern residential development", city: "Community" },
  { src: "/13.png", alt: "ParkView City premium community architecture", city: "Community" },
  { src: "/14.png", alt: "ParkView City connected urban community", city: "Community" },
  { src: "/15.png", alt: "ParkView City waterfront and mountain view", city: "Community" },
];

/* ── Sustainability highlights ───────────────────────────────── */
export const aboutSustainabilityHighlights: string[] = [
  "Reforestation target of over 3,000 acres",
  "Over 1.5 million trees reported planted",
  "Plantation activity across Lahore and Islamabad",
  "Focus on greener and healthier communities",
];

/* ── App innovation features ─────────────────────────────────── */
export const aboutInnovationFeatures: string[] = [
  "Track your investment portfolio",
  "Manage and schedule payments",
  "Raise and monitor complaints",
  "Tenant access control",
  "Explore ParkView City communities",
  "Connected via Zong digital partnership",
];

export interface UkProject {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
  route: string | null;
  status?: string;
}

export interface UkService {
  title: string;
  description: string;
}

export interface UkOffice {
  title: string;
  address: string;
  phone: string;
  phoneHref: string;
  whatsapp?: string;
  whatsappHref?: string;
}

export interface UkFaqItem {
  question: string;
  answer: string;
}

export const ukHero = {
  video: "/uk-Hero_Section.mp4",
  posterImage: "/uk-hero-section.webp",
  eyebrow: "Authorised UK Sales Offices - London · Manchester · Birmingham",
  title: "ParkView City UK Sales Office",
  description:
    "Buy a plot, apartment, or commercial unit in ParkView City Islamabad, Lahore, or the new Beach Resort without leaving the UK. Our team handles the booking, paperwork, payment planning, and follow-up with the developer in Pakistan.",
  primaryButton: "Call 020 3062 6353",
  primaryHref: "tel:+442030626353",
  secondaryButton: "WhatsApp 07833 474678",
  secondaryHref: "https://wa.me/447833474678",
  highlights: [
    "Direct coordination with the developer - no third-party agent mark-up",
    "Three UK offices for in-person meetings, plus video consultations",
    "Payment plans, transfers, and registry support from beginning to completion",
  ],
};

export const ukIntro = {
  eyebrow: "ParkView City in the United Kingdom",
  title: "A UK Doorway to Pakistan's Most Planned Communities",
  image: "/uk-First_section.webp",
  imageAlt: "ParkView City community overview for UK investors",
  paragraphs: [
    "ParkView City is one of Pakistan's best-known master-planned developments, with major communities in Islamabad and Lahore and a five-star coastal resort planned near Karachi.",
    "The UK Sales Office helps British Pakistanis purchase property without repeatedly travelling to Pakistan to manage paperwork.",
    "From offices in Ilford, Oldham, and Birmingham, the team assists with bookings, payment schedules, file verification, transfers, possession, and ongoing communication with the head office in Islamabad.",
  ],
};

export const ukProjects: UkProject[] = [
  {
    title: "ParkView City Islamabad",
    description:
      "A landmark capital-city community near the Margalla foothills, offering residential plots, premium apartments, and commercial opportunities.",
    image: "/IslamabadProjectPic.webp",
    imageAlt: "ParkView City Islamabad aerial development view",
    features: [
      "Residential and commercial options",
      "Downtown Islamabad and The Walk",
      "Parks, education, healthcare, and community facilities",
    ],
    route: "/islamabad",
  },
  {
    title: "ParkView City Lahore",
    description:
      "A modern gated community on Multan Road with residential and commercial opportunities, landscaped spaces, schools, parks, and convenient city access.",
    image: "/LahorePorjectPic.webp",
    imageAlt: "ParkView City Lahore aerial development view",
    features: [
      "Residential plots and commercial areas",
      "Parks, education, mosque, and community facilities",
      "Modern infrastructure and gated living",
    ],
    route: "/lahore",
  },
  {
    title: "ParkView Beach Resort",
    description:
      "A planned five-star coastal resort near Karachi featuring sea-facing apartments, penthouses, hospitality, leisure, and rental opportunities.",
    image: "/BeachResortProject.webp",
    imageAlt: "Premium ParkView City development landscape",
    features: [
      "Sea-facing apartments and penthouses",
      "Restaurants, cafes, spa, and leisure facilities",
      "Waterfront recreation and water-based activities",
    ],
    route: null,
    status: "Enquire for Availability",
  },
];

export const ukServices: UkService[] = [
  {
    title: "Plot Booking",
    description:
      "We help secure the selected plot or unit, confirm current availability and pricing, and coordinate the booking documentation.",
  },
  {
    title: "Payment Planning",
    description:
      "We explain down payments, instalment schedules, and payment milestones so you can plan around your income and budget.",
  },
  {
    title: "Document Checks",
    description:
      "We coordinate verification of file numbers, allocation letters, transfer paperwork, and related records with the relevant office.",
  },
  {
    title: "Transfer & Aftercare",
    description:
      "We continue supporting possession, transfers, resale enquiries, and communication after the initial booking.",
  },
];

export const ukOffices: UkOffice[] = [
  {
    title: "London - Head Office",
    address: "377 Eastern Avenue, Gants Hill, Ilford, Essex, IG2 6LW",
    phone: "020 3062 6353",
    phoneHref: "tel:+442030626353",
    whatsapp: "07833 474678",
    whatsappHref: "https://wa.me/447833474678",
  },
  {
    title: "Manchester",
    address: "Prospect House, Featherstall Road South, Oldham, OL9 6HT",
    phone: "020 3062 6353",
    phoneHref: "tel:+442030626353",
  },
  {
    title: "Birmingham",
    address: "912 Stratford Road, Birmingham, B11 4DA",
    phone: "020 3062 6353",
    phoneHref: "tel:+442030626353",
  },
];

export const ukFaqItems: UkFaqItem[] = [
  {
    question: "Can I buy a plot in ParkView City Islamabad from the UK?",
    answer:
      "Yes. The UK team can coordinate availability, booking, documentation, payment planning, and communication with the relevant ParkView City office.",
  },
  {
    question: "Where is the ParkView City UK head office?",
    answer: "The head office is at 377 Eastern Avenue, Gants Hill, Ilford, Essex, IG2 6LW.",
  },
  {
    question: "Which projects are currently open for sale?",
    answer:
      "Availability changes regularly. Contact the UK office for current inventory in Islamabad, Lahore, and the Beach Resort.",
  },
  {
    question: "How do I pay from a UK bank account?",
    answer:
      "The UK team will explain the verified payment process, instalment schedule, required references, and documentation before any transfer is made.",
  },
  {
    question: "Do you hold appointments or open-house meetings in the UK?",
    answer:
      "Appointments and consultation events may be available. Contact the team for current dates and office availability.",
  },
  {
    question: "Are you the official ParkView City office or a reseller?",
    answer:
      "The supplied source presents the team as an authorised ParkView City UK Sales Office coordinating directly with the developer.",
  },
];

export const ukCta = {
  image: "/uk-CTA.webp",
  eyebrow: "Speak with the UK Team",
  title: "Ready to Talk Through the Numbers?",
  description:
    "Call, WhatsApp, or email the UK office for current availability, verified pricing, and the latest payment-plan information.",
  primaryButton: "Call 020 3062 6353",
  primaryHref: "tel:+442030626353",
  secondaryButton: "WhatsApp",
  secondaryHref: "https://wa.me/447833474678",
  email: "info@parkviewcityuk.com",
};

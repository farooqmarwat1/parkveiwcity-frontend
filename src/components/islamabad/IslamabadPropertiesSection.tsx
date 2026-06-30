import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.85, ease: easeOut } },
};

interface Property {
  image: string;
  badge: string;
  meta: string;
  title: string;
  desc: string;
  price: string;
  id?: string;
}

function PropertyCard({ image, badge, meta, title, desc, price, id, onOpen }: Property & { onOpen?: () => void }) {
  const clickable = typeof onOpen === "function";
  return (
    <div
      className={[
        "group flex w-full flex-col overflow-hidden rounded-[16px] border border-black/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md",
        clickable ? "cursor-pointer" : "",
      ].join(" ")}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      aria-label={clickable ? `View details for ${title}` : undefined}
      onClick={clickable ? onOpen : undefined}
      onKeyDown={clickable ? e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen?.(); } } : undefined}
    >
      <div className="relative h-[200px] shrink-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="block min-h-[13px] font-roboto text-[9px] font-light uppercase tracking-[0.12em] text-[#58595B]">
          {meta}
        </span>

        <h3
          className="mt-1.5 font-roboto text-[20px] font-normal leading-snug text-[#1D2D4E]"
          style={{ letterSpacing: "0.9px" }}
        >
          {title}
        </h3>

        <p className="mt-2 font-roboto text-[12px] font-light leading-relaxed text-[#58595B]">
          {desc}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-5">
          <div className="flex flex-col">
            <span className="mt-0.5 font-termina text-[15px] font-normal text-[#1D2D4E]">
              {price}
            </span>
          </div>

          <button
            type="button"
            aria-label={`View details for ${title}`}
            onClick={e => { e.stopPropagation(); onOpen?.(); }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#58595B]/40 text-[#58595B] transition-all duration-300 group-hover:border-[#C4973A] group-hover:text-[#C4973A] cursor-pointer"
          >
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}

// Temporary images — replace each src with final Islamabad block photography when available.
const residential: Property[] = [
  {
    id:    "ab-block",
    image: "/Block_AB.png",
    badge: "Residential Plots",
    meta:  "5 Marla, 10 Marla, 1 Kanal",
    title: "A & B Block",
    desc:  "One of the earliest and most established residential zones in ParkView City Islamabad, offering well-connected plots in a mature community setting.",
    price: "",
  },
  {
    id:    "terrace-c-block",
    image: "/Terrace_Block_C.png",
    badge: "Residential Plots",
    meta:  "10 Marla, 1 Kanal",
    title: "Terrace C Block",
    desc:  "Terrace-facing residential plots with scenic elevation, green surroundings, and easy access to the community's core amenities and boulevards.",
    price: "",
  },
  {
    id:    "d-block",
    image: "/Block_D.png",
    badge: "Residential Plots",
    meta:  "2 Kanal",
    title: "D Block",
    desc:  "An established residential zone within ParkView City Islamabad offering well-positioned plots with full community infrastructure and convenient access.",
    price: "",
  },
  {
    id:    "e-block",
    image: "/Block_E.png",
    badge: "Residential Plots",
    meta:  "1 Kanal, 1 Kanal Terrace",
    title: "E Block",
    desc:  "Conveniently positioned residential plots in the heart of ParkView City Islamabad, surrounded by green belts and close to essential community services.",
    price: "",
  },
  {
    id:    "f-block",
    image: "/Block_F.png",
    badge: "Residential Plots",
    meta:  "5 Marla, 10 Marla",
    title: "F Block",
    desc:  "A comfortable and accessible residential zone with wide internal roads, landscaped streetscapes, and proximity to the community's commercial areas.",
    price: "",
  },
  {
    id:    "h-block",
    image: "/Block_H.png",
    badge: "Residential Plots",
    meta:  "5 Marla, 10 Marla, 1 Kanal",
    title: "H Block",
    desc:  "Spacious plots in one of the community's most sought-after residential zones — offering a balance of open space, security, and prime positioning.",
    price: "",
  },
  {
    id:    "j-block-privilege",
    image: "/J_Block_Privilege.png",
    badge: "Privilege Block",
    meta:  "5 Marla, 10 Marla",
    title: "J Block Privilege",
    desc:  "A premium residential enclave with wide boulevards, landscaped green belts, and direct access to the community's finest commercial and recreational amenities.",
    price: "",
  },
  {
    id:    "boulevard",
    image: "/Boulevard.png",
    badge: "Premium Residential",
    meta:  "",
    title: "The Boulevard",
    desc:  "Wide-avenue residential plots along the community's main boulevard — a prestigious address offering maximum visibility, spacious living, and premium surroundings.",
    price: "",
  },
  {
    id:    "overseas-premium",
    image: "/OverseasPremium.png",
    badge: "Overseas Block",
    meta:  "5 Marla, 10 Marla, 1 Kanal",
    title: "Overseas Premium",
    desc:  "Designed for the Pakistani diaspora — premium residential plots with overseas investor support, flexible terms, and full access to all community amenities.",
    price: "",
  },
  {
    id:    "fountain-view-residences",
    image: "/fountain-view.png",
    badge: "Residential Apartments",
    meta:  "1-Bed, 2-Bed, 3-Bed & Penthouses",
    title: "Fountain View Residences",
    desc:  "Aesthetically designed apartments and penthouses with views of the dancing fountain, surrounding hills, and a central lake — located in the heart of Downtown Islamabad.",
    price: "",
  },
];

const commercial: Property[] = [
  {
    id:    "the-walk",
    image: "/The_Walk_isb.png",
    badge: "Boutique Commercial",
    meta:  "The Walk, ParkView City Islamabad",
    title: "The Walk",
    desc:  "A boutique commercial promenade offering retail, food, and lifestyle spaces in a walkable, architecturally curated environment.",
    price: "",
  },
  {
    id:    "downtown-islamabad",
    image: "/Downtown_Islamabad.png",
    badge: "Downtown",
    meta:  "Premium Commercial • 6 Marla, 8 Marla",
    title: "Downtown Islamabad",
    desc:  "Premium commercial plots at the heart of the community — designed to attract leading national and international brands with high footfall and visibility.",
    price: "",
  },
  {
    id:    "overseas-commercial",
    image: "/Overseas_commercial_isb.png",
    badge: "Overseas",
    meta:  "Commercial Plots • 5 Marla",
    title: "Overseas Commercial",
    desc:  "Commercial investment opportunities for the Pakistani diaspora — a dedicated overseas commercial zone within ParkView City Islamabad.",
    price: "",
  },
];

interface IslamabadPropertiesSectionProps {
  onOpenProperty?: (id: string) => void;
  initialTab?: "residential" | "commercial";
}

export default function IslamabadPropertiesSection({ onOpenProperty, initialTab = "residential" }: IslamabadPropertiesSectionProps = {}) {
  const [tab, setTab] = useState<"residential" | "commercial">(initialTab);

  return (
    <>
      <div id="payment-plans" style={{ scrollMarginTop: "100px" }} />

      <section
        id="properties"
        className="bg-white px-6 py-20 sm:px-10 sm:py-28 lg:px-20"
        style={{ scrollMarginTop: "100px" }}
      >
        <div className="mx-auto flex max-w-[1280px] flex-col items-center">

          <motion.span
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="font-roboto text-[10px] font-normal uppercase tracking-[0.33em] text-[#58595B]"
          >
            ParkView City Islamabad
          </motion.span>

          <motion.h2
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="mt-3 text-center font-termina text-[28px] font-normal uppercase leading-tight tracking-[0.06em] text-[#1D2D4E] sm:text-[40px]"
          >
            Explore Properties
          </motion.h2>

          <motion.p
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="mt-4 max-w-[680px] text-center font-roboto text-[15px] font-light leading-relaxed tracking-[0.04em] text-[#58595B]"
          >
            From premium residential blocks to landmark commercial developments,
            discover ParkView City Islamabad's master-planned offerings for every lifestyle and investment goal.
          </motion.p>

          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="mt-10 flex items-center"
            role="tablist"
            aria-label="Property categories"
          >
            <button
              type="button"
              role="tab"
              aria-selected={tab === "residential"}
              aria-controls="isb-tab-panel-residential"
              onClick={() => setTab("residential")}
              className={[
                "flex h-[41px] w-[157px] items-center justify-center rounded-l-full border border-[#C4973A] font-roboto text-[11px] font-medium uppercase tracking-[0.15em] transition-all duration-300 cursor-pointer",
                tab === "residential"
                  ? "bg-[#C4973A] text-white"
                  : "bg-transparent text-[#C4973A] hover:bg-[#C4973A]/10",
              ].join(" ")}
            >
              Residential
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === "commercial"}
              aria-controls="isb-tab-panel-commercial"
              onClick={() => setTab("commercial")}
              className={[
                "flex h-[41px] w-[159px] items-center justify-center rounded-r-full border border-l-0 border-[#C4973A] font-roboto text-[11px] font-medium uppercase tracking-[0.15em] transition-all duration-300 cursor-pointer",
                tab === "commercial"
                  ? "bg-[#C4973A] text-white"
                  : "bg-transparent text-[#C4973A] hover:bg-[#C4973A]/10",
              ].join(" ")}
            >
              Commercial
            </button>
          </motion.div>

          <div
            id={tab === "residential" ? "isb-tab-panel-residential" : "isb-tab-panel-commercial"}
            role="tabpanel"
            aria-label={tab === "residential" ? "Residential properties" : "Commercial properties"}
            className="mt-12 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {(tab === "residential" ? residential : commercial).map(p => (
              <PropertyCard
                key={p.title}
                {...p}
                onOpen={p.id && onOpenProperty ? () => onOpenProperty(p.id!) : undefined}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

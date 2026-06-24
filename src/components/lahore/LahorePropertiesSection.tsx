import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: easeOut } },
};

interface Property {
  image: string;
  badge: string;
  meta: string;
  title: string;
  desc: string;
  id?: string;
}

function PropertyCard({ image, badge, meta, title, desc, id, onOpen }: Property & { onOpen?: () => void }) {
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

        <h3 className="mt-1.5 font-roboto text-[20px] font-normal leading-snug text-[#1D2D4E]" style={{ letterSpacing: "0.9px" }}>
          {title}
        </h3>

        <p className="mt-2 font-roboto text-[12px] font-light leading-relaxed text-[#58595B]">
          {desc}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-5">
          <div className="flex flex-col">
            <span className="mt-0.5 font-termina text-[15px] font-normal text-[#1D2D4E]" />
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

const residential: Property[] = [
  {
    id: "tulip-overseas-block",
    image: "/LAHORE-first_Section.webp",
    badge: "KEY-25 Deal",
    meta: "Possession on 25% DP - 5 Marla, 10 Marla, 1 Kanal",
    title: "Tulip Overseas Block",
    desc: "A premium residential destination designed for overseas Pakistanis, offering flexible payment plans with possession on just 25% down payment.",
  },
  {
    id: "crystal-block",
    image: "/LAHORE-PROJECT2.webp",
    badge: "Pre-Launch Offer",
    meta: "On Cash - 5 Marla, 10 Marla, 1 Kanal",
    title: "Crystal Block",
    desc: "An exclusive new block offering luxury living at a pre-launch price. Secure your plot before the official launch.",
  },
  {
    id: "jade-extension",
    image: "/LAHORE-PROJECTS.webp",
    badge: "Ready for Possession",
    meta: "On Cash - 5 Marla",
    title: "JADE Extension",
    desc: "Plots ready for possession. JADE Extension offers immediate access to the full community with all amenities operational.",
  },
];

const commercial: Property[] = [
  {
    id: "tulip-commercial",
    image: "/LAHORE-PROJECT2.webp",
    badge: "Commercial",
    meta: "Tulip Commercial, ParkView City Lahore",
    title: "Tulip Commercial",
    desc: "A planned retail and business address positioned close to residential movement, designed for investor visibility and community access.",
  },
  {
    id: "broadway-commercial",
    image: "/LAHORE-PROJECTS.webp",
    badge: "Premium Phase",
    meta: "Commercial Hub, ParkView City Lahore",
    title: "Broadway Commercial",
    desc: "A thriving business destination with wide boulevards and a high-density shopping layout designed to attract strong local footfall.",
  },
  {
    id: "the-walk-ii",
    image: "/LAHORE-Last_Section.webp",
    badge: "Retail Avenue",
    meta: "The Walk II, ParkView City Lahore",
    title: "The Walk II",
    desc: "An extension of the walkable commercial experience, planned around premium retail frontage, dining activity, and outdoor movement.",
  },
  {
    id: "the-walk",
    image: "/LAHORE-first_Section.webp",
    badge: "Retail Block",
    meta: "The Walk, ParkView City Lahore",
    title: "The Walk",
    desc: "Ultra-luxury retail walk inspired by modern architecture with spacious outdoor promenades and mixed-use retail spaces.",
  },
  {
    id: "rose-market",
    image: "/Rose%20Market%20hero.webp",
    badge: "Limited Inventory",
    meta: "Rose Market, ParkView City Lahore",
    title: "Rose Market",
    desc: "A boutique commercial development with limited inventory, first-floor availability, and special pricing opportunities.",
  },
  {
    id: "commercial-plots",
    image: "/ProjectLahore.png",
    badge: "Commercial Plots",
    meta: "Multi-size Commercial Inventory",
    title: "Commercial Plots",
    desc: "Flexible commercial plot options for businesses and investors seeking long-term presence inside ParkView City Lahore.",
  },
];

interface LahorePropertiesSectionProps {
  onOpenProperty?: (id: string) => void;
}

export default function LahorePropertiesSection({ onOpenProperty }: LahorePropertiesSectionProps = {}) {
  const [tab, setTab] = useState<"residential" | "commercial">("residential");

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
            ParkView City Lahore
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
            From intimate 5 Marla residences to landmark commercial spaces, discover our
            master-planned blocks offering unmatched architectural standards.
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
              aria-controls="tab-panel-residential"
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
              aria-controls="tab-panel-commercial"
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
            id={tab === "residential" ? "tab-panel-residential" : "tab-panel-commercial"}
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

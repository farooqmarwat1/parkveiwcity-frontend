import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import {
  amenitiesHeroImage,
  featuredAmenities,
} from "@/data/lahoreAmenities";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

function scrollToSection(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className={[
        "flex flex-col",
        align === "center" ? "mx-auto max-w-[760px] items-center text-center" : "max-w-[620px] items-start text-left",
      ].join(" ")}
    >
      <span className="muted-section-eyebrow font-roboto text-[10px] font-normal uppercase tracking-[0.32em]">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-termina text-[28px] font-normal uppercase leading-tight tracking-[0.06em] text-[#1D2D4E] sm:text-[40px]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 font-roboto text-[15px] font-light leading-[28px] text-[#58595B]">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default function LahoreAmenitiesPage() {
  return (
    <div className="overflow-x-hidden bg-white">
      <section
        id="amenities-hero"
        className="figma-hero flex min-h-screen w-full items-end justify-center px-6 pb-[6vh] text-center sm:px-10"
        style={{ minHeight: "100svh" }}
      >
        <img
          src={amenitiesHeroImage}
          alt="ParkView City Lahore aerial community view"
          className="absolute inset-0 h-full w-full object-cover object-center"
          draggable={false}
        />
        <div className="figma-hero-overlay" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOut }}
          className="figma-hero-content mx-auto flex max-w-[900px] flex-col items-center min-[1200px]:max-w-[1400px]"
        >
          <h1
            className="max-w-[90vw] text-center text-white font-termina hero-title-termina uppercase min-[1200px]:max-w-none min-[1200px]:whitespace-nowrap"
            style={{ fontSize: "24px", fontWeight: 500, lineHeight: "32px", letterSpacing: "0px" }}
          >
            Amenities of ParkView City Lahore
          </h1>

          <button
            type="button"
            onClick={() => scrollToSection("#amenities-grid")}
            className="mt-7 flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/50 bg-white/10 px-7 font-roboto text-[11px] font-normal uppercase tracking-[0.18em] text-white backdrop-blur-sm transition-all duration-300 hover:border-[#C4973A] hover:text-[#C4973A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Explore Amenities
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </button>
        </motion.div>
      </section>

      <section id="featured-amenities">
        {featuredAmenities.map((feature, index) => {
          const imageFirst = index % 2 === 1;
          return (
            <section
              key={feature.id}
              className={[
                "px-6 py-20 sm:px-10 sm:py-28 lg:px-20",
                "bg-white",
              ].join(" ")}
            >
              <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeUp}
                  className={imageFirst ? "lg:order-2" : ""}
                >
                  <span className="muted-section-eyebrow font-roboto text-[10px] font-normal uppercase tracking-[0.32em]">
                    {feature.eyebrow}
                  </span>
                  <h2 className="mt-4 font-termina text-[27px] font-normal uppercase leading-tight tracking-[0.05em] text-[#1D2D4E] sm:text-[38px]">
                    {feature.title}
                  </h2>
                  <p className="mt-6 font-roboto text-[15px] font-light leading-[28px] text-[#58595B]">
                    {feature.description}
                  </p>
                  <ul className="mt-7 flex flex-col gap-3">
                    {feature.benefits.map(benefit => (
                      <li key={benefit} className="flex items-start gap-3 font-roboto text-[13px] font-light leading-[22px] text-[#58595B]">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C4973A]/12 text-[#C4973A]">
                          <Check className="h-3.5 w-3.5" strokeWidth={1.8} />
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeUp}
                  className={imageFirst ? "lg:order-1" : ""}
                >
                  <img
                    src={feature.image}
                    alt={feature.imageAlt}
                    className="h-[310px] w-full rounded-[20px] object-cover object-center shadow-md sm:h-[430px] lg:h-[520px]"
                    draggable={false}
                  />
                </motion.div>
              </div>
            </section>
          );
        })}
      </section>

    </div>
  );
}

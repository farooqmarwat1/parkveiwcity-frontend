import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import {
  islamabadAmenitiesHeroImage,
  islamabadFeaturedAmenities,
  islamabadAmenitiesGallery,
} from "@/data/islamabadAmenities";
import ExploreButton from "@/components/ExploreButton";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};
export default function IslamabadAmenitiesPage() {
  const navigate = useNavigate();
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const galleryLen = islamabadAmenitiesGallery.length;

  useEffect(() => {
    if (lightboxIdx === null) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape")      setLightboxIdx(null);
      if (e.key === "ArrowLeft")   setLightboxIdx(i => ((i ?? 0) - 1 + galleryLen) % galleryLen);
      if (e.key === "ArrowRight")  setLightboxIdx(i => ((i ?? 0) + 1) % galleryLen);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIdx, galleryLen]);

  return (
    <div className="overflow-x-hidden bg-white">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        id="amenities-hero"
        className="figma-hero min-h-screen w-full"
        style={{ minHeight: "100svh" }}
      >
        <img
          src={islamabadAmenitiesHeroImage}
          alt="ParkView City Islamabad aerial community view"
          className="absolute inset-0 h-full w-full object-cover object-center"
          draggable={false}
        />
        <div className="figma-hero-overlay" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOut }}
          className="absolute inset-0 z-[2] flex flex-col items-center justify-end px-6 pb-[6vh] text-center"
        >
          <h1
            className="max-w-[90vw] text-center text-white font-termina hero-title-termina uppercase"
            style={{ fontSize: "24px", fontWeight: 500, lineHeight: "32px", letterSpacing: "0px" }}
          >
            Amenities of ParkView City Islamabad
          </h1>
          <div className="mt-6">
            <span className="font-roboto">
              <ExploreButton label="Explore Amenities" variant="stats" href="#featured-amenities" />
            </span>
          </div>
        </motion.div>
      </section>

      {/* ── Featured amenities (alternating) ────────────────────── */}
      <section id="featured-amenities">
        {islamabadFeaturedAmenities.map((feature, index) => {
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

      {/* ── Lightbox ─────────────────────────────────────────────── */}
      {lightboxIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Amenities gallery lightbox"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/92 px-4"
          onClick={e => { if (e.target === e.currentTarget) setLightboxIdx(null); }}
        >
          <button
            type="button"
            aria-label="Close lightbox"
            onClick={() => setLightboxIdx(null)}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white transition-all hover:bg-white/28 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <X className="h-5 w-5" strokeWidth={2} />
          </button>

          <p className="absolute left-1/2 top-5 -translate-x-1/2 select-none font-roboto text-[12px] text-white/65">
            {lightboxIdx + 1} / {galleryLen}
          </p>

          <button
            type="button"
            aria-label="Previous image"
            onClick={() => setLightboxIdx(i => ((i ?? 0) - 1 + galleryLen) % galleryLen)}
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white transition-all hover:bg-white/28 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:left-6"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2} />
          </button>

          <img
            src={islamabadAmenitiesGallery[lightboxIdx].src}
            alt={islamabadAmenitiesGallery[lightboxIdx].alt}
            className="max-h-[85vh] max-w-[85vw] object-contain"
            draggable={false}
          />

          <button
            type="button"
            aria-label="Next image"
            onClick={() => setLightboxIdx(i => ((i ?? 0) + 1) % galleryLen)}
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white transition-all hover:bg-white/28 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:right-6"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>
      )}
    </div>
  );
}

import { motion } from "framer-motion";
import ExploreButton from "@/components/ExploreButton";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.85, ease: easeOut } },
};

export default function LahoreHeroStack() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      <img
        src="/lahore-hero-section.webp"
        alt="ParkView City Lahore aerial view"
        className="absolute inset-0 h-full w-full object-cover object-center"
        draggable={false}
      />
      <video
        className="absolute inset-0 h-full w-full object-cover object-center"
        src="/Lahore-hero_Section.mp4"
        poster="/lahore-hero-section.webp"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="ParkView City Lahore aerial video"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-black/80" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="absolute inset-0 z-10 flex flex-col items-center justify-end px-6 pb-[6vh] text-center"
      >
        <motion.h1
          variants={item}
          className="max-w-[90vw] text-center text-white font-termina hero-title-termina uppercase"
          style={{ fontSize: "24px", fontWeight: 500, lineHeight: "88.2px", letterSpacing: "0px" }}
        >
          Where Lifestyle Meets Luxury
        </motion.h1>

        <motion.div variants={item} className="mt-6 sm:mt-0">
          <span className="font-roboto">
            <ExploreButton label="Explore" variant="stats" href="#about" />
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}

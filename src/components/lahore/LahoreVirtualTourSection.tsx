import { motion } from "framer-motion";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

export default function LahoreVirtualTourSection() {
  return (
    <section
      id="virtual-tour"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden px-6 text-center"
      style={{ minHeight: "clamp(400px, 55vh, 653px)", scrollMarginTop: "100px" }}
    >
      {/* Background image */}
      <img
        src="/LAHORE-Last_Section.webp"
        alt="ParkView City Lahore drone view"
        className="absolute inset-0 h-full w-full object-cover object-center"
        draggable={false}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <motion.div
        initial="hidden" whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="relative z-10 mx-auto flex max-w-[1280px] flex-col items-center"
      >
        <span className="font-roboto text-[10px] font-normal uppercase tracking-[0.33em] text-[#C4973A]">
          Experience ParkView City
        </span>

        <h2 className="mt-3 font-termina text-[28px] font-normal uppercase leading-tight tracking-[0.06em] text-white sm:text-[36px]">
          Lahore Virtual Tour
        </h2>

        <a
          href="https://pvvtour.com/lhr/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-block rounded-full border border-white/30 bg-white/10 px-12 py-3 font-roboto text-[10px] uppercase tracking-[0.32em] text-white backdrop-blur-md transition-all duration-300 hover:border-pvc-gold hover:text-pvc-gold cursor-pointer"
        >
          View Tour
        </a>
      </motion.div>
    </section>
  );
}

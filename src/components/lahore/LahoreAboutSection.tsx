import { motion } from "framer-motion";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function LahoreAboutSection() {
  return (
    <section
      id="about"
      className="bg-white px-6 py-20 sm:px-10 sm:py-28 lg:px-20"
      style={{ scrollMarginTop: "0px" }}
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

        {/* Left — text */}
        <motion.div
          initial="hidden" whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex w-full max-w-[600px] flex-col items-start"
        >
          <span className="font-roboto text-[10px] font-normal uppercase tracking-[0.33em] text-[#58595B]">
            About ParkView City
          </span>

          <h2 className="mt-4 font-termina text-[28px] font-normal uppercase leading-tight tracking-[0.06em] text-[#1D2D4E] sm:text-[36px]">
            A Place to Call Home
          </h2>

          <p className="mt-6 font-roboto text-[15px] font-light leading-[26px] text-[#58595B]">
            ParkView City Lahore began as a vision on 765 kanal, master-planned to provide
            an elegant balance of green spaces and modern urban convenience.
          </p>

          <p className="mt-4 font-roboto text-[15px] font-light leading-[26px] text-[#58595B]">
            Offering residential plots from 5 Marla to 1 Kanal, it has grown into one of
            Lahore's most prestigious gated communities, designed for families seeking
            security, luxury, and premium amenities.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollTo("#properties")}
              className="flex min-h-11 min-w-[172px] items-center justify-center rounded-full border border-black/15 bg-white px-8 font-roboto text-[11px] font-normal uppercase tracking-[0.22em] text-[#58595B] transition-all duration-300 hover:border-[#C4973A] hover:text-[#C4973A] cursor-pointer"
            >
              View Properties
            </button>
            <button
              type="button"
              onClick={() => scrollTo("#amenities")}
              className="flex min-h-11 min-w-[172px] items-center justify-center rounded-full border border-black/15 bg-white px-8 font-roboto text-[11px] font-normal uppercase tracking-[0.22em] text-[#58595B] transition-all duration-300 hover:border-[#C4973A] hover:text-[#C4973A] cursor-pointer"
            >
              Amenities
            </button>
          </div>
        </motion.div>

        {/* Right — image */}
        <motion.div
          initial="hidden" whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex w-full justify-center lg:justify-end"
        >
          <img
            src="/LAHORE-first_Section.webp"
            alt="ParkView City Lahore — aerial neighbourhood view"
            className="h-[350px] w-full max-w-[600px] rounded-[16px] object-cover object-center shadow-md sm:h-[480px]"
          />
        </motion.div>

      </div>
    </section>
  );
}

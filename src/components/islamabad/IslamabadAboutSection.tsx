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

export default function IslamabadAboutSection() {
  return (
    <section
      id="about"
      className="bg-white px-6 pt-28 pb-20 sm:px-10 sm:pt-36 sm:pb-28 lg:px-20"
      style={{ scrollMarginTop: "0px" }}
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

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
            A Capital Address Worth Calling Home
          </h2>

          <p className="mt-6 font-roboto text-[15px] font-light leading-[26px] text-[#58595B]">
            ParkView City Islamabad is a master-planned gated community set against the
            natural beauty of the Margalla Hills — designed to deliver an unmatched standard
            of modern, secure, and green community living in the capital.
          </p>

          <p className="mt-4 font-roboto text-[15px] font-light leading-[26px] text-[#58595B]">
            From premium residential plots across multiple blocks to a vibrant commercial
            hub, dancing fountain, and world-class amenities, ParkView City Islamabad sets
            a new benchmark for the capital's residential landscape.
          </p>

          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => scrollTo("#properties")}
              className="flex h-[44px] min-w-[160px] items-center justify-center gap-2 rounded-full border border-[#58595B]/40 px-8 font-roboto text-[12px] font-medium leading-[18px] tracking-[3.3px] uppercase text-[#58595B] transition-all duration-300 hover:border-[#C4973A] hover:text-[#C4973A] cursor-pointer"
            >
              View Properties
            </button>
            <button
              type="button"
              onClick={() => scrollTo("#amenities")}
              className="flex h-[44px] min-w-[160px] items-center justify-center gap-2 rounded-full border border-[#58595B]/40 px-8 font-roboto text-[12px] font-medium leading-[18px] tracking-[3.3px] uppercase text-[#58595B] transition-all duration-300 hover:border-[#C4973A] hover:text-[#C4973A] cursor-pointer"
            >
              Amenities
            </button>
          </div>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex w-full justify-center lg:justify-end"
        >
          <img
            src="/firstsection-isb.png"
            alt="ParkView City Islamabad aerial community view"
            className="h-[350px] w-full max-w-[600px] rounded-[16px] object-cover object-center shadow-md sm:h-[480px]"
          />
        </motion.div>

      </div>
    </section>
  );
}

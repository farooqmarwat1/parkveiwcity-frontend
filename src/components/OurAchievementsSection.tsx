import { motion } from "framer-motion";
import { achievements } from "@/data/achievementsData";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
};

export default function OurAchievementsSection() {
  return (
    <section id="achievements" className="bg-white px-6 pt-12 pb-20 sm:px-10 sm:pt-16 sm:pb-28 lg:px-20">
      <div className="mx-auto max-w-[1280px]">

        {/* ── Header ────────────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.75, ease: easeOut }}
          className="flex flex-col items-center text-center"
        >
          <span className="font-roboto text-[10px] font-normal uppercase tracking-[0.32em] text-[#58595B]">
            Corporate Social Responsibility
          </span>

          {/* Short gold divider */}
          <div className="mt-4 h-px w-10 bg-[#C4973A]" />

          <h2
            className="mt-5 font-termina font-normal uppercase leading-tight tracking-[0.06em] text-[#1D2D4E]"
            style={{ fontSize: "clamp(30px, 4vw, 40px)" }}
          >
            Our Achievements
          </h2>

          <p className="mt-5 w-full max-w-[720px] whitespace-normal text-wrap break-words font-roboto font-light text-[#58595B]"
             style={{ fontSize: "16px", lineHeight: "28px", letterSpacing: "0.9px" }}>
            Milestones that define a legacy — recognition, records, sustainability, innovation, and meaningful community progress.
          </p>
        </motion.div>

        {/* ── Cards Grid ────────────────────────────────────────── */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, index) => (
            <motion.article
              key={item.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              transition={{ duration: 0.65, ease: easeOut, delay: (index % 4) * 0.07 }}
              className="group flex flex-col overflow-hidden rounded-[12px] border border-[#1D2D4E]/10 bg-white transition-all duration-300 hover:border-[#C4973A]/40 hover:shadow-md"
            >
              {/* Image */}
              <div className="h-[200px] shrink-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  draggable={false}
                />
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <span className="font-roboto uppercase text-[#58595B]"
                  style={{ fontSize: "9px", fontWeight: 400, lineHeight: "13.5px", letterSpacing: "1.2px" }}>
                  {item.category}
                </span>
                <h3
                  className="mt-2 font-roboto text-[#1D2D4E]"
                  style={{ fontSize: "14px", fontWeight: 500, lineHeight: "21px", letterSpacing: "0.9px", minHeight: "42px" }}
                >
                  {item.title}
                </h3>
                <p className="mt-3 font-roboto text-[#58595B]"
                  style={{ fontSize: "12px", fontWeight: 300, lineHeight: "19.2px", letterSpacing: "0.5px" }}>
                  {item.description}
                </p>
              </div>

              {/* Gold bottom accent on hover */}
              <div className="h-[2px] w-0 bg-[#C4973A] transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

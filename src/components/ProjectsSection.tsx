import { useNavigate } from "react-router-dom";
import { motion, type Variants } from "framer-motion";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

const projects = [
  {
    image: "/LahorePorjectPic.webp",
    title: "PARKVIEW CITY LAHORE",
    subtitle: "A Place to Call Home",
    href: "/lahore",
  },
  {
    image: "/firstsection-isb.png",
    title: "PARKVIEW CITY ISLAMABAD",
    subtitle: "A Dream Place to Live In",
    href: "/islamabad",
  },
];

export default function ProjectsSection() {
  const navigate = useNavigate();
  return (
    <section id="projects" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1100px] px-6 sm:px-10">

        {/* Heading */}
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mb-4 text-center font-termina text-[24px] sm:text-[32px] lg:text-[40px] font-normal text-pvc-navy">
          DISCOVER YOUR DREAM PROPERTY
        </motion.h2>

        {/* Subheading */}
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mb-12 w-full max-w-[1247px] mx-auto font-roboto text-[16px] font-light leading-[24px] tracking-[0.9px] text-center text-pvc-ink/70">
          Parkview City is a thoughtfully planned real estate development brand creating modern residential and commercial communities across Pakistan.
        </motion.p>

        {/* Cards — full width below heading */}
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="group flex flex-col overflow-hidden rounded-[15px] border border-gray-200 shadow-sm"
            >
              {/* Image */}
              <div className="relative h-[70vh] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </div>

              {/* Text below image */}
              <div className="flex flex-col gap-1 bg-white px-8 py-6">
                <h3 className="font-termina text-2xl font-normal text-pvc-navy">{p.title}</h3>
                <p className="font-roboto text-[11px] font-normal leading-[16.5px] tracking-[3.3px] uppercase text-pvc-ink/50">{p.subtitle}</p>
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() => navigate(p.href)}
                    className="inline-block rounded-full border border-pvc-ink/25 px-12 py-3 font-roboto text-[10px] uppercase tracking-[0.32em] text-pvc-ink/60 transition-all duration-300 hover:border-pvc-gold hover:text-pvc-gold cursor-pointer">
                    Explore
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

      </div>
    </section>
  );
}
  
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";

// We keep 'tall' to maintain the masonry layout logic
type Item = { tall: boolean };

const columns: Item[][] = [
  [{ tall: true }, { tall: false }, { tall: true }, { tall: false }],
  [{ tall: false }, { tall: true }, { tall: false }, { tall: true }],
  [{ tall: true }, { tall: false }, { tall: false }, { tall: true }],
  [{ tall: false }, { tall: true }, { tall: true }, { tall: false }],
];

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

export default function CuratedSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"],
  });

  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" && window.innerWidth < 768
  );
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Mobile grid is ~2× taller (2 cols vs 4), so double the values to keep the same visual intensity
  const slow = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -650 : -300]);
  const fast = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -1500 : -750]);
  const ys = [slow, fast, slow, fast];

  // Marquee fades out and blurs as the grid images scroll into view
  const marqueeOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const marqueeFilter = useTransform(scrollYProgress, [0, 0.12], ["blur(0px)", "blur(10px)"]);

  return (
    <section className="relative bg-white pt-16 pb-0 sm:pt-32 -mb-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_60%_at_50%_0%,rgba(201,162,75,0.06),transparent_60%)]" />

      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="relative mx-auto flex flex-col items-center gap-4 px-6"
      >
        <p
          className="font-termina text-center font-medium uppercase tracking-[0.1em] text-[24px] sm:text-[32px] lg:text-[40px]"
          style={{ color: "#1D2D4E" }}
        >
          A New Realm of Curated Collaborations
        </p>
        <p
          className="font-roboto mx-auto mt-4 max-w-[1100px] px-2 text-center leading-relaxed text-pvc-ink/70"
          style={{ fontSize: "16px" }}
        >
          Parkview City is more than a real estate development. It is a growing
          vision for secure, scenic, and modern urban living. Whether you are
          looking for a home, a commercial opportunity, or a long-term
          investment. ParkView City offers a destination built for today and
          tomorrow.
        </p>

        {/* Marquee */}
        <motion.div
          className="w-full overflow-hidden mt-10 mb-14"
          style={{ opacity: marqueeOpacity, filter: marqueeFilter }}
        >
          <div
            className="flex items-center gap-20"
            style={{ animation: "marquee 18s linear infinite", width: "max-content" }}
          >
            {[...Array(2)].map((_, set) => (
              <div key={set} className="flex items-center gap-20">
                <img src="/PVIsb.png" alt="Islamabad" className="h-20 w-auto object-contain" />
                <img src="/PVLahore.png" alt="Lahore" className="h-20 w-auto object-contain" />
                <img src="/PVrawalpindi.png" alt="Rawalpindi" className="h-20 w-auto object-contain" />
                <img src="/PVIsb.png" alt="Islamabad" className="h-20 w-auto object-contain" />
                <img src="/PVLahore.png" alt="Lahore" className="h-20 w-auto object-contain" />
                <img src="/PVrawalpindi.png" alt="Rawalpindi" className="h-20 w-auto object-contain" />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Grid */}
      <div className="relative mx-auto mt-16 max-w-[1400px] px-6 sm:px-10">
        <div ref={gridRef} className="grid grid-cols-2 gap-2 sm:gap-2.5 md:grid-cols-4">
          {columns.map((col, colIdx) => (
            <motion.div key={colIdx} style={{ y: ys[colIdx] }} className="flex flex-col gap-2 sm:gap-2.5">
              {col.map((item, itemIdx) => {
                // Logic to get image number 1 through 16
                const imageNumber = colIdx * 4 + itemIdx + 1;
                
                return (
                  <motion.figure
                    key={imageNumber}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.05 }}
                    // Added rounded-[15px] and removed figcaption
                    className={`group relative w-full overflow-hidden rounded-[15px] ${
                      item.tall ? "aspect-[3/4]" : "aspect-[4/5]"
                    }`}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                      style={{ backgroundImage: `url('/${imageNumber}.png')` }}
                    />
                  </motion.figure>
                );
              })}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
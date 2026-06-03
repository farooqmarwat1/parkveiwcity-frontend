import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";

// Masonry layout logic
type Item = { tall: boolean };

const columns: Item[][] = [
  [{ tall: true }, { tall: false }, { tall: true }, { tall: false }],
  [{ tall: false }, { tall: true }, { tall: false }, { tall: true }],
  [{ tall: true }, { tall: false }, { tall: false }, { tall: true }],
  [{ tall: false }, { tall: true }, { tall: true }, { tall: false }],
];

const imageTitles = [
  "The Walk", "Overseas Block", "Downtown Residency", "Golf Estate",
  "The Lake District", "Sky Residency", "Commercial Broadway", "Hill View",
  "Botanical Garden", "Silver City", "Crystal Lake", "The Boulevard",
  "Central Park", "Sunset Point", "Grand Mosque", "Community Hub"
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
    offset: ["start 0.9", "end start"],
  });

  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" && window.innerWidth < 768
  );
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Mobile: 2.5× ratio gives clear speed difference; small absolute values reduce empty bottom space
  const slow = useTransform(scrollYProgress, [0, 0.1, 1], [0, 0, isMobile ? -80 : -300]);
  const fast = useTransform(scrollYProgress, [0, 0.1, 1], [0, 0, isMobile ? -200 : -750]);
  const ys = [slow, fast, slow, fast];

  // Marquee completes fade BEFORE images reach it (progress ~0.16 < image overlap ~0.20)
  const marqueeOpacity = useTransform(scrollYProgress, [0.04, 0.1, 0.16], [1, 1, 0]);
  const marqueeFilter  = useTransform(scrollYProgress, [0.04, 0.1, 0.16], ["blur(0px)", "blur(0px)", "blur(12px)"]);

  return (
    // Moderate mobile negative margin: reduces gap without cutting images
    <section className="relative bg-white pt-16 sm:pt-32 pb-0 -mb-[60px] sm:-mb-32 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
        ` }} />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_60%_at_50%_0%,rgba(201,162,75,0.06),transparent_60%)]" />

      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="relative z-10 mx-auto flex flex-col items-center justify-center text-center px-6"
      >
        <p
          className="font-termina font-medium uppercase tracking-[0.1em] text-[24px] sm:text-[32px] lg:text-[40px] max-w-5xl"
          style={{ color: "#1D2D4E" }}
        >
          A New Realm of Curated Collaborations
        </p>
        <p
          className="font-roboto mt-4 max-w-[1100px] px-2 leading-relaxed text-pvc-ink/70"
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
          className="w-full overflow-hidden mt-8 mb-2"
          style={{ opacity: marqueeOpacity, filter: marqueeFilter }}
        >
          <div
            className="flex items-center"
            style={{ 
              animation: "marquee 22s linear infinite", 
              width: "max-content",
              display: "flex" 
            }}
          >
            {[...Array(3)].map((_, set) => (
              <div key={set} className="flex items-center gap-24 px-12">
                <img src="/PVIsb.png" alt="Islamabad" className="h-16 sm:h-20 w-auto object-contain" />
                <img src="/PVLahore.png" alt="Lahore" className="h-16 sm:h-20 w-auto object-contain" />
                <img src="/PVrawalpindi.png" alt="Rawalpindi" className="h-16 sm:h-20 w-auto object-contain" />
                <img src="/PVIsb.png" alt="Islamabad" className="h-16 sm:h-20 w-auto object-contain" />
                <img src="/PVLahore.png" alt="Lahore" className="h-16 sm:h-20 w-auto object-contain" />
                <img src="/PVrawalpindi.png" alt="Rawalpindi" className="h-16 sm:h-20 w-auto object-contain" />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Grid */}
      <div ref={gridRef} className="relative mx-auto mt-2 sm:mt-10 max-w-[1400px] px-4 sm:px-10">
        <div className="grid grid-cols-2 gap-2 sm:gap-2.5 md:grid-cols-4">
          {columns.map((col, colIdx) => (
            <motion.div 
              key={colIdx} 
              style={{ y: ys[colIdx] }} 
              className="flex flex-col gap-2 sm:gap-2.5"
            >
              {col.map((item, itemIdx) => {
                const imageIndex = colIdx * 4 + itemIdx;
                const imageNumber = imageIndex + 1;
                
                return (
                  <motion.figure
                    key={imageNumber}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.05 }}
                    className={`group relative w-full overflow-hidden rounded-[15px] shadow-sm ${
                      item.tall ? "aspect-[3/4]" : "aspect-[4/5]"
                    }`}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                      style={{ backgroundImage: `url('/${imageNumber}.png')` }}
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 z-10 p-4 pt-10 bg-gradient-to-t from-black/60 to-transparent">
                      <p className="text-white text-[11px] sm:text-[13px] uppercase tracking-wider font-medium" style={{ fontFamily: "'TerminaTest', 'Barlow', sans-serif" }}>
                        {imageTitles[imageIndex] || "Parkview City"}
                      </p>
                    </figcaption>
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
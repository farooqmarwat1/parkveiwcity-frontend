import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

interface AmenityCardProps {
  category: string;
  title: string;
  desc: string;
  index: number;
}

function AmenityCard({ category, title, desc, index }: AmenityCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ delay: (index % 3) * 0.08 }}
      className="bg-white border border-gray-100 flex flex-col min-h-[233.5px] rounded-[16px] hover:shadow-md hover:bg-pvc-sand/10 transition-all duration-300 w-full"
      style={{ padding: "36px 32px" }}
    >
      <span className="font-roboto text-[#C4973A] text-[9px] font-normal tracking-[0.9px] uppercase" style={{ lineHeight: "14px" }}>
        {category}
      </span>
      <h3 className="font-roboto mt-2 text-[20px] font-normal text-[#1D2D4E]" style={{ lineHeight: "30px", letterSpacing: "0.9px" }}>
        {title}
      </h3>
      <p className="font-roboto mt-3 text-[#58595B] text-[13px] font-light" style={{ lineHeight: "21px", letterSpacing: "0.9px" }}>
        {desc}
      </p>
    </motion.div>
  );
}

const amenitiesData = [
  {
    category: "Connectivity",
    title: "Easy Access",
    desc: "3-KM from Thokar Niaz Baig on Multan Road — proximity to key expressways."
  },
  {
    category: "Infrastructure",
    title: "Underground Electricity",
    desc: "Cables run underground to preserve scenic views within the community."
  },
  {
    category: "Green Spaces",
    title: "Multiple Parks",
    desc: "Community recreation parks throughout the society for leisure and health."
  },
  {
    category: "Safety",
    title: "24/7 Security",
    desc: "Round-the-clock security personnel conducting regular patrols."
  },
  {
    category: "Education",
    title: "The National School",
    desc: "Covers Kindergarten through A-Levels with modern labs and campus facilities."
  },
  {
    category: "Recreation",
    title: "ParkView Zoo",
    desc: "Houses local and exotic animals — a beloved attraction for families."
  }
];

export default function LahoreAmenitiesPreviewSection() {
  const navigate = useNavigate();
  return (
    <section id="amenities" className="bg-[#FFFFFF] py-20 px-6 sm:py-28 sm:px-10 lg:px-20" style={{ scrollMarginTop: "100px" }}>
      <div className="mx-auto max-w-[1280px] flex flex-col">
        
        {/* Header Row */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 border-b border-gray-100 pb-8"
        >
          <div className="flex flex-col items-start max-w-[480px]">
            <span className="font-roboto text-[10px] font-normal tracking-[0.9px] uppercase text-[#58595B]">
              Amenities in Lahore
            </span>
            <h2 
              className="mt-3 font-termina text-[28px] sm:text-[40px] font-normal uppercase tracking-[2px] leading-tight text-[#1D2D4E]"
              style={{ fontFamily: "'TerminaTest', 'Barlow', sans-serif" }}
            >
              Every Luxury, Within Reach
            </h2>
          </div>

          <div>
            <button
              type="button"
              onClick={() => navigate("/lahore/amenities")}
              className="flex min-h-11 min-w-[201px] items-center justify-center rounded-full border border-black/15 bg-white px-8 font-roboto text-[11px] font-normal uppercase tracking-[0.22em] text-[#58595B] transition-all duration-300 hover:border-[#C4973A] hover:text-[#C4973A] cursor-pointer"
            >
              View All Amenities
            </button>
          </div>
        </motion.div>

        {/* Grid of cards */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {amenitiesData.map((item, idx) => (
            <AmenityCard key={idx} index={idx} {...item} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

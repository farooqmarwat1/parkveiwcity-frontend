import { motion, type Variants } from "framer-motion";
import { Waves, Dumbbell, GraduationCap, ShoppingBag, UtensilsCrossed, Cross, Car, Flower2, Wifi, Shield, TreePine, Building2 } from "lucide-react";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease: easeOut } },
};

const amenities = [
  { Icon: Waves,           name: "Olympic Swimming Pool",  category: "Recreation"      },
  { Icon: Dumbbell,        name: "World-Class Gymnasium",  category: "Wellness"        },
  { Icon: GraduationCap,   name: "International Schools",  category: "Education"       },
  { Icon: ShoppingBag,     name: "Luxury Shopping Mall",   category: "Retail"          },
  { Icon: UtensilsCrossed, name: "Fine Dining & Cafés",    category: "Lifestyle"       },
  { Icon: Cross,           name: "State-of-Art Hospital",  category: "Healthcare"      },
  { Icon: Car,             name: "Underground Parking",    category: "Infrastructure"  },
  { Icon: Flower2,         name: "Botanical Gardens",      category: "Nature"          },
  { Icon: Wifi,            name: "Fibre Internet Grid",    category: "Technology"      },
  { Icon: Shield,          name: "24/7 Smart Security",    category: "Safety"          },
  { Icon: TreePine,        name: "Central Linear Park",    category: "Green Space"     },
  { Icon: Building2,       name: "Business District",      category: "Commerce"        },
];

function getBorderClasses(i: number) {
  return [
    // Bottom border — not last row per breakpoint
    i < 11 ? "border-b" : "",        // mobile 1-col: last = 11
    i >= 10 ? "sm:border-b-0" : "",  // sm 2-col: last row = [10,11]
    i >= 8  ? "md:border-b-0" : "",  // md 4-col: last row = [8-11]
    // Right border — not last column per breakpoint
    i % 2 === 0 ? "sm:border-r" : "",               // sm 2-col: right border on col 0
    i % 4 !== 3 ? "md:border-r" : "md:border-r-0",  // md 4-col: right border except last col
  ].filter(Boolean).join(" ");
}

export default function AmenitiesSection() {
  return (
    <section className="bg-white pt-6 pb-20 sm:pt-8 sm:pb-28">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">

        {/* Header */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-4 text-center">
          <h2 className="font-termina text-[24px] sm:text-[32px] lg:text-[40px] font-normal text-pvc-navy">
            EVERY LUXURY, WITHIN REACH
          </h2>
          <p className="mt-5 w-full max-w-[1247px] mx-auto font-roboto text-[16px] font-light leading-[24px] tracking-[0.9px] text-center text-pvc-grey">
            From grand promenades to intimate parks, Park View City offers over 40 world-class amenities within its master-planned community.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 overflow-hidden sm:grid-cols-2 md:grid-cols-4">
          {amenities.map(({ Icon, name, category }, i) => (
            <motion.div
              key={i}
              variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: (i % 4) * 0.05 }}
              className={`flex items-center gap-4 border-gray-100 p-8 min-h-[108px] hover:bg-pvc-sand/30 transition-colors duration-200 ${getBorderClasses(i)}`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-pvc-gold bg-white">
                <Icon className="h-5 w-5 text-pvc-gold" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-roboto text-[14px] font-normal leading-[19.25px] tracking-[0.9px] text-pvc-navy">{name}</p>
                <p className="mt-0.5 font-roboto text-[9px] font-normal leading-[13.5px] tracking-[0.9px] uppercase text-[#58595B]/80">{category}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

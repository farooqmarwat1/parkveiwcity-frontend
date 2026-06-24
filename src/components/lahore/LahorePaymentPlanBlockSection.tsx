import { motion } from "framer-motion";
import LahorePaymentPlanTable from "./LahorePaymentPlanTable";
import type { LahorePaymentPlan } from "@/data/lahorePaymentPlans";

interface Props {
  id?: string;
  heading: string;
  plans: LahorePaymentPlan[];
}

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: easeOut } },
};

export default function LahorePaymentPlanBlockSection({ id, heading, plans }: Props) {
  return (
    <section id={id} className="pt-14 pb-2 scroll-mt-[75px]">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8 md:px-10">

        {/* Heading row */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="mb-7 flex items-start gap-3 border-b border-[#1D2D4E]/10 pb-5"
        >
          <div className="mt-0.5 h-6 w-1 shrink-0 rounded-full bg-[#C4973A]" />
          <h2 className="font-termina text-[20px] font-normal uppercase leading-tight tracking-[0.06em] text-[#1D2D4E]">
            {heading}
          </h2>
        </motion.div>

        {/* Table panels */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 items-stretch">
          {plans.map(plan => (
            <LahorePaymentPlanTable key={plan.slug} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

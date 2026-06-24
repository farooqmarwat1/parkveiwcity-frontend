import { motion } from "framer-motion";
import type { LahorePaymentPlan } from "@/data/lahorePaymentPlans";

interface Props {
  plan: LahorePaymentPlan;
}

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export default function LahorePaymentPlanTable({ plan }: Props) {
  const isResidential = plan.category === "Residential";
  const isWide = plan.tableColumns.length >= 4;

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUp}
      className={[
        "flex h-full flex-col overflow-hidden rounded-[18px] border border-[#1D2D4E]/10 bg-white shadow-sm",
        isWide ? "lg:col-span-2" : "",
      ].join(" ")}
    >
      {/* Panel header */}
      <div className="flex items-start gap-3 px-6 pt-6">
        <div className="mt-1 h-6 w-1 shrink-0 rounded-full bg-[#C4973A]" />
        <div>
          <span
            className={[
              "font-roboto text-[8px] font-medium uppercase tracking-[0.22em]",
              isResidential ? "text-[#58595B]/65" : "text-[#C4973A]",
            ].join(" ")}
          >
            {plan.category}
          </span>
          <h3 className="mt-1 font-termina text-[16px] font-normal uppercase leading-tight tracking-[0.04em] text-[#1D2D4E] sm:text-[18px]">
            {plan.title}
          </h3>
          <p className="mt-0.5 font-roboto text-[11px] font-light text-[#58595B]/80">
            {plan.planType}
          </p>
        </div>
      </div>

      {/* Pricing table */}
      <div className="mt-5 overflow-x-auto px-6">
        <table className="w-full min-w-[420px] border-collapse font-roboto text-[12.5px]">
          <thead>
            <tr className="border-b border-[#1D2D4E]/12">
              {plan.tableColumns.map((col, ci) => (
                <th
                  key={col}
                  className={[
                    "py-2.5 font-roboto text-[9px] font-semibold uppercase tracking-[0.1em] text-[#C4973A]",
                    ci === 0 ? "pr-3 text-left" : "pl-3 text-right",
                  ].join(" ")}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {plan.tableRows.map((row, ri) => (
              <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-[#1D2D4E]/[0.03]"}>
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={[
                      "py-2.5 font-roboto text-[12.5px] text-[#1D2D4E]",
                      ci === 0 ? "pr-3 text-left font-medium" : "pl-3 text-right",
                    ].join(" ")}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Notes */}
      {plan.notes && plan.notes.length > 0 && (
        <div className="mt-4 px-6">
          {plan.notes.map(note => (
            <p key={note} className="font-roboto text-[11px] font-light leading-[18px] text-[#58595B]">
              • {note}
            </p>
          ))}
        </div>
      )}

      {/* Download */}
      {plan.pdfUrl && (
        <div className="mt-4 px-6">
          <a
            href={plan.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[38px] items-center justify-center rounded-full border border-[#1D2D4E]/20 bg-white px-5 font-roboto text-[10px] uppercase tracking-[0.16em] text-[#1D2D4E] transition-all duration-300 hover:border-[#C4973A] hover:text-[#C4973A]"
          >
            Download Payment Plan
          </a>
        </div>
      )}

      <div className="pb-6" />
    </motion.div>
  );
}

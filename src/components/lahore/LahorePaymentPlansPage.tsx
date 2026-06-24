import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import LahorePaymentPlanBlockSection from "./LahorePaymentPlanBlockSection";
import { lahoreResidentialPlans, lahoreCommercialPlans } from "@/data/lahorePaymentPlans";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ── Group plans by family ────────────────────────────────────── */
function byFamily<T extends { family: string }>(plans: T[]): Map<string, T[]> {
  const map = new Map<string, T[]>();
  for (const p of plans) {
    const arr = map.get(p.family) ?? [];
    arr.push(p);
    map.set(p.family, arr);
  }
  return map;
}

const residentialFamilies = byFamily(lahoreResidentialPlans);
const commercialFamilies  = byFamily(lahoreCommercialPlans);

/* ── Category divider ─────────────────────────────────────────── */
function CategoryDivider({ label }: { label: string }) {
  return (
    <div className="mx-auto flex max-w-[1120px] items-center gap-4 px-5 sm:px-8 md:px-10">
      <div className="h-px flex-1 bg-[#1D2D4E]/12" />
      <div className="flex items-center gap-2 rounded-full border border-[#C4973A]/60 bg-white px-5 py-2.5 shadow-sm">
        <span className="font-roboto text-[9px] font-medium uppercase tracking-[0.22em] text-[#1D2D4E]">
          {label}
        </span>
      </div>
      <div className="h-px flex-1 bg-[#1D2D4E]/12" />
    </div>
  );
}

export default function LahorePaymentPlansPage() {
  const { hash } = useLocation();

  /* Scroll to anchor when hash is present (e.g. #crystal-block-plans) */
  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 120);
    return () => clearTimeout(timer);
  }, [hash]);

  return (
    /* White page background */
    <div className="bg-white">

      {/* ════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════ */}
      <section
        id="payment-plans-hero"
        className="figma-hero flex min-h-screen w-full items-end justify-center px-6 pb-[6vh] text-center sm:px-10"
        style={{
          minHeight: "100svh",
          backgroundImage: "url('/lahore-Payments.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="figma-hero-overlay" />

        <div className="figma-hero-content flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOut }}
            className="max-w-[90vw] text-center text-white font-termina hero-title-termina uppercase"
            style={{ fontSize: "24px", fontWeight: 500, lineHeight: "88.2px", letterSpacing: "0px" }}
          >
            Payment Plans
          </motion.h1>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          RESIDENTIAL DIVIDER
      ════════════════════════════════════════════════════════ */}
      <div className="mt-20 sm:mt-24">
        <CategoryDivider label="RESIDENTIAL PLOTS" />
      </div>

      {/* ════════════════════════════════════════════════════════
          RESIDENTIAL FAMILY SECTIONS
      ════════════════════════════════════════════════════════ */}
      {Array.from(residentialFamilies.entries()).map(([family, plans]) => {
        const id = family.toLowerCase().replace(/\s+/g, "-") + "-plans";
        return (
          <LahorePaymentPlanBlockSection
            key={family}
            id={id}
            heading={family}
            plans={plans}
          />
        );
      })}

      {/* ════════════════════════════════════════════════════════
          COMMERCIAL DIVIDER
      ════════════════════════════════════════════════════════ */}
      <div className="mt-16 sm:mt-20">
        <CategoryDivider label="COMMERCIAL PLOTS" />
      </div>

      {/* ════════════════════════════════════════════════════════
          COMMERCIAL FAMILY SECTIONS
      ════════════════════════════════════════════════════════ */}
      {Array.from(commercialFamilies.entries()).map(([family, plans]) => {
        const id = family.toLowerCase().replace(/\s+/g, "-") + "-plans";
        return (
          <LahorePaymentPlanBlockSection
            key={family}
            id={id}
            heading={family}
            plans={plans}
          />
        );
      })}

      <div className="h-20 sm:h-24" />
    </div>
  );
}

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import PaymentPlanFamilySection from "@/components/lahore/PaymentPlanFamilySection";
import { islamabadResidentialPlans, islamabadCommercialPlans } from "@/data/islamabadPaymentPlans";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

function byFamily<T extends { family: string }>(plans: T[]): Map<string, T[]> {
  const map = new Map<string, T[]>();
  for (const p of plans) {
    const arr = map.get(p.family) ?? [];
    arr.push(p);
    map.set(p.family, arr);
  }
  return map;
}

const residentialFamilies = byFamily(islamabadResidentialPlans);
const commercialFamilies  = byFamily(islamabadCommercialPlans);

function CategoryDivider({ label, commercial = false }: { label: string; commercial?: boolean }) {
  return (
    <div className="mx-auto flex max-w-[1120px] items-center gap-4 px-5 sm:px-8 md:px-10">
      <div className="h-px flex-1 bg-[#1D2D4E]/12" />
      <div className="flex items-center gap-2 rounded-full border border-[#C4973A]/60 bg-white px-5 py-2.5 shadow-sm">
        {commercial && <span className="h-2 w-2 shrink-0 rounded-full bg-[#C4973A]" />}
        <span className="font-roboto text-[9px] font-medium uppercase tracking-[0.22em] text-[#1D2D4E]">
          {label}
        </span>
      </div>
      <div className="h-px flex-1 bg-[#1D2D4E]/12" />
    </div>
  );
}

export default function IslamabadPaymentPlansPage() {
  const { hash } = useLocation();

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
    <div className="bg-white">

      <section
        id="payment-plans-hero"
        className="figma-hero flex min-h-screen w-full items-center justify-center"
        style={{
          minHeight: "100svh",
          backgroundImage: "url('/PaymentPlansHeroSection-isb.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="figma-hero-overlay" />

        <div className="figma-hero-content flex flex-col items-center px-5 text-center sm:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: easeOut }}
            className="mt-3 font-termina font-normal uppercase leading-tight text-white"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "0.04em" }}
          >
            Payment Plans
          </motion.h1>
        </div>
      </section>

      <div className="mt-20 sm:mt-24">
        <CategoryDivider label="Residential Plots" />
      </div>

      {Array.from(residentialFamilies.entries()).map(([family, plans]) => {
        const id = family.toLowerCase().replace(/\s+/g, "-") + "-plans";
        return (
          <PaymentPlanFamilySection
            key={family}
            id={id}
            heading={family}
            plans={plans}
            columns={3}
          />
        );
      })}

      <div className="mt-16 sm:mt-20">
        <CategoryDivider label="Commercial Plots" commercial />
      </div>

      {Array.from(commercialFamilies.entries()).map(([family, plans]) => {
        const id = family.toLowerCase().replace(/\s+/g, "-") + "-commercial-plans";
        return (
          <PaymentPlanFamilySection
            key={family}
            id={id}
            heading={family}
            plans={plans}
            columns={2}
          />
        );
      })}

      <div className="h-20 sm:h-24" />
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import ExploreButton from "./ExploreButton";

/* ── Animated counter ──────────────────────────────────────── */
function Counter({
  to, from = 0, prefix = "", suffix = "", duration = 2200, format = true,
}: {
  to: number; from?: number; prefix?: string; suffix?: string;
  duration?: number; format?: boolean;
}) {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(from);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const tick  = (now: number) => {
      const p   = Math.min((now - start) / duration, 1);
      const exp = 1 - Math.pow(1 - p, 3);
      const cur = Math.floor(from + exp * (to - from));
      setVal(cur);
      if (p < 1) requestAnimationFrame(tick);
      else setVal(to);
    };
    requestAnimationFrame(tick);
  }, [inView, to, from, duration]);

  const display = format ? val.toLocaleString() : String(val);
  return <span ref={ref as React.RefObject<HTMLElement>}>{prefix}{display}{suffix}</span>;
}

/* ── Gold SVG icons ────────────────────────────────────────── */
const s = { stroke: "#c9a24b", strokeWidth: 1.2, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
const IconHome     = () => <svg viewBox="0 0 56 56" width={44} height={44}><path d="M10 26L28 10l18 16v20a2 2 0 01-2 2H12a2 2 0 01-2-2V26z" {...s}/><path d="M22 48V34h12v14" {...s}/></svg>;
const IconPin      = () => <svg viewBox="0 0 56 56" width={44} height={44}><path d="M28 6C20.268 6 14 12.268 14 20c0 10 14 30 14 30s14-20 14-30c0-7.732-6.268-14-14-14z" {...s}/><circle cx="28" cy="20" r="5" {...s}/></svg>;
const IconTrend    = () => <svg viewBox="0 0 56 56" width={44} height={44}><path d="M8 38 L20 26 L30 32 L46 16" {...s}/><path d="M38 16h8v8" {...s}/></svg>;

const rowOne = [
  { Icon: IconHome,  to: 15000, from: 0, prefix: "", suffix: "+", format: true,  label: "Residential Plots Delivered" },
  { Icon: IconPin,   to: 818,   from: 0, prefix: "", suffix: "+", format: true,  label: "Commercial Plots Delivered" },
  { Icon: IconTrend, to: 500,   from: 0, prefix: "", suffix: "+", format: false, label: "Residents" },
];
const rowTwo = [
  { Icon: IconHome,  to: 20000, from: 0, prefix: "", suffix: "+", format: true,  label: "Residential Plots Delivered" },
  { Icon: IconPin,   to: 200,   from: 0, prefix: "", suffix: "+", format: false, label: "Commercial Plots Delivered" },
  { Icon: IconTrend, to: 35000, from: 0, prefix: "", suffix: "+", format: true,  label: "Residents" },
];

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

function StatCard({ Icon, to, from, prefix, suffix, format, label }: typeof rowOne[0]) {
  return (
    <motion.div
      variants={fadeUp} initial="hidden" whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="flex flex-col items-center text-center gap-3"
    >
      <Icon />
      <p className="font-termina text-[28px] sm:text-[36px] lg:text-[40px]" style={{ color: "#1D2D4E" }}>
        <Counter to={to} from={from} prefix={prefix} suffix={suffix} format={format} />
      </p>
      <p className="font-roboto" style={{ fontSize: "14px", color: "#58595B" }}>{label}</p>
    </motion.div>
  );
}

export default function StatsSection() {
  const blueColor = "#1D2D4E";

  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-10 sm:pt-40 sm:pb-12">
      <style dangerouslySetInnerHTML={{ __html: `
        @font-face {
          font-family: 'Optima';
          src: url('/optima-bold.woff2') format('woff2'),
               url('/optima-bold.woff') format('woff');
          font-weight: bold;
          font-style: normal;
        }
      `}} />

      <div className="relative mx-auto max-w-[1000px] px-6 sm:px-10 flex flex-col items-center">

        {/* Title with adjusted P watermark */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="relative flex items-center justify-center w-full">
          
          <span
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none leading-none"
            style={{ 
              fontFamily: 'Optima, sans-serif',
              fontWeight: 'bold',
              fontSize: "clamp(200px, 22vw, 320px)", 
              color: "#c9a24b", 
              opacity: 0.1, 
            }}
            aria-hidden="true"
          >P</span>
          
          <h2 className="relative z-10 text-center font-termina uppercase leading-[1.2] tracking-[0.14em] text-[24px] sm:text-[32px] lg:text-[40px]"
              style={{ color: blueColor }}>
            The Premier Luxury<br />Property Developer
          </h2>
        </motion.div>

        {/* Sub-heading */}
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-10 font-roboto uppercase tracking-[0.34em]"
          style={{ fontSize: "11px", color: blueColor }}>
          Parkview City at a Glance
        </motion.p>

        {/* Row 1 */}
        <div className="mt-10 grid w-full grid-cols-1 gap-10 sm:grid-cols-3">
          {rowOne.map((s, i) => <StatCard key={i} {...s} />)}
        </div>

        {/* Sub-heading */}
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-16 font-roboto uppercase tracking-[0.34em]"
          style={{ fontSize: "11px", color: blueColor }}>
          Expanding Communities
        </motion.p>

        {/* Row 2 */}
        <div className="mt-10 grid w-full grid-cols-1 gap-10 sm:grid-cols-3">
          {rowTwo.map((s, i) => <StatCard key={i} {...s} />)}
        </div>

        {/* Explore button */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-14">
          <ExploreButton variant="light" />
        </motion.div>
      </div>
    </section>
  );
}
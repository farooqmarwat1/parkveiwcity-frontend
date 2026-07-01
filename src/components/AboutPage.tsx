import { useNavigate } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight, CheckCircle2,
  Target, Heart, Lightbulb, Users, Leaf, TrendingUp,
} from "lucide-react";
import {
  aboutStats,
  aboutVisionCards,
  aboutCommunities,
  aboutValues,
  aboutSustainabilityHighlights,
  aboutInnovationFeatures,
  type ValueItem,
} from "@/data/aboutData";
import SharedEnquirySection from "@/components/SharedEnquirySection";
import ExploreButton from "@/components/ExploreButton";

/* ── Animation ───────────────────────────────────────────────── */
const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

const stagger: Variants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
};

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ── Value icons (order matches aboutValues array) ───────────── */
const valueIcons = [Target, Heart, Lightbulb, Users, Leaf, TrendingUp];

/* ── Section wrapper ─────────────────────────────────────────── */
function Section({
  id, children, className = "",
}: {
  id?: string; children: React.ReactNode; className?: string;
}) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ABOUT PAGE
═══════════════════════════════════════════════════════════════ */
export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">

      {/* ═══════════════════════════════
          1 ▸ HERO
      ═══════════════════════════════ */}
      <section
        id="about-hero"
        className="relative min-h-screen w-full overflow-hidden"
        style={{ minHeight: "100svh" }}
        aria-label="About ParkView City hero"
      >
        <img
          src="/about-Hero-section.webp"
          alt="ParkView City community aerial view"
          className="absolute inset-0 h-full w-full object-cover object-center"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-black/80" />

        <motion.div
          variants={stagger} initial="hidden" animate="show"
          className="absolute inset-0 z-10 flex flex-col items-center justify-end px-6 pb-[6vh] text-center"
        >
          <motion.h1 variants={fadeUp}
            className="max-w-[90vw] text-center font-termina hero-title-termina uppercase text-white"
            style={{ fontSize: "24px", fontWeight: 500, lineHeight: "32px", letterSpacing: "0px" }}
          >
            About ParkView City
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-7">
            <span className="font-roboto">
              <ExploreButton
                label="Explore Our Projects"
                variant="stats"
                href="#about-projects"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection("about-projects");
                }}
              />
            </span>
          </motion.div>
        </motion.div>

      </section>

      {/* ═══════════════════════════════
          2 ▸ BRAND STORY
      ═══════════════════════════════ */}
      <Section id="our-story" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Text — left column */}
            <motion.div
              variants={stagger} initial="hidden" whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="flex flex-col items-start"
            >
              <motion.p variants={fadeUp}
                className="mb-4 font-roboto text-[11px] font-light uppercase tracking-[0.35em] text-pvc-grey"
              >
                Who We Are
              </motion.p>
              <motion.h2 variants={fadeUp}
                className="font-termina font-normal text-pvc-navy"
                style={{ fontSize: "clamp(24px, 3.2vw, 40px)" }}
              >
                A Vision for Better Urban Living
              </motion.h2>
              <motion.p variants={fadeUp}
                className="mt-6 font-roboto text-[15px] font-light leading-[27px] text-pvc-grey"
              >
                ParkView City develops residential and commercial communities designed
                around the changing needs of modern families, businesses, and investors.
              </motion.p>
              <motion.p variants={fadeUp}
                className="mt-4 font-roboto text-[15px] font-light leading-[27px] text-pvc-grey"
              >
                Our approach brings together location, infrastructure, landscaped
                environments, essential services, recreation, security, and digital
                convenience to create communities intended for long-term value.
              </motion.p>
            </motion.div>

            {/* Image — right column */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[20px]" style={{ height: "clamp(320px, 38vw, 520px)" }}>
                <img
                  src="/about-Who-We-Are.webp"
                  alt="ParkView City planned urban community"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </Section>


      {/* ═══════════════════════════════
          3 ▸ VISION / MISSION / PURPOSE
      ═══════════════════════════════ */}
      <Section id="vision-mission" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10">

          <motion.div
            variants={stagger} initial="hidden" whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-14 text-center"
          >
            <motion.p variants={fadeUp}
              className="mb-3 font-roboto text-[11px] font-light uppercase tracking-[0.35em] text-pvc-grey"
            >
              Our Direction
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="font-termina font-normal text-pvc-navy"
              style={{ fontSize: "clamp(22px, 3vw, 36px)" }}
            >
              VISION, MISSION &amp; PURPOSE
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {aboutVisionCards.map(card => (
              <motion.article
                key={card.number}
                variants={fadeUp}
                className="group relative flex flex-col overflow-hidden rounded-[16px] border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                {/* Gold top accent */}
                <div className="absolute inset-x-0 top-0 h-[3px] bg-pvc-gold/0 transition-all duration-300 group-hover:bg-pvc-gold/80" />

                <span className="mb-5 font-termina text-[28px] font-normal text-pvc-gold/25">
                  {card.number}
                </span>
                <p className="mb-2 font-roboto text-[10px] font-light uppercase tracking-[0.3em] text-pvc-gold">
                  {card.eyebrow}
                </p>
                <h3 className="mb-4 font-termina text-[17px] font-normal leading-snug text-pvc-navy">
                  {card.title}
                </h3>
                <p className="font-roboto text-[13px] font-light leading-[22px] text-pvc-grey">
                  {card.description}
                </p>
              </motion.article>
            ))}
          </motion.div>

        </div>
      </Section>


      {/* ═══════════════════════════════
          4 ▸ OUR COMMUNITIES
      ═══════════════════════════════ */}
      <Section id="about-projects" className="bg-white py-16 sm:py-24 scroll-mt-24">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10">

          <motion.div
            variants={stagger} initial="hidden" whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-14 text-center"
          >
            <motion.p variants={fadeUp}
              className="mb-3 font-roboto text-[11px] font-light uppercase tracking-[0.35em] text-pvc-grey"
            >
              Our Footprint
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="font-termina font-normal text-pvc-navy"
              style={{ fontSize: "clamp(22px, 3vw, 36px)" }}
            >
              COMMUNITIES ACROSS PAKISTAN
            </motion.h2>
            <motion.p variants={fadeUp}
              className="mx-auto mt-4 max-w-[560px] font-roboto text-[14px] font-light leading-[24px] text-pvc-grey"
            >
              Explore ParkView City developments created for distinct locations while
              sharing a unified vision for quality, lifestyle, and modern community
              planning.
            </motion.p>
          </motion.div>

        </div>

        <motion.div
          variants={stagger} initial="hidden" whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-4 lg:grid-cols-3"
        >
          {aboutCommunities.map((c, i) => (
            <motion.article
              key={c.id}
              variants={fadeUp}
              className="group flex flex-col overflow-hidden rounded-[15px] border border-gray-200 shadow-sm"
            >
              {/* Image */}
              <div className="relative h-[70vh] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                {c.status === "coming-soon" && (
                  <div className="absolute right-3 top-3 rounded-full bg-pvc-gold/85 px-3 py-1 backdrop-blur-sm">
                    <span className="font-roboto text-[9px] font-medium uppercase tracking-[0.2em] text-white">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              {/* Content panel */}
              <div className="flex flex-col gap-1 bg-white px-8 py-6">
                <h3 className="font-termina text-2xl font-normal text-pvc-navy">{c.name}</h3>
                <p className="font-roboto text-[11px] font-normal leading-[16.5px] tracking-[3.3px] uppercase text-pvc-ink/50">{c.location}</p>
                {c.status === "available" && (
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => navigate(c.route)}
                      className="inline-block rounded-full border border-pvc-ink/25 px-12 py-3 font-roboto text-[10px] uppercase tracking-[0.32em] text-pvc-ink/60 transition-all duration-300 hover:border-pvc-gold hover:text-pvc-gold cursor-pointer"
                    >
                      Explore
                    </button>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Section>


      {/* ═══════════════════════════════
          5 ▸ IMPACT STATISTICS
      ═══════════════════════════════ */}
      <Section
        id="about-impact"
        className="bg-white py-16 sm:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10">

          <motion.div
            variants={stagger} initial="hidden" whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-10 text-center"
          >
            <motion.p variants={fadeUp}
              className="mb-3 font-roboto text-[11px] font-light uppercase tracking-[0.35em] text-pvc-grey"
            >
              Our Scale
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="font-termina font-normal text-pvc-navy"
              style={{ fontSize: "clamp(22px, 3vw, 36px)" }}
            >
              PARKVIEW CITY BY THE NUMBERS
            </motion.h2>
            <motion.p variants={fadeUp}
              className="mx-auto mt-5 max-w-[620px] bg-transparent font-roboto text-[14px] font-light leading-[24px] text-pvc-grey"
            >
              Environmental figures reflect information reported through ParkView City's
              official Green Pledge content. City development count reflects publicly
              announced community projects.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-8 lg:grid-cols-4"
          >
            {aboutStats.map(stat => (
              <motion.div key={stat.label} variants={fadeUp}
                className="flex flex-col items-center text-center"
              >
                <p className="font-termina font-normal text-pvc-navy" style={{ fontSize: "clamp(32px, 4vw, 54px)" }}>
                  {stat.value}
                  <span className="text-pvc-navy">{stat.suffix}</span>
                </p>
                <p className="mt-2 font-roboto text-[12px] font-light uppercase tracking-[0.22em] text-pvc-grey">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </Section>


      {/* ═══════════════════════════════
          6 ▸ LEADERSHIP VISION
      ═══════════════════════════════ */}
      <Section id="leadership" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[720px] px-6 sm:px-10">
          <motion.div
            variants={stagger} initial="hidden" whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="flex flex-col items-center text-center"
          >
            <motion.p variants={fadeUp}
              className="mb-4 font-roboto text-[11px] font-light uppercase tracking-[0.35em] text-pvc-grey"
            >
              Leadership
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="font-termina font-normal text-pvc-navy"
              style={{ fontSize: "clamp(24px, 3.2vw, 40px)" }}
            >
              A Vision Led by Purpose
            </motion.h2>
            <motion.p variants={fadeUp}
              className="mt-6 font-roboto text-[15px] font-light leading-[27px] text-pvc-grey"
            >
              The leadership vision behind ParkView City centres on creating modern
              communities, expanding opportunity, improving urban experiences, and
              delivering developments intended to create lasting value.
            </motion.p>
            <motion.p variants={fadeUp}
              className="mt-4 font-roboto text-[15px] font-light leading-[27px] text-pvc-grey"
            >
              Under this direction, ParkView City has grown from a single community
              vision into a multi-city development presence, with projects in Lahore,
              Islamabad, and the United Kingdom.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8">
              <button
                type="button"
                onClick={() => navigate("/contact#contact-form")}
                className="flex h-[48px] items-center gap-2 rounded-full border border-pvc-navy/25 px-7 font-roboto text-[10px] uppercase tracking-[0.22em] text-pvc-navy/70 transition-all duration-300 hover:border-pvc-gold hover:text-pvc-gold cursor-pointer"
              >
                Enquire Now
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </Section>


      {/* ═══════════════════════════════
          7 ▸ CORE VALUES
      ═══════════════════════════════ */}
      <Section id="our-values" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10">

          <motion.div
            variants={stagger} initial="hidden" whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-14 text-center"
          >
            <motion.p variants={fadeUp}
              className="mb-3 font-roboto text-[11px] font-light uppercase tracking-[0.35em] text-pvc-grey"
            >
              What We Stand For
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="font-termina font-normal text-pvc-navy"
              style={{ fontSize: "clamp(22px, 3vw, 36px)" }}
            >
              OUR CORE VALUES
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {aboutValues.map((v: ValueItem, i) => {
              const Icon = valueIcons[i];
              return (
                <motion.article
                  key={v.title}
                  variants={fadeUp}
                  className="flex gap-5 rounded-[16px] border border-gray-100 bg-white p-6 shadow-sm"
                >
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-pvc-gold/35">
                    <Icon className="h-4.5 w-4.5 text-pvc-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-roboto text-[14px] font-medium text-pvc-navy">{v.title}</h3>
                    <p className="mt-2 font-roboto text-[13px] font-light leading-[21px] text-pvc-grey">
                      {v.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

        </div>
      </Section>


      {/* ═══════════════════════════════
          8 ▸ SUSTAINABILITY
      ═══════════════════════════════ */}
      <Section id="sustainability" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
          <div className="bg-white">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

              {/* Image — left */}
              <div className="relative min-w-0 overflow-hidden rounded-[20px] shadow-sm h-[320px] sm:h-[420px] lg:h-[520px]">
                <img
                  src="/about-first-section.webp"
                  alt="ParkView City green community landscape"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </div>

              {/* Content — right */}
              <motion.div
                variants={stagger} initial="hidden" whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="flex min-w-0 max-w-[560px] flex-col justify-center bg-white px-0 py-0 lg:px-0"
              >
                <motion.p variants={fadeUp}
                  className="mb-4 font-roboto text-[11px] font-light uppercase tracking-[0.35em] text-pvc-grey"
                >
                  Green Pledge
                </motion.p>
                <motion.h2 variants={fadeUp}
                  className="font-termina font-normal text-pvc-navy"
                  style={{ fontSize: "clamp(22px, 2.8vw, 34px)" }}
                >
                  Growing Communities Responsibly
                </motion.h2>
                <motion.p variants={fadeUp}
                  className="mt-6 font-roboto text-[14px] font-light leading-[25px] text-pvc-grey"
                >
                  ParkView City's Green Pledge reflects a commitment to environmental
                  stewardship through reforestation, plantation drives, greener urban
                  environments, air-quality improvement, water conservation, and
                  biodiversity support.
                </motion.p>
                <motion.ul variants={stagger} className="mt-7 space-y-3">
                  {aboutSustainabilityHighlights.map(item => (
                    <motion.li key={item} variants={fadeUp}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-pvc-gold" strokeWidth={1.5} />
                      <span className="font-roboto text-[13px] font-light leading-[21px] text-pvc-grey">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div variants={fadeUp} className="mt-8">
                  <button
                    type="button"
                    onClick={() => scrollToSection("about-impact")}
                    className="flex h-[48px] items-center gap-2 rounded-full border border-pvc-navy/25 px-7 font-roboto text-[10px] uppercase tracking-[0.22em] text-pvc-navy/70 transition-all duration-300 hover:border-pvc-gold hover:text-pvc-gold cursor-pointer"
                  >
                    Discover the Green Vision
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </button>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </div>
      </Section>


      {/* ═══════════════════════════════
          9 ▸ INNOVATION
      ═══════════════════════════════ */}
      <Section id="innovation" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Text — left */}
            <motion.div
              variants={stagger} initial="hidden" whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.p variants={fadeUp}
                className="mb-4 font-roboto text-[11px] font-light uppercase tracking-[0.35em] text-pvc-grey"
              >
                Innovation
              </motion.p>
              <motion.h2 variants={fadeUp}
                className="font-termina font-normal text-pvc-navy"
                style={{ fontSize: "clamp(22px, 3vw, 36px)" }}
              >
                A MORE CONNECTED PARKVIEW EXPERIENCE
              </motion.h2>
              <motion.p variants={fadeUp}
                className="mt-6 font-roboto text-[14px] font-light leading-[25px] text-pvc-grey"
              >
                ParkView City continues to expand digital convenience through its
                official application and technology partnerships designed to improve
                access, communication, payments, investment visibility, complaints,
                and connectivity.
              </motion.p>
              <motion.ul variants={stagger} className="mt-7 space-y-3">
                {aboutInnovationFeatures.map(feat => (
                  <motion.li key={feat} variants={fadeUp}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pvc-gold/15">
                      <CheckCircle2 className="h-3.5 w-3.5 text-pvc-gold" strokeWidth={2} />
                    </span>
                    <span className="font-roboto text-[13px] font-light text-pvc-grey">
                      {feat}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div variants={fadeUp} className="mt-8">
                <button
                  type="button"
                  onClick={() => navigate("/contact#contact-form")}
                  className="flex h-[48px] items-center gap-2 rounded-full border border-pvc-navy/25 px-7 font-roboto text-[10px] uppercase tracking-[0.22em] text-pvc-navy/70 transition-all duration-300 hover:border-pvc-gold hover:text-pvc-gold cursor-pointer"
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </button>
              </motion.div>
            </motion.div>

            {/* Device placeholder — right */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-[420px] overflow-hidden rounded-[20px] shadow-xl">
                <img
                  src="/Resident-Facilitation-App.webp"
                  alt="ParkView City resident facilitation app"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div
                className="hidden"
                style={{ aspectRatio: "9/18" }}
              >
                {/* Phone notch */}
                <div className="flex items-center justify-center pt-5 pb-2">
                  <div className="h-[5px] w-[90px] rounded-full bg-white/10" />
                </div>

                {/* App header */}
                <div className="flex items-center gap-3 border-b border-white/10 px-6 py-4">
                  <img src="/whitelogo.png" alt="ParkView City" className="h-7 w-auto object-contain" />
                </div>

                {/* Feature rows */}
                <div className="flex flex-1 flex-col gap-0 divide-y divide-white/8 overflow-hidden px-6 py-3">
                  {aboutInnovationFeatures.map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 py-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pvc-gold/15">
                        <div className="h-2 w-2 rounded-full bg-pvc-gold" />
                      </div>
                      <span className="font-roboto text-[11px] font-light leading-tight text-white/60">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom bar */}
                <div className="flex items-center justify-center gap-4 border-t border-white/10 py-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className={`h-1.5 w-1.5 rounded-full ${i === 0 ? "bg-pvc-gold" : "bg-white/20"}`} />
                  ))}
                </div>

                {/* Gradient overlay at bottom */}
                <div className="pointer-events-none absolute inset-x-0 bottom-12 h-20 bg-gradient-to-t from-pvc-navy to-transparent" />
              </div>
            </motion.div>

          </div>
        </div>
      </Section>


      {/* ═══════════════════════════════
          10 ▸ RECOGNITION
      ═══════════════════════════════ */}
      {/* ═══════════════════════════════
          11 ▸ GALLERY
      ═══════════════════════════════ */}
      {/* ═══════════════════════════════
          12 ▸ FINAL CTA
      ═══════════════════════════════ */}
      <SharedEnquirySection id="about-enquiry" />

      <section
        id="about-cta"
        className="relative overflow-hidden py-20 sm:py-28"
        style={{
          backgroundImage: "url('/about-cta.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.60) 55%, rgba(0,0,0,0.82) 100%)" }}
        />
        <div className="relative z-10 mx-auto max-w-[800px] px-6 text-center sm:px-10">
          <motion.div
            variants={stagger} initial="hidden" whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <motion.p variants={fadeUp}
              className="mb-4 font-roboto text-[11px] font-light uppercase tracking-[0.35em] text-pvc-gold"
            >
              Discover What Comes Next
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="font-termina text-[26px] font-normal text-white sm:text-[34px] lg:text-[42px]"
            >
              FIND YOUR PLACE AT<br className="hidden sm:block" /> PARKVIEW CITY
            </motion.h2>
            <motion.div variants={fadeUp}
              className="mt-10 flex items-center justify-center"
            >
              <button
                type="button"
                onClick={() => navigate("/contact#contact-form")}
                className="inline-block rounded-full border border-white/30 bg-white/10 px-12 py-3 font-roboto text-[10px] uppercase tracking-[0.32em] text-white backdrop-blur-md transition-all duration-300 hover:border-pvc-gold hover:text-pvc-gold cursor-pointer"
              >
                Enquire Now
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

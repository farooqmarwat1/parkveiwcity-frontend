import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, ChevronDown, ExternalLink, Phone } from "lucide-react";
import ExploreButton from "@/components/ExploreButton";
import SharedEnquirySection from "@/components/SharedEnquirySection";
import {
  ukCta,
  ukFaqItems,
  ukHero,
  ukOffices,
  ukProjects,
  ukServices,
  type UkOffice,
} from "@/data/ukPage";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

function mapHref(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

function OfficeCard({ office }: { office: UkOffice }) {
  return (
    <motion.article
      variants={fadeUp}
      className="flex h-full flex-col rounded-[16px] border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#C4973A]/40 hover:shadow-md"
    >
      <span className="font-roboto text-[9px] font-normal uppercase tracking-[0.28em] text-[#C4973A]">
        UK Office
      </span>
      <h3
        className="mt-2 font-roboto text-[20px] font-normal leading-snug text-[#1D2D4E]"
        style={{ letterSpacing: "0.9px" }}
      >
        {office.title}
      </h3>
      <p
        className="mt-4 font-roboto text-[13px] font-light leading-[23px] text-[#58595B]"
        style={{ letterSpacing: "0.4px" }}
      >
        {office.address}
      </p>

      <div className="mt-6 flex flex-col gap-3">
        <a
          href={office.phoneHref}
          className="flex min-h-11 items-center gap-2 font-roboto text-[13px] font-light text-[#58595B] transition-colors hover:text-[#C4973A]"
        >
          <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
          {office.phone}
        </a>
        {office.whatsapp && office.whatsappHref && (
          <a
            href={office.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center gap-2 font-roboto text-[13px] font-light text-[#58595B] transition-colors hover:text-[#C4973A]"
          >
            <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
            WhatsApp {office.whatsapp}
          </a>
        )}
      </div>

      <a
        href={mapHref(office.address)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto flex min-h-11 items-center gap-2 pt-5 font-roboto text-[10px] uppercase tracking-[0.2em] text-[#C4973A] hover:underline"
      >
        <ExternalLink className="h-3 w-3" strokeWidth={1.5} />
        Open in Google Maps
      </a>
    </motion.article>
  );
}

export default function UkPage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="overflow-x-hidden bg-white">

      {/* ── HERO ── matches LahoreHeroStack / IslamabadHeroStack exactly ── */}
      <section
        id="uk-hero"
        className="relative min-h-screen w-full overflow-hidden"
        style={{ minHeight: "100svh" }}
      >
        <img
          src={ukHero.image}
          alt="ParkView City UK — authorised sales offices"
          className="absolute inset-0 h-full w-full object-cover object-center"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-black/80" />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="absolute inset-0 z-10 flex flex-col items-center justify-end px-6 pb-[6vh] text-center"
        >
          <motion.p
            variants={item}
            className="mb-3 font-roboto text-[11px] font-light uppercase tracking-[0.32em] text-pvc-gold-light"
          >
            ParkView City UK
          </motion.p>

          <motion.h1
            variants={item}
            className="max-w-[90vw] text-center font-termina hero-title-termina uppercase text-white"
            style={{ fontSize: "24px", fontWeight: 500, lineHeight: "88.2px", letterSpacing: "0px" }}
          >
            Your Gateway to Pakistan's Finest Developments
          </motion.h1>

          <motion.div variants={item} className="mt-4">
            <span className="font-roboto">
              <ExploreButton label="Explore" variant="stats" href="#uk-about" />
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* ── ABOUT ── matches LahoreAboutSection ── */}
      <section
        id="uk-about"
        className="bg-white px-6 py-20 sm:px-10 sm:py-28 lg:px-20"
        style={{ scrollMarginTop: "100px" }}
      >
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="flex w-full max-w-[600px] flex-col items-start"
          >
            <span className="font-roboto text-[10px] font-normal uppercase tracking-[0.33em] text-[#58595B]">
              ParkView City in the United Kingdom
            </span>

            <h2 className="mt-4 font-termina text-[28px] font-normal uppercase leading-tight tracking-[0.06em] text-[#1D2D4E] sm:text-[36px]">
              A UK Doorway to Pakistan's Most Planned Communities
            </h2>

            <p className="mt-6 font-roboto text-[15px] font-light leading-[26px] text-[#58595B]">
              ParkView City is one of Pakistan's best-known master-planned developments,
              with major communities in Islamabad and Lahore and a five-star coastal resort
              planned near Karachi.
            </p>

            <p className="mt-4 font-roboto text-[15px] font-light leading-[26px] text-[#58595B]">
              From offices in London, Manchester, and Birmingham, the UK team assists with
              bookings, payment schedules, file verification, transfers, possession, and
              ongoing communication with the head office in Islamabad — without you
              repeatedly travelling to Pakistan.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={ukHero.primaryHref}
                className="flex h-[43px] items-center justify-center rounded-full bg-[#C4973A] px-7 font-roboto text-[11px] font-normal uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#C4973A]/90"
              >
                {ukHero.primaryButton}
              </a>
              <a
                href={ukHero.secondaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[43px] items-center justify-center rounded-full border border-[#C4973A] px-7 font-roboto text-[11px] font-normal uppercase tracking-[0.18em] text-[#C4973A] transition-all duration-300 hover:bg-[#C4973A] hover:text-white"
              >
                {ukHero.secondaryButton}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="flex w-full justify-center lg:justify-end"
          >
            <img
              src="/A Place to call home.webp"
              alt="ParkView City development — community overview"
              className="h-[350px] w-full max-w-[600px] rounded-[16px] object-cover object-center shadow-md sm:h-[480px]"
            />
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS ── matches LahorePropertiesSection card style ── */}
      <section
        id="uk-projects"
        className="bg-white px-6 py-20 sm:px-10 sm:py-28 lg:px-20"
        style={{ scrollMarginTop: "100px" }}
      >
        <div className="mx-auto flex max-w-[1280px] flex-col items-center">

          <motion.span
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="font-roboto text-[10px] font-normal uppercase tracking-[0.33em] text-[#58595B]"
          >
            Available Opportunities
          </motion.span>

          <motion.h2
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="mt-3 text-center font-termina text-[28px] font-normal uppercase leading-tight tracking-[0.06em] text-[#1D2D4E] sm:text-[40px]"
          >
            The Three Projects We Sell
          </motion.h2>

          <motion.p
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="mt-4 max-w-[680px] text-center font-roboto text-[15px] font-light leading-relaxed tracking-[0.04em] text-[#58595B]"
          >
            Availability, plot sizes, payment plans, and pricing may change. Contact the
            UK office for the latest verified inventory.
          </motion.p>

          <div className="mt-12 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ukProjects.map(project => (
              <div
                key={project.title}
                className="group flex w-full flex-col overflow-hidden rounded-[16px] border border-black/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="relative h-[200px] shrink-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  {project.status && (
                    <span className="absolute left-3.5 top-3.5 rounded-full bg-[#C4973A]/90 px-3 py-1 font-roboto text-[8px] font-medium uppercase tracking-[0.15em] text-white backdrop-blur-sm">
                      {project.status}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3
                    className="font-roboto text-[20px] font-normal leading-snug text-[#1D2D4E]"
                    style={{ letterSpacing: "0.9px" }}
                  >
                    {project.title}
                  </h3>

                  <p className="mt-2 font-roboto text-[12px] font-light leading-relaxed text-[#58595B]">
                    {project.description}
                  </p>

                  <ul className="mt-3 flex flex-col gap-1.5">
                    {project.features.map(f => (
                      <li key={f} className="flex items-center gap-2.5">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C4973A]" />
                        <span className="font-roboto text-[12px] font-light text-[#58595B]">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-5">
                    <span className="font-roboto text-[8px] font-light uppercase tracking-[0.1em] text-[#58595B]/60">
                      {project.route ? "Explore via UK Office" : "Contact for Availability"}
                    </span>
                    <button
                      type="button"
                      onClick={() => navigate(project.route ?? "/contact#contact-form")}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C4973A] text-[#C4973A] transition-all duration-300 group-hover:bg-[#C4973A] group-hover:text-white cursor-pointer"
                    >
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── matches LahoreAmenitiesPreviewSection card style ── */}
      <section
        id="uk-services"
        className="bg-[#FFFFFF] py-20 px-6 sm:py-28 sm:px-10 lg:px-20"
        style={{ scrollMarginTop: "100px" }}
      >
        <div className="mx-auto max-w-[1280px] flex flex-col">

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 border-b border-gray-100 pb-8"
          >
            <div className="flex flex-col items-start max-w-[480px]">
              <span className="text-[#58595B] text-[10px] font-normal tracking-[3.3px] uppercase">
                Complete Support
              </span>
              <h2
                className="mt-3 font-termina text-[28px] sm:text-[40px] font-normal uppercase tracking-[2px] leading-tight text-[#1D2D4E]"
                style={{ fontFamily: "'TerminaTest', 'Barlow', sans-serif" }}
              >
                What Our UK Team Does for You
              </h2>
            </div>
            <div>
              <a
                href={ukHero.primaryHref}
                className="flex h-[43px] w-[201px] items-center justify-center rounded-full border border-[#C4973A] font-roboto text-[11px] font-normal uppercase tracking-[0.18em] text-[#C4973A] transition-all duration-300 hover:bg-[#C4973A] hover:text-white"
              >
                {ukHero.primaryButton}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {ukServices.map((service, idx) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                transition={{ delay: (idx % 4) * 0.08 }}
                className="bg-white border border-gray-100 flex flex-col rounded-[16px] hover:shadow-md hover:bg-[#f9f6f0] transition-all duration-300 w-full"
                style={{ padding: "36px 32px" }}
              >
                <span className="font-roboto text-[#C4973A] text-[9px] font-normal tracking-[0.9px] uppercase" style={{ lineHeight: "14px" }}>
                  UK Service
                </span>
                <h3 className="font-roboto mt-2 text-[20px] font-normal text-[#1D2D4E]" style={{ lineHeight: "30px", letterSpacing: "0.9px" }}>
                  {service.title}
                </h3>
                <p className="font-roboto mt-3 text-[#58595B] text-[13px] font-light" style={{ lineHeight: "21px", letterSpacing: "0.9px" }}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── OFFICES ── grid of office cards ── */}
      <section
        id="uk-offices"
        className="bg-white px-6 py-20 sm:px-10 sm:py-28 lg:px-20"
        style={{ scrollMarginTop: "100px" }}
      >
        <div className="mx-auto max-w-[1280px]">

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="flex flex-col items-start max-w-[600px]"
          >
            <span className="font-roboto text-[10px] font-normal uppercase tracking-[0.33em] text-[#58595B]">
              Visit Our Team
            </span>
            <h2 className="mt-4 font-termina text-[28px] font-normal uppercase leading-tight tracking-[0.06em] text-[#1D2D4E] sm:text-[36px]">
              Three UK Offices, One Team
            </h2>
            <p className="mt-6 font-roboto text-[15px] font-light leading-[26px] text-[#58595B]">
              Book an appointment or contact the team before visiting. Standard lines are
              open Monday to Saturday, 10am to 6pm.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3"
          >
            {ukOffices.map(office => (
              <OfficeCard key={office.title} office={office} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        id="uk-faq"
        className="bg-white px-6 py-20 sm:px-10 sm:py-28 lg:px-20"
        style={{ scrollMarginTop: "100px" }}
      >
        <div className="mx-auto max-w-[980px]">

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="flex flex-col items-center text-center"
          >
            <span className="font-roboto text-[10px] font-normal uppercase tracking-[0.33em] text-[#58595B]">
              Frequently Asked Questions
            </span>
            <h2 className="mt-4 font-termina text-[28px] font-normal uppercase leading-tight tracking-[0.06em] text-[#1D2D4E] sm:text-[36px]">
              Honest Answers to Common Questions
            </h2>
          </motion.div>

          <div className="mt-12 divide-y divide-gray-100 rounded-[16px] border border-gray-100 bg-white">
            {ukFaqItems.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`uk-faq-panel-${index}`}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex min-h-[64px] w-full items-center justify-between gap-4 px-5 py-4 text-left font-roboto text-[14px] font-normal text-[#1D2D4E] transition-colors hover:text-[#C4973A] sm:px-7"
                  >
                    {faq.question}
                    <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} strokeWidth={1.5} />
                  </button>
                  {isOpen && (
                    <div id={`uk-faq-panel-${index}`} className="px-5 pb-6 sm:px-7">
                      <p className="font-roboto text-[14px] font-light leading-[25px] text-[#58595B]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <SharedEnquirySection id="uk-enquiry" />

      <section
        id="uk-cta"
        className="relative flex min-h-[520px] items-center justify-center overflow-hidden px-6 py-24 text-center sm:px-10 lg:px-20"
      >
        <img
          src={ukCta.image}
          alt="ParkView City development landscape"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.60) 55%, rgba(0,0,0,0.82) 100%)" }}
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="relative z-10 mx-auto flex max-w-[780px] flex-col items-center"
        >
          <p className="font-roboto text-[10px] font-normal uppercase tracking-[0.32em] text-[#C4973A]">
            {ukCta.eyebrow}
          </p>
          <h2 className="mt-4 font-termina text-[28px] font-normal uppercase leading-tight tracking-[0.06em] text-white sm:text-[42px]">
            {ukCta.title}
          </h2>
          <p className="mt-5 font-roboto text-[15px] font-light leading-[27px] text-white/72">
            {ukCta.description}
          </p>
          <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
            <a
              href={ukCta.primaryHref}
              className="flex min-h-11 w-full items-center justify-center rounded-full bg-[#C4973A] px-7 font-roboto text-[11px] font-normal uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-white hover:text-[#1D2D4E] sm:w-auto"
            >
              {ukCta.primaryButton}
            </a>
            <a
              href={ukCta.secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 w-full items-center justify-center rounded-full border border-white/45 bg-white/10 px-7 font-roboto text-[11px] font-normal uppercase tracking-[0.18em] text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#1D2D4E] sm:w-auto"
            >
              {ukCta.secondaryButton}
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

import { useState, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Phone, Mail, MapPin, Send, CheckCircle,
  AlertCircle, ChevronDown, ExternalLink,
} from "lucide-react";
import {
  officeRecords, PRIMARY_OFFICE_IDS, MAP_OFFICE_IDS,
  getOffice, type OfficeRecord,
} from "@/data/contactOffices";

/* ── Animation variants ──────────────────────────────────────── */
const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease: easeOut } },
};

const stagger: Variants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
};

/* ── Constants ───────────────────────────────────────────────── */
const WEB3FORMS_KEY = "YOUR_ACCESS_KEY_HERE";

const ENQUIRY_TYPES = [
  "Residential Property",
  "Commercial Property",
  "Payment Plans",
  "Investment Opportunity",
  "Customer Support",
  "Complaint",
  "General Enquiry",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+0-9\s\-().]{7,20}$/;

/* ── Helpers ──────────────────────────────────────────────────── */
function inputCls(hasError: boolean) {
  return [
    "w-full h-[47px] rounded-[15px] border px-4 py-3",
    "font-roboto text-[14px] font-normal leading-[21px] text-pvc-ink",
    "placeholder:text-pvc-ink/30 outline-none transition-colors duration-200",
    hasError
      ? "border-red-300 focus:border-red-400"
      : "border-gray-200 focus:border-pvc-gold",
  ].join(" ");
}

interface FieldProps {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

function Field({ label, required, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-roboto text-[11px] font-medium uppercase leading-[16px] tracking-[1.8px] text-[#3F4447]">
        {label} {required && <span className="text-pvc-gold">*</span>}
      </label>
      {children}
      {error && <p className="font-roboto text-[11px] text-red-500">{error}</p>}
    </div>
  );
}

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-pvc-gold/40">
      {children}
    </div>
  );
}

function mapEmbedUrl(query: string) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&output=embed&z=15`;
}

function mapOpenUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

/* ── Primary office card (left column) ──────────────────────── */
function PrimaryOfficeCard({ office, onViewOnMap }: { office: OfficeRecord; onViewOnMap?: (office: OfficeRecord) => void }) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex items-start gap-4 rounded-[15px] border border-gray-100 bg-[#FAFAFA] p-5 transition-colors duration-300 hover:border-pvc-gold/40"
    >
      <IconBadge>
        <MapPin className="h-4 w-4 text-pvc-gold" strokeWidth={1.5} />
      </IconBadge>
      <div className="min-w-0">
        <p className="font-roboto text-[9px] font-light uppercase tracking-[0.28em] text-pvc-grey">
          {office.label}
        </p>
        {office.address && (
          <address className="mt-1 not-italic font-roboto text-[13px] font-normal leading-[21px] text-pvc-navy">
            {office.address}
          </address>
        )}
        <div className="mt-2 flex flex-col gap-1">
          {office.phoneDisplay && (
            <a href={office.phoneHref}
              className="font-roboto text-[12px] font-light text-pvc-grey hover:text-pvc-gold transition-colors duration-200 flex items-center gap-1.5">
              <Phone className="h-3 w-3 shrink-0" strokeWidth={1.5} />
              {office.phoneDisplay}
            </a>
          )}
          {office.mobileDisplay && (
            <a href={office.mobileHref}
              className="font-roboto text-[12px] font-light text-pvc-grey hover:text-pvc-gold transition-colors duration-200 flex items-center gap-1.5">
              <Phone className="h-3 w-3 shrink-0" strokeWidth={1.5} />
              {office.mobileDisplay}
            </a>
          )}
          {office.landlineDisplay && (
            <a href={office.landlineHref}
              className="font-roboto text-[12px] font-light text-pvc-grey hover:text-pvc-gold transition-colors duration-200 flex items-center gap-1.5">
              <Phone className="h-3 w-3 shrink-0" strokeWidth={1.5} />
              {office.landlineDisplay}
            </a>
          )}
          {office.complaintsDisplay && (
            <a href={office.complaintsHref}
              className="font-roboto text-[12px] font-light text-pvc-grey hover:text-pvc-gold transition-colors duration-200 flex items-center gap-1.5">
              <Phone className="h-3 w-3 shrink-0" strokeWidth={1.5} />
              Complaints: {office.complaintsDisplay}
            </a>
          )}
          {office.email && (
            <a href={office.emailHref}
              className="font-roboto text-[12px] font-light text-pvc-grey hover:text-pvc-gold transition-colors duration-200 flex items-center gap-1.5 break-all">
              <Mail className="h-3 w-3 shrink-0" strokeWidth={1.5} />
              {office.email}
            </a>
          )}
        </div>
        {office.mapQuery && (
          <button
            type="button"
            onClick={() => onViewOnMap?.(office)}
            className="mt-2 flex items-center gap-1.5 font-roboto text-[10px] uppercase tracking-[0.2em] text-pvc-gold hover:underline cursor-pointer"
          >
            <ExternalLink className="h-3 w-3" strokeWidth={1.5} />
            View on Map
          </button>
        )}
      </div>
    </motion.div>
  );
}

/* ── Additional office card ──────────────────────────────────── */
function AdditionalOfficeCard({ office }: { office: OfficeRecord }) {
  return (
    <div className="flex h-full min-h-[194px] flex-col gap-3 rounded-[15px] border border-gray-100 bg-white p-5 hover:border-pvc-gold/40 transition-colors duration-300">
      <div>
        <p className="font-roboto text-[9px] font-light uppercase tracking-[0.28em] text-pvc-gold">
          {office.country}
        </p>
        <p className="mt-0.5 font-roboto text-[14px] font-medium text-pvc-navy">
          {office.label}
        </p>
      </div>
      {office.address && (
        <div className="flex items-start gap-2.5">
          <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-pvc-gold" strokeWidth={1.5} />
          <address className="not-italic font-roboto text-[12px] font-light leading-[19px] text-pvc-grey">
            {office.address}
          </address>
        </div>
      )}
      <div className="flex flex-col gap-1.5">
        {office.phoneDisplay && (
          <a href={office.phoneHref}
            className="flex items-center gap-2.5 font-roboto text-[12px] font-light text-pvc-grey hover:text-pvc-gold transition-colors duration-200">
            <Phone className="h-3.5 w-3.5 shrink-0" strokeWidth={1.5} />
            {office.phoneDisplay}
          </a>
        )}
        {office.mobileDisplay && (
          <a href={office.mobileHref}
            className="flex items-center gap-2.5 font-roboto text-[12px] font-light text-pvc-grey hover:text-pvc-gold transition-colors duration-200">
            <Phone className="h-3.5 w-3.5 shrink-0" strokeWidth={1.5} />
            {office.mobileDisplay}
          </a>
        )}
        {office.landlineDisplay && (
          <a href={office.landlineHref}
            className="flex items-center gap-2.5 font-roboto text-[12px] font-light text-pvc-grey hover:text-pvc-gold transition-colors duration-200">
            <Phone className="h-3.5 w-3.5 shrink-0" strokeWidth={1.5} />
            {office.landlineDisplay}
          </a>
        )}
        {office.email && (
          <a href={office.emailHref}
            className="flex items-center gap-2.5 font-roboto text-[12px] font-light text-pvc-grey hover:text-pvc-gold transition-colors duration-200 break-all">
            <Mail className="h-3.5 w-3.5 shrink-0" strokeWidth={1.5} />
            {office.email}
          </a>
        )}
      </div>
      {office.mapQuery && (
        <a
          href={mapOpenUrl(office.mapQuery)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center gap-1.5 pt-1 font-roboto text-[10px] uppercase tracking-[0.2em] text-pvc-gold hover:underline"
        >
          <ExternalLink className="h-3 w-3" strokeWidth={1.5} />
          View on Map
        </a>
      )}
    </div>
  );
}

/* ── ContactPage ─────────────────────────────────────────────── */
export default function ContactPage() {

  /* Form state */
  const [fields, setFields] = useState({
    name: "", email: "", phone: "", city: "", enquiryType: "", message: "", consent: false,
  });
  const [errors, setErrors]   = useState<Record<string, string>>({});
  const [status, setStatus]   = useState<"idle" | "sending" | "success" | "error">("idle");
  const submittingRef          = useRef(false);

  /* Map state — default to Islamabad Corporate Office */
  const [activeMapId, setActiveMapId] = useState("islamabad-corporate-office");
  const activeMapOffice = getOffice(activeMapId)!;
  const mapOffices      = MAP_OFFICE_IDS.map(id => getOffice(id)!);

  function handleViewOnMap(office: OfficeRecord) {
    if (MAP_OFFICE_IDS.includes(office.id)) {
      setActiveMapId(office.id);
      document.getElementById("locations")?.scrollIntoView({ behavior: "smooth" });
    } else if (office.mapQuery) {
      window.open(mapOpenUrl(office.mapQuery), "_blank", "noopener,noreferrer");
    }
  }

  function update(key: string, value: string | boolean) {
    setFields(f => ({ ...f, [key]: value }));
    if (errors[key]) setErrors(e => { const n = { ...e }; delete n[key]; return n; });
  }

  function validate(): boolean {
    const e: Record<string, string> = {};
    if (!fields.name.trim())               e.name        = "Full name is required.";
    if (!fields.email.trim())              e.email       = "Email address is required.";
    else if (!EMAIL_RE.test(fields.email)) e.email       = "Please enter a valid email address.";
    if (!fields.phone.trim())              e.phone       = "Phone number is required.";
    else if (!PHONE_RE.test(fields.phone)) e.phone       = "Please enter a valid phone number.";
    if (!fields.enquiryType)               e.enquiryType = "Please select an enquiry type.";
    if (!fields.consent)                   e.consent     = "Please confirm consent to proceed.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    if (submittingRef.current) return;
    submittingRef.current = true;
    setStatus("sending");

    const data = new FormData();
    data.append("access_key",    WEB3FORMS_KEY);
    data.append("name",          fields.name);
    data.append("email",         fields.email);
    data.append("phone",         fields.phone);
    data.append("city",          fields.city);
    data.append("enquiry_type",  fields.enquiryType);
    data.append("message",       fields.message);
    data.append("subject",       `New Enquiry from ${fields.name} — ParkView City`);

    try {
      const res  = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        setFields({ name: "", email: "", phone: "", city: "", enquiryType: "", message: "", consent: false });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      submittingRef.current = false;
    }
  }

  function scrollToForm() {
    const el = document.getElementById("contact-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  /* Primary office cards */
  const primaryOffices = PRIMARY_OFFICE_IDS.map(id => getOffice(id)!);

  /* Additional offices grouped */
  const nationalOthers       = officeRecords.filter(o => o.region === "pakistan" && !PRIMARY_OFFICE_IDS.includes(o.id));
  const internationalOffices = officeRecords.filter(o => o.region === "international");

  return (
    <div className="bg-white">

      {/* ═══════════════════════════════════════════════════════
          1 ▸ HERO
      ═══════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen w-full overflow-hidden"
        style={{ minHeight: "100svh" }}
        aria-label="Contact Us hero"
      >
        <img
          src="/contactushero.png"
          alt="ParkView City Islamabad aerial view"
          className="absolute inset-0 h-full w-full object-cover object-center animate-kenburns"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-black/80" />

        <motion.div
          variants={stagger} initial="hidden" animate="show"
          className="absolute inset-0 z-10 flex flex-col items-center justify-end px-6 pb-[14vh] text-center"
        >
          <motion.h1 variants={fadeUp}
            className="max-w-[90vw] text-center font-termina hero-title-termina uppercase text-white"
            style={{ fontSize: "24px", fontWeight: 500, lineHeight: "32px", letterSpacing: "0px" }}
          >
            Contact Us
          </motion.h1>
        </motion.div>

      </section>

      {/* ═══════════════════════════════════════════════════════
          2 ▸ INTRODUCTION
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-white pt-12 pb-10 sm:pt-[88px] sm:pb-[56px]">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
          <div className="max-w-[900px]">
            <motion.div
              variants={stagger} initial="hidden" whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              <motion.p variants={fadeUp}
                className="mb-4 font-roboto text-[11px] font-light uppercase tracking-[0.35em] text-pvc-grey/60"
              >
                WE'RE HERE FOR YOU
              </motion.p>
              <motion.h2 variants={fadeUp}
                className="font-termina text-[26px] font-normal text-pvc-navy sm:text-[34px] lg:text-[42px]"
              >
                LET'S START A CONVERSATION
              </motion.h2>
              <motion.p variants={fadeUp}
                className="mt-6 font-roboto text-[15px] font-light leading-[26px] tracking-[0.04em] text-pvc-grey"
              >
                Whether you have questions about our residential or commercial properties,
                investment opportunities, ongoing developments, or simply need a general
                enquiry answered, our team is ready to assist.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          3 ▸ CONTACT INFO + FORM
      ═══════════════════════════════════════════════════════ */}
      <section id="contact-form" className="bg-white pb-10 sm:pb-12">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">

            {/* ── Left: Primary office cards ─────────────────── */}
            <motion.div
              variants={stagger} initial="hidden" whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-6"
            >
              <motion.div variants={fadeUp}>
                <p className="mb-1 font-roboto text-[11px] font-light uppercase tracking-[0.3em] text-pvc-gold">
                  Our Offices
                </p>
                <h3 className="font-termina text-[22px] font-normal text-pvc-navy sm:text-[26px]">
                  FIND US NEAR YOU
                </h3>
              </motion.div>

              <motion.div variants={stagger} className="flex flex-col gap-4">
                {primaryOffices.map(office => (
                  <PrimaryOfficeCard key={office.id} office={office} onViewOnMap={handleViewOnMap} />
                ))}
              </motion.div>

            </motion.div>

            {/* ── Right: Enquiry form ───────────────────────── */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[20px] border border-gray-200 bg-white p-8 sm:p-10 shadow-sm"
            >
              <p className="mb-1 font-roboto text-[11px] font-light uppercase tracking-[0.3em] text-pvc-gold">
                Reach Out
              </p>
              <h3 className="mb-7 font-termina text-[22px] font-normal text-pvc-navy">
                SEND AN ENQUIRY
              </h3>

              {/* Success state */}
              {status === "success" && (
                <div aria-live="polite"
                  className="mb-6 flex flex-col items-center gap-3 rounded-[15px] border border-green-100 bg-green-50 p-8 text-center"
                >
                  <CheckCircle className="h-10 w-10 text-green-500" strokeWidth={1.5} />
                  <p className="font-termina text-[16px] text-pvc-navy">Thank You!</p>
                  <p className="font-roboto text-[14px] font-light text-pvc-grey">
                    Your enquiry has been received. A member of our team will be in
                    touch with you shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 font-roboto text-[11px] uppercase tracking-[0.2em] text-pvc-gold hover:underline cursor-pointer"
                  >
                    Send another enquiry
                  </button>
                </div>
              )}

              {/* Form */}
              {status !== "success" && (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Full Name" required error={errors.name}>
                      <input
                        type="text" name="name" value={fields.name}
                        onChange={e => update("name", e.target.value)}
                        placeholder="Your full name"
                        autoComplete="name"
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        className={inputCls(!!errors.name)}
                      />
                    </Field>
                    <Field label="Email Address" required error={errors.email}>
                      <input
                        type="email" name="email" value={fields.email}
                        onChange={e => update("email", e.target.value)}
                        placeholder="your@email.com"
                        autoComplete="email"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        className={inputCls(!!errors.email)}
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Phone Number" required error={errors.phone}>
                      <input
                        type="tel" name="phone" value={fields.phone}
                        onChange={e => update("phone", e.target.value)}
                        placeholder="+92 xxx xxxxxxx"
                        autoComplete="tel"
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        className={inputCls(!!errors.phone)}
                      />
                    </Field>
                    <Field label="City">
                      <input
                        type="text" name="city" value={fields.city}
                        onChange={e => update("city", e.target.value)}
                        placeholder="e.g. Islamabad, Lahore"
                        autoComplete="address-level2"
                        className={inputCls(false)}
                      />
                    </Field>
                  </div>

                  <Field label="Enquiry Type" required error={errors.enquiryType}>
                    <div className="relative">
                      <select
                        name="enquiryType"
                        value={fields.enquiryType}
                        onChange={e => update("enquiryType", e.target.value)}
                        aria-required="true"
                        aria-invalid={!!errors.enquiryType}
                        className={`${inputCls(!!errors.enquiryType)} appearance-none pr-10 ${!fields.enquiryType ? "text-pvc-ink/30" : "text-pvc-ink"}`}
                      >
                        <option value="" disabled>Select enquiry type</option>
                        {ENQUIRY_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                      <ChevronDown
                        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-pvc-grey/60"
                        strokeWidth={1.5}
                      />
                    </div>
                  </Field>

                  <Field label="Message">
                    <textarea
                      name="message" value={fields.message}
                      onChange={e => update("message", e.target.value)}
                      rows={4}
                      placeholder="Tell us about your requirements..."
                      autoComplete="off"
                      className={`${inputCls(false)} resize-none h-auto py-3`}
                    />
                  </Field>

                  <div>
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <div className="relative mt-0.5 shrink-0">
                        <input
                          type="checkbox"
                          checked={fields.consent}
                          onChange={e => update("consent", e.target.checked)}
                          aria-required="true"
                          className="peer sr-only"
                        />
                        <div
                          className={[
                            "flex items-center justify-center rounded border transition-colors duration-200",
                            fields.consent
                              ? "border-pvc-gold bg-pvc-gold"
                              : errors.consent
                              ? "border-red-400 bg-white"
                              : "border-gray-300 bg-white",
                          ].join(" ")}
                          style={{ width: "18px", height: "18px" }}
                        >
                          {fields.consent && (
                            <svg viewBox="0 0 12 9" fill="none" className="h-3 w-3">
                              <path d="M1 4l3.5 3.5L11 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className="font-roboto text-[12px] font-light leading-[18px] text-pvc-grey">
                        I consent to ParkView City collecting and storing the information
                        provided above to respond to my enquiry.
                      </span>
                    </label>
                    {errors.consent && (
                      <p aria-live="polite" className="mt-1.5 font-roboto text-[11px] text-red-500">{errors.consent}</p>
                    )}
                  </div>

                  {status === "error" && (
                    <div aria-live="assertive"
                      className="flex items-center gap-3 rounded-[12px] border border-red-100 bg-red-50 px-4 py-3"
                    >
                      <AlertCircle className="h-4 w-4 shrink-0 text-red-500" strokeWidth={1.5} />
                      <p className="font-roboto text-[13px] font-light text-red-600">
                        Something went wrong. Please try again or contact us directly.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="mt-1 flex h-[52px] w-full items-center justify-center gap-2.5 rounded-[30px] border border-pvc-ink/25 font-roboto text-[11px] uppercase tracking-[0.25em] text-pvc-ink/60 transition-all duration-300 hover:border-pvc-gold hover:text-pvc-gold disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {status === "sending" ? (
                      <>
                        <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-pvc-gold/40 border-t-pvc-gold" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="h-3.5 w-3.5" strokeWidth={1.5} />
                        SEND ENQUIRY
                      </>
                    )}
                  </button>

                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          4 ▸ ADDITIONAL OFFICES
      ═══════════════════════════════════════════════════════ */}
      <section id="all-offices" className="bg-white pb-16 pt-10 sm:pb-20 sm:pt-12">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-10">

          <motion.div
            variants={stagger} initial="hidden" whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-10"
          >
            <motion.p variants={fadeUp}
              className="mb-2 font-roboto text-[11px] font-light uppercase tracking-[0.35em] text-pvc-gold"
            >
              More Locations
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="font-termina text-[22px] font-normal text-pvc-navy sm:text-[28px]"
            >
              MORE PARKVIEW CITY OFFICES
            </motion.h2>
          </motion.div>

          {/* Pakistan — Other National Offices */}
          <motion.div
            variants={stagger} initial="hidden" whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p variants={fadeUp}
              className="mb-5 font-roboto text-[10px] font-normal uppercase tracking-[0.28em] text-pvc-navy/60"
            >
              Other National Offices
            </motion.p>
            <motion.div variants={stagger}
              className="mb-10 grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2"
            >
              {nationalOthers.map(o => (
                <motion.div key={o.id} variants={fadeUp} className="h-full">
                  <AdditionalOfficeCard office={o} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* International Offices */}
          <motion.div
            variants={stagger} initial="hidden" whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p variants={fadeUp}
              className="mb-5 font-roboto text-[10px] font-normal uppercase tracking-[0.28em] text-pvc-navy/60"
            >
              International Offices
            </motion.p>
            <motion.div variants={stagger}
              className="grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2"
            >
              {internationalOffices.map(o => (
                <motion.div key={o.id} variants={fadeUp} className="h-full">
                  <AdditionalOfficeCard office={o} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          5 ▸ FIND US — Interactive Map
      ═══════════════════════════════════════════════════════ */}
      <section id="locations" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-10">

          <motion.div
            variants={stagger} initial="hidden" whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-8"
          >
            <motion.p variants={fadeUp}
              className="mb-2 font-roboto text-[11px] font-light uppercase tracking-[0.35em] text-pvc-gold"
            >
              Location
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="font-termina text-[26px] font-normal text-pvc-navy sm:text-[32px]"
            >
              FIND US
            </motion.h2>
          </motion.div>

          {/* Office selector chips */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-5 flex flex-wrap gap-2"
          >
            {mapOffices.map(office => {
              const chipLabel =
                office.id === "islamabad-corporate-office" ? "ISB Corporate" :
                office.id === "islamabad-site-office"      ? "ISB Site" :
                office.city;
              return (
                <button
                  key={office.id}
                  type="button"
                  onClick={() => setActiveMapId(office.id)}
                  className={[
                    "rounded-full border px-4 py-2 font-roboto text-[10px] uppercase tracking-[0.15em] transition-all duration-200 cursor-pointer",
                    activeMapId === office.id
                      ? "border-pvc-gold bg-pvc-gold text-white"
                      : "border-gray-200 bg-white text-pvc-grey hover:border-pvc-gold/60 hover:text-pvc-navy",
                  ].join(" ")}
                >
                  {chipLabel}
                </button>
              );
            })}
          </motion.div>

          {/* Map iframe */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="overflow-hidden rounded-[20px] border border-gray-200 shadow-sm"
            style={{ height: "420px" }}
          >
            {activeMapOffice.mapQuery ? (
              <iframe
                key={activeMapOffice.id}
                title={`Map — ${activeMapOffice.label}`}
                src={mapEmbedUrl(activeMapOffice.mapQuery)}
                width="100%"
                height="420"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[#EEF0F3]">
                <MapPin className="h-8 w-8 text-pvc-gold" strokeWidth={1.5} />
                <p className="font-roboto text-[13px] font-light text-pvc-grey">
                  Map not available for this office
                </p>
              </div>
            )}
          </motion.div>

          {/* Active office detail strip */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-5 flex flex-wrap items-start gap-6 rounded-[15px] border border-gray-100 bg-white p-5"
          >
            <div className="flex items-start gap-3 min-w-0 flex-1">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-pvc-gold" strokeWidth={1.5} />
              <div>
                <p className="font-roboto text-[9px] font-light uppercase tracking-[0.25em] text-pvc-grey">{activeMapOffice.label}</p>
                {activeMapOffice.address && (
                  <address className="mt-0.5 not-italic font-roboto text-[13px] font-normal leading-[20px] text-pvc-navy">
                    {activeMapOffice.address}
                  </address>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              {activeMapOffice.landlineDisplay && (
                <a href={activeMapOffice.landlineHref}
                  className="flex items-center gap-2 font-roboto text-[12px] font-light text-pvc-grey hover:text-pvc-gold transition-colors duration-200">
                  <Phone className="h-3.5 w-3.5 shrink-0" strokeWidth={1.5} />
                  {activeMapOffice.landlineDisplay}
                </a>
              )}
              {activeMapOffice.phoneDisplay && (
                <a href={activeMapOffice.phoneHref}
                  className="flex items-center gap-2 font-roboto text-[12px] font-light text-pvc-grey hover:text-pvc-gold transition-colors duration-200">
                  <Phone className="h-3.5 w-3.5 shrink-0" strokeWidth={1.5} />
                  {activeMapOffice.phoneDisplay}
                </a>
              )}
              {activeMapOffice.mapQuery && (
                <a
                  href={mapOpenUrl(activeMapOffice.mapQuery)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-roboto text-[10px] uppercase tracking-[0.2em] text-pvc-gold hover:underline"
                >
                  <ExternalLink className="h-3 w-3" strokeWidth={1.5} />
                  Open in Maps
                </a>
              )}
            </div>
          </motion.div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          6 ▸ CTA
      ═══════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden py-20 sm:py-28"
        style={{
          backgroundImage: "url('/VirtualTourSection.webp')",
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
              Take the Next Step
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="font-termina text-[26px] font-normal text-white sm:text-[34px] lg:text-[42px]"
            >
              READY TO DISCOVER<br className="hidden sm:block" /> PARKVIEW CITY?
            </motion.h2>
            <motion.div variants={fadeUp}
              className="mt-10 flex items-center justify-center"
            >
              <button
                type="button"
                onClick={scrollToForm}
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

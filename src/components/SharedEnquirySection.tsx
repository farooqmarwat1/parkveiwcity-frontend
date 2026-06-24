import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { CalendarClock, ChevronDown, Mail, MapPin, Phone, Send } from "lucide-react";
import { sharedEnquiryConfig, type SharedEnquiryConfig } from "@/data/sharedEnquiry";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: easeOut } },
};

const contactIcons = [Phone, Mail, MapPin];

type SharedEnquirySectionProps = {
  config?: SharedEnquiryConfig;
  id?: string;
  className?: string;
};

function fieldClass() {
  return [
    "h-[47px] w-full rounded-[15px] border border-gray-200 bg-white px-4 py-3",
    "font-roboto text-[14px] font-normal leading-[21px] text-pvc-ink",
    "placeholder:text-pvc-ink/30 outline-none transition-colors duration-200",
    "focus:border-pvc-gold",
  ].join(" ");
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-roboto text-[9px] font-light uppercase tracking-[0.18em] text-pvc-grey">
        {label} {required && <span className="text-pvc-gold">*</span>}
      </label>
      {children}
    </div>
  );
}

export default function SharedEnquirySection({
  config = sharedEnquiryConfig,
  id = "shared-enquiry",
  className = "",
}: SharedEnquirySectionProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section id={id} className={`bg-white py-20 sm:py-28 ${className}`} style={{ scrollMarginTop: "96px" }}>
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto mb-12 max-w-[820px] text-center"
        >
          <h2 className="font-termina text-[24px] font-normal text-pvc-navy sm:text-[32px] lg:text-[40px]">
            {config.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-[720px] font-roboto text-[15px] font-light leading-[26px] text-pvc-grey">
            {config.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col gap-6 rounded-[15px] border border-black/[0.08] bg-white p-6 sm:p-8"
          >
            {config.contactItems.map((item, index) => {
              const Icon = contactIcons[index] ?? Phone;
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-pvc-gold/35">
                    <Icon className="h-4.5 w-4.5 text-pvc-gold" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-roboto text-[10px] font-light uppercase tracking-[0.22em] text-pvc-grey">
                      {item.label}
                    </p>
                    <p className="mt-1 break-words font-roboto text-[15px] font-normal leading-[23px] text-pvc-navy">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="mt-2 rounded-[15px] border border-pvc-gold/25 bg-white p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-pvc-gold/35">
                  <CalendarClock className="h-4 w-4 text-pvc-gold" strokeWidth={1.5} />
                </div>
                <p className="font-roboto text-[10px] font-normal uppercase tracking-[0.22em] text-pvc-navy">
                  {config.officeHours.title}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <p className="font-roboto text-[13px] font-light leading-[21px] text-pvc-grey">
                  {config.officeHours.weekday}
                </p>
                <p className="font-roboto text-[13px] font-light leading-[21px] text-pvc-grey">
                  {config.officeHours.sunday}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-[15px] border border-black/[0.08] bg-white p-6 sm:p-8 lg:p-10"
          >
            <h3 className="mb-6 font-termina text-[20px] font-normal text-pvc-navy">
              {config.formTitle}
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Full Name" required>
                  <input name="fullName" required autoComplete="name" placeholder="Your name" className={fieldClass()} />
                </Field>
                <Field label="Phone" required>
                  <input name="phone" type="tel" required autoComplete="tel" placeholder="+92 xxx xxxxxxx" className={fieldClass()} />
                </Field>
              </div>

              <Field label="Email Address">
                <input name="email" type="email" autoComplete="email" placeholder="your@email.com" className={fieldClass()} />
              </Field>

              <Field label="I'm Interested In" required>
                <div className="relative">
                  <select name="interest" required defaultValue="" className={`${fieldClass()} appearance-none pr-10 text-pvc-ink`}>
                    <option value="" disabled>
                      Select interest
                    </option>
                    {config.interestOptions.map(option => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-pvc-grey/60"
                    strokeWidth={1.5}
                  />
                </div>
              </Field>

              <Field label="Message">
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className={`${fieldClass()} h-auto min-h-[120px] resize-none`}
                />
              </Field>

              <button
                type="submit"
                className="mt-2 flex min-h-11 w-full items-center justify-center gap-3 rounded-[30px] border border-pvc-ink/25 px-6 py-3 font-roboto text-[11px] uppercase tracking-[0.24em] text-pvc-ink/60 transition-all duration-300 hover:border-pvc-gold hover:text-pvc-gold"
              >
                <Send className="h-3.5 w-3.5" strokeWidth={1.5} />
                {config.submitButton}
              </button>

              {submitted && (
                <p aria-live="polite" className="text-center font-roboto text-[13px] font-light text-pvc-grey">
                  Thank you. Our team will contact you shortly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

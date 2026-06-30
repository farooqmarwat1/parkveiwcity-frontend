import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease: easeOut } },
};

const WEB3FORMS_KEY = "YOUR_ACCESS_KEY_HERE";

export default function LahoreContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-white pt-8 pb-14 sm:pt-10 sm:pb-28" style={{ scrollMarginTop: "75px" }}>
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">

        {/* Header */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-14 text-center">
          <h2 className="font-termina text-[24px] sm:text-[32px] lg:text-[40px] font-normal text-pvc-navy">
            BEGIN YOUR JOURNEY HOME IN LAHORE
          </h2>
          <p className="mt-4 w-full max-w-[1069px] mx-auto font-roboto text-[16px] font-light leading-[26px] tracking-[0.9px] text-center text-pvc-grey">
            Our dedicated sales consultants in Lahore are here to guide you through every step — from choosing the right plot to completing your paperwork.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

          {/* Left — Contact info */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-8">

            <div className="flex flex-col gap-6">
              {[
                { Icon: Phone, label: "Lahore Sales Hotline", value: "+92 (42) 000-0000" },
                { Icon: Mail,  label: "Email Us",      value: "lahore@parkviewcity.com.pk" },
                { Icon: MapPin, label: "Lahore Sales Office", value: "Main Multan Road, Lahore" },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-pvc-gold/40">
                    <Icon className="h-4 w-4 text-pvc-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-roboto text-[9px] font-light leading-[13.5px] tracking-[0.9px] uppercase text-pvc-grey">{label}</p>
                    <p className="mt-0.5 font-roboto text-[15px] font-normal leading-[22.5px] tracking-[0.9px] text-pvc-navy">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Office hours */}
            <div className="rounded-[15px] border border-[#C4973A]/25 bg-white p-6">
              <p className="mb-4 font-roboto text-[9px] font-normal leading-[13.5px] tracking-[0.9px] uppercase text-pvc-navy">Office Hours</p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <p className="font-roboto text-[10px] font-normal leading-[15px] tracking-[0.9px] text-pvc-grey">Mon – Sat</p>
                  <p className="mt-1 font-roboto text-[13px] font-normal leading-[19.5px] tracking-[0.9px] text-pvc-navy">9:00 AM – 7:00 PM</p>
                </div>
                <div>
                  <p className="font-roboto text-[10px] font-normal leading-[15px] tracking-[0.9px] text-pvc-grey">Sunday</p>
                  <p className="mt-1 font-roboto text-[13px] font-normal leading-[19.5px] tracking-[0.9px] text-pvc-navy">10:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-[15px] border border-gray-200 p-10">

            <h3 className="mb-6 font-termina text-[20px] font-normal text-pvc-navy">SEND AN ENQUIRY</h3>

            <form onSubmit={handleSubmit} autoComplete="off" className="flex flex-col gap-4">
              {/* Name + Phone */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="font-roboto text-[11px] font-medium leading-[16px] tracking-[1.8px] uppercase text-[#3F4447]">Full Name <span className="text-pvc-gold">*</span></label>
                  <input name="name" required placeholder="Your name" autoComplete="off" data-lpignore="true"
                    className="h-[47px] rounded-[15px] border border-gray-200 px-4 py-3 font-roboto text-[14px] font-normal leading-[21px] tracking-[0px] text-pvc-ink placeholder:text-pvc-ink/30 outline-none focus:border-pvc-gold transition-colors duration-200" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-roboto text-[11px] font-medium leading-[16px] tracking-[1.8px] uppercase text-[#3F4447]">Phone <span className="text-pvc-gold">*</span></label>
                  <input name="phone" required placeholder="+92 xxx xxxxxxx" autoComplete="off" data-lpignore="true"
                    className="h-[47px] rounded-[15px] border border-gray-200 px-4 py-3 font-roboto text-[14px] font-normal leading-[21px] tracking-[0px] text-pvc-ink placeholder:text-pvc-ink/30 outline-none focus:border-pvc-gold transition-colors duration-200" />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="font-roboto text-[11px] font-medium leading-[16px] tracking-[1.8px] uppercase text-[#3F4447]">Email Address</label>
                <input name="email" type="email" placeholder="your@email.com" autoComplete="off" data-lpignore="true"
                  className="h-[47px] rounded-[15px] border border-gray-200 px-4 py-3 font-roboto text-[14px] font-normal leading-[21px] tracking-[0px] text-pvc-ink placeholder:text-pvc-ink/30 outline-none focus:border-pvc-gold transition-colors duration-200" />
              </div>

              {/* Interested In */}
              <div className="flex flex-col gap-1.5">
                <label className="font-roboto text-[11px] font-medium leading-[16px] tracking-[1.8px] uppercase text-[#3F4447]">I'm Interested In</label>
                <input name="interest" placeholder="e.g. Residential Plot, Apartment..." autoComplete="off" data-lpignore="true"
                  className="h-[47px] rounded-[15px] border border-gray-200 px-4 py-3 font-roboto text-[14px] font-normal leading-[21px] tracking-[0px] text-pvc-ink placeholder:text-pvc-ink/30 outline-none focus:border-pvc-gold transition-colors duration-200" />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="font-roboto text-[11px] font-medium leading-[16px] tracking-[1.8px] uppercase text-[#3F4447]">Message</label>
                <textarea name="message" rows={4} placeholder="Tell us about your requirements..." autoComplete="off"
                  className="resize-none rounded-[15px] border border-gray-200 px-4 py-3 font-roboto text-[14px] font-normal leading-[21px] tracking-[0px] text-pvc-ink placeholder:text-pvc-ink/30 outline-none focus:border-pvc-gold transition-colors duration-200" />
              </div>

              {/* Submit */}
              <button type="submit" disabled={status === "sending"}
                className="mt-2 flex h-[50px] w-full items-center justify-center gap-3 rounded-[30px] border border-pvc-ink/25 py-4 font-roboto text-[12px] uppercase tracking-[0.28em] text-pvc-ink/60 transition-all duration-300 hover:border-pvc-gold hover:text-pvc-gold disabled:opacity-60 cursor-pointer">
                <Send className="h-3.5 w-3.5" />
                {status === "sending" ? "Sending…" : "Submit Enquiry"}
              </button>

              {status === "success" && (
                <p className="text-center text-sm text-pvc-green">Thank you! We'll be in touch shortly.</p>
              )}
              {status === "error" && (
                <p className="text-center text-sm text-red-500">Something went wrong. Please try again.</p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

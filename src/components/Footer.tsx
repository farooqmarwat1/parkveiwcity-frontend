import { Facebook, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";

const quickLinks = ["About Us", "Projects & Communities", "Downloads", "Contact Us", "Privacy Policy", "Terms & Conditions"];

const socials = [
  { Icon: Facebook, href: "#" },
  { Icon: Linkedin, href: "#" },
  { Icon: Youtube,  href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-pvc-navy text-white">

      {/* Logo + description */}
      <div className="mx-auto max-w-[1200px] px-6 pt-8 pb-5 sm:pt-10 sm:pb-6 sm:px-10 text-center">
        <img src="/whitelogo.png" alt="Parkview City" className="mx-auto h-12 sm:h-16 w-auto object-contain" />
        <p className="mt-2 sm:mt-3 font-roboto text-[13px] sm:text-[16px] font-normal leading-[22px] sm:leading-[26px] tracking-[0.9px] text-center text-white/65 mx-auto w-full max-w-[767px]">
          Parkview City continues to set new benchmarks in secure, scenic, and modern real estate development in Pakistan.
        </p>
      </div>

      {/* Three columns */}
      <div className="mx-auto max-w-[1200px] px-6 pb-6 sm:pb-8 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:gap-10 md:grid-cols-3">

          {/* Contact Us */}
          <div>
            <p className="mb-6 font-roboto text-[10px] uppercase tracking-[0.28em] text-white/55">Contact Us</p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/50" strokeWidth={1.5} />
                <div className="font-roboto text-[14px] font-normal leading-[20px] tracking-[-0.15px] text-white/55">
                  <p>Head Office:  03000649649</p>
                  <p>Islamabad: 03000649649</p>
                  <p>Lahore: 03000649649</p>
                  <p>UK: 03000649649</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-white/50" strokeWidth={1.5} />
                <p className="font-roboto text-[14px] font-normal leading-[20px] tracking-[-0.15px] text-white/55">info@parkviewcity.com.pk</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/50" strokeWidth={1.5} />
                <div className="font-roboto text-[14px] font-normal leading-[20px] tracking-[-0.15px] text-white/55">
                  <p>Razia Sharif Plaza, 90-West (First Floor)</p>
                  <p>G-7/3, Blue Area</p>
                  <p>Islamabad</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start md:items-center md:text-center">
            <p className="mb-6 font-roboto text-[10px] uppercase tracking-[0.28em] text-white/55">Quick Links</p>
            <ul className="flex flex-col gap-1.5">
              {quickLinks.map(link => (
                <li key={link}>
                  <a href="#" className="font-roboto text-[14px] font-normal leading-[20px] tracking-[-0.15px] text-white/55 transition-colors duration-200 hover:text-white cursor-pointer">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe to Newsletter */}
          <div className="md:pl-16">
            <p className="mb-6 font-roboto text-[10px] uppercase tracking-[0.28em] text-white/55">Subscribe to Newsletter</p>
            <div className="border-b border-white/30 pb-2">
              <input
                type="email"
                placeholder="Enter Your Email"
                autoComplete="off"
                className="w-full bg-transparent font-roboto text-[13px] text-white placeholder:text-white/50 outline-none"
              />
            </div>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ Icon, href }, i) => (
                <a key={i} href={href}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/55 transition-all duration-200 hover:border-pvc-gold hover:text-pvc-gold cursor-pointer">
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-6 py-5 text-center sm:px-10">
          <p className="font-roboto text-[10px] font-normal leading-[15px] tracking-[0.62px] uppercase text-center text-white/35">
            © Copyright {new Date().getFullYear()} Parkview City. All Rights Reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}

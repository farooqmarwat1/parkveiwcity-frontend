import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const leftLinks  = ["Lahore", "Islamabad", "Parkview City UK"];
const rightLinks = ["Gallery", "About Us", "Contact"];
const allLinks   = [...leftLinks, ...rightLinks];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = [
    "group relative pb-1 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-200 cursor-pointer font-roboto whitespace-nowrap",
    solid ? "text-pvc-ink/75 hover:text-pvc-green" : "text-white/85 hover:text-white",
  ].join(" ");

  const underline = `absolute bottom-0 left-0 h-px w-0 bg-pvc-gold transition-all duration-300 group-hover:w-full`;

  return (
    <header className={[
      "fixed inset-x-0 top-0 z-40 transition-all duration-300",
      solid
        ? "bg-white/15 backdrop-blur-2xl border-b border-white/20 shadow-[0_1px_20px_rgba(0,0,0,0.04)]"
        : "bg-gradient-to-b from-black/50 to-transparent",
    ].join(" ")}>

      {/* ── Desktop bar ───────────────────────────────── */}
      <div className="relative mx-auto hidden h-[110px] max-w-[1500px] items-center px-10 lg:flex">

        {/* Center: left links + logo + right links */}
        <nav className="absolute hidden items-center gap-7 lg:flex" style={{ left: "calc(50% - 40px)", transform: "translateX(-50%)" }}>
          {leftLinks.map(link => (
            <a key={link} href="#" className={linkClass}>
              {link}<span className={underline} />
            </a>
          ))}
          <a href="#" className="flex cursor-pointer items-center px-5">
            <img
              src={solid ? "/blacklogo.png" : "/whitelogo.png"}
              alt="Park View City"
              className="h-[90px] w-auto object-contain transition-all duration-300"
            />
          </a>
          {rightLinks.map(link => (
            <a key={link} href="#" className={linkClass}>
              {link}<span className={underline} />
            </a>
          ))}
        </nav>

        {/* Enquire Now pinned right */}
        <div className="flex flex-1 justify-end">
          <a href="#"
            className={[
              "flex items-center gap-2 rounded-full border px-5 py-2 text-[10px] font-medium uppercase tracking-[0.18em] transition-all duration-300 cursor-pointer font-roboto whitespace-nowrap",
              solid
                ? "border-pvc-ink/25 text-pvc-ink hover:border-pvc-green hover:bg-pvc-green hover:text-white"
                : "border-white/40 text-white hover:border-white hover:bg-white/10",
            ].join(" ")}>
            <Phone className="h-3 w-3" />
            Enquire Now
          </a>
        </div>
      </div>

      {/* ── Mobile bar ────────────────────────────────── */}
      <div className="flex h-[70px] items-center justify-between px-5 lg:hidden">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src={solid ? "/blacklogo.png" : "/whitelogo.png"}
            alt="Park View City"
            className="h-[52px] w-auto object-contain transition-all duration-300"
          />
        </a>

        {/* Hamburger */}
        <button
          className={["transition-colors duration-200 cursor-pointer p-2",
            solid ? "text-pvc-ink" : "text-white"].join(" ")}
          aria-label="Menu"
          onClick={() => setOpen(v => !v)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* ── Mobile dropdown ───────────────────────────── */}
      {open && (
        <div className="absolute inset-x-0 top-[70px] z-50 bg-white/95 backdrop-blur-2xl shadow-xl lg:hidden">
          <nav className="flex flex-col divide-y divide-gray-100 px-6 py-2">
            {allLinks.map(link => (
              <a key={link} href="#"
                className="flex items-center py-4 text-sm font-medium uppercase tracking-[0.18em] text-pvc-ink/75 transition-colors duration-200 hover:text-pvc-green font-roboto cursor-pointer"
                onClick={() => setOpen(false)}>
                {link}
              </a>
            ))}
            <a href="#"
              className="flex items-center gap-2 py-4 text-sm font-medium uppercase tracking-[0.18em] text-pvc-gold transition-colors duration-200 hover:text-pvc-green font-roboto cursor-pointer"
              onClick={() => setOpen(false)}>
              <Phone className="h-4 w-4" />
              Enquire Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

import { useEffect, useRef, useState } from "react";
import {
  X, Images, ZoomIn, ChevronLeft, ChevronRight, CalendarDays, MapPin,
} from "lucide-react";

/* ── Shared types ─────────────────────────────────────────────── */
export interface GalleryImage {
  src: string;
  alt: string;
}

export interface PaymentRow {
  category: string;
  total: string;
  downPayment: string;
  balance: string;
  installments: string;
}

export interface PaymentTable {
  title: string;
  subtitle?: string;
  note?: string;
  rows: PaymentRow[];
}

export interface PropertyDetailData {
  id: string;
  titleId: string;
  title: string;
  heroImage: string;
  heroAlt: string;
  badges: string[];
  location: string;
  description: string;
  features: string[];
  gallery: GalleryImage[];
  galleryId: string;
  galleryAriaLabel: string;
  paymentPlanRoute: string;
  closeAriaLabel: string;
  paymentTables?: PaymentTable[];
}

interface Props {
  data: PropertyDetailData;
  onClose: () => void;
  onEnquire: () => void;
  onPaymentPlans: (route: string) => void;
}

export default function PropertyDetailOverlay({ data, onClose, onEnquire, onPaymentPlans }: Props) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const overlayRef  = useRef<HTMLDivElement>(null);
  const closeRef    = useRef<HTMLButtonElement>(null);
  const galleryRef  = useRef<HTMLElement>(null);
  const openerRef   = useRef<HTMLElement | null>(null);
  const galleryLen  = data.gallery.length;

  /* ── Restore focus on close ─────────────────────────────────── */
  useEffect(() => {
    openerRef.current = document.activeElement as HTMLElement;
    return () => {
      setTimeout(() => openerRef.current?.focus({ preventScroll: true }), 50);
    };
  }, []);

  /* ── Keyboard: Escape ─────────────────────────────────────── */
  useEffect(() => {
    function handle(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      if (lightboxIdx !== null) setLightboxIdx(null);
      else onClose();
    }
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [lightboxIdx, onClose]);

  /* ── Lightbox arrow keys ─────────────────────────────────── */
  useEffect(() => {
    if (lightboxIdx === null) return;
    function handle(e: KeyboardEvent) {
      if (e.key === "ArrowLeft")  setLightboxIdx(i => ((i ?? 0) - 1 + galleryLen) % galleryLen);
      if (e.key === "ArrowRight") setLightboxIdx(i => ((i ?? 0) + 1) % galleryLen);
    }
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [lightboxIdx, galleryLen]);

  const prev = () => setLightboxIdx(i => ((i ?? 0) - 1 + galleryLen) % galleryLen);
  const next = () => setLightboxIdx(i => ((i ?? 0) + 1) % galleryLen);

  function scrollToGallery() {
    galleryRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      {/* ── BACKDROP + SCROLLABLE CONTAINER ─────────────────── */}
      <div
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={data.titleId}
        className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto overscroll-contain"
        style={{ background: "rgba(0,0,0,0.70)" }}
        onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
      >
        {/* White detail container */}
        <div
          className="relative w-full overflow-hidden bg-white
                     my-0 rounded-none
                     md:my-6 md:rounded-[20px]"
          style={{ maxWidth: "960px" }}
        >

          {/* ════════════════════════════════════════════════
              HERO
          ════════════════════════════════════════════════ */}
          <section
            className="relative flex min-h-screen items-end overflow-hidden"
            style={{ minHeight: "100svh" }}
          >
            <img
              src={data.heroImage}
              alt={data.heroAlt}
              className="absolute inset-0 h-full w-full object-cover object-center"
              draggable={false}
            />

            {/* Dark blue gradient rising from bottom */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(29,45,78,0.90) 0%, rgba(29,45,78,0.30) 45%, transparent 72%)",
              }}
            />

            {/* View Gallery — top left */}
            <button
              type="button"
              onClick={scrollToGallery}
              aria-label="Scroll to gallery section"
              className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full
                         bg-black/45 px-4 py-2 font-roboto text-[10px] uppercase
                         tracking-[0.18em] text-white backdrop-blur-sm
                         transition-all duration-200 hover:bg-black/65
                         focus-visible:outline focus-visible:outline-2 focus-visible:outline-white
                         cursor-pointer sm:left-8 sm:top-8"
            >
              <Images className="h-3.5 w-3.5" strokeWidth={1.5} />
              View Gallery
            </button>

            {/* Close — top right */}
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label={data.closeAriaLabel}
              className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center
                         rounded-full border border-white/40 bg-white/20 text-white backdrop-blur-sm
                         transition-all duration-200 hover:scale-105 hover:bg-white/35
                         focus-visible:outline focus-visible:outline-2 focus-visible:outline-white
                         cursor-pointer sm:right-8 sm:top-8"
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </button>

            {/* Hero content — bottom left */}
            <div className="relative z-10 w-full px-5 pb-10 sm:px-8 sm:pb-14 md:px-10">
              <div className="mb-4 flex flex-wrap gap-2">
                {data.badges.map(badge => (
                  <span
                    key={badge}
                    className="rounded-full bg-[#C4973A]/90 px-3 py-1 font-roboto
                               text-[9px] font-medium uppercase tracking-[0.15em] text-white backdrop-blur-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <h2
                id={data.titleId}
                className="font-termina font-normal uppercase leading-tight text-white"
                style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "0.04em" }}
              >
                {data.title}
              </h2>

              <p className="mt-3 flex items-center gap-2 font-roboto text-[12px] font-light text-white/75">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-[#C4973A]" strokeWidth={1.5} />
                {data.location}
              </p>
            </div>
          </section>

          {/* ════════════════════════════════════════════════
              PROJECT INFO — white background
          ════════════════════════════════════════════════ */}
          <section className="bg-white px-5 py-9 sm:px-8 md:px-10 md:py-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-9">

              {/* Left — About */}
              <div>
                <p className="font-roboto text-[9px] font-light uppercase tracking-[0.28em] text-[#C4973A]">
                  About This Project
                </p>
                <p className="mt-4 font-roboto text-[13px] font-light leading-[1.75] text-[#58595B] md:text-[14px]">
                  {data.description}
                </p>
              </div>

              {/* Right — Key Features */}
              <div>
                <p className="font-roboto text-[9px] font-light uppercase tracking-[0.28em] text-[#C4973A]">
                  Key Features
                </p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {data.features.map(f => (
                    <li key={f} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C4973A]" />
                      <span className="font-roboto text-[13px] font-light text-[#1D2D4E] md:text-[14px]">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════
              GALLERY — white background
          ════════════════════════════════════════════════ */}
          <section
            ref={galleryRef}
            id={data.galleryId}
            className="bg-white px-5 pb-9 pt-4 sm:px-8 md:px-10"
          >
            <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-termina text-[15px] font-normal uppercase text-[#1D2D4E]">
                Gallery
              </h3>
              <p className="font-roboto text-[11px] font-light text-[#58595B]/70">
                Click any image to enlarge
              </p>
            </div>

            {/* Desktop/tablet: asymmetric 3-col grid */}
            <div
              className="hidden sm:grid"
              style={{
                gridTemplateAreas: `"img1 img1 img2" "img1 img1 img3" "img4 img5 img6"`,
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "8px",
              }}
            >
              {data.gallery.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`${data.galleryAriaLabel} ${i + 1}`}
                  onClick={() => setLightboxIdx(i)}
                  className="group relative overflow-hidden rounded-[8px]
                             focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C4973A]
                             cursor-pointer"
                  style={{
                    gridArea: `img${i + 1}`,
                    aspectRatio: i === 0 ? "auto" : "4/3",
                    minHeight: i === 0 ? "300px" : undefined,
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover object-center
                               transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/28" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ZoomIn className="h-7 w-7 text-white drop-shadow-lg" strokeWidth={1.5} />
                  </div>
                </button>
              ))}
            </div>

            {/* Mobile: 1 column */}
            <div className="flex flex-col gap-2 sm:hidden">
              {data.gallery.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`${data.galleryAriaLabel} ${i + 1}`}
                  onClick={() => setLightboxIdx(i)}
                  className="group relative aspect-video w-full overflow-hidden rounded-[8px]
                             focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C4973A]
                             cursor-pointer"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover object-center
                               transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/28" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ZoomIn className="h-6 w-6 text-white drop-shadow-lg" strokeWidth={1.5} />
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* ════════════════════════════════════════════════
              PAYMENT PLAN — inline tables or CTA
          ════════════════════════════════════════════════ */}
          <section className="bg-white px-5 py-8 sm:px-8 md:px-10">
            {data.paymentTables && data.paymentTables.length > 0 ? (
              <div className="flex flex-col gap-8">
                {data.paymentTables.map((table, ti) => (
                  <div key={ti}>
                    <div className="mb-4 text-center">
                      <h3 className="font-roboto text-[18px] font-semibold uppercase tracking-[0.08em] text-[#1D2D4E]">
                        {table.title}
                      </h3>
                      {table.subtitle && (
                        <p className="mt-0.5 font-roboto text-[11px] font-light text-[#58595B]">{table.subtitle}</p>
                      )}
                      {table.note && (
                        <p className="mt-1 font-roboto text-[10px] font-medium uppercase tracking-[0.12em] text-[#C4973A]">{table.note}</p>
                      )}
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse font-roboto text-[13px]">
                        <thead>
                          <tr className="border-b-2 border-[#1D2D4E]/20">
                            <th className="px-4 py-3 text-left font-roboto text-[10px] font-semibold uppercase tracking-[0.12em] text-[#1D2D4E]">Plot Size / Category</th>
                            {["Total Price", "Down Payment 25%", "Balance Payment", "6 Quarterly Installments"].map(h => (
                              <th key={h} className="px-4 py-3 text-right font-roboto text-[10px] font-semibold uppercase tracking-[0.12em] text-[#1D2D4E]">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {table.rows.map((row, ri) => (
                            <tr key={ri} className={ri % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                              <td className="px-4 py-3 font-roboto text-[13px] font-medium text-[#1D2D4E]">{row.category}</td>
                              <td className="px-4 py-3 text-right font-roboto text-[13px] text-black">{row.total}</td>
                              <td className="px-4 py-3 text-right font-roboto text-[13px] text-black">{row.downPayment}</td>
                              <td className="px-4 py-3 text-right font-roboto text-[13px] text-black">{row.balance}</td>
                              <td className="px-4 py-3 text-right font-roboto text-[13px] text-black">{row.installments}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div
                className="flex flex-col items-center rounded-[12px] px-8 py-8 text-center"
                style={{ border: "1.5px dashed rgba(196,151,58,0.45)", background: "#FFFFFF" }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ background: "rgba(196,151,58,0.12)" }}
                >
                  <CalendarDays className="h-5 w-5 text-[#C4973A]" strokeWidth={1.5} />
                </div>
                <p className="mt-4 font-roboto text-[9px] font-light uppercase tracking-[0.28em] text-[#C4973A]">
                  Payment Plan
                </p>
                <p className="mt-2 font-roboto text-[13px] font-light leading-relaxed text-[#58595B] md:text-[14px]">
                  Detailed payment plan images for this block are available on the{" "}
                  <button
                    type="button"
                    onClick={() => onPaymentPlans(data.paymentPlanRoute)}
                    className="font-medium text-[#1D2D4E] underline underline-offset-2
                               hover:text-[#C4973A] transition-colors cursor-pointer
                               focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C4973A]"
                  >
                    Payment Plans page
                  </button>
                  .
                </p>
              </div>
            )}
          </section>

          {/* ════════════════════════════════════════════════
              ACTION BUTTONS — white background
          ════════════════════════════════════════════════ */}
          <section
            className="flex flex-col items-stretch gap-3 bg-white px-5 pb-12 pt-3
                        sm:flex-row sm:items-center sm:justify-center sm:px-8 md:px-10"
          >
            <button
              type="button"
              onClick={onEnquire}
              className="flex h-[48px] items-center justify-center rounded-full
                         border border-[#C4973A] bg-white px-8 font-roboto text-[11px] uppercase
                         tracking-[0.22em] text-[#C4973A] transition-all duration-300
                         hover:bg-[#C4973A]/8 focus-visible:outline focus-visible:outline-2
                         focus-visible:outline-[#C4973A] cursor-pointer sm:min-w-[180px]"
            >
              Enquire Now
            </button>
            <button
              type="button"
              onClick={onEnquire}
              className="flex h-[48px] items-center justify-center rounded-full border
                         border-[#C4973A] bg-white px-8 font-roboto text-[11px] uppercase
                         tracking-[0.22em] text-[#C4973A] transition-all duration-300
                         hover:bg-[#C4973A]/8 focus-visible:outline focus-visible:outline-2
                         focus-visible:outline-[#C4973A] cursor-pointer sm:min-w-[180px]"
            >
              Schedule a Call
            </button>
          </section>

        </div>{/* /detail container */}
      </div>{/* /overlay */}

      {/* ════════════════════════════════════════════════════════
          GALLERY LIGHTBOX
      ════════════════════════════════════════════════════════ */}
      {lightboxIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery lightbox"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/92"
          onClick={e => { if (e.target === e.currentTarget) setLightboxIdx(null); }}
        >
          <button
            type="button"
            aria-label="Close lightbox"
            onClick={() => setLightboxIdx(null)}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center
                       rounded-full border border-white/30 bg-white/15 text-white
                       transition-all hover:bg-white/28 cursor-pointer
                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <X className="h-5 w-5" strokeWidth={2} />
          </button>

          <p className="absolute left-1/2 top-5 -translate-x-1/2 font-roboto text-[12px] text-white/65 select-none">
            {lightboxIdx + 1} / {galleryLen}
          </p>

          <button
            type="button"
            aria-label="Previous image"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center
                       justify-center rounded-full border border-white/30 bg-white/15 text-white
                       transition-all hover:bg-white/28 cursor-pointer
                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-white
                       sm:left-6"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2} />
          </button>

          <img
            src={data.gallery[lightboxIdx].src}
            alt={data.gallery[lightboxIdx].alt}
            className="max-h-[85vh] max-w-[85vw] object-contain"
            draggable={false}
          />

          <button
            type="button"
            aria-label="Next image"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center
                       justify-center rounded-full border border-white/30 bg-white/15 text-white
                       transition-all hover:bg-white/28 cursor-pointer
                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-white
                       sm:right-6"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>
      )}
    </>
  );
}

import type { MouseEventHandler } from "react";

export default function ExploreButton({
  label   = "Explore",
  href    = "#",
  onClick,
  variant = "outline",
}: {
  label?:   string;
  href?:    string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  variant?: "outline" | "solid" | "stats" | "light" | "gold";
}) {
  if (variant === "light") {
    return (
      <a href={href} onClick={onClick} className="inline-block rounded-full border border-pvc-ink/25 px-12 py-3 font-roboto text-[10px] uppercase tracking-[0.32em] text-pvc-ink/60 transition-all duration-300 hover:border-pvc-gold hover:text-pvc-gold cursor-pointer">
        {label}
      </a>
    );
  }

  if (variant === "gold") {
    return (
      <a href={href} onClick={onClick} className="inline-block rounded-full border border-pvc-gold px-12 py-3 font-roboto text-[10px] uppercase tracking-[0.32em] text-pvc-gold transition-all duration-300 hover:bg-pvc-gold hover:text-white cursor-pointer">
        {label}
      </a>
    );
  }

  if (variant === "stats") {
    return (
      <a href={href} onClick={onClick} className="inline-block rounded-full border border-white/30 bg-white/10 px-12 py-3 font-roboto text-[10px] uppercase tracking-[0.32em] text-white backdrop-blur-md transition-all duration-300 hover:border-pvc-gold hover:text-pvc-gold cursor-pointer">
        {label}
      </a>
    );
  }

  if (variant === "solid") {
    return (
      <a href={href} onClick={onClick} className="inline-flex items-center justify-center rounded-full bg-white px-10 py-3.5 font-roboto text-xs uppercase tracking-[0.28em] text-pvc-green-deep transition-colors duration-300 hover:bg-pvc-gold-light cursor-pointer">
        {label}
      </a>
    );
  }

  return (
    <a href={href} onClick={onClick} className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/70 px-10 py-3.5 font-roboto text-xs uppercase tracking-[0.28em] text-white transition-colors duration-300 hover:border-pvc-gold cursor-pointer">
      <span className="absolute inset-0 -z-0 origin-bottom scale-y-0 bg-pvc-gold transition-transform duration-300 ease-out group-hover:scale-y-100" />
      <span className="relative z-10 transition-colors duration-300 group-hover:text-pvc-green-deep">{label}</span>
    </a>
  );
}

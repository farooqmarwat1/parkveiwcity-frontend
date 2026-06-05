import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";

const fields = [
  {
    label: "Search by City, Community or Project",
    default: "All Locations",
    options: ["All Locations", "Lahore", "Islamabad", "Park View UK"],
    grow: true,
  },
  {
    label: "Property Type",
    default: "Any",
    options: ["Any", "Residential Plot", "Commercial Plot", "Apartment", "Villa", "Farmhouse", "Penthouse"],
  },
  {
    label: "Bedrooms",
    default: "Any",
    options: ["Any", "1", "2", "3", "4", "5+"],
  },
  {
    label: "Price",
    default: "Any",
    options: ["Any", "Under 50 Lac", "50 Lac – 1 Cr", "1 Cr – 3 Cr", "3 Cr – 5 Cr", "5 Cr+"],
  },
];

function Dropdown({ label, defaultValue, options, grow }: { label: string; defaultValue: string; options: string[]; grow?: boolean }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className={`relative w-full sm:w-auto ${grow ? "sm:flex-[1.6]" : "sm:flex-1"} min-w-0`}>
      <button
        onClick={() => setOpen(o => !o)}
        className="flex w-full flex-col gap-0.5 px-5 py-3 text-left cursor-pointer sm:py-2.5"
      >
        <span className="whitespace-nowrap font-roboto text-[9px] uppercase tracking-[0.2em] text-white/50">{label}</span>
        <span className="flex items-center gap-2 font-roboto text-[14px] font-normal uppercase tracking-[0.12em] text-white">
          {selected}
          <ChevronDown className={`h-3 w-3 text-pvc-gold-light transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        </span>
      </button>

      {open && (
        <ul className="absolute bottom-full left-0 mb-2 min-w-[200px] overflow-hidden rounded-xl border border-white/10 bg-black/80 py-1 backdrop-blur-xl z-50 shadow-xl">
          {options.map(o => (
            <li key={o}>
              <button
                onClick={() => { setSelected(o); setOpen(false); }}
                className={`w-full px-4 py-2 text-left font-roboto text-[12px] tracking-wide transition-colors duration-150
                  ${o === selected ? "text-pvc-gold-light bg-white/5" : "text-white/80 hover:bg-white/10 hover:text-white"}`}
              >
                {o}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function SearchBar() {
  return (
    <div className="pointer-events-auto absolute inset-x-0 bottom-4 z-20 flex justify-center px-6 sm:px-16">
      <div className="flex w-full max-w-[1200px] flex-col divide-y divide-white/10 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-2xl sm:flex-row sm:items-center sm:divide-x sm:divide-y-0 sm:rounded-full">
        {fields.map(f => (
          <Dropdown key={f.label} label={f.label} defaultValue={f.default} options={f.options} grow={f.grow} />
        ))}
        <div className="flex items-center px-4 py-3 sm:px-2 sm:py-1.5">
          <button className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/40 px-7 py-2.5 font-roboto text-[10px] uppercase leading-none tracking-[0.22em] text-white/60 transition-colors duration-200 hover:border-pvc-gold hover:text-pvc-gold cursor-pointer sm:w-auto">
            <Search className="h-3 w-3" />
            Show Results
          </button>
        </div>
      </div>
    </div>
  );
}

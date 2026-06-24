import { useEffect, useRef, useState } from "react";
import { ChevronDown, Search } from "lucide-react";

const locationOptions = ["All Locations", "Lahore", "Islamabad", "Park View UK"];
const propertyTypeOptions = [
  "Any",
  "Plots",
  "Plot",
  "Residential Plot",
  "Commercial",
  "Commercial Plot",
  "Office",
  "Shop",
  "Apartment",
  "Villa",
  "House",
  "Residential Unit",
  "Farmhouse",
  "Penthouse",
];
const bedroomOptions = ["Any", "1", "2", "3", "4", "5+"];
const priceOptions = ["Any", "Under 50 Lac", "50 Lac - 1 Cr", "1 Cr - 3 Cr", "3 Cr - 5 Cr", "5 Cr+"];

const bedroomRelevantTypes = ["Any", "Apartment", "Villa", "House", "Residential Unit", "Farmhouse", "Penthouse"];

function shouldShowBedrooms(propertyType: string) {
  return bedroomRelevantTypes.includes(propertyType);
}

function Dropdown({
  label,
  selected,
  options,
  grow,
  onChange,
}: {
  label: string;
  selected: string;
  options: string[];
  grow?: boolean;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
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
        type="button"
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
                type="button"
                onClick={() => { onChange(o); setOpen(false); }}
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
  const [location, setLocation] = useState("All Locations");
  const [propertyType, setPropertyType] = useState("Any");
  const [bedrooms, setBedrooms] = useState("Any");
  const [price, setPrice] = useState("Any");
  const showBedrooms = shouldShowBedrooms(propertyType);

  useEffect(() => {
    if (!showBedrooms) setBedrooms("");
  }, [showBedrooms]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const payload = {
      location,
      propertyType,
      price,
      ...(showBedrooms ? { bedrooms } : {}),
    };

    void payload;
  }

  return (
    <div className="pointer-events-auto absolute inset-x-0 bottom-4 z-20 flex justify-center px-6 sm:px-16">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-[1200px] flex-col divide-y divide-white/10 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-2xl sm:flex-row sm:items-center sm:divide-x sm:divide-y-0 sm:rounded-full"
      >
        <Dropdown
          label="Search by City, Community or Project"
          selected={location}
          options={locationOptions}
          grow
          onChange={setLocation}
        />
        <Dropdown
          label="Property Type"
          selected={propertyType}
          options={propertyTypeOptions}
          onChange={setPropertyType}
        />
        {showBedrooms && (
          <Dropdown
            label="Bedrooms"
            selected={bedrooms}
            options={bedroomOptions}
            onChange={setBedrooms}
          />
        )}
        <Dropdown
          label="Price"
          selected={price}
          options={priceOptions}
          onChange={setPrice}
        />
        <div className="flex items-center px-4 py-3 sm:px-2 sm:py-1.5">
          <button type="submit" className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/40 px-7 py-2.5 font-roboto text-[10px] uppercase leading-none tracking-[0.22em] text-white/60 transition-colors duration-200 hover:border-pvc-gold hover:text-pvc-gold cursor-pointer sm:w-auto">
            <Search className="h-3 w-3" />
            Show Results
          </button>
        </div>
      </form>
    </div>
  );
}

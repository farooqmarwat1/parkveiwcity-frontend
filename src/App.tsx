import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroStack from "@/components/HeroStack";
import CuratedSection from "@/components/CuratedSection";
import StatsSection from "@/components/StatsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import ContactSection from "@/components/ContactSection";
import ContactPage from "@/components/ContactPage";
import AboutPage from "@/components/AboutPage";
import OurAchievementsSection from "@/components/OurAchievementsSection";
import UkPage from "@/components/UkPage";
import SharedEnquirySection from "@/components/SharedEnquirySection";

import LahoreHeroStack from "@/components/lahore/LahoreHeroStack";
import LahoreAboutSection from "@/components/lahore/LahoreAboutSection";
import LahorePropertiesSection from "@/components/lahore/LahorePropertiesSection";
import LahoreAmenitiesPreviewSection from "@/components/lahore/LahoreAmenitiesPreviewSection";
import LahoreVirtualTourSection from "@/components/lahore/LahoreVirtualTourSection";
import LahoreAmenitiesPage from "@/components/lahore/LahoreAmenitiesPage";
import LahorePaymentPlansPage from "@/components/lahore/LahorePaymentPlansPage";
import PropertyDetailOverlay from "@/components/lahore/PropertyDetailOverlay";
import {
  TULIP_DETAIL,
  CRYSTAL_DETAIL,
  JADE_DETAIL,
  ROSE_MARKET_DETAIL,
  TULIP_COMMERCIAL_DETAIL,
  BROADWAY_COMMERCIAL_DETAIL,
  THE_WALK_II_DETAIL,
  THE_WALK_DETAIL as LAHORE_THE_WALK_DETAIL,
  COMMERCIAL_PLOTS_DETAIL,
} from "@/data/lahoreProperties";

import IslamabadHeroStack from "@/components/islamabad/IslamabadHeroStack";
import IslamabadAboutSection from "@/components/islamabad/IslamabadAboutSection";
import IslamabadPropertiesSection from "@/components/islamabad/IslamabadPropertiesSection";
import IslamabadAmenitiesPreviewSection from "@/components/islamabad/IslamabadAmenitiesPreviewSection";
import IslamabadVirtualTourSection from "@/components/islamabad/IslamabadVirtualTourSection";
import IslamabadAmenitiesPage from "@/components/islamabad/IslamabadAmenitiesPage";
import IslamabadPaymentPlansPage from "@/components/islamabad/IslamabadPaymentPlansPage";
import { J_BLOCK_DETAIL, D_BLOCK_DETAIL, OVERSEAS_PREMIUM_DETAIL, AB_BLOCK_DETAIL, TERRACE_C_BLOCK_DETAIL, E_BLOCK_DETAIL, F_BLOCK_DETAIL, H_BLOCK_DETAIL, BOULEVARD_DETAIL, THE_WALK_DETAIL, DOWNTOWN_ISLAMABAD_DETAIL, OVERSEAS_COMMERCIAL_DETAIL, FOUNTAIN_VIEW_DETAIL } from "@/data/islamabadProperties";

type EnquiryCity = "lahore" | "islamabad";

const enquiryTargets: Record<EnquiryCity, { route: string; id: string }> = {
  lahore: { route: "/lahore", id: "lahore-enquiry-form" },
  islamabad: { route: "/islamabad", id: "islamabad-enquiry-form" },
};

function scrollToElement(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollToEnquiryForm(
  city: EnquiryCity,
  pathname: string,
  navigate: ReturnType<typeof useNavigate>,
  closeOverlay: () => void,
) {
  const target = enquiryTargets[city];
  closeOverlay();

  if (pathname === target.route) {
    navigate(`${target.route}#${target.id}`, {
      state: { scrollTo: target.id, ts: Date.now() },
    });
    window.requestAnimationFrame(() => scrollToElement(target.id));
    return;
  }

  navigate(`${target.route}#${target.id}`, {
    state: { scrollTo: target.id, ts: Date.now() },
  });
}

/* ── Scroll to top on route change (skip if hash is present) ──── */
function ScrollToTop() {
  const { pathname, hash, state } = useLocation();
  const scrollState = state as { scrollTo?: string; ts?: number } | null;
  const stateTarget = scrollState?.scrollTo;
  const stateTs = scrollState?.ts;

  useEffect(() => {
    const hashTarget = hash ? hash.slice(1) : "";
    const targetId = stateTarget ?? hashTarget;

    if (!targetId) {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      return;
    }

    let cancelled = false;
    function scrollToAnchor() {
      if (cancelled) return;
      scrollToElement(targetId);
    }

    // Wait for fonts to finish swapping in (font-display: swap) before
    // measuring — otherwise a reflow shortly after first paint can throw
    // off the computed scroll target.
    const timer = window.setTimeout(() => {
      if (document.fonts?.ready) {
        document.fonts.ready.then(scrollToAnchor);
      } else {
        scrollToAnchor();
      }
    }, 120);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [pathname, hash, stateTarget, stateTs]);
  return null;
}

/* ── Home page ─────────────────────────────────────────────────── */
function HomePage() {
  return (
    <>
      <HeroStack />
      <CuratedSection />
      <StatsSection />
      <ProjectsSection />
      <AmenitiesSection />
      <OurAchievementsSection />
      <ContactSection />
    </>
  );
}

/* ── Lahore home page — overlay state lives here ──────────────── */
function LahoreHomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);

  const typeParam = searchParams.get("type");
  const initialTab = (typeParam === "commercial" || typeParam === "residential") ? typeParam : "residential";

  function clearScrollLock() {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }

  function closeLahoreOverlay() {
    clearScrollLock();
    setSelectedProperty(null);
  }

  function handleEnquire() {
    scrollToEnquiryForm("lahore", location.pathname, navigate, closeLahoreOverlay);
  }

  function handleScheduleCall() {
    clearScrollLock();
    setSelectedProperty(null);
    navigate("/contact");
  }

  function handlePaymentPlans(route: string) {
    clearScrollLock();
    setSelectedProperty(null);
    navigate(route);
  }

  const activeDetail =
    selectedProperty === "tulip-overseas-block" ? TULIP_DETAIL :
    selectedProperty === "crystal-block"        ? CRYSTAL_DETAIL :
    selectedProperty === "jade-extension"       ? JADE_DETAIL :
    selectedProperty === "rose-market"          ? ROSE_MARKET_DETAIL :
    selectedProperty === "tulip-commercial"     ? TULIP_COMMERCIAL_DETAIL :
    selectedProperty === "broadway-commercial"  ? BROADWAY_COMMERCIAL_DETAIL :
    selectedProperty === "the-walk-ii"          ? THE_WALK_II_DETAIL :
    selectedProperty === "the-walk"             ? LAHORE_THE_WALK_DETAIL :
    selectedProperty === "commercial-plots"     ? COMMERCIAL_PLOTS_DETAIL :
    null;

  return (
    <>
      <LahoreHeroStack />
      <LahoreAboutSection />
      <LahorePropertiesSection onOpenProperty={setSelectedProperty} initialTab={initialTab} />
      <LahoreAmenitiesPreviewSection />
      <SharedEnquirySection id="lahore-enquiry-form" />
      <LahoreVirtualTourSection />

      {activeDetail && (
        <PropertyDetailOverlay
          data={activeDetail}
          onClose={closeLahoreOverlay}
          onEnquire={handleEnquire}
          onScheduleCall={handleScheduleCall}
          onPaymentPlans={handlePaymentPlans}
        />
      )}
    </>
  );
}

/* ── Islamabad home page — overlay state lives here ───────────────── */
function IslamabadHomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);

  const typeParam = searchParams.get("type");
  const initialTab = (typeParam === "commercial" || typeParam === "residential") ? typeParam : "residential";

  function clearScrollLock() {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }

  function handleEnquire() {
    scrollToEnquiryForm("islamabad", location.pathname, navigate, () => {
      clearScrollLock();
      setSelectedProperty(null);
    });
  }

  function handleScheduleCall() {
    clearScrollLock();
    setSelectedProperty(null);
    navigate("/contact");
  }

  function handlePaymentPlans(route: string) {
    clearScrollLock();
    setSelectedProperty(null);
    navigate(route);
  }

  const activeDetail =
    selectedProperty === "j-block-privilege"   ? J_BLOCK_DETAIL :
    selectedProperty === "d-block"             ? D_BLOCK_DETAIL :
    selectedProperty === "overseas-premium"    ? OVERSEAS_PREMIUM_DETAIL :
    selectedProperty === "ab-block"            ? AB_BLOCK_DETAIL :
    selectedProperty === "terrace-c-block"     ? TERRACE_C_BLOCK_DETAIL :
    selectedProperty === "e-block"             ? E_BLOCK_DETAIL :
    selectedProperty === "f-block"             ? F_BLOCK_DETAIL :
    selectedProperty === "h-block"             ? H_BLOCK_DETAIL :
    selectedProperty === "boulevard"           ? BOULEVARD_DETAIL :
    selectedProperty === "fountain-view-residences" ? FOUNTAIN_VIEW_DETAIL :
    selectedProperty === "the-walk"                 ? THE_WALK_DETAIL :
    selectedProperty === "downtown-islamabad"  ? DOWNTOWN_ISLAMABAD_DETAIL :
    selectedProperty === "overseas-commercial" ? OVERSEAS_COMMERCIAL_DETAIL :
    null;

  return (
    <>
      <IslamabadHeroStack />
      <IslamabadAboutSection />
      <IslamabadPropertiesSection onOpenProperty={setSelectedProperty} initialTab={initialTab} />
      <IslamabadAmenitiesPreviewSection />
      <SharedEnquirySection id="islamabad-enquiry-form" />
      <IslamabadVirtualTourSection />

      {activeDetail && (
        <PropertyDetailOverlay
          data={activeDetail}
          onClose={() => {
            clearScrollLock();
            setSelectedProperty(null);
          }}
          onEnquire={handleEnquire}
          onScheduleCall={handleScheduleCall}
          onPaymentPlans={handlePaymentPlans}
        />
      )}
    </>
  );
}

/* ── Root App — Navbar + Routes + Footer shell ─────────────────── */
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"                          element={<HomePage />} />
          <Route path="/lahore"                    element={<LahoreHomePage />} />
          <Route path="/lahore/amenities"          element={<LahoreAmenitiesPage />} />
          <Route path="/lahore/payment-plans"      element={<LahorePaymentPlansPage />} />
          <Route path="/islamabad"                 element={<IslamabadHomePage />} />
          <Route path="/islamabad/amenities"       element={<IslamabadAmenitiesPage />} />
          <Route path="/islamabad/payment-plans"   element={<IslamabadPaymentPlansPage />} />
          <Route path="/uk"                        element={<UkPage />} />
          <Route path="/contact"                   element={<ContactPage />} />
          <Route path="/about"                     element={<AboutPage />} />
          <Route path="*"                          element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

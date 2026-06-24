import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
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
import { TULIP_DETAIL, CRYSTAL_DETAIL, JADE_DETAIL, ROSE_MARKET_DETAIL } from "@/data/lahoreProperties";

import IslamabadHeroStack from "@/components/islamabad/IslamabadHeroStack";
import IslamabadAboutSection from "@/components/islamabad/IslamabadAboutSection";
import IslamabadPropertiesSection from "@/components/islamabad/IslamabadPropertiesSection";
import IslamabadAmenitiesPreviewSection from "@/components/islamabad/IslamabadAmenitiesPreviewSection";
import IslamabadVirtualTourSection from "@/components/islamabad/IslamabadVirtualTourSection";
import IslamabadAmenitiesPage from "@/components/islamabad/IslamabadAmenitiesPage";
import IslamabadPaymentPlansPage from "@/components/islamabad/IslamabadPaymentPlansPage";
import { J_BLOCK_DETAIL, D_BLOCK_DETAIL, OVERSEAS_PREMIUM_DETAIL, AB_BLOCK_DETAIL, TERRACE_C_BLOCK_DETAIL, E_BLOCK_DETAIL, F_BLOCK_DETAIL, H_BLOCK_DETAIL, BOULEVARD_DETAIL, THE_WALK_DETAIL, DOWNTOWN_ISLAMABAD_DETAIL, OVERSEAS_COMMERCIAL_DETAIL, FOUNTAIN_VIEW_DETAIL } from "@/data/islamabadProperties";

/* ── Scroll to top on route change (skip if hash is present) ──── */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      return;
    }

    const timer = window.setTimeout(() => {
      const el = document.getElementById(hash.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 120);

    return () => window.clearTimeout(timer);
  }, [pathname, hash]);
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
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);

  function clearScrollLock() {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }

  function handleEnquire() {
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
    null;

  return (
    <>
      <LahoreHeroStack />
      <LahoreAboutSection />
      <LahorePropertiesSection onOpenProperty={setSelectedProperty} />
      <LahoreAmenitiesPreviewSection />
      <LahoreVirtualTourSection />
      <SharedEnquirySection id="lahore-enquiry" />

      {activeDetail && (
        <PropertyDetailOverlay
          data={activeDetail}
          onClose={() => setSelectedProperty(null)}
          onEnquire={handleEnquire}
          onPaymentPlans={handlePaymentPlans}
        />
      )}
    </>
  );
}

/* ── Islamabad home page — overlay state lives here ───────────────── */
function IslamabadHomePage() {
  const navigate = useNavigate();
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);

  function clearScrollLock() {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }

  function handleEnquire() {
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
      <IslamabadPropertiesSection onOpenProperty={setSelectedProperty} />
      <IslamabadAmenitiesPreviewSection />
      <IslamabadVirtualTourSection />
      <SharedEnquirySection id="islamabad-enquiry" />

      {activeDetail && (
        <PropertyDetailOverlay
          data={activeDetail}
          onClose={() => setSelectedProperty(null)}
          onEnquire={handleEnquire}
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

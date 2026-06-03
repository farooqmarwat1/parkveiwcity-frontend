import { useState, useRef, useEffect, useCallback } from "react";
import { heroes } from "@/data/heroes";
import HeroPanel from "./HeroPanel";

export default function HeroStack() {
  const [panel, setPanel] = useState(0);
  const locked = useRef(false);
  const ref = useRef<HTMLDivElement>(null);
  const touchY = useRef(0);

  const panelRef = useRef(panel);
  useEffect(() => {
    panelRef.current = panel;
  }, [panel]);

  /* Navigate between panels with a cooldown lock */
  const go = useCallback((dir: 1 | -1) => {
    if (locked.current) return;

    const current = panelRef.current;
    const next = current + dir;
    if (next < 0 || next >= heroes.length) return;

    locked.current = true;
    setPanel(next);

    setTimeout(() => {
      locked.current = false;
    }, 950); // Matches CSS transition duration
  }, []);

  /* Wheel listener with strict boundary/top check */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      const currentPanel = panelRef.current;
      const isAtTop = window.scrollY <= 0;

      const isGoingDown = e.deltaY > 0;
      const isGoingUp = e.deltaY < 0;

      // Only trigger a panel transition on intentional scrolls (|deltaY| > 20).
      // Residual trackpad momentum events have tiny deltaY and would cause
      // unintended double-transitions (e.g. 3→2 then immediately 2→1).
      const intentional = Math.abs(e.deltaY) > 20;

      if (isGoingDown && currentPanel < heroes.length - 1) {
        // Within stack limits going down -> intercept and transition internally
        e.preventDefault();
        if (intentional) go(1);
      } else if (isGoingDown && currentPanel === heroes.length - 1 && isAtTop) {
        // Last panel, scrolling down -> controlled hand-off to page scroll
        // Absorb momentum so the user doesn't skip multiple sections
        e.preventDefault();
        if (!locked.current) {
          locked.current = true;
          const heroHeight = el.offsetHeight;
          window.scrollTo({ top: heroHeight, behavior: "smooth" });
          // Block window-level wheel events for the momentum drain period
          const absorbMomentum = (ev: WheelEvent) => ev.preventDefault();
          window.addEventListener("wheel", absorbMomentum, { passive: false });
          setTimeout(() => {
            window.removeEventListener("wheel", absorbMomentum);
            locked.current = false;
          }, 900);
        }
      } else if (isGoingUp && currentPanel > 0 && isAtTop) {
        // At the absolute top of the page going up -> intercept and transition internally
        e.preventDefault();
        if (intentional) go(-1);
      }
      // Otherwise: Let the browser scroll the page naturally (e.g. scrolling up while page is scrolled down)
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [go]);

  /* Keyboard listener with strict boundary/top check */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const currentPanel = panelRef.current;
      const isAtTop = window.scrollY <= 0;

      if (e.key === "ArrowDown") {
        if (currentPanel < heroes.length - 1) {
          e.preventDefault();
          go(1);
        }
      } else if (e.key === "ArrowUp") {
        if (currentPanel > 0 && isAtTop) {
          e.preventDefault();
          go(-1);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [go]);

  /* Touch Swipes with strict boundary/top check */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onTouchStart = (e: TouchEvent) => {
      touchY.current = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      const currentPanel = panelRef.current;
      const isAtTop = window.scrollY <= 0;
      const currentY = e.touches[0].clientY;
      const dy = touchY.current - currentY;

      // Prevent native bounce/scroll only during internal panel transitions
      if (dy > 0 && currentPanel < heroes.length - 1) {
        e.preventDefault();
      } else if (dy < 0 && currentPanel > 0 && isAtTop) {
        e.preventDefault();
      }
    };

    const onTouchEnd = (e: TouchEvent) => {
      const currentPanel = panelRef.current;
      const isAtTop = window.scrollY <= 0;
      const dy = touchY.current - e.changedTouches[0].clientY;

      if (Math.abs(dy) < 40) return;

      if (dy > 0 && currentPanel < heroes.length - 1) {
        go(1);
      } else if (dy > 0 && currentPanel === heroes.length - 1 && isAtTop) {
        // Last panel swipe down → scroll page to section below the hero
        const heroHeight = ref.current?.offsetHeight ?? window.innerHeight;
        window.scrollTo({ top: heroHeight, behavior: "smooth" });
      } else if (dy < 0 && currentPanel > 0 && isAtTop) {
        go(-1);
      }
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [go]);

  return (
    <div
      ref={ref}
      className="relative h-dvh overflow-hidden"
      style={{ touchAction: "none" }}
    >
      {heroes.map((hero, i) => (
        <div
          key={hero.id}
          className="absolute inset-0"
          style={{
            transform: `translateY(${(i - panel) * 100}%)`,
            transition: "transform 900ms cubic-bezier(0.22, 1, 0.36, 1)",
            willChange: "transform",
          }}
        >
          <HeroPanel hero={hero} />
        </div>
      ))}
    </div>
  );
}
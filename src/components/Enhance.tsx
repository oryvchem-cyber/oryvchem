"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Progressive enhancement only (without JS everything is visible and static):
 * - header gets a "scrolled" state
 * - the process route draws itself once, the first time it scrolls into view
 */
export function Enhance() {
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => document.querySelector("header.nav")?.classList.toggle("scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const steps = document.querySelector<HTMLElement>(".steps");
    if (!steps) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      steps.classList.add("drawn");
      return;
    }
    steps.classList.add("will-draw");
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          steps.classList.add("drawn");
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(steps);
    return () => io.disconnect();
  }, [pathname]);

  return null;
}

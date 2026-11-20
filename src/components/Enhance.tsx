"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Blocks that glide in the first time they scroll into view. */
const REVEAL = [
  "main .section-head",
  ".facts",
  ".cat-card",
  ".capability .cat-card",
  ".market",
  ".compliance-list li",
  ".compliance-note",
  ".faq details",
  ".contact-info",
  ".prose > *",
].join(",");

/**
 * Progressive enhancement only (without JS, or with reduced motion, everything is visible and static):
 * - header gets a "scrolled" state
 * - the process route and the payment track draw themselves once, the first time they scroll into view
 * - content blocks below the fold glide in once as they are reached
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
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window);
    const tracks = Array.from(document.querySelectorAll<HTMLElement>(".steps, .pay-track"));
    if (calm) {
      tracks.forEach((t) => t.classList.add("drawn"));
      return;
    }

    const observers: IntersectionObserver[] = [];

    for (const track of tracks) {
      track.classList.add("will-draw");
      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            track.classList.add("drawn");
            io.disconnect();
          }
        },
        { threshold: 0.35 },
      );
      io.observe(track);
      observers.push(io);
    }

    // Only hide what is still below the fold, so nothing on screen flickers.
    const fold = window.innerHeight * 0.92;
    const items = Array.from(document.querySelectorAll<HTMLElement>(REVEAL)).filter(
      (el) => el.getBoundingClientRect().top > fold && !el.classList.contains("rv"),
    );
    const seen = new Map<Element, number>();
    for (const el of items) {
      const parent = el.parentElement;
      const i = parent ? (seen.get(parent) ?? 0) : 0;
      if (parent) seen.set(parent, i + 1);
      el.style.setProperty("--rv-delay", `${Math.min(i, 5) * 70}ms`);
      el.classList.add("rv");
    }
    const done = (e: TransitionEvent) => {
      const el = e.currentTarget as HTMLElement;
      if (e.propertyName !== "opacity") return;
      el.classList.remove("rv", "rv-in");
      el.style.removeProperty("--rv-delay");
      el.removeEventListener("transitionend", done);
    };
    const rio = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          el.addEventListener("transitionend", done);
          el.classList.add("rv-in");
          rio.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    items.forEach((el) => rio.observe(el));
    observers.push(rio);

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  return null;
}

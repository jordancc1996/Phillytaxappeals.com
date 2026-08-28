import { useEffect } from "react";

/**
 * Global fluid scroll-reveal.
 * Tags semantic blocks with `.reveal` and toggles `.is-visible` as
 * they enter the viewport. Re-scans on every full page load (Astro
 * has no client-side router).
 * Respects prefers-reduced-motion via CSS.
 */
const SELECTOR = [
  "section",
  "article",
  "main > div",
  "h2",
  "h3",
  "figure",
  "[data-reveal]",
].join(",");

const ScrollReveal = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const candidates = Array.from(
      document.querySelectorAll<HTMLElement>(SELECTOR)
    ).filter((el) => {
      if (el.closest("nav")) return false;
      if (el.closest("[data-no-reveal]")) return false;
      return true;
    });

    // Innermost targets only. Tagging a tall parent <section> AND its
    // [data-reveal] photo wrapper nests opacity: 0, so the image stays
    // invisible until 12% of the whole section intersects.
    const elements = candidates.filter(
      (el) => !candidates.some((other) => other !== el && el.contains(other))
    );

    elements.forEach((el) => el.classList.add("reveal"));

    if (prefersReduced) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const revealIfOnscreen = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        el.classList.add("is-visible");
        return true;
      }
      return false;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "0px",
      }
    );

    elements.forEach((el) => {
      if (revealIfOnscreen(el)) return;
      observer.observe(el);
    });

    const fallback = () => {
      elements.forEach((el) => {
        if (!el.classList.contains("is-visible") && revealIfOnscreen(el)) {
          observer.unobserve(el);
        }
      });
    };
    window.addEventListener("scroll", fallback, { passive: true });
    window.addEventListener("resize", fallback);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", fallback);
      window.removeEventListener("resize", fallback);
    };
  }, []);

  return null;
};

export default ScrollReveal;

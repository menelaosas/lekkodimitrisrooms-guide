"use client";

import { useEffect, useState } from "react";

/**
 * Returns whether the page has been scrolled past a given threshold.
 * Used to add background/shadow to the fixed navbar.
 */
export function useNavScroll(threshold = 40): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    // Passive listener for performance
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

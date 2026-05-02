import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely, resolving conflicts. */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/** Smooth-scroll to a section, accounting for fixed navbar height. */
export function scrollToSection(href: string): void {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  const navHeight = 70;
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top, behavior: "smooth" });
}

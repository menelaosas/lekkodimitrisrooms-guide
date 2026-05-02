"use client";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-7 py-3 text-[0.78rem] tracking-[0.12em] uppercase transition-all duration-300 focus-visible:outline-2 focus-visible:outline-sea",
        variant === "primary" && "bg-sea text-white hover:bg-sea-dark",
        variant === "secondary" && "border border-stone/30 text-charcoal hover:border-sea hover:text-sea",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

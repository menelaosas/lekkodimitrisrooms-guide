"use client";
import { Globe } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { PROPERTY } from "@/lib/guide-config";

export function GuideHeader({ sectionLabel }: { sectionLabel: string }) {
  const { lang, toggle } = useLang();
  return (
    <header className="sticky top-0 z-50 bg-sea text-white px-4 h-16 flex items-center justify-between flex-shrink-0">
      <div className="min-w-0">
        <p className="text-[13px] font-medium truncate leading-tight">{PROPERTY.name}</p>
        <p className="text-[10px] opacity-70 leading-tight mt-0.5">{PROPERTY.location[lang]}</p>
      </div>
      <div className="flex items-center gap-3 flex-shrink-0">
        <span className="text-[12px] font-medium opacity-80 hidden sm:block">{sectionLabel}</span>
        <button
          onClick={toggle}
          className="flex items-center gap-1.5 bg-white/15 hover:bg-white/25 transition-colors px-3 py-1.5 rounded-full text-[11px] font-medium tracking-wider"
        >
          <Globe size={11} strokeWidth={1.8} />
          {lang === "el" ? "EN" : "ΕΛ"}
        </button>
      </div>
    </header>
  );
}

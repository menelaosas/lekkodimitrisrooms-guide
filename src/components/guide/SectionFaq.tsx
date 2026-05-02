"use client";
import { useState } from "react";
import { useLang } from "@/lib/lang-context";
import { FAQS } from "@/lib/guide-config";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function SectionFaq() {
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(null);
  const faqs = FAQS[lang];

  return (
    <div className="guide-card overflow-hidden">
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-stone/8 last:border-0">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start gap-3 px-4 py-3.5 text-left"
            aria-expanded={open === i}
          >
            <span className="text-[13px] font-medium text-ink flex-1 leading-relaxed">{faq.q}</span>
            <ChevronDown
              size={15}
              strokeWidth={1.5}
              className={cn("text-pb flex-shrink-0 mt-0.5 transition-transform", open === i && "rotate-180")}
            />
          </button>
          {open === i && (
            <div className="px-4 pb-4">
              <p className="text-[13px] text-warm leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

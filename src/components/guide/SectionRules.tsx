"use client";
import { useLang } from "@/lib/lang-context";
import { PROPERTY_INFO, HOUSE_RULES } from "@/lib/guide-config";
import { CheckCircle, XCircle, Clock, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export function SectionRules() {
  const { lang } = useLang();
  const info = PROPERTY_INFO[lang];
  const rules = HOUSE_RULES[lang];

  return (
    <>
      {/* Property info */}
      <div className="guide-card p-4 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <Home size={15} strokeWidth={1.5} className="text-sea" />
          <p className="text-[10px] tracking-widest uppercase text-pb">
            {lang === "el" ? "Βασικές Πληροφορίες Καταλύματος" : "Basic Property Information"}
          </p>
        </div>
        <div className="flex flex-col divide-y divide-stone/8">
          {info.map((row, i) => (
            <div key={i} className="flex items-center justify-between py-2.5">
              <span className="text-[12px] text-pb">{row.label}</span>
              {row.badge ? (
                <span className="badge-info text-[11px] px-2 py-0.5 rounded-full bg-sea/10 text-sea-d font-medium">{row.value}</span>
              ) : (
                <span className="text-[13px] font-medium text-ink">{row.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Quiet hours */}
      <div className="guide-card p-4 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Clock size={15} strokeWidth={1.5} className="text-sea" />
          <p className="text-[10px] tracking-widest uppercase text-pb">
            {lang === "el" ? "Ώρες Ησυχίας" : "Quiet Hours"}
          </p>
        </div>
        <p className="text-[22px] font-serif font-light text-ink">23:00 — 08:00</p>
        <p className="text-[12px] text-warm mt-1">
          {lang === "el"
            ? "Παρακαλώ σεβαστείτε τους γείτονες κατά τις ώρες ησυχίας."
            : "Please be considerate of neighbours during quiet hours."}
        </p>
      </div>

      {/* Rules */}
      <div className="guide-card p-4">
        <p className="text-[10px] tracking-widest uppercase text-pb mb-3">
          {lang === "el" ? "Κανόνες Σπιτιού" : "House Rules"}
        </p>
        <div className="flex flex-col divide-y divide-stone/8">
          {rules.map((rule, i) => (
            <div key={i} className="flex items-center gap-3 py-2.5">
              {rule.ok ? (
                <CheckCircle size={16} strokeWidth={1.5} className="text-green-600 flex-shrink-0" />
              ) : (
                <XCircle size={16} strokeWidth={1.5} className="text-red-500 flex-shrink-0" />
              )}
              <span className="text-[13px] text-ink flex-1">{rule.text}</span>
              <span className={cn(
                "text-[10px] font-medium px-2 py-0.5 rounded-full flex-shrink-0",
                rule.type === "ok"   && "badge-ok",
                rule.type === "no"   && "badge-no",
                rule.type === "warn" && "badge-warn",
                rule.type === "info" && "bg-sea/10 text-sea-d",
              )}>{rule.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

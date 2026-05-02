"use client";
import { useState } from "react";
import { useLang } from "@/lib/lang-context";
import { SERVICES } from "@/lib/guide-config";
import { Clock, LogIn, Car, Sparkles, Map, MoreHorizontal, Send, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  late: Clock, early: LogIn, transfer: Car,
  clean: Sparkles, tour: Map, other: MoreHorizontal,
};

export function SectionServices() {
  const { lang } = useLang();
  const services = SERVICES[lang];
  const [active, setActive] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  const submit = () => {
    setSent(true);
    setTimeout(() => { setSent(false); setActive(null); setName(""); setMsg(""); }, 3000);
  };

  return (
    <>
      <div className="info-box mb-4">
        {lang === "el"
          ? "Στείλτε αίτημα και θα σας απαντήσω μέσα σε 1–2 ώρες."
          : "Send a request and I'll reply within 1–2 hours."}
      </div>

      {services.map(svc => {
        const Icon = ICONS[svc.id] ?? MoreHorizontal;
        const isOpen = active === svc.id;
        return (
          <div key={svc.id} className="guide-card mb-3 overflow-hidden">
            <button
              onClick={() => setActive(isOpen ? null : svc.id)}
              className="w-full flex items-center gap-3 p-4 text-left hover:bg-stone/2 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-sea/10 flex items-center justify-center flex-shrink-0">
                <Icon size={18} strokeWidth={1.4} className="text-sea" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[14px] font-medium text-ink">{svc.title}</p>
                <p className="text-[11px] text-pb mt-0.5">{svc.sub}</p>
              </div>
              <div className="w-6 h-6 rounded-full border border-stone/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[14px] text-pb leading-none">{isOpen ? "−" : "+"}</span>
              </div>
            </button>

            {isOpen && (
              <div className="px-4 pb-4 border-t border-stone/8 pt-3">
                {sent ? (
                  <div className="flex items-center gap-2 text-green-700 bg-green-50 rounded-lg px-3 py-3">
                    <Check size={15} strokeWidth={2} />
                    <span className="text-[13px] font-medium">
                      {lang === "el" ? "Αποστάλθηκε! Θα επικοινωνήσω σύντομα." : "Sent! I'll be in touch shortly."}
                    </span>
                  </div>
                ) : (
                  <>
                    <label className="text-[11px] text-pb block mb-1">
                      {lang === "el" ? "Όνομα" : "Name"}
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder={lang === "el" ? "Το όνομά σας" : "Your name"}
                      className="w-full border border-stone/15 rounded-lg px-3 py-2 text-[13px] text-ink bg-white mb-3 focus:outline-none focus:border-sea"
                    />
                    <label className="text-[11px] text-pb block mb-1">
                      {lang === "el" ? "Λεπτομέρειες / Ημερομηνία" : "Details / Date"}
                    </label>
                    <textarea
                      value={msg}
                      onChange={e => setMsg(e.target.value)}
                      placeholder={lang === "el" ? "Περιγράψτε το αίτημά σας..." : "Describe your request..."}
                      rows={3}
                      className="w-full border border-stone/15 rounded-lg px-3 py-2 text-[13px] text-ink bg-white mb-3 resize-none focus:outline-none focus:border-sea"
                    />
                    <button onClick={submit} className="submit-btn flex items-center justify-center gap-2">
                      <Send size={13} strokeWidth={1.5} />
                      {lang === "el" ? "Αποστολή Αιτήματος" : "Send Request"}
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}

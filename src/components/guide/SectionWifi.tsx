"use client";
import { useState } from "react";
import { useLang } from "@/lib/lang-context";
import { PROPERTY, CHECKIN_STEPS, CHECKOUT_STEPS } from "@/lib/guide-config";
import { Copy, Check, Lock, LogIn, LogOut, Car } from "lucide-react";

function CopyButton({ text, label, copied }: { text: string; label: string; copied: string }) {
  const [done, setDone] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text).catch(() => {});
    setDone(true);
    setTimeout(() => setDone(false), 2000);
  };
  return (
    <button onClick={copy} className="copy-btn flex items-center gap-1">
      {done ? <Check size={11} /> : <Copy size={11} />}
      {done ? copied : label}
    </button>
  );
}

export function SectionWifi() {
  const { lang } = useLang();
  const steps = CHECKIN_STEPS[lang];
  const coSteps = CHECKOUT_STEPS[lang];

  return (
    <>
      {/* WiFi */}
      <div className="guide-card p-4 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <Lock size={15} strokeWidth={1.5} className="text-sea" />
          <p className="text-[10px] tracking-widest uppercase text-pb">WiFi</p>
        </div>
        <div className="flex items-center justify-between py-2.5 border-b border-stone/8">
          <div>
            <p className="text-[10px] text-pb">{lang === "el" ? "Δίκτυο" : "Network"}</p>
            <p className="text-[14px] font-medium text-ink mt-0.5">{PROPERTY.wifi.network}</p>
          </div>
          <CopyButton text={PROPERTY.wifi.network} label={lang === "el" ? "Αντιγραφή" : "Copy"} copied={lang === "el" ? "OK!" : "OK!"} />
        </div>
        <div className="flex items-center justify-between py-2.5">
          <div>
            <p className="text-[10px] text-pb">{lang === "el" ? "Κωδικός" : "Password"}</p>
            <p className="font-mono text-[16px] font-medium text-sea mt-0.5">{PROPERTY.wifi.password}</p>
          </div>
          <CopyButton text={PROPERTY.wifi.password} label={lang === "el" ? "Αντιγραφή" : "Copy"} copied={lang === "el" ? "Αντιγράφηκε!" : "Copied!"} />
        </div>
      </div>

      {/* Check-in */}
      <div className="guide-card p-4 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <LogIn size={15} strokeWidth={1.5} className="text-sea" />
          <p className="text-[10px] tracking-widest uppercase text-pb">Check-in</p>
          <span className="ml-auto badge-info px-2 py-0.5 rounded-full text-[10px] font-medium bg-sea/10 text-sea-d">{PROPERTY.checkin}</span>
        </div>
        <div className="info-box mb-4">
          {lang === "el"
            ? "Μπορείτε να μπείτε μόνοι σας με τον κωδικό του key box. Δεν χρειάζεται να με περιμένετε!"
            : "You can enter by yourself using the key box code. No need to wait for me!"}
        </div>
        <div className="flex flex-col gap-3">
          {steps.map((s, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="step-num">{i + 1}</span>
              <div>
                {i === 1 ? (
                  <p className="text-[13px] text-ink leading-relaxed">
                    {lang === "el" ? "Εισάγετε τον κωδικό: " : "Enter the code: "}
                    <strong className="text-sea font-mono text-[15px]">{PROPERTY.keybox}</strong>
                  </p>
                ) : (
                  <p className="text-[13px] text-ink leading-relaxed">{s.step}</p>
                )}
                {s.sub && <p className="text-[11px] text-pb mt-0.5">{s.sub}</p>}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-3 mt-4 pt-3 border-t border-stone/8">
          <Car size={14} strokeWidth={1.5} className="text-sea flex-shrink-0 mt-0.5" />
          <p className="text-[12px] text-warm">{lang === "el" ? "Parking: Δωρεάν, μπροστά στο κτίριο." : "Parking: Free, in front of the building."}</p>
        </div>
      </div>

      {/* Check-out */}
      <div className="guide-card p-4">
        <div className="flex items-center gap-2 mb-2">
          <LogOut size={15} strokeWidth={1.5} className="text-terra" />
          <p className="text-[10px] tracking-widest uppercase text-pb">Check-out</p>
          <span className="ml-auto text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-700">{PROPERTY.checkout}</span>
        </div>
        <div className="flex flex-col gap-3 mb-3">
          {coSteps.map((s, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="step-num" style={{ background: "var(--terra)" }}>{i + 1}</span>
              <p className="text-[13px] text-ink leading-relaxed">{s}</p>
            </div>
          ))}
        </div>
        <div className="terra-box">
          {lang === "el"
            ? "Θέλετε αργό check-out; Επικοινωνήστε τουλάχιστον 24 ώρες νωρίτερα από την ενότητα «Αιτήματα»."
            : "Want a late check-out? Contact me at least 24 hours in advance via the 'Requests' section."}
        </div>
      </div>
    </>
  );
}

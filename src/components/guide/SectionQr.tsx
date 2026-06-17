"use client";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/lang-context";
import { PROPERTY, QR_TIPS } from "@/lib/guide-config";
import { Copy, Check, Mail } from "lucide-react";

declare global {
  interface Window { QRCode?: { toCanvas: (canvas: HTMLCanvasElement, text: string, opts: object, cb?: (err: Error | null) => void) => void } }
}

export function SectionQr() {
  const { lang } = useLang();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [copied, setCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js";
    script.onload = () => {
      if (window.QRCode && canvasRef.current) {
        window.QRCode.toCanvas(canvasRef.current, PROPERTY.guideUrl, {
          width: 200, margin: 2,
          color: { dark: "#1A2E3B", light: "#FAF8F3" },
        });
      }
    };
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  const copyLink = () => {
    navigator.clipboard.writeText(PROPERTY.guideUrl).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tips = QR_TIPS[lang];

  const emailTemplate = lang === "el"
    ? `Θέμα: Οδηγός Διαμονής LImeraView, Μονεμβασιά\n\nΑγαπητέ/ή επισκέπτη,\n\nΣας καλωσορίζουμε στο LImeraView!\n\nΟ ψηφιακός οδηγός διαμονής σας:\n${PROPERTY.guideUrl}\n\nΠεριέχει πληροφορίες WiFi, check-in, κανόνες, οδηγίες συσκευών, οδηγό περιοχής και πολλά άλλα.\n\nΓια οποιαδήποτε ερώτηση: ${PROPERTY.phone}\n\nΚαλή διαμονή!\nΝίκος Ασημίνα Λενάκου`
    : `Subject: Stay Guide LImeraView, Monemvasia\n\nDear guest,\n\nWelcome to LImeraView!\n\nYour digital stay guide:\n${PROPERTY.guideUrl}\n\nIt includes WiFi info, check-in, house rules, appliance guides, area guide and much more.\n\nFor any questions: ${PROPERTY.phone}\n\nEnjoy your stay!\nNikos Lekkodimitris`;

  const copyEmail = () => {
    navigator.clipboard.writeText(emailTemplate).catch(() => {});
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <>
      {/* QR Code card */}
      <div className="guide-card p-5 mb-4 flex flex-col items-center text-center">
        <p className="text-[10px] tracking-widest uppercase text-pb mb-2">
          {lang === "el" ? "QR Code Οδηγού" : "Guide QR Code"}
        </p>
        <p className="text-[12px] text-warm mb-4 max-w-[260px]">
          {lang === "el"
            ? "Σκανάρετε για να ανοίξετε τον οδηγό στο κινητό σας."
            : "Scan to open the guide on your mobile phone."}
        </p>
        <canvas ref={canvasRef} className="rounded-xl bg-sand" />
        <p className="text-[11px] font-mono text-pb mt-3">{PROPERTY.guideUrl}</p>
        <button onClick={copyLink} className="copy-btn mt-3 flex items-center gap-1.5">
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied
            ? (lang === "el" ? "Αντιγράφηκε!" : "Copied!")
            : (lang === "el" ? "Αντιγραφή Link" : "Copy Link")}
        </button>
      </div>

      {/* Where to place it */}
      <div className="guide-card p-4 mb-4">
        <p className="text-[10px] tracking-widest uppercase text-pb mb-3">
          {lang === "el" ? "Πού να τοποθετήσετε το QR:" : "Where to display the QR code:"}
        </p>
        <div className="flex flex-col gap-2">
          {tips.map((tip, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-sea flex-shrink-0" />
              <span className="text-[13px] text-warm">{tip}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Email template */}
      <div className="guide-card p-4">
        <div className="flex items-center gap-2 mb-2">
          <Mail size={15} strokeWidth={1.5} className="text-sea" />
          <p className="text-[10px] tracking-widest uppercase text-pb">
            {lang === "el" ? "Αυτοματοποιημένο Email Επισκεπτών" : "Automated Guest Email"}
          </p>
        </div>
        <p className="text-[12px] text-warm leading-relaxed mb-3">
          {lang === "el"
            ? "Στείλτε αυτόν τον οδηγό αυτόματα με κάθε κράτηση. Ο επισκέπτης λαμβάνει το link 2 ημέρες πριν την άφιξη."
            : "Send this guide automatically with every booking. The guest receives the link 2 days before arrival."}
        </p>
        <div className="bg-sea/8 rounded-lg p-3 mb-3">
          <p className="text-[10px] font-medium text-sea-d mb-1">
            {lang === "el" ? "Θέμα email:" : "Email subject:"}
          </p>
          <p className="text-[12px] text-sea-d">
            {lang === "el"
              ? "Οδηγός Διαμονής LImeraView, Μονεμβασιά"
              : "Stay Guide LImeraView, Monemvasia"}
          </p>
        </div>
        <button onClick={copyEmail} className="submit-btn flex items-center justify-center gap-2">
          {emailCopied ? <Check size={14} strokeWidth={2} /> : <Copy size={14} strokeWidth={1.5} />}
          {emailCopied
            ? (lang === "el" ? "Αντιγράφηκε!" : "Copied!")
            : (lang === "el" ? "Αντιγραφή Template Email" : "Copy Email Template")}
        </button>
      </div>
    </>
  );
}

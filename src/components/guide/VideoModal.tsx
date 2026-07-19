"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useLang } from "@/lib/lang-context";

export function VideoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { lang } = useLang();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const main = document.querySelector("main");
    const prevBody = document.body.style.overflow;
    const prevMain = main instanceof HTMLElement ? main.style.overflow : "";
    document.body.style.overflow = "hidden";
    if (main instanceof HTMLElement) main.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevBody;
      if (main instanceof HTMLElement) main.style.overflow = prevMain;
    };
  }, [open]);

  if (!open || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[1000] bg-black/90 flex flex-col"
      onClick={onClose}
    >
      {/* Pinned header */}
      <div className="flex items-center justify-between px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-3 flex-shrink-0">
        <p className="text-white text-[13px] font-medium">
          {lang === "el" ? "Βίντεο Εισόδου Πώς να Μπείτε" : "Entry Video How to Get In"}
        </p>
        <button
          onClick={onClose}
          aria-label={lang === "el" ? "Κλείσιμο" : "Close"}
          className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors flex-shrink-0"
        >
          <X size={18} strokeWidth={1.75} />
        </button>
      </div>

      {/* Scrollable content, always fits between header and bottom */}
      <div
        className="flex-1 min-h-0 flex flex-col items-center justify-center gap-3 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          src="/video/limera_view_welcome_video.mp4"
          controls
          autoPlay
          playsInline
          className="w-full max-w-[480px] max-h-full rounded-xl bg-black"
          style={{ objectFit: "contain" }}
        />
        <p className="text-white/70 text-[11px] leading-relaxed text-center px-2 max-w-[480px] flex-shrink-0">
          {lang === "el"
            ? "Παρακολουθήστε το βίντεο για να δείτε πώς θα παραλάβετε τα κλειδιά και θα μπείτε στο σπίτι."
            : "Watch this video to see how to collect the keys and get into the house."}
        </p>
      </div>
    </div>,
    document.body
  );
}

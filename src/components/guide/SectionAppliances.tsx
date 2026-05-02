"use client";
import { useState } from "react";
import { useLang } from "@/lib/lang-context";
import { APPLIANCES } from "@/lib/guide-config";
import { ChevronDown, Waves, ChefHat, Wind, Droplets } from "lucide-react";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  washing: Waves,
  kitchen: ChefHat,
  ac: Wind,
  boiler: Droplets,
};

function ApplianceCard({ appliance }: { appliance: { id: string; title: string; steps: string[]; note?: string } }) {
  const [open, setOpen] = useState(false);
  const Icon = ICONS[appliance.id] ?? Wind;

  return (
    <div className={cn("guide-card overflow-hidden mb-3 transition-all", open && "border-sea/30")}>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-3 p-4 text-left"
        aria-expanded={open}
      >
        <div className="w-9 h-9 rounded-lg bg-sea/10 flex items-center justify-center flex-shrink-0">
          <Icon size={17} strokeWidth={1.4} className="text-sea" />
        </div>
        <span className="text-[14px] font-medium text-ink flex-1">{appliance.title}</span>
        <ChevronDown size={15} strokeWidth={1.5} className={cn("text-pb transition-transform flex-shrink-0", open && "rotate-180")} />
      </button>

      {open && (
        <div className="px-4 pb-4 border-t border-stone/8 pt-3">
          {appliance.note && (
            <div className="info-box mb-3">{appliance.note}</div>
          )}
          <div className="flex flex-col gap-3">
            {appliance.steps.map((step, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="step-num">{i + 1}</span>
                <p className="text-[13px] text-ink leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function SectionAppliances() {
  const { lang } = useLang();
  const appliances = APPLIANCES[lang];

  return (
    <>
      <div className="info-box mb-4">
        {lang === "el"
          ? "Πατήστε σε κάθε συσκευή για αναλυτικές οδηγίες χρήσης."
          : "Tap on each appliance for detailed usage instructions."}
      </div>
      {appliances.map(a => (
        <ApplianceCard key={a.id} appliance={a} />
      ))}
    </>
  );
}

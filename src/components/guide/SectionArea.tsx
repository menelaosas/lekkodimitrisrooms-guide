"use client";
import { useLang } from "@/lib/lang-context";
import { AREA_PLACES } from "@/lib/guide-config";
import { Landmark, Waves, UtensilsCrossed } from "lucide-react";

function PlaceRow({ name, info, dist }: { name: string; info: string; dist: string }) {
  return (
    <div className="flex items-start justify-between py-2.5 border-b border-stone/8 last:border-0">
      <div className="flex-1 min-w-0 pr-3">
        <p className="text-[13px] font-medium text-ink">{name}</p>
        <p className="text-[11px] text-pb mt-0.5">{info}</p>
      </div>
      <span className="text-[11px] font-medium text-sea flex-shrink-0 mt-0.5">{dist}</span>
    </div>
  );
}

export function SectionArea() {
  const { lang } = useLang();
  const places = AREA_PLACES[lang];

  return (
    <>
      <div className="guide-card p-4 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Landmark size={15} strokeWidth={1.5} className="text-sea" />
          <p className="text-[10px] tracking-widest uppercase text-pb">
            {lang === "el" ? "Αξιοθέατα & Μέρη" : "Sights & Places"}
          </p>
        </div>
        {places.sights.map((p, i) => <PlaceRow key={i} {...p} />)}
      </div>

      <div className="guide-card p-4 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Waves size={15} strokeWidth={1.5} className="text-sea" />
          <p className="text-[10px] tracking-widest uppercase text-pb">
            {lang === "el" ? "Παραλίες" : "Beaches"}
          </p>
        </div>
        {places.beaches.map((p, i) => <PlaceRow key={i} {...p} />)}
      </div>

      <div className="guide-card p-4">
        <div className="flex items-center gap-2 mb-2">
          <UtensilsCrossed size={15} strokeWidth={1.5} className="text-sea" />
          <p className="text-[10px] tracking-widest uppercase text-pb">
            {lang === "el" ? "Φαγητό & Καφέ" : "Food & Coffee"}
          </p>
        </div>
        {places.food.map((p, i) => <PlaceRow key={i} {...p} />)}
      </div>
    </>
  );
}

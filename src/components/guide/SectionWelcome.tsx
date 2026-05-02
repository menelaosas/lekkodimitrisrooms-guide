"use client";
import { useLang } from "@/lib/lang-context";
import { useNav } from "@/lib/nav-context";
import { PROPERTY } from "@/lib/guide-config";
import { Wifi, ShieldCheck, MapPin, Settings, Phone, MessageCircle, Mail } from "lucide-react";

const QUICK = [
  { id: "wifi",       Icon: Wifi,        el: "WiFi & Check-in",   en: "WiFi & Check-in" },
  { id: "rules",      Icon: ShieldCheck, el: "Κανόνες",           en: "House Rules" },
  { id: "appliances", Icon: Settings,    el: "Συσκευές",          en: "Appliances" },
  { id: "area",       Icon: MapPin,      el: "Οδηγός Περιοχής",   en: "Area Guide" },
];

export function SectionWelcome() {
  const { lang } = useLang();
  const { go } = useNav();

  return (
    <>
      {/* Hero */}
      <div className="bg-sea rounded-2xl text-white p-5 mb-4">
        <p className="font-serif text-2xl font-light italic mb-1">
          {lang === "el" ? "Καλώς ήρθατε!" : "Welcome!"}
        </p>
        <p className="text-[13px] leading-relaxed opacity-85">
          {lang === "el"
            ? "Χαιρόμαστε που θα φιλοξενηθείτε στα Lekko Dimitris Rooms. Αυτός ο οδηγός έχει ό,τι χρειάζεστε κατά τη διαμονή σας στη Γεφύρα."
            : "We're delighted to have you at Lekko Dimitris Rooms. This guide has everything you need during your stay in Gefyra."}
        </p>
        <div className="mt-3 flex gap-2">
          <span className="bg-white/20 text-white text-[10px] font-medium px-2.5 py-1 rounded-full">
            {PROPERTY.location[lang]}
          </span>
          <span className="bg-terra/80 text-white text-[10px] font-medium px-2.5 py-1 rounded-full">
            5★ {lang === "el" ? "Αξιολόγηση" : "Rating"}
          </span>
        </div>
      </div>

      {/* Quick access */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {QUICK.map(({ id, Icon, el, en }) => (
          <button
            key={id}
            onClick={() => go(id)}
            className="guide-card p-4 flex flex-col items-center gap-2 hover:border-sea/40 hover:shadow-sm transition-all text-center"
          >
            <Icon size={22} strokeWidth={1.4} className="text-sea" />
            <span className="text-[12px] text-warm font-medium">{lang === "el" ? el : en}</span>
          </button>
        ))}
      </div>

      {/* Host */}
      <div className="guide-card p-4 mb-4">
        <p className="text-[10px] tracking-widest uppercase text-pb mb-2">
          {lang === "el" ? "Ο Οικοδεσπότης σας" : "Your Host"}
        </p>
        <div className="flex items-start gap-3">
          <div className="w-11 h-11 rounded-full bg-sea flex items-center justify-center flex-shrink-0">
            <span className="text-white font-serif text-lg font-light">Δ</span>
          </div>
          <div>
            <p className="text-[13px] font-medium text-ink">Λεκκοδημήτρης</p>
            <p className="text-[12px] text-warm leading-relaxed mt-0.5">{PROPERTY.host[lang]}</p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="guide-card p-4">
        <p className="text-[10px] tracking-widest uppercase text-pb mb-3">
          {lang === "el" ? "Επικοινωνία" : "Contact"}
        </p>
        <div className="flex flex-col gap-2">
          <a href={`tel:${PROPERTY.phone}`} className="flex items-center gap-3 text-[13px] text-warm hover:text-sea transition-colors">
            <Phone size={14} strokeWidth={1.5} className="text-sea flex-shrink-0" />
            {PROPERTY.phone}
          </a>
          <a href={PROPERTY.whatsapp} target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-3 text-[13px] text-warm hover:text-[#25D366] transition-colors">
            <MessageCircle size={14} strokeWidth={1.5} className="text-[#25D366] flex-shrink-0" />
            WhatsApp
          </a>
          <a href={`mailto:${PROPERTY.email}`} className="flex items-center gap-3 text-[13px] text-warm hover:text-sea transition-colors">
            <Mail size={14} strokeWidth={1.5} className="text-sea flex-shrink-0" />
            {PROPERTY.email}
          </a>
        </div>
      </div>
    </>
  );
}

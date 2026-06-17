"use client";
import { useNav } from "@/lib/nav-context";
import { useLang } from "@/lib/lang-context";
import { NAV_ITEMS } from "@/lib/guide-config";
import {
  Home, Wifi, ShieldCheck, Settings, MapPin, Bell, HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS: Record<string, React.ReactNode> = {
  welcome:    <Home size={18} strokeWidth={1.6} />,
  wifi:       <Wifi size={18} strokeWidth={1.6} />,
  rules:      <ShieldCheck size={18} strokeWidth={1.6} />,
  appliances: <Settings size={18} strokeWidth={1.6} />,
  area:       <MapPin size={18} strokeWidth={1.6} />,
  services:   <Bell size={18} strokeWidth={1.6} />,
  faq:        <HelpCircle size={18} strokeWidth={1.6} />,
};

export function GuideTabBar() {
  const { active, go } = useNav();
  const { lang } = useLang();
  const items = NAV_ITEMS[lang];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 bg-white border-t border-stone/10 h-[60px] flex items-stretch overflow-x-auto"
         style={{ width: "min(480px, 100vw)", scrollbarWidth: "none" }}>
      {items.map(item => (
        <button
          key={item.id}
          onClick={() => go(item.id)}
          className={cn(
            "flex flex-col items-center justify-center gap-0.5 px-2 flex-1 min-w-[52px] transition-colors",
            active === item.id ? "text-sea" : "text-pb hover:text-warm",
          )}
        >
          <div className={cn("transition-transform", active === item.id && "scale-110")}>
            {ICONS[item.id]}
          </div>
          <span className="text-[9px] font-medium leading-none whitespace-nowrap">
            {item.label.split(" ")[0]}
          </span>
          {active === item.id && (
            <div className="absolute bottom-0 w-8 h-0.5 bg-sea rounded-full" />
          )}
        </button>
      ))}
    </nav>
  );
}

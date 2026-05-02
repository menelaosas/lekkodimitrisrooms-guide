"use client";
import { useNav } from "@/lib/nav-context";
import { useLang } from "@/lib/lang-context";
import { NAV_ITEMS } from "@/lib/guide-config";
import { GuideHeader } from "./GuideHeader";
import { GuideTabBar } from "./GuideTabBar";
import { SectionWelcome } from "./SectionWelcome";
import { SectionWifi } from "./SectionWifi";
import { SectionRules } from "./SectionRules";
import { SectionAppliances } from "./SectionAppliances";
import { SectionArea } from "./SectionArea";
import { SectionServices } from "./SectionServices";
import { SectionFaq } from "./SectionFaq";
import { SectionReview } from "./SectionReview";
import { SectionQr } from "./SectionQr";

const SECTIONS: Record<string, React.ReactNode> = {
  welcome: <SectionWelcome />,
  wifi: <SectionWifi />,
  rules: <SectionRules />,
  appliances: <SectionAppliances />,
  area: <SectionArea />,
  services: <SectionServices />,
  faq: <SectionFaq />,
  review: <SectionReview />,
  qr: <SectionQr />,
};

export function GuideShell() {
  const { active } = useNav();
  const { lang } = useLang();

  const navItems = NAV_ITEMS[lang];
  const currentLabel = navItems.find(n => n.id === active)?.label ?? "";

  return (
    <div className="min-h-screen bg-sand flex flex-col mx-auto" style={{ maxWidth: 480 }}>
      <GuideHeader sectionLabel={currentLabel} />
      <main className="flex-1 pb-20 overflow-y-auto" key={active}>
        <div className="px-4 py-4 fade-up">
          {SECTIONS[active] ?? <SectionWelcome />}
        </div>
      </main>
      <GuideTabBar />
    </div>
  );
}

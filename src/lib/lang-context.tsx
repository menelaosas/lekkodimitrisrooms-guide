"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import type { Lang } from "./guide-config";

const LangCtx = createContext<{ lang: Lang; toggle: () => void }>({ lang: "el", toggle: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("el");
  return <LangCtx.Provider value={{ lang, toggle: () => setLang(l => l === "el" ? "en" : "el") }}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);

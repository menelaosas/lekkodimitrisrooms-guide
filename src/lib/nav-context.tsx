"use client";
import { createContext, useContext, useState, ReactNode } from "react";

const NavCtx = createContext<{ active: string; go: (id: string) => void }>({ active: "welcome", go: () => {} });

export function NavProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState("welcome");
  return <NavCtx.Provider value={{ active, go: setActive }}>{children}</NavCtx.Provider>;
}

export const useNav = () => useContext(NavCtx);

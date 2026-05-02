import type { Metadata } from "next";
import "@/styles/globals.css";
import { LangProvider } from "@/lib/lang-context";
import { NavProvider } from "@/lib/nav-context";

export const metadata: Metadata = {
  title: "Lekko Dimitris Rooms — Οδηγός Επισκεπτών",
  description: "Ψηφιακός οδηγός διαμονής για τα Lekko Dimitris Rooms στη Γεφύρα, Μονεμβασιά.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#2A6CA4" />
      </head>
      <body>
        <LangProvider>
          <NavProvider>{children}</NavProvider>
        </LangProvider>
      </body>
    </html>
  );
}

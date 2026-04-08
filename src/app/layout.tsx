import type { Metadata } from "next";
import { Bebas_Neue, JetBrains_Mono, Inter } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Traço & Fogo — Churrasqueira desde 1987",
  description: "Churrasqueira de bairro com carácter. Carvão, grelha e carne como deve ser.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT" className={`${bebas.variable} ${inter.variable} ${mono.variable}`}>
      <body className="bg-[#1a1513] text-[#e8dccd] antialiased">
        {children}
        <div className="noise-overlay" />
      </body>
    </html>
  );
}

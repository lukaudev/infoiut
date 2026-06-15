import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Noto_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "./components/header";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "INFOIUT",
  description: "Informations sur l'IUT (MMI, LIFAT, R&T)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable, notoSans.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="pt-20 flex-1">{children}</main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { MotionConfig } from "framer-motion";

import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/layout/Preloader";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Royal Beauty | Skincare & Injectable Artistry, Stockholm",
  description:
    "Royal Beauty is a quiet-luxury Iranian-Swedish beauty clinic in Stockholm, offering considered skincare treatments and cosmetic injectables — Persian heritage, Scandinavian precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} bg-ivory-100 font-sans text-charcoal-900 antialiased`}
      >
        <MotionConfig reducedMotion="user">
          <Preloader />
          <CustomCursor />
          <SmoothScrollProvider>
            <Nav />
            <main>{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </MotionConfig>
      </body>
    </html>
  );
}

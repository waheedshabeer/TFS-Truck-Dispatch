import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import Script from "next/script";

import "./globals.css";
import "@/styles/colors.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/buttons/ScrollToTop";
import PageTitleGuard from "@/components/PageTitleGuard";
import { ToastContainer } from "react-toastify";

const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Commercial Truck Insurance",
    template: "%s | Truck Insurance USA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="google-gtag-src"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        />
        <Script
          id="google-gtag-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GOOGLE_ADS_ID}');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageTitleGuard />
        <div className="w-full top-0 z-50 sticky">
          <Navbar />
        </div>

        {children}
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>

        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}

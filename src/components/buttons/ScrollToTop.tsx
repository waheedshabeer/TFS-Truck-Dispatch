"use client";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { trackConversion, GOOGLE_ADS_CONVERSIONS } from "@/utils/gtag";

// TypeScript interface for Tawk.to API
declare global {
  interface Window {
    Tawk_API?: {
      maximize: () => void;
      hideWidget: () => void;
      showWidget: () => void;
    };
  }
}

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const source = searchParams.get("source");
  const isQuotePage = pathname === "/quick-quote-request" && source === "fab";

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const openChat = () => {
    if (typeof window !== "undefined" && window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };

  return (
    <>
      {visible && (
        <div className="fixed bottom-4 w-full md:pr-4 z-50 flex flex-row items-center justify-evenly sm:justify-end md:justify-end gap-4">
          <a
            href="tel:9092757245"
            className="md:hidden"
            onClick={() =>
              trackConversion(GOOGLE_ADS_CONVERSIONS.PHONE_909_275_7245)
            }
          >
            <button className="p-3 w-16 h-16 text-american-white text-xs bg-american-red rounded-full hover:scale-110 transition-all duration-300 hover:bg-american-blue">
              Call Now
            </button>
          </a>

          {!isQuotePage && (
            <Link href="/quick-quote-request?source=fab">
              <button className="p-3 w-16 h-16 text-xs bg-american-white text-american-blue rounded-full hover:scale-110 transition-all duration-300 hover:bg-american-red hover:text-american-white">
                Get Quote
              </button>
            </Link>
          )}

          <button
            onClick={openChat}
            className="p-3 w-16 h-16 text-american-white text-xs bg-american-blue rounded-full hover:scale-110 transition-all duration-300 hover:bg-american-red"
          >
            Chat Now
          </button>

          <Script
            id="tawk-to"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/68cc207865615a192c081d71/1j5eltlv2';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
                })();     
              `,
            }}
          />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;

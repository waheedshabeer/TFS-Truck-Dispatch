"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { getPageTitle } from "@/utils/pageTitles";

/** Matches Tawk.to-style tab notifications e.g. "1 new message", "(2) Page Title" */
const TAWK_TITLE_PATTERN = /\d+\s*new\s*message|\(\d+\)/i;

/**
 * Restores the correct document title when Tawk.to or other scripts change it
 * (e.g. "1 new message"). Runs on route change, when the tab becomes visible,
 * and when the title is changed to a chat notification pattern.
 */
export default function PageTitleGuard() {
  const pathname = usePathname();
  const correctTitleRef = useRef(getPageTitle(pathname));

  useEffect(() => {
    correctTitleRef.current = getPageTitle(pathname);
    document.title = correctTitleRef.current;
  }, [pathname]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        const pathname = window.location.pathname;
        correctTitleRef.current = getPageTitle(pathname);
        document.title = correctTitleRef.current;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  useEffect(() => {
    const titleEl = document.querySelector("title");
    if (!titleEl) return;

    const observer = new MutationObserver(() => {
      const current = document.title;
      if (
        current !== correctTitleRef.current &&
        TAWK_TITLE_PATTERN.test(current)
      ) {
        document.title = correctTitleRef.current;
      }
    });

    observer.observe(titleEl, {
      childList: true,
      characterData: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return null;
}

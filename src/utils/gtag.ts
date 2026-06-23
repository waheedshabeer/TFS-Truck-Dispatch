/**
 * Google Ads conversion tracking (gtag).
 * Ensure the base Google tag is loaded in the root layout before calling these.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const GOOGLE_ADS_CONVERSIONS = {
  WEBSITE_LEAD_FORM: "AW-876358700/JUjuCLurp4wYEKzY8KED",
  COMMERCIAL_AUTO_LEAD_FORM_2: "AW-876358700/EL11CNPL4owYEKzY8KED",
  PHONE_909_996_1153: "AW-876358700/zrcACOyu44wYEKzY8KED",
  PHONE_909_275_7245: "AW-876358700/4zmVCOa044wYEKzY8KED",
} as const;

export function trackConversion(sendTo: string): void {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", { send_to: sendTo });
  }
}

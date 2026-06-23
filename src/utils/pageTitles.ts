/**
 * Map of pathname to page title (segment only; template adds " | Truck Insurance USA" for non-home).
 * Must match metadata in app layout.tsx files so the tab title stays correct when Tawk or other scripts change it.
 */
const SITE_SUFFIX = " | Truck Insurance USA";

export const PAGE_TITLES: Record<string, string> = {
  "/": "Commercial Truck Insurance",
  "/Contact": "Contact Us",
  "/commercial-truck-insurance": "Commercial Truck Insurance",
  "/commercial-truck-insurance/box-truck-insurance": "Box Truck Insurance",
  "/commercial-truck-insurance/dump-truck-insurance": "Dump Truck Insurance",
  "/commercial-truck-insurance/semi-truck-insurance": "Semi Truck Insurance",
  "/coverage-options": "Coverage Options",
  "/coverage-options/auto-liability": "Auto Liability Insurance",
  "/coverage-options/auto-physical-damage": "Auto Physical Damage Insurance",
  "/coverage-options/general-liability": "General Liability Insurance",
  "/coverage-options/motor-truck-cargo": "Motor Truck Cargo Insurance",
  "/coverage-options/workers-compensation": "Workers Compensation Insurance",
  "/business-types": "Business Types We Insure",
  "/business-types/construction-and-demolition":
    "Construction & Demolition Trucking Insurance",
  "/business-types/expedited-delivery-service":
    "Expedited Delivery Service Insurance",
  "/business-types/forhire-trucking": "For-Hire Trucking Insurance",
  "/business-types/hazmat-haulers": "Hazmat Hauler Insurance",
  "/business-types/hotshot-trucking": "Hot Shot Trucking Insurance",
  "/business-types/new-venture-trucking": "New Venture Trucking Insurance",
  "/business-types/other-trucking-operation":
    "Other Trucking Operations Insurance",
  "/business-types/waste-haulers": "Waste Hauler Insurance",
  "/privacy-policy": "Privacy Policy",
  "/quick-quote-request": "Quick Quote Request",
};

export function getPageTitle(pathname: string): string {
  const segment = PAGE_TITLES[pathname];
  if (segment) {
    return pathname === "/" ? segment : `${segment}${SITE_SUFFIX}`;
  }
  return "Commercial Truck Insurance";
}

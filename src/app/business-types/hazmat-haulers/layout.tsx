import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hazmat Hauler Insurance",
};

export default function HazmatHaulersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

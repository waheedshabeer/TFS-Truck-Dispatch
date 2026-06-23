import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Waste Hauler Insurance",
};

export default function WasteHaulersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

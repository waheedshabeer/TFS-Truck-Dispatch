import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Truck Insurance",
};

export default function CommercialTruckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Box Truck Insurance",
};

export default function BoxTruckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

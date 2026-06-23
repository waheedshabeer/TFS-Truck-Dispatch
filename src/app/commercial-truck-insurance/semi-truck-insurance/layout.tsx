import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Semi Truck Insurance",
};

export default function SemiTruckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

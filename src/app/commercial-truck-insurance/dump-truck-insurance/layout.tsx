import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dump Truck Insurance",
};

export default function DumpTruckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

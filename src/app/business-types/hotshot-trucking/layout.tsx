import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hot Shot Trucking Insurance",
};

export default function HotShotTruckingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

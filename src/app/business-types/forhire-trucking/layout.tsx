import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For-Hire Trucking Insurance",
};

export default function ForHireTruckingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

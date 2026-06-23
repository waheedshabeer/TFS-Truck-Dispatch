import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Venture Trucking Insurance",
};

export default function NewVentureTruckingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

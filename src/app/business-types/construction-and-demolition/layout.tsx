import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction & Demolition Trucking Insurance",
};

export default function ConstructionDemolitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

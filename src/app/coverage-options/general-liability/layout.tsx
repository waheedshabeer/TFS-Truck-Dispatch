import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Liability Insurance",
};

export default function GeneralLiabilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto Liability Insurance",
};

export default function AutoLiabilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

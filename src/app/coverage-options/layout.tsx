import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coverage Options",
};

export default function CoverageOptionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

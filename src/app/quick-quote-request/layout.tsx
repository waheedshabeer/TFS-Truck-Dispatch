import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quick Quote Request",
};

export default function QuickQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

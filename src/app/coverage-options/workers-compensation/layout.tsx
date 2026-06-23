import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workers Compensation Insurance",
};

export default function WorkersCompLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto Physical Damage Insurance",
};

export default function AutoPhysicalDamageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

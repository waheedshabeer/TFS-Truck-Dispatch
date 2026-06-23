import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Types We Insure",
};

export default function BusinessTypesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

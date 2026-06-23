import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Truck Insurance USA today for fast, free trucking insurance quotes. Speak with a specialist and get coverage tailored to your operation.",
  keywords:
    "contact truck insurance broker, trucking insurance quotes, speak to truck insurance agent, commercial truck insurance help",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

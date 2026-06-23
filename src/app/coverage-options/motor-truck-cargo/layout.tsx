import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motor Truck Cargo Insurance",
};

export default function MotorTruckCargoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

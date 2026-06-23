import CommercialTruckInsurance from "@/components/home/CommercialTruckInsurance";
import Locations from "@/components/home/Locations";
import QuoteForm from "@/components/home/QuoteForm";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="w-full flex flex-col items-center">
        <QuoteForm />
        <CommercialTruckInsurance />
        <TestimonialsSection />
        <Locations />
      </div>
    </div>
  );
}

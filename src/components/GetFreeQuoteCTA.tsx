import { fadeInUp } from "@/animations";
import { ButtonPrimary } from "@/components/buttons/Buttons";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";
import { trackConversion, GOOGLE_ADS_CONVERSIONS } from "@/utils/gtag";

interface GetFreeQuoteCTAProps {
  title: string;
  descriptionBeforeCTA: string;
  descriptionAfterCTA: string;
}

const GetFreeQuoteCTA = (props: GetFreeQuoteCTAProps) => {
  const { title, descriptionBeforeCTA, descriptionAfterCTA } = props;
  const router = useRouter();

  const handleGetQuote = () => {
    router.push("/quick-quote-request?source=fab");
  };

  // Helper function to check if device supports tel: links
  const isMobileDevice = () => {
    if (typeof window === "undefined") return false;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  };

  const formatPhoneNumber = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "";
    const cleaned = phoneNumber.replace(/\D/g, "");

    if (cleaned.length === 10) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(
        6,
      )}`;
    }

    if (cleaned.length === 11 && cleaned.startsWith("1")) {
      const withoutCountryCode = cleaned.slice(1);
      return `(${withoutCountryCode.slice(0, 3)}) ${withoutCountryCode.slice(
        3,
        6,
      )}-${withoutCountryCode.slice(6)}`;
    }

    return phoneNumber;
  };

  // Get the phone number in display format (with dashes)
  const getDisplayPhoneNumber = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "9092757245";
    const cleaned = phoneNumber.replace(/\D/g, "");

    if (cleaned.length === 10) {
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(
        6,
      )}`;
    }

    if (cleaned.length === 11 && cleaned.startsWith("1")) {
      const withoutCountryCode = cleaned.slice(1);
      return `${withoutCountryCode.slice(0, 3)}-${withoutCountryCode.slice(
        3,
        6,
      )}-${withoutCountryCode.slice(6)}`;
    }

    return phoneNumber;
  };

  // Handle phone number click
  const handlePhoneClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackConversion(GOOGLE_ADS_CONVERSIONS.PHONE_909_275_7245);
    const phoneNumber = getDisplayPhoneNumber();

    // On mobile devices, tel: link will work automatically
    if (isMobileDevice()) {
      // Let the default tel: link behavior work
      return;
    }

    // On desktop, prevent default and copy to clipboard
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(phoneNumber);
      toast.success("Phone number copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy phone number");
    }
  };

  return (
    <>
      {title && (
        <motion.h3
          className="text-3xl  font-extrabold text-center drop-shadow-xl z-10 mt-16"
          variants={fadeInUp}
        >
          {title}
        </motion.h3>
      )}
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        {descriptionBeforeCTA
          .split(
            /(\d{3}[-.\s]?\d{3}[-.\s]?\d{4}|\(\d{3}\)\s?\d{3}[-.\s]?\d{4})/,
          )
          .map((part, index) => {
            // Check if this part is a phone number (various formats)
            const phoneRegex =
              /(\d{3}[-.\s]?\d{3}[-.\s]?\d{4}|\(\d{3}\)\s?\d{3}[-.\s]?\d{4})/;
            if (phoneRegex.test(part)) {
              const cleanPhone = part.replace(/\D/g, "");
              return (
                <a
                  key={index}
                  href={`tel:${cleanPhone}`}
                  onClick={handlePhoneClick}
                  className="text-american-blue hover:text-american-red transition-colors duration-300 cursor-pointer"
                >
                  {part}
                </a>
              );
            }
            return <span key={index}>{part}</span>;
          })}{" "}
        <a
          href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER || "9092757245"}`}
          onClick={handlePhoneClick}
          className="text-american-blue hover:text-american-red transition-colors duration-300 cursor-pointer"
        >
          {formatPhoneNumber()}
        </a>{" "}
        {descriptionAfterCTA}
      </motion.p>

      {/* Get Quote CTA */}
      <motion.div
        className="z-10 w-full mt-6 justify-center items-center flex"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <ButtonPrimary
          type="button"
          onClick={handleGetQuote}
          label="Get Your Customized Quote Now"
          className="w-full pb-[60px]  md:w-1/4"
        />
      </motion.div>
    </>
  );
};

export default GetFreeQuoteCTA;

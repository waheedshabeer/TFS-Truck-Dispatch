"use client";
import { Clock, MapPin, Phone } from "lucide-react";
import React from "react";
import Navbar from "./Navbar";
import { toast } from "react-toastify";
import { trackConversion, GOOGLE_ADS_CONVERSIONS } from "@/utils/gtag";

const AddressRow = () => {
  const isMobileDevice = () => {
    if (typeof window === "undefined") return false;
    return (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      ) || window.innerWidth <= 768
    );
  };

  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackConversion(GOOGLE_ADS_CONVERSIONS.PHONE_909_996_1153);
    if (!isMobileDevice()) {
      e.preventDefault();
      navigator.clipboard
        .writeText("9099961153")
        .then(() => {
          toast.success("Phone number copied to clipboard!");
        })
        .catch(() => {
          toast.error("Failed to copy phone number");
        });
    }
  };

  return (
    <div className="w-full">
      <div className="relative w-full bg-american-blue py-1 overflow-hidden">
        <div className="flex items-center justify-center gap-6 px-4 md:flex-wrap animate-marquee">
          {/* Address */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=16055+Foothill+Blvd,+Fontana+CA+92335"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-american-white text-sm hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <MapPin className="w-5 h-5 text-american-red" />
            <p>16055 Foothill Blvd, Fontana CA 92335</p>
          </a>

          {/* Phone */}
          <a
            href="tel:9099961153"
            onClick={handlePhoneClick}
            className="flex items-center gap-3 text-american-white text-sm hover:scale-105 transition-transform duration-300 cursor-pointer"
            title={
              isMobileDevice() ? "Tap to call" : "Click to copy phone number"
            }
          >
            <Phone className="w-5 h-5 text-american-red" />
            <p>909 - 996 - 1153</p>
          </a>

          {/* Hours */}
          <div className="flex items-center gap-3 text-american-white text-sm hover:scale-105 transition-transform duration-300">
            <Clock className="w-5 h-5 text-american-red" />
            <p>Monday - Friday 9:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default AddressRow;

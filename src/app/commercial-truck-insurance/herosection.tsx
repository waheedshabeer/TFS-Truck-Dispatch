"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ButtonPrimary } from "../../components/buttons/Buttons";
import Dropdown from "../../components/Dropdown";

const options = [
  { label: "Select Business Type", value: "" },
  { label: "New Venture Trucking", value: "new-venture-trucking" },
  { label: "For-Hire Trucking", value: "for-hire-trucking" },
  { label: "Construction and Demolition", value: "construction-demolition" },
  { label: "Expedited Delivery Service", value: "expedited-delivery" },
  { label: "Waste Haulers", value: "waste-haulers" },
  { label: "Hot Shot Trucking", value: "hot-shot-trucking" },
  { label: "Hazmat Haulers", value: "hazmat-haulers" },
  { label: "Other", value: "other" },
];

export default function QuoteBanner() {
  const router = useRouter();

  const [zip, setZip] = useState("");
  const [insuranceType, setInsuranceType] = useState("");
  const [errors, setErrors] = useState<{ zip: string; insuranceType: string }>({
    zip: "",
    insuranceType: "",
  });

  const validate = () => {
    const newErrors = { zip: "", insuranceType: "" };

    if (!zip || zip.length !== 5) {
      newErrors.zip = "Zip code must be exactly 5 digits";
    }

    if (!insuranceType) {
      newErrors.insuranceType = "Please select an insurance type";
    }

    setErrors(newErrors);

    return !newErrors.zip && !newErrors.insuranceType;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const data = { zip, insuranceType };
    router.push(
      `/quick-quote-request?data=${encodeURIComponent(JSON.stringify(data))}`
    );
  };

  return (
    <div className="relative flex items-center justify-center min-h-[60vh] md:min-h-[70vh] w-full overflow-hidden py-8 sm:py-0">
      {/* Background Image */}
      <motion.div
        className="absolute left-0 top-0 w-full h-full bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/commercial1.png')" }}
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Floating Form Container */}
      <motion.div
        className="relative z-10 w-[95%] sm:w-[90%] md:w-[50%] lg:w-[25%] bg-white/5 backdrop-blur-md p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl shadow-sm border border-white/20 text-center mx-auto my-4 sm:my-0"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-american-white mb-3 sm:mb-4 px-2 sm:px-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Get Your Truck Insurance Quote
        </motion.h2>

        <motion.p
          className="text-american-white text-base sm:text-lg mb-4 sm:mb-6 px-2 sm:px-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Enter your details below to get started.
        </motion.p>

        <motion.form
          className="space-y-4 sm:space-y-5"
          initial="hidden"
          animate="visible"
          onSubmit={handleSubmit}
        >
          {/* Zip Code Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <input
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Enter Zip Code"
              value={zip}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "").slice(0, 5);
                setZip(value);
              }}
              maxLength={5}
              className={`w-full p-3 sm:p-4 bg-white/10 border ${
                errors.zip ? "border-red-500" : "border-white/30"
              } rounded-md focus:ring-2 focus:ring-american-blue text-white text-base sm:text-lg placeholder-white/60 transition outline-none min-h-[44px] touch-manipulation`}
              onWheel={(e) => e.currentTarget.blur()}
              style={{ fontSize: "16px" }}
            />
            {errors.zip && (
              <p className="text-red-400 text-left mt-1 text-xs sm:text-sm">
                {errors.zip}
              </p>
            )}
          </motion.div>

          {/* Insurance Type Dropdown */}
          <motion.div
            className="relative w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Dropdown options={options} onChange={setInsuranceType} />
            {errors.insuranceType && (
              <p className="text-red-400 text-left mt-1 text-xs sm:text-sm">
                {errors.insuranceType}
              </p>
            )}
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="pt-2 sm:pt-0"
          >
            <ButtonPrimary label="Get a Free Quote" type="submit" />
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
}

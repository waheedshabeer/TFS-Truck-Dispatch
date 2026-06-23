"use client";

import React, { useState } from "react";
import { ButtonPrimary } from "../../components/buttons/Buttons";
import { motion } from "framer-motion";
import Dropdown from "../../components/Dropdown";
import Image from "next/image";
import { useRouter } from "next/navigation";

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

const Herosection = () => {
  const router = useRouter();
  const [zip, setZip] = useState("");
  const [insuranceType, setInsuranceType] = useState("");
  const [errors, setErrors] = useState({ zip: "", insuranceType: "" });

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
    <div className="w-full min-h-screen bg-gradient-to-br from-[#0b0b14] via-[#111120] to-[#0b0b14] flex items-center justify-center px-6 py-12">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl w-full items-center">

        {/* LEFT SIDE – FORM */}
        <motion.div
          className="text-white space-y-8 bg-white/5 p-10 rounded-2xl shadow-xl backdrop-blur-md border border-white/10"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Get Your Truck <br /> Insurance Quote
          </h1>

          <p className="text-lg text-white/70">
Enter your details below to get started.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            
            {/* ZIP INPUT */}
            <div>
              <input
                type="tel"
                inputMode="numeric"
                placeholder="Enter Zip Code"
                value={zip}
                onChange={(e) =>
                  setZip(e.target.value.replace(/\D/g, "").slice(0, 5))
                }
                className={`w-full p-4 bg-black/20 border ${
                  errors.zip ? "border-red-500" : "border-white/20"
                } rounded-xl text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-blue-500 transition`}
              />
              {errors.zip && (
                <p className="text-red-400 text-sm mt-2">{errors.zip}</p>
              )}
            </div>

            {/* BUSINESS TYPE */}
            <div>
              <Dropdown options={options} onChange={setInsuranceType} />
              {errors.insuranceType && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.insuranceType}
                </p>
              )}
            </div>

            {/* CTA BUTTON */}
            <div className="pt-2">
              <ButtonPrimary label="Get a Free Quote" type="submit" />
            </div>
          </form>
        </motion.div>

        {/* RIGHT SIDE – IMAGE */}
        <motion.div
          className="relative w-full h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src="/coverage.jpeg"
            alt="Truck Image"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Herosection;

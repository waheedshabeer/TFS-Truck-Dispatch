"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  cardHover,
  getResponsiveViewport,
} from "@/animations";
import { ButtonPrimary } from "../buttons/Buttons";
import { toast } from "react-toastify";
import { trackConversion, GOOGLE_ADS_CONVERSIONS } from "@/utils/gtag";

const offices = [
  {
    state: "California",
    title: "Rancho California",
    phone: "+1 (909) 996-1153",
    address:
      "8137 Malachite Ave Suite G, Rancho Cucamonga, CA 91730, United States",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2744041609!2d-118.06704035!3d34.1058954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c337d0fd82c8af%3A0x267eb54693a00882!2sAuto%20Solutions%20Insurance%20Services%20LLC%20-%20Auto%20and%20Commercial%20Trucking%20Insurance!5e0!3m2!1sen!2sus!4v1714585630000!5m2!1sen!2sus",
  },
  {
    state: "California",
    title: "Fontana California",
    phone: "+1 (909) 275-7245",
    address:
      "16055 Foothill Blvd Fontana, CA 92335 (Located Inside Superior Supermarket)",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2743955738!2d-117.855025!3d34.1051391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c34c786fefa29f%3A0x24586574fed5506e!2sSuperior%20Grocers!5e0!3m2!1sen!2sus!4v1714586100000!5m2!1sen!2sus",
  },
];

const Locations = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isMobileDevice = () => {
    if (typeof window === "undefined") return false;
    return (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      ) || window.innerWidth <= 768
    );
  };

  const handlePhoneClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    phone: string,
  ) => {
    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits === "19099961153" || phoneDigits === "9099961153") {
      trackConversion(GOOGLE_ADS_CONVERSIONS.PHONE_909_996_1153);
    } else if (phoneDigits === "19092757245" || phoneDigits === "9092757245") {
      trackConversion(GOOGLE_ADS_CONVERSIONS.PHONE_909_275_7245);
    }
    if (!isMobileDevice()) {
      e.preventDefault();
      navigator.clipboard
        .writeText(phoneDigits)
        .then(() => {
          toast.success("Phone number copied to clipboard!");
        })
        .catch(() => {
          toast.error("Failed to copy phone number");
        });
    }
  };

  return (
    <motion.section
      className="relative flex flex-col items-center w-full px-6 py-20 bg-american-gradient text-american-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={getResponsiveViewport()}
    >
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      <motion.h2
        className="text-4xl md:text-5xl font-extrabold tracking-tight text-center drop-shadow-lg z-10"
        variants={fadeInUp}
      >
        Locations Near You
      </motion.h2>

      <motion.p
        className="text-lg mt-6 text-center leading-relaxed max-w-3xl z-10"
        variants={fadeInUp}
      >
        We have offices in multiple states to serve you better, ensuring easy
        access to our services no matter where you are. Our dedicated teams are
        ready to assist you with expert guidance and support. Whether you need
        in-person consultations or quick assistance over the phone, we’re here
        to help. Find the nearest location below and connect with us today!
      </motion.p>

      <motion.div
        className="mt-16 w-full max-w-5xl z-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={staggerContainer}
      >
        {offices.map(({ title, phone, address, mapSrc }, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg text-center flex flex-col items-center"
            variants={fadeInUp}
            whileHover={cardHover}
          >
            <h4 className="text-xl font-bold text-white drop-shadow">
              {title}
            </h4>
            <p className="mt-2 text-gray-300">
              Phone:{" "}
              <a
                href={`tel:${phone.replace(/\D/g, "")}`}
                onClick={(e) => handlePhoneClick(e, phone)}
                className="text-american-yellow font-semibold hover:text-american-red transition-colors duration-300 cursor-pointer"
                title={
                  isMobileDevice()
                    ? "Tap to call"
                    : "Click to copy phone number"
                }
              >
                {phone}
              </a>
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 mt-1 hover:text-american-yellow transition-colors duration-300 cursor-pointer"
            >
              {address}
            </a>
            <div className="mt-4 w-full h-48 overflow-hidden rounded-lg">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                className="rounded-lg border-none"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Get Quote CTA */}
      <motion.div
        className="z-10 w-full mt-16 justify-center items-center flex"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <ButtonPrimary
          type="button"
          onClick={scrollToTop}
          label="Get Your Customized Quote Now"
          className="w-full md:w-1/4"
        />
      </motion.div>
    </motion.section>
  );
};

export default Locations;

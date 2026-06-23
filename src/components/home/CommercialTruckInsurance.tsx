"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  cardHover,
  fadeInUp,
  staggerContainer,
  getResponsiveViewport,
} from "@/animations";

const coverages = [
  {
    title: "Primary Liability Insurance",
    desc: "Ensure compliance and protection against third-party injuries and property damage.",
    icon: "🚛",
  },
  {
    title: "Physical Damage Coverage",
    desc: "Safeguard your vehicles from collision, theft, vandalism, and natural disasters.",
    icon: "⚠️",
  },
  {
    title: "Motor Truck Cargo Insurance",
    desc: "Coverage tailored for goods transported, protecting against loss or damage during transit.",
    icon: "📦",
  },
  {
    title: "General Liability Insurance",
    desc: "Protect your business from claims unrelated directly to vehicle operations.",
    icon: "🛡️",
  },
  {
    title: "Non-Trucking Liability Insurance",
    desc: "Coverage for trucks when used for non-business activities.",
    icon: "🚧",
  },
  {
    title: "Workers Compensation",
    desc: "Provides essential medical benefits and wage replacement to truck drivers and employees who experience work-related injuries or illnesses, ensuring your workforce is protected and your business remains compliant.",
    icon: "🏥",
  },
];

const industries = [
  {
    title: "Delivery & Courier Services",
    desc: "Reliable coverage for daily goods transportation.",
    img: "url('/delivery.webp')",
  },
  {
    title: "Construction Companies",
    desc: "Protect your construction equipment and materials in transit.",
    img: "url('/construction.jpg')",
  },
  {
    title: "Manufacturing Businesses",
    desc: "Secure raw materials and products during transportation.",
    img: "url('/manufacturing.jpg')",
  },
  {
    title: "Retail & Wholesale Distribution",
    desc: "Comprehensive coverage for goods moving between warehouses and retail locations.",
    img: "url('/warehouse.jpg')",
  },
  {
    title: "Freight & Logistics",
    desc: "Ensuring protection for cargo and vehicles managed for clients.",
    img: "url('/freight.webp')",
  },
  {
    title: "Additional Industries",
    desc: "We over customized commercial truck insurance solutions for numerous other industries. If your industry isn't listed, contact us directly—we're here to provide the coverage you need.",
    img: "url('/additional.png')",
  },
];

const CommercialTruckInsurance = () => {
  return (
    <motion.section
      className="relative flex flex-col items-center w-full px-6 py-20 bg-american-gradient text-american-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={getResponsiveViewport()}
    >
      {/* Background Dim Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center drop-shadow-xl z-10"
        variants={fadeInUp}
      >
        Protect Your Business with Reliable Truck Insurance Solutions
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-lg mt-6 text-center max-w-3xl z-10"
        variants={fadeInUp}
      >
        Secure your commercial vehicles, cargo, and operations with tailored
        insurance plans designed specifically for trucking professionals and
        businesses.
      </motion.p>

      {/* Common Coverages Section */}
      <motion.h3
        className="text-3xl font-extrabold text-center mt-16 z-10"
        variants={fadeInUp}
      >
        Our Insurance Coverage Options
      </motion.h3>

      <motion.div className="mt-16" variants={staggerContainer}>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10"
          variants={staggerContainer}
        >
          {coverages.map((item, index) => (
            <motion.div
              key={index}
              className="text-left w-full md:max-w-md overflow-hidden break-words hyphens-auto text-wrap z-10"
              variants={fadeInUp}
            >
              <div className="flex gap-3 items-center">
                <div className="text-4xl">{item.icon}</div>
                <h4 className="text-lg font-bold">{item.title}</h4>
              </div>

              <p className="mt-2 text-sm text-white/80">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Industries Section */}
      <motion.h3
        className="text-3xl font-extrabold text-center mt-20 mb-16 z-10"
        variants={fadeInUp}
      >
        Industries We Serve
      </motion.h3>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10"
        variants={staggerContainer}
      >
        {industries.map((item, index) => (
          <motion.div
            key={index}
            className="relative w-full md:max-w-md h-64 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg text-center cursor-pointer z-10 overflow-hidden flex items-center justify-center"
            variants={fadeInUp}
            whileHover={cardHover}
          >
            {/* Background Image */}
            <motion.div
              className="absolute left-0 top-0 w-full h-full bg-no-repeat bg-cover"
              style={{ backgroundImage: item.img }}
              initial={{ scale: 1.1 }}
            />

            {/* Light Overlay */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* Centered Content */}
            <div className="relative z-10 text-white text-center px-4">
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p className="mt-2 text-sm text-white/80">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default CommercialTruckInsurance;

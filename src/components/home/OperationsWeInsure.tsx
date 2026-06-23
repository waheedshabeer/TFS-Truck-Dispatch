"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  cardHover,
  getResponsiveViewport,
} from "@/animations";

const operations = [
  { title: "Construction & Demolition", icon: "/3d-construction.png" },
  { title: "New Ventures", icon: "/3d-handshake.png" },
  { title: "Auto Haulers", icon: "/3d-tow-truck.png" },
  { title: "Box Truck Operations", icon: "/3d-box-truck.png" },
  { title: "Expedited Delivery", icon: "/3d-delivery-truck.png" },
  { title: "Hot Shot Trucking", icon: "/3d-hotshot-truck.png" },
  { title: "Long Haul Trucking", icon: "/3d-long-haul.png" },
  { title: "Waste Haulers", icon: "/3d-waste-truck.png" },
];

const tips = [
  {
    title: "Shop Around",
    desc: "Get quotes from multiple insurers to compare rates and coverage options.",
  },
  {
    title: "Maintain a Good Record",
    desc: "Good driving records qualify for lower insurance rates.",
  },
  {
    title: "Usage-Based Insurance",
    desc: "Insurance that tracks driving habits for personalized rates.",
  },
  {
    title: "Regular Maintenance",
    desc: "Well-maintained trucks have lower accident risks.",
  },
];

const OperationsWeInsure = () => {
  return (
    <motion.section
      className="relative flex flex-col items-center w-full px-6 py-20 bg-american-gradient text-american-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={getResponsiveViewport()}
    >
      {/* Background Dim Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      <motion.h2
        className="text-4xl md:text-5xl font-extrabold tracking-tight text-center drop-shadow-lg z-10"
        variants={fadeInUp}
      >
        Type of Operations We Can Insure
      </motion.h2>

      <motion.p
        className="text-lg mt-6 text-center leading-relaxed max-w-3xl z-10"
        variants={fadeInUp}
      >
        We provide specialized insurance coverage for a wide range of trucking
        operations, from construction and demolition to long-haul trucking.
        Whether you&apos;re a new venture or an established business, our
        tailored policies ensure protection against potential risks, keeping
        your operations running smoothly.
      </motion.p>

      <motion.div className="mt-16 w-full z-10" variants={staggerContainer}>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={staggerContainer}
        >
          {operations.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg text-center flex flex-col items-center justify-center cursor-pointer"
              variants={fadeInUp}
              whileHover={cardHover}
            >
              <Image src={item.icon} alt={item.title} width={50} height={50} />
              <h4 className="mt-2 text-lg font-bold text-white drop-shadow">
                {item.title}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.h3
        className="text-3xl font-extrabold text-center mt-16 mb-16 z-10"
        variants={fadeInUp}
      >
        How To Get Cheaper Truck Insurance Rates
      </motion.h3>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 z-10"
        variants={staggerContainer}
      >
        {tips.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg text-center cursor-pointer"
            variants={fadeInUp}
            whileHover={cardHover}
          >
            <h3 className="text-xl font-semibold text-white drop-shadow">
              {item.title}
            </h3>
            <p className="mt-2 text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default OperationsWeInsure;

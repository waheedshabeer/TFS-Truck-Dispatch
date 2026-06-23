"use client";
import React from "react";
import AppLayout from "@/components/AppLayout";
import { motion } from "framer-motion";
import { cardHover, fadeInUp, staggerContainer } from "@/animations";
import WhyChooseUs from "@/components/WhyChooseUs";
import GetFreeQuoteCTA from "@/components/GetFreeQuoteCTA";
import Herosection from "../../commercial-truck-insurance/herosection";

const coverageOptions = [
  {
    title: "Auto Liability",
    desc: "Federally required coverage for bodily injury and property damage",
    img: "url('/cloud.jpeg')",
  },
  {
    title: "Physical Damage",
    desc: "Pays for repairs or replacement of your tractor-trailer",
    img: "url('/dbl.jpeg')",
  },
  {
    title: "Motor Truck Cargo",
    desc: "Protects freight in your trailer against loss or damage",
    img: "url('/mad.jpeg')",
  },
  {
    title: "General Liability",
    desc: "Covers incidents off the road, like at docks or warehouses",
    img: "url('/repl.jpeg')",
  },
  {
    title: "Workers Compensation",
    desc: "Protects drivers and staff from workplace injuries",
    img: "url('/wokker.jpeg')",
  },
  {
    title: "Pollution Liability",
    desc: "Available for spills, dust, or hazardous debris",
    img: "url('/polluttion.jpeg')",
  },
];

const reasons = [
  {
    title: "Construction & Demolition Expertise",
    desc: "Specialized expertise in construction and demolition trucking with tailored insurance solutions.",
    icon: "🏗️",
  },
  {
    title: "Heavy Truck Coverage",
    desc: "Access to multiple carriers offering comprehensive heavy truck coverage at competitive rates.",
    icon: "🚛",
  },
  {
    title: "Fast Certificates",
    desc: "Quick certificates of insurance provided to ensure contractor compliance without delays.",
    icon: "⚡",
  },
  {
    title: "Custom Contract Policies",
    desc: "Policies customized to meet bid specifications and contract requirements with confidence.",
    icon: "📑",
  },
  {
    title: "Claims Support",
    desc: "Efficient claims support to get your trucks repaired and back on site quickly.",
    icon: "🛠️",
  },
];

const risks = [
  {
    title: "Tight Maneuvering",
    desc: "Risk of accidents while maneuvering around heavy equipment and workers on job sites.",
    icon: "🚧",
  },
  {
    title: "Falling Debris & Rough Terrain",
    desc: "Exposure to falling debris and rough terrain increases hazards for trucks and crews.",
    icon: "🏗️",
  },
  {
    title: "Dumping & Loading Accidents",
    desc: "Accidents can occur during dumping or loading materials, leading to costly claims.",
    icon: "📦",
  },
  {
    title: "High Wear-and-Tear",
    desc: "Frequent short hauls accelerate wear-and-tear, increasing maintenance and breakdown risks.",
    icon: "⚙️",
  },
  {
    title: "Public Road Liability",
    desc: "Operating near public roads and job sites raises liability exposure for your business.",
    icon: "🛣️",
  },
];

const ConstructionAndDemolition = () => {
  return (
    <AppLayout>
      <Herosection />
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl mt-20 font-extrabold text-center drop-shadow-xl z-10"
        variants={fadeInUp}
      >
        Construction and Demolition Trucking
      </motion.h2>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Construction and demolition haulers face some of the toughest working
        conditions in the trucking industry. From navigating busy job sites to
        hauling heavy loads of debris, your trucks face constant risks. Truck
        Insurance USA builds rugged insurance programs tailored to keep your
        operation moving
      </motion.p>

      {/* Coverage That Fits Small Business Needs */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Coverages Built for Construction Hauling
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        We provide specialized coverage options designed for contractors and
        demolition operators:
      </motion.p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10 mt-6 max-w-7xl place-self-center justify-center items-center w-full mx-auto"
        variants={staggerContainer}
      >
        {coverageOptions.map((item, index) => (
          <motion.div
            key={index}
            className="relative w-full md:max-w-md h-64 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg text-center cursor-pointer z-10 overflow-hidden flex items-center justify-center"
            variants={fadeInUp}
            whileHover={cardHover}
          >
            {/* Background Image */}
            <motion.div
              className="absolute left-0 top-0 w-full h-full bg-no-repeat bg-cover bg-center"
              style={{ backgroundImage: item.img }}
              initial={{ scale: 1.1 }}
            />

            {/* Light Overlay */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* Centered Content */}
            <div className="relative z-10 text-american-white text-center px-4">
              <h4 className="text-lg font-bold">{item.title}</h4>
              <p className="text-sm font-normal">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* The Risks on Job Sites */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        The Risks on Job Sites
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Construction zones and demolition sites are unpredictable environments.
        Trucks face hazards every day, including:
      </motion.p>
      <motion.div
        className="z-10 mt-6 max-w-7xl place-self-center justify-center items-center w-full mx-auto"
        variants={staggerContainer}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10"
          variants={staggerContainer}
        >
          {risks.map((item, index) => (
            <motion.div
              key={index}
              className="text-left w-full md:max-w-md overflow-hidden break-words hyphens-auto text-wrap z-10"
              variants={fadeInUp}
            >
              <div className="flex gap-3 items-center">
                <h4 className="text-lg font-bold">{item.title}</h4>
              </div>

              <p className="mt-2 text-sm text-white/80">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Why Contractors Choose Us */}
      <WhyChooseUs
        reasons={reasons}
        title="Why Choose Truck Insurance USA?"
        description="We know contractors and demolition crews don’t have time to shop dozens of carriers. That’s why we do it for you:"
      />

      {/* Get a Free Auto Liability Insurance Quote */}
      <GetFreeQuoteCTA
        title="Get a Free Construction & Demolition Trucking Insurance Quote"
        descriptionBeforeCTA="Protect your dump trucks, haulers, and crews with coverage designed for the job site. Call Truck Insurance USA at"
        descriptionAfterCTA="or complete our online form today for a free quote. Truck Insurance USA — Tough Coverage for Tough Jobs."
      />
    </AppLayout>
  );
};

export default ConstructionAndDemolition;

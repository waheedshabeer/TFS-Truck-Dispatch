"use client";
import React from "react";
import AppLayout from "@/components/AppLayout";
import { motion } from "framer-motion";
import { cardHover, fadeInUp, staggerContainer } from "@/animations";
import WhyChooseUs from "@/components/WhyChooseUs";
import GetFreeQuoteCTA from "@/components/GetFreeQuoteCTA";
import Herosection from "../../commercial-truck-insurance/herosection";

const coverageRequired = [
  {
    title: "Minimum for Oil Transport",
    desc: "$1,000,000",
    img: "url('/oil-transport.png')",
  },
  {
    title: "Minimum for Hazardous Materials",
    desc: "$5,000,000",
    img: "url('/hazardous-material.jpeg')",
  },
  {
    title:
      "Additional coverage requirements may apply based on state or contract rules",
    img: "url('/gradient.png')",
  },
];

const coverageOptions = [
  {
    title: "Auto Liability",
    desc: "Meets DOT/FMCSA minimums for hazmat haulers",
    img: "url('/general-freight.jpeg')",
  },
  {
    title: "Physical Damage",
    desc: "Protects your trucks from collision, fire, or theft",
    img: "url('/collision.png')",
  },
  {
    title: "Motor Truck Cargo",
    desc: "Covers hazardous materials in transit",
    img: "url('/motor-truck-cargo.png')",
  },
  {
    title: "Environmental/Pollution Liability",
    desc: "Covers cleanup and environmental damage",
    img: "url('/hazardous-material.jpeg')",
  },
  {
    title: "Workers Compensation",
    desc: "Protects drivers handling dangerous cargo",
    img: "url('/leased-operator.png')",
  },
  {
    title: "General Liability",
    desc: "Covers claims outside of vehicle use",
    img: "url('/automobiles.png')",
  },
];

const risks = [
  {
    title: "Environmental Damage",
    desc: "Severe spills or accidents can cause costly environmental cleanup and long-term impacts.",
    icon: "🌍",
  },
  {
    title: "Public Safety Risks",
    desc: "Spills, fires, or explosions create significant safety hazards for the public and nearby communities.",
    icon: "🚨",
  },
  {
    title: "Regulatory Requirements",
    desc: "DOT and FMCSA mandate strict insurance requirements for hazardous materials haulers.",
    icon: "📜",
  },
  {
    title: "Liability Exposure",
    desc: "Higher risk of lawsuits and financial claims due to the dangerous nature of hazmat transport.",
    icon: "⚖️",
  },
  {
    title: "Specialized Training",
    desc: "Drivers require advanced training and strict compliance with hazmat handling regulations.",
    icon: "🎓",
  },
];

const reasons = [
  {
    title: "Hazmat Expertise",
    desc: "Specialized experience insuring hazardous material fleets and independent haulers.",
    icon: "☣️",
  },
  {
    title: "High-Limit Policies",
    desc: "Access to top-rated carriers offering liability policies with high coverage limits.",
    icon: "🛡️",
  },
  {
    title: "Compliance Support",
    desc: "Guidance with DOT filings and FMCSA requirements to keep your authority in good standing.",
    icon: "📑",
  },
  {
    title: "Fast Certificates",
    desc: "Quick turnaround on certificates of insurance to meet tight contract deadlines.",
    icon: "⚡",
  },
  {
    title: "Nationwide Coverage",
    desc: "Insurance options available for both interstate and intrastate hazmat operations.",
    icon: "🌎",
  },
];

const HazmatHaulers = () => {
  return (
    <AppLayout>
      <Herosection />
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl mt-20 font-extrabold text-center drop-shadow-xl z-10"
        variants={fadeInUp}
      >
        Hazmat Haulers
      </motion.h2>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Hauling hazardous materials is one of the most highly regulated and
        high-risk sectors in trucking. From chemicals and fuel to medical waste
        and explosives, hazmat haulers face strict compliance standards and
        catastrophic liability exposure. Truck Insurance USA provides
        specialized insurance programs that protect your business while keeping
        you compliant with federal and state regulations.
      </motion.p>

      {/* Coverage Required for Hazmat Haulers */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Coverage Required for Hazmat Haulers
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Federal law mandates higher liability limits for carriers hauling
        hazardous materials:
      </motion.p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10 mt-6 max-w-7xl place-self-center justify-center items-center w-full mx-auto"
        variants={staggerContainer}
      >
        {coverageRequired.map((item, index) => (
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
              <h4 className="text-lg">{item.title}</h4>
              <p className="text-5xl font-extrabold">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* The Risks of Hauling Hazardous Materials */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        The Risks of Hauling Hazardous Materials
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Unlike standard freight, hazardous cargo carries serious consequences in
        the event of an accident or spill:
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

      {/* Essential Insurance for Hazmat Operations */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Essential Insurance for Hazmat Operations
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        We build comprehensive insurance packages that go beyond the basics:
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

      {/* Why Choose Truck Insurance USA? */}
      <WhyChooseUs
        reasons={reasons}
        title="Why Choose Truck Insurance USA?"
        description="Hazmat hauling requires expertise and precision. We work with carriers who understand the risks and regulations of transporting dangerous goods:"
      />

      {/* Get a Free Auto Liability Insurance Quote */}
      <GetFreeQuoteCTA
        title="Get a Free Hazmat Hauler Insurance Quote"
        descriptionBeforeCTA="Don’t risk your business hauling hazardous freight without the right coverage. Call Truck Insurance USA at"
        descriptionAfterCTA="or fill out our online form today to request a free, no-obligation quote. Truck Insurance USA — Serious Protection for Serious Risks"
      />
    </AppLayout>
  );
};

export default HazmatHaulers;

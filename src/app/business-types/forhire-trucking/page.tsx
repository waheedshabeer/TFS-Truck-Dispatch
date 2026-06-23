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
    desc: "Required by FMCSA to activate your authority",
    img: "url('/fcms.jpeg')",
  },
  {
    title: "Physical Damage",
    desc: "Protects your truck investment",
    img: "url('/qual.jpeg')",
  },
  {
    title: "Cargo Coverage",
    desc: "Required by many brokers and shippers",
    img: "url('/shiopper.jpeg')",
  },
  {
    title: "General Liability",
    desc: "Covers business risks outside of driving",
    img: "url('/cover.jpeg')",
  },
  {
    title: "Workers Compensation",
    desc: "Needed if you plan to hire drivers or staff",
    img: "url('/compe.jpeg')",
  },
];

const whyContractsRequireIt = [
  {
    title: "Proof of Insurance",
    desc: "Brokers and shippers won’t release freight without proper proof of insurance in place.",
    icon: "📄",
  },
  {
    title: "FMCSA Requirement",
    desc: "FMCSA requires liability coverage to operate legally and maintain active authority.",
    icon: "🛣️",
  },
  {
    title: "Cargo Coverage Limits",
    desc: "Many contracts specify cargo coverage with set limits to protect the goods being hauled.",
    icon: "📦",
  },
  {
    title: "General Liability",
    desc: "General liability may be required for work performed at customer facilities or job sites.",
    icon: "🏢",
  },
];

const reasons = [
  {
    title: "Fast Certificates",
    desc: "Fast certificates of insurance provided to satisfy brokers and shippers without delays.",
    icon: "⚡",
  },
  {
    title: "Custom Limits",
    desc: "Custom liability limits tailored to meet specific contract requirements with confidence.",
    icon: "📊",
  },
  {
    title: "Best Available Rates",
    desc: "Access to multiple carriers to secure the most competitive rates for your business.",
    icon: "💲",
  },
  {
    title: "Comprehensive Coverage",
    desc: "Coverage available for regional, long-haul, and specialized freight operations.",
    icon: "🚛",
  },
];

const ForHireTrucking = () => {
  return (
    <AppLayout>
      <Herosection />
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl mt-20 font-extrabold text-center drop-shadow-xl z-10"
        variants={fadeInUp}
      >
        For-Hire Trucking
      </motion.h2>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        As a for-hire carrier, your business depends on contracts with brokers
        and shippers. Every load you haul comes with liability risks, compliance
        requirements, and insurance obligations. At Truck Insurance USA, we
        design policies that keep your business protected and contract-ready.
      </motion.p>

      {/* Why New Ventures Struggle With Insurance */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        What Is For-Hire Trucking Insurance?
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        For-hire trucking insurance is coverage designed for carriers that
        transport freight for others under contract. Whether you’re hauling
        regional loads, cross-country freight, or specialized cargo, this
        insurance ensures you meet both legal and contractual requirements.
      </motion.p>

      {/* Coverages Commonly Included */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Coverages Commonly Included
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        A typical for-hire policy package may include:
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

      {/* Why Contracts Require It */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Why Contracts Require It
      </motion.h3>
      <motion.div
        className="z-10 mt-6 max-w-7xl place-self-center justify-center items-center w-full mx-auto"
        variants={staggerContainer}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 z-10"
          variants={staggerContainer}
        >
          {whyContractsRequireIt.map((item, index) => (
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

      {/* How We Help New Trucking Companies */}
      <WhyChooseUs
        reasons={reasons}
        title="How We Support For-Hire Carriers"
        description="At Truck Insurance USA, we know time is money in trucking. That’s why we make sure you’re always ready for the next load:"
      />

      {/* Get a Free Auto Liability Insurance Quote */}
      <GetFreeQuoteCTA
        title="Get a Free New Venture Trucking Quote"
        descriptionBeforeCTA="Don’t let insurance slow down your business. Call Truck Insurance USA today at"
        descriptionAfterCTA="or fill out our online form to get a fast, customized quote. Truck Insurance USA — Reliable Protection for America’s For-Hire Carriers."
      />
    </AppLayout>
  );
};

export default ForHireTrucking;

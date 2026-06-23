"use client";
import React from "react";
import AppLayout from "@/components/AppLayout";
import { motion } from "framer-motion";
import { cardHover, fadeInUp, staggerContainer } from "@/animations";
import WhyChooseUs from "@/components/WhyChooseUs";
import GetFreeQuoteCTA from "@/components/GetFreeQuoteCTA";
import Herosection from "./herosection";

const whyNeed = [
  {
    title: "Authority",
    desc: "Your authority can be revoked by the FMCSA",
    icon: "🛣️",
  },
  {
    title: "Shippers",
    desc: "Shippers won’t release freight without proof of insurance",
    icon: "🚛",
  },
  {
    title: "Accidents",
    desc: "Accidents could bankrupt your business from lawsuits or cargo claims",
    icon: "👤",
  },
  {
    title: "Contracts",
    desc: "Contracts and bids will be denied without proper certificates",
    icon: "🤝",
  },
];

const whoNeedsIt = [
  {
    title: "Owner-operators",
    desc: "Owner-operators running under their own authority",
    icon: "🛣️",
  },
  {
    title: "Hire Carriers",
    desc: "For-hire carriers hauling freight for brokers and shippers",
    icon: "🚛",
  },
  {
    title: "Fleet managers",
    desc: "• Fleet managers operating multiple vehicles nationwide",
    icon: "👤",
  },
  {
    title: "New ventures",
    desc: "New ventures applying for DOT/MC authority",
    icon: "🤝",
  },
  {
    title: "Specialized Haulers",
    desc: "Specialty haulers like hazmat, construction, expedited, and waste operations",
    icon: "❄️",
  },
];

const coverageOptions = [
  {
    title: "Auto Liability",
    desc: "Frequired by FMCSA to operate legally",
    img: "url('/modern.jpeg')",
  },
  {
    title: "Physical Damage",
    desc: "Protects your truck investment",
    img: "url('/physical.jpeg')",
  },
  {
    title: "Motor Truck Cargo",
    desc: "covers the loads you haul for customers",
    img: "url('/motor-cargo.jpeg')",
  },
  {
    title: "General Liability",
    desc: "protects against non-driving business risks",
    img: "url('/general.jpeg')",
  },
  {
    title: "Workers Compensation",
    desc: "covers your employees and drivers",
    img: "url('/coss.jpeg')",
  },
  {
    title: "Optional Endorsements",
    desc: "available for specialty operations",
    img: "url('/multiple.jpeg')",
  },
];

const reasons = [
  {
    title: "Multiple Top-Rated",
    desc: " Access to multiple top-rated carriers for the best rates",
    icon: "🚛",
  },
  {
    title: "Fast certificates",
    desc: "A Fast certificates of insurance to keep your loads moving",
    icon: "⭐",
  },
  {
    title: "Expert compliance",
    desc: "Expert compliance support with FMCSA filings",
    icon: "⚡",
  },
  {
    title: "Custom policies",
    desc: "Custom policies designed for startups, fleets, and niche haulers",
    icon: "📑",
  },
  {
    title: "Nationwide service",
    desc: " Nationwide service with trucking-focused expertise",
    icon: "✅",
  },
];

function CommercialTruck() {
  return (
    <AppLayout>
      <Herosection />
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl mt-20 font-extrabold text-center drop-shadow-xl z-10"
        variants={fadeInUp}
      >
        Commercial Truck Insurance
      </motion.h2>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Commercial trucking is the backbone of the American economy — and every
        mile driven carries risk. At Truck Insurance USA, we provide
        **specialized commercial truck insurance** that keeps drivers, fleets,
        and businesses legally compliant, financially protected, and
        contract-ready.
      </motion.p>

      {/* Why Semi Truck Insurance Matters */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        What Is Commercial Truck Insurance?
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Commercial truck insurance is more than just a policy — it’s a complete
        protection package for your business. Whether you run a single truck or
        manage a fleet, this coverage ensures you can operate legally under
        FMCSA/DOT rules while protecting your business against costly accidents,
        lawsuits, and cargo losses.
      </motion.p>

      {/* What’s Covered in a Semi Truck Policy? */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        What’s Covered in a Policy?
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        A tailored commercial truck insurance program may include
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

      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Why You Need It
      </motion.h3>
      <motion.div
        className="z-10 mt-6 max-w-7xl place-self-center justify-center items-center w-full mx-auto"
        variants={staggerContainer}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10"
          variants={staggerContainer}
        >
          {whyNeed.map((item, index) => (
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

      {/* Who Needs Workers Comp? */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Who Needs Commercial Truck Insurance?
      </motion.h3>
      <motion.div
        className="z-10 mt-6 max-w-7xl place-self-center justify-center items-center w-full mx-auto"
        variants={staggerContainer}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10"
          variants={staggerContainer}
        >
          {whoNeedsIt.map((item, index) => (
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

      {/* Why Choose Truck Insurance USA? */}
      <WhyChooseUs
        reasons={reasons}
        title="The Truck Insurance USA Advantage"
        description="As a specialized trucking insurance broker, we know the challenges you face and work to
keep your business profitable and compliant:"
      />

      {/* Get a Free Auto Liability Insurance Quote */}
      <GetFreeQuoteCTA
        title="Protect Your Business Today"
        descriptionBeforeCTA="Your trucks keep America moving — don’t let one accident put you out of business. ■ Call
        Truck Insurance USA at 909-275-7245 or fill out our online form today for a fast, "
        descriptionAfterCTA="free
          quote. Truck Insurance USA — Commercial Truck Insurance That Works as Hard as You
        Do."
      />
    </AppLayout>
  );
}

export default CommercialTruck;

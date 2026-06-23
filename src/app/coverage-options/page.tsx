"use client";
import React from "react";
import AppLayout from "@/components/AppLayout";
import { motion } from "framer-motion";
import { cardHover, fadeInUp, staggerContainer } from "@/animations";
import WhyChooseUs from "@/components/WhyChooseUs";
import GetFreeQuoteCTA from "@/components/GetFreeQuoteCTA";
import Herosection from "../commercial-truck-insurance/herosection";

const whyNeed = [
  {
    title: "Assessing your current",
    desc: "Assessing your current and future trucking operations",
    icon: "🛣️",
  },
  {
    title: "Reviewing contract",
    desc: "Reviewing contract and shipper insurance requirements",
    icon: "🚛",
  },
  {
    title: "Adjusting coverage",
    desc: "Adjusting coverage limits based on cargo type and risk",
    icon: "👤",
  },
  {
    title: "Specialized coverages",
    desc: "Adding specialized coverages like hazmat or reefer breakdown",
    icon: "🤝",
  },
  {
    title: "Flexible deductibles",
    desc: "Providing flexible deductibles to balance premiums and protection",
  },
];

const whoNeedsIt = [
  {
    title: "Owner-operators",
    desc: "Owner-operators starting a new trucking business",
    icon: "🛣️",
  },
  {
    title: "Fleet managers",
    desc: "Fleet managers looking for cost-efficient policies",
    icon: "🚛",
  },
  {
    title: "Construction and demolition",
    desc: "Construction and demolition companies with heavy trucks",
    icon: "👤",
  },
  {
    title: "Expedited",
    desc: "Expedited and hot shot delivery services",
    icon: "🤝",
  },
  {
    title: "Hazmat haulers",
    desc: "Hazmat haulers with specialized compliance needs",
    icon: "❄️",
  },
];

const coverageOptions = [
  {
    title: "Auto Liability Insurance",
    desc: "Required by federal law for most trucking operations; covers bodily injury and property damage caused by your truck",
    img: "url('/sty.jpeg')",
  },
  {
    title: "Physical Damage Insurance",
    desc: "Covers repairs or replacement of your truck due to collision,theft, vandalism, or natural disasters.",
    img: "url('/damage.jpeg')",
  },
  {
    title: "Motor Truck Cargo Insurance",
    desc: " Protects the freight you haul against loss, theft, or damagein transit.",
    img: "url('/loadss.jpeg')",
  },
  {
    title: "General Liability Insurance",
    desc: "Covers business-related claims outside of vehicle use, such as accidents on premises or loading docks.",
    img: "url('/carg.jpeg')",
  },
  {
    title: "Workers Compensation",
    desc: "Provides medical coverage and wage replacement for employees injured on the job.",
    img: "url('/coworkk.jpeg')",
  },
  {
    title: "Non-Trucking Liability",
    desc: "Covers trucks when used for personal or non-dispatched purposes",
    img: "url('/thinkk.jpeg')",
  },
];

const reasons = [
  {
    title: "Multiple Top-Rated",
    desc: " We shop multiple top-rated carriers to find the best coverage mix",
    icon: "🚛",
  },
  {
    title: "Business Operations",
    desc: "Policies are tailored to your business operations and compliance needs",
    icon: "⭐",
  },
  {
    title: "Nationwide service",
    desc: "Nationwide service for trucking companies of all sizes",
    icon: "⚡",
  },
  {
    title: "Hassle-free quotes",
    desc: "Fast, hassle-free quotes so you can get insured quickly",
    icon: "📑",
  },
  {
    title: "Expert support",
    desc: " Expert support for FMCSA and DOT compliance requirements",
    icon: "✅",
  },
];

function CoverageOption() {
  return (
    <AppLayout>
      <Herosection />
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl mt-20 font-extrabold text-center drop-shadow-xl z-10"
        variants={fadeInUp}
      >
        Coverage Options
      </motion.h2>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        No two trucking businesses are exactly alike. That’s why Truck Insurance
        USA offers flexible coverage options that can be tailored to fit your
        operation. Whether you’re an independent owner-operator, a fleet
        manager, or a new venture, we’ll build a policy that protects your
        trucks, your drivers, and your cargo.
      </motion.p>

      {/* Why Semi Truck Insurance Matters */}

      {/* What’s Covered in a Semi Truck Policy? */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Types of Coverage Available
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Our comprehensive trucking insurance packages can include a wide range
        of protections to meet legal requirements and business needs.
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
        Customizing Your Policy
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Every trucking business has unique risks depending on the type of
        freight, operating radius, and number of vehicles. Truck Insurance USA
        helps you customize coverage by:
      </motion.p>
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
        Who Needs Coverage Options?
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
        title=" Why Choose Truck Insurance USA?"
        description=""
      />

      {/* Get a Free Auto Liability Insurance Quote */}
      <GetFreeQuoteCTA
        title="Protect Your Business Today"
        descriptionBeforeCTA="Protect your business with the right trucking insurance package. Call Truck Insurance USA at
909-275-7245 or fill out our online form today to get started.  "
        descriptionAfterCTA="Truck Insurance USA —
Comprehensive Coverage for America’s Trucking Industry."
      />
    </AppLayout>
  );
}

export default CoverageOption;

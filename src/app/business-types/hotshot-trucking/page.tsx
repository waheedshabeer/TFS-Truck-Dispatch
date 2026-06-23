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
    img: "url('/cone.jpeg')",
  },
  {
    title: "Physical Damage",
    desc: "Pays for repairs or replacement of your tractor-trailer",
    img: "url('/semi.jpeg')",
  },
  {
    title: "Motor Truck Cargo",
    desc: "Protects freight in your trailer against loss or damage",
    img: "url('/loadedd.jpeg')",
  },
  {
    title: "General Liability",
    desc: "Covers incidents off the road, like at docks or warehouses",
    img: "url('/busines.jpeg')",
  },
  {
    title: "Non-Trucking Liability",
    desc: "Covers your truck when not under dispatch",
    img: "url('/fleet-owners.png')",
  },
  {
    title: "Workers Compensation",
    desc: "Protects drivers and staff from workplace injuries",
    img: "url('/workerdd.jpeg')",
  },
];

const whySpecialized = [
  {
    title: "Coverage for Smaller Trucks",
    desc: "Insurance designed for duallys, flatbeds, and other light-duty trucks used in hauling operations.",
    icon: "🚚",
  },
  {
    title: "Specialized Load Protection",
    desc: "Tailored coverage for time-sensitive, expedited, and specialized freight contracts.",
    icon: "📦",
  },
  {
    title: "Expedited Delivery Support",
    desc: "Policies built for hot shot truckers working under tight schedules and delivery demands.",
    icon: "⏱️",
  },
  {
    title: "Multi-State Compliance",
    desc: "Guidance and coverage that meet insurance requirements across state lines.",
    icon: "🗺️",
  },
  {
    title: "Affordable Options",
    desc: "Flexible insurance programs that balance affordability with comprehensive protection for entrepreneurs.",
    icon: "💰",
  },
];

const reasons = [
  {
    title: "Carrier Partnerships",
    desc: "We work with carriers that welcome and support hot shot operators.",
    icon: "🤝",
  },
  {
    title: "Affordable Policies",
    desc: "Cost-effective insurance options designed for independent contractors in the hot shot industry.",
    icon: "💰",
  },
  {
    title: "Fast Certificates",
    desc: "Quick turnaround on certificates of insurance so you can secure loads without delays.",
    icon: "⚡",
  },
  {
    title: "Flexible Coverage",
    desc: "Customizable limits tailored for different types of freight and contracts.",
    icon: "📦",
  },
  {
    title: "Support for All Operators",
    desc: "Dedicated support for both new ventures and seasoned hot shot operators.",
    icon: "🛠️",
  },
];

const HotShotTrucking = () => {
  return (
    <AppLayout>
      <Herosection />
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl mt-20 font-extrabold text-center drop-shadow-xl z-10"
        variants={fadeInUp}
      >
        Hot Shot Trucking
      </motion.h2>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Hot shot trucking is all about speed, flexibility, and opportunity.
        Whether you’re hauling machinery on a flatbed or delivering
        time-sensitive freight with a dually, your truck is your business. At
        Truck Insurance USA, we specialize in coverage built for hot shot
        operators who move fast and need insurance that keeps up.
      </motion.p>

      {/* The Entrepreneurial Advantage */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        The Entrepreneurial Advantage
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Most hot shot truckers are small business owners chasing opportunity. We
        make insurance simple so you can focus on finding loads and growing your
        business.
      </motion.p>

      {/* Coverage Options for Hot Shot Operators */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Coverage Options for Hot Shot Operators
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        We provide insurance packages that match the unique needs of hot shot
        trucking:
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

      {/* Why Hot Shot Trucking Needs Specialized Coverage */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Why Hot Shot Trucking Needs Specialized Coverage
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Hot shot haulers operate differently than long-haul semis. You face
        unique risks and contract demands that require tailored protection:
      </motion.p>
      <motion.div
        className="z-10 mt-6 max-w-7xl place-self-center justify-center items-center w-full mx-auto"
        variants={staggerContainer}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10"
          variants={staggerContainer}
        >
          {whySpecialized.map((item, index) => (
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
      <WhyChooseUs reasons={reasons} title="Why Choose Truck Insurance USA?" />

      {/* Get a Free Auto Liability Insurance Quote */}
      <GetFreeQuoteCTA
        title="Get a Free Hot Shot Trucking Insurance Quote"
        descriptionBeforeCTA="Your truck is your business — protect it with insurance built for hot shot operators. Call Truck Insurance USA at"
        descriptionAfterCTA="or complete our online form for a free quote today. Truck Insurance USA — Fast, Flexible Coverage for Hot Shot Entrepreneurs."
      />
    </AppLayout>
  );
};

export default HotShotTrucking;

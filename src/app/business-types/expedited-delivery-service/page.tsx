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
    img: "url('/shinee.jpeg')",
  },
  {
    title: "Physical Damage",
    desc: "Pays for repairs or replacement of your tractor-trailer",
    img: "url('/damages.jpeg')",
  },
  {
    title: "Motor Truck Cargo",
    desc: "Protects freight in your trailer against loss or damage",
    img: "url('/shippers.jpeg')",
  },
  {
    title: "General Liability",
    desc: "Covers incidents off the road, like at docks or warehouses",
    img: "url('/wokerrs.jpeg')",
  },
  {
    title: "Workers Compensation",
    desc: "Protects drivers and staff from workplace injuries",
    img: "url('/blacks.jpeg')",
  },
  {
    title: "Pollution Liability",
    desc: "Available for spills, dust, or hazardous debris",
    img: "url('/pollutions.jpeg')",
  },
];

const challenges = [
  {
    title: "Tight Delivery Deadlines",
    desc: "Increased accident risk from tight delivery schedules and time pressures.",
    icon: "⏱️",
  },
  {
    title: "City Traffic Stops",
    desc: "Frequent stops in congested city areas raise the chance of collisions and delays.",
    icon: "🚦",
  },
  {
    title: "High-Value Cargo",
    desc: "Specialized coverage for high-value or time-sensitive cargo to prevent major losses.",
    icon: "💎",
  },
  {
    title: "Instant Proof of Insurance",
    desc: "Shippers often demand immediate proof of insurance to release freight quickly.",
    icon: "📄",
  },
  {
    title: "Small Truck Coverage",
    desc: "Coverage options for small trucks, sprinters, and hot shot rigs that face the same risks as larger fleets.",
    icon: "🚚",
  },
];

const reasons = [
  {
    title: "Instant Certificates",
    desc: "Get certificates of insurance fast to secure freight contracts without delays.",
    icon: "⚡",
  },
  {
    title: "Expedited Carrier Access",
    desc: "Tap into carriers that specialize in expedited delivery for reliable coverage.",
    icon: "🚀",
  },
  {
    title: "Flexible Vehicle Coverage",
    desc: "Protection for sprinter vans, box trucks, and hot shot rigs tailored to your operations.",
    icon: "🚚",
  },
  {
    title: "Custom Policy Limits",
    desc: "Meet broker and shipper requirements with coverage limits designed for your contracts.",
    icon: "📏",
  },
  {
    title: "Fast Claims Support",
    desc: "Quick claims handling to reduce downtime and keep your deliveries on track.",
    icon: "🛠️",
  },
];

const ExpeditedDeliveryService = () => {
  return (
    <AppLayout>
      <Herosection />
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl mt-20 font-extrabold text-center drop-shadow-xl z-10"
        variants={fadeInUp}
      >
        Expedited Delivery Service
      </motion.h2>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        In expedited delivery, speed is everything. Customers depend on you to
        move freight fast, often with no room for delays. The last thing you can
        afford is downtime caused by an uninsured accident or contract issue. At
        Truck Insurance USA, we provide fast, flexible insurance tailored to
        last-mile and expedited operations.
      </motion.p>

      {/* Coverages That Keep You Moving */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Coverages That Keep You Moving
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        We build insurance programs that match the speed and flexibility of your
        business:
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
        The Challenges of Expedited Delivery
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Expedited delivery drivers and fleets face unique risks in their
        high-speed, high-pressure operations:
      </motion.p>
      <motion.div
        className="z-10 mt-6 max-w-7xl place-self-center justify-center items-center w-full mx-auto"
        variants={staggerContainer}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10"
          variants={staggerContainer}
        >
          {challenges.map((item, index) => (
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

      {/* Why Expedited Carriers Choose Us */}
      <WhyChooseUs
        reasons={reasons}
        title="Why Expedited Carriers Choose Us"
        description="In expedited freight, insurance delays mean lost revenue. We make sure you’re always ready for the next load:"
      />

      {/* Get a Free Auto Liability Insurance Quote */}
      <GetFreeQuoteCTA
        title="Get a Free Expedited Delivery Service Insurance Quote"
        descriptionBeforeCTA="Don’t let insurance slow you down. Call Truck Insurance USA at"
        descriptionAfterCTA="or complete our online form for a free quote today. Truck Insurance USA — Fast Coverage for Fast Freight."
      />
    </AppLayout>
  );
};

export default ExpeditedDeliveryService;

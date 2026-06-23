"use client";
import React from "react";
import AppLayout from "@/components/AppLayout";
import { motion } from "framer-motion";
import { cardHover, fadeInUp, staggerContainer } from "@/animations";
import WhyChooseUs from "@/components/WhyChooseUs";
import GetFreeQuoteCTA from "@/components/GetFreeQuoteCTA";
import Herosection from "../herosection";

const coverageOptions = [
  {
    title: "Auto Liability",
    desc: "Federally required coverage for bodily injury and property damage",
    img: "url('/dump.jpeg')",
  },
  {
    title: "Physical Damage",
    desc: "Pays for repairs or replacement of your tractor-trailer",
    img: "url('/washes.jpeg')",
  },
  {
    title: "Motor Truck Cargo",
    desc: "Protects freight in your trailer against loss or damage",
    img: "url('/dmage.jpeg')",
  },
  {
    title: "General Liability",
    desc: "Covers incidents off the road, like at docks or warehouses",
    img: "url('/incide.jpeg')",
  },
  {
    title: "Workers Compensation",
    desc: "Protects drivers and staff from workplace injuries",
    img: "url('/pro.jpeg')",
  },
  {
    title: "Pollution Liability",
    desc: "Available for spills, dust, or hazardous debris",
    img: "url('/poll.jpeg')",
  },
];

const onJonRisks = [
  {
    title: "Rollovers on Uneven Terrain",
    desc: "Heavy trucks face rollover risks on uneven or unstable terrain, leading to serious damage and liability.",
    icon: "↪️",
  },
  {
    title: "Backing Collisions",
    desc: "Collisions while backing up at crowded job sites can cause costly damage to vehicles and property.",
    icon: "🚧",
  },
  {
    title: "Spilled Loads",
    desc: "Spilled loads may create road hazards, damage property, and result in expensive claims.",
    icon: "📦",
  },
  {
    title: "Public Road Accidents",
    desc: "Accidents on public roads between job sites expose your business to legal and financial risks.",
    icon: "🛣️",
  },
  {
    title: "Loading & Dumping Injuries",
    desc: "Drivers or crew members can be injured during loading or dumping operations, raising medical and liability costs.",
    icon: "🩹",
  },
];

const reasons = [
  {
    title: "Dump Truck Expertise",
    desc: "Specialized expertise in insuring heavy-duty dump trucks with coverage tailored to your operations.",
    icon: "🚛",
  },
  {
    title: "Custom Contractor Programs",
    desc: "Programs designed for contractors, demolition crews, and fleets with unique needs.",
    icon: "🏗️",
  },
  {
    title: "Competitive Rates",
    desc: "Access to multiple carriers to find the most competitive rates for your business.",
    icon: "💲",
  },
  {
    title: "Fast Claim Support",
    desc: "Prompt claim support to help minimize job delays and keep projects on schedule.",
    icon: "⚡",
  },
  {
    title: "Nationwide Coverage",
    desc: "Nationwide protection available for both local and regional dump truck haulers.",
    icon: "🌎",
  },
];

const DumpTruckInsurance = () => {
  return (
    <AppLayout>
      <Herosection />
      <motion.h2
        className="text-4xl md:text-5xl mt-20 font-extrabold text-center drop-shadow-xl z-10"
        variants={fadeInUp}
      >
        Dump Truck Insurance
      </motion.h2>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Dump trucks do some of the toughest jobs in trucking — hauling dirt,
        gravel, asphalt, and demolition debris across job sites and public
        roads. These heavy-duty operations bring high risks that demand
        specialized coverage. At Truck Insurance USA, we provide **dump truck
        insurance designed for contractors, demolition crews, and fleet
        operators who can’t afford downtime.
      </motion.p>

      {/* Compliance and Contract Protection */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Compliance and Contract Protection
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Many municipal and contractor projects require proof of insurance before
        awarding work. We deliver fast certificates of insurance so your trucks
        never sit idle waiting on paperwork.
      </motion.p>

      {/* Coverage That Fits Small Business Needs */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Coverage Built for Rugged Work
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Our dump truck insurance policies are designed to handle the unique
        risks of construction and demolition hauling:
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

      {/* Everyday Risks Box Trucks Face */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        On-the-Job Risks for Dump Trucks
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Job sites are unpredictable environments. Dump truck operators face
        hazards like:
      </motion.p>
      <motion.div
        className="z-10 mt-6 max-w-7xl place-self-center justify-center items-center w-full mx-auto"
        variants={staggerContainer}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10"
          variants={staggerContainer}
        >
          {onJonRisks.map((item, index) => (
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
        title="Why Contractors Choose Us"
        description="We understand construction and demolition hauling better than general agents. Our clients choose us because:"
      />

      {/* Get a Free Auto Liability Insurance Quote */}
      <GetFreeQuoteCTA
        title="Get a Free Dump Truck Insurance Quote"
        descriptionBeforeCTA="Your dump trucks are built for tough work — and so is our insurance. Call Truck Insurance USA at"
        descriptionAfterCTA="or fill out our online form today for a free, no-obligation quote. Truck Insurance USA — Rugged Coverage for Rugged Jobs."
      />
    </AppLayout>
  );
};

export default DumpTruckInsurance;

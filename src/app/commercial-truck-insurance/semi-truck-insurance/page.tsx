"use client";
import React from "react";
import AppLayout from "@/components/AppLayout";
import { motion } from "framer-motion";
import { cardHover, fadeInUp, staggerContainer } from "@/animations";
import WhyChooseUs from "@/components/WhyChooseUs";
import GetFreeQuoteCTA from "@/components/GetFreeQuoteCTA";
import Herosection from "../herosection";

const whoNeedsIt = [
  {
    title: "Long-Haul Carriers",
    desc: "For long-haul carriers crossing multiple states, ensuring compliance and protection on every route.",
    icon: "🛣️",
  },
  {
    title: "Regional Fleets",
    desc: "For regional fleets hauling freight for shippers and brokers that need dependable coverage.",
    icon: "🚛",
  },
  {
    title: "Owner-Operators",
    desc: "For owner-operators running under their own authority who need comprehensive insurance solutions.",
    icon: "👤",
  },
  {
    title: "Independent Contractors",
    desc: "For independent contractors leased to carriers who require coverage under agreements.",
    icon: "🤝",
  },
  {
    title: "Specialized Haulers",
    desc: "For specialized haulers transporting refrigerated, hazmat, or high-value cargo with unique risks.",
    icon: "❄️",
  },
];

const coverageOptions = [
  {
    title: "Auto Liability",
    desc: "Federally required coverage for bodily injury and property damage",
    img: "url('/general-freight.jpeg')",
  },
  {
    title: "Physical Damage",
    desc: "Pays for repairs or replacement of your tractor-trailer",
    img: "url('/collision.png')",
  },
  {
    title: "Motor Truck Cargo",
    desc: "Protects freight in your trailer against loss or damage",
    img: "url('/motor-truck-cargo.png')",
  },
  {
    title: "General Liability",
    desc: "Covers incidents off the road, like at docks or warehouses",
    img: "url('/automobiles.png')",
  },
  {
    title: "Workers Compensation",
    desc: "Protects drivers and staff from workplace injuries",
    img: "url('/leased-operator.png')",
  },
  {
    title: "Optional Endorsements",
    desc: "Reefer breakdown, hazmat liability, and more",
    img: "url('/pharmaceuticals.jpeg')",
  },
];

const reasons = [
  {
    title: "Tractor-Trailer Expertise",
    desc: "Expertise in insuring tractor-trailers, 18-wheelers, and fleets nationwide with tailored solutions.",
    icon: "🚛",
  },
  {
    title: "Top-Rated Carriers",
    desc: "Access to top-rated carriers offering competitive semi truck insurance rates.",
    icon: "⭐",
  },
  {
    title: "Fast Filings & Certificates",
    desc: "Quick filings and certificates to keep your trucks loaded and on the road without delays.",
    icon: "⚡",
  },
  {
    title: "Flexible Policies",
    desc: "Flexible policies designed for owner-operators, leased drivers, and fleets of all sizes.",
    icon: "📑",
  },
  {
    title: "FMCSA Compliance",
    desc: "Guidance to help keep your FMCSA authority in good standing and operations fully compliant.",
    icon: "✅",
  },
];

function SemiTruckInsurance() {
  return (
    <AppLayout>
      <Herosection />
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl mt-20 font-extrabold text-center drop-shadow-xl z-10"
        variants={fadeInUp}
      >
        Semi Truck Insurance
      </motion.h2>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Semi trucks — the 18-wheelers, tractor-trailers, and big rigs you see on
        every highway — are the backbone of freight transportation. With their
        size, power, and constant miles, semis face unique risks that demand
        specialized protection. At Truck Insurance USA, we provide **semi truck
        insurance** tailored to the needs of long-haul carriers, regional
        fleets, and independent drivers.
      </motion.p>

      {/* Why Semi Truck Insurance Matters */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Why Semi Truck Insurance Matters
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        A single accident involving a semi can cost hundreds of thousands — or
        even millions — of dollars. From multi-vehicle collisions to cargo
        damage, the risks are greater than with smaller trucks. Semi truck
        insurance ensures you stay compliant with FMCSA requirements while
        protecting your business from devastating financial loss.
      </motion.p>

      {/* What’s Covered in a Semi Truck Policy? */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        What’s Covered in a Semi Truck Policy?
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Semi truck insurance is built for heavy-duty risks and includes:
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

      {/* Who Needs Workers Comp? */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Who Needs Semi Truck Insurance?
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
        description="We know semi trucks are high-value assets with high exposure. That’s why we deliver protection that works as hard as your fleet:"
      />

      {/* Get a Free Auto Liability Insurance Quote */}
      <GetFreeQuoteCTA
        title="Get a Free Semi Truck Insurance Quote"
        descriptionBeforeCTA="Your semi trucks are more than vehicles — they’re your livelihood. Protect them with insurance built for the road ahead. Call Truck Insurance USA at"
        descriptionAfterCTA="or fill out our online form today for a free quote. Truck Insurance USA — Big Coverage for America’s Biggest Trucks."
      />
    </AppLayout>
  );
}

export default SemiTruckInsurance;

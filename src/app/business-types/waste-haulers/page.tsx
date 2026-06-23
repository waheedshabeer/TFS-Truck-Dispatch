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
    img: "url('/injury.jpeg')",
  },
  {
    title: "Physical Damage",
    desc: "Pays for repairs or replacement of your tractor-trailer",
    img: "url('/labour.jpeg')",
  },
  {
    title: "Motor Truck Cargo",
    desc: "Protects freight in your trailer against loss or damage",
    img: "url('/browns.jpeg')",
  },
  {
    title: "General Liability",
    desc: "Covers incidents off the road, like at docks or warehouses",
    img: "url('/cargos.jpeg')",
  },
  {
    title: "Workers Compensation",
    desc: "Protects drivers and staff from workplace injuries",
    img: "url('/labour-work.jpeg')",
  },
  {
    title: "Pollution Liability",
    desc: "Available for spills, dust, or hazardous debris",
    img: "url('/pollutionss.jpeg')",
  },
];

const risks = [
  {
    title: "Frequent Stops",
    desc: "Daily stops in busy streets and neighborhoods increase the risk of incidents.",
    icon: "🛑",
  },
  {
    title: "Pedestrian & Property Risk",
    desc: "Accidents involving pedestrians or property damage can lead to major claims.",
    icon: "🚸",
  },
  {
    title: "Vehicle Wear & Tear",
    desc: "Constant daily routes put heavy strain on trucks, leading to breakdowns and costs.",
    icon: "🔧",
  },
  {
    title: "Hazardous Hauling",
    desc: "Transporting hazardous or contaminated waste creates unique liability exposures.",
    icon: "☣️",
  },
  {
    title: "Contract Compliance",
    desc: "Municipal and state contracts often require strict insurance and proof of coverage.",
    icon: "📜",
  },
];

const reasons = [
  {
    title: "Sanitation Fleet Expertise",
    desc: "Specialized experience insuring garbage, recycling, and sanitation fleets of all sizes.",
    icon: "🚛",
  },
  {
    title: "Custom Hauler Programs",
    desc: "Tailored insurance solutions for private contractors and municipal haulers.",
    icon: "⚙️",
  },
  {
    title: "Competitive Pricing",
    desc: "Access to top-rated carriers offering cost-effective insurance options.",
    icon: "💲",
  },
  {
    title: "Fast Certificates",
    desc: "Quick turnaround on insurance certificates to meet contract requirements.",
    icon: "⚡",
  },
  {
    title: "Nationwide Coverage",
    desc: "Compliance expertise and service available across the country.",
    icon: "🌎",
  },
];

const WasteHaulers = () => {
  return (
    <AppLayout>
      <Herosection />
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl mt-20 font-extrabold text-center drop-shadow-xl z-10"
        variants={fadeInUp}
      >
        Waste Haulers
      </motion.h2>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Waste haulers provide an essential service — keeping cities, towns, and
        businesses clean and safe. But operating garbage, recycling, or
        sanitation trucks comes with high risks, strict regulations, and
        constant public exposure. Truck Insurance USA builds coverage packages
        designed specifically for waste hauling operations.
      </motion.p>

      {/* Compliance Made Easy */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Compliance Made Easy
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Most municipalities and waste management contracts require proof of
        insurance before awarding routes. We provide fast certificates of
        insurance so you never miss an opportunity.
      </motion.p>

      {/* Coverages That Keep You Moving */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Coverages Tailored for Waste Haulers
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Our insurance programs are designed to meet the needs of garbage,
        recycling, and sanitation fleets:
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

      {/* The Risks Waste Haulers Face */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        The Risks Waste Haulers Face
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        From navigating residential neighborhoods to handling heavy loads, waste
        haulers deal with challenges that require specialized protection:
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

      {/* Why Expedited Carriers Choose Us */}
      <WhyChooseUs
        reasons={reasons}
        title="Why Choose Truck Insurance USA?"
        description="We specialize in insurance for high-risk trucking operations like waste hauling:"
      />

      {/* Get a Free Auto Liability Insurance Quote */}
      <GetFreeQuoteCTA
        title="Get a Free Waste Hauler Insurance Quote"
        descriptionBeforeCTA="Protect your waste hauling business with the right insurance package. Call Truck Insurance USA at"
        descriptionAfterCTA="or fill out our online form today for a free quote. Truck Insurance USA — Insurance That Keeps Communities Clean and Haulers Protected."
      />
    </AppLayout>
  );
};

export default WasteHaulers;

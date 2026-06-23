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
    title: "Seasonal ",
    desc: "Seasonal agricultural haulers",
    img: "url('/season.jpeg')",
  },
  {
    title: "Equipment",
    desc: "Heavy equipment movers",
    img: "url('/equip.jpeg')",
  },
  {
    title: "Refrigerated",
    desc: "Refrigerated and perishable goods carriers",
    img: "url('/refri.jpeg')",
  },
  {
    title: "Transporters",
    desc: "Auto transporters",
    img: "url('/multi.jpeg')",
  },
  {
    title: "Timber",
    desc: "Timber, logging, or forestry haulers",
    img: "url('/timber.jpeg')",
  },
  {
    title: "Entertainment",
    desc: "Special event and entertainment trucking",
    img: "url('/enter.jpeg')",
  },
];

const whoNeedsIt = [
  {
    title: "Unique Cargo",
    desc: "Assessing your unique cargo and routes",
    icon: "🛣️",
  },
  {
    title: "Meeting shipper",
    desc: "Meeting shipper, broker, or municipal requirements",
    icon: "🚛",
  },
  {
    title: "Adjusting coverage",
    desc: "Adjusting coverage limits based on load type",
    icon: "👤",
  },
  {
    title: "Specialized options ",
    desc: "Adding specialized options like reefer breakdown or pollution liability",
    icon: "🤝",
  },
  {
    title: "Flexible deductibles",
    desc: "Offering flexible deductibles for cost management",
    icon: "❄️",
  },
];

const reasons = [
  {
    title: "Niche Trucking Operations",
    desc: "Experience with non-traditional and niche trucking operations",
    icon: "💲",
  },
  {
    title: "Access to carriers",
    desc: "Access to carriers offering specialized endorsements",
    icon: "📋",
  },
  {
    title: "Tailored policies",
    desc: "Tailored policies that go beyond one-size-fits-all insurance",
    icon: "🚛",
  },
  {
    title: "Nationwide support",
    desc: "Nationwide support for both small and large operations",
    icon: "⚡",
  },
  {
    title: "Custom Quotes",
    desc: "Fast, custom quotes to get you covered quickly",
    icon: "💳",
  },
];

const NewVentureTrucking = () => {
  return (
    <AppLayout>
      <Herosection />
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl mt-20 font-extrabold text-center drop-shadow-xl z-10"
        variants={fadeInUp}
      >
        Other Trucking Operations
      </motion.h2>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Not every trucking business fits into a standard category. Maybe you
        haul specialized equipment, seasonal freight, or operate a unique fleet
        that doesn’t match the usual mold. At Truck Insurance USA, we design
        flexible insurance programs for trucking operations that fall outside
        the box.
      </motion.p>

      {/* Why New Ventures Struggle With Insurance */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Why Custom Coverage Matters
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Standard policies don’t always protect against the unique risks
        specialty haulers face. We create policies that align with your exact
        operation and cargo.
      </motion.p>

      {/* Encouragement for New Truckers */}

      {/* Coverage for New Ventures */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Examples of Specialized Trucking We Insure
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        We work with all kinds of trucking businesses, including those in niche
        markets:
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
        How We Build Flexible Policies
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

      {/* How We Help New Trucking Companies */}
      <WhyChooseUs
        reasons={reasons}
        title="Why Choose Truck Insurance USA?"
        description="We thrive on building solutions for trucking companies with unique needs:"
      />

      {/* Get a Free Auto Liability Insurance Quote */}
      <GetFreeQuoteCTA
        title="Get a Free New Venture Trucking Quote"
        descriptionBeforeCTA="Ready to launch your trucking company? Call Truck Insurance USA at"
        descriptionAfterCTA="or fill out our online form today for a fast, affordable quote. Truck Insurance USA — Helping Trucking Startups Hit the Road With Confidence."
      />
    </AppLayout>
  );
};

export default NewVentureTrucking;

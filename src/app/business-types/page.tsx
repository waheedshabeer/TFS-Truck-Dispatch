"use client";
import React from "react";
import AppLayout from "@/components/AppLayout";
import { motion } from "framer-motion";
import { cardHover, fadeInUp, staggerContainer } from "@/animations";
import WhyChooseUs from "@/components/WhyChooseUs";
import GetFreeQuoteCTA from "@/components/GetFreeQuoteCTA";
import Herosection from "../commercial-truck-insurance/herosection";

const whoNeedsIt = [
  {
    title: "Federal and State",
    desc: "Meet federal and state insurance requirements",
    icon: "🛣️",
  },
  {
    title: "Satisfy broker",
    desc: "Satisfy broker, shipper, and contract obligations",
    icon: "🚛",
  },
  {
    title: "Protect trucks",
    desc: "Protect trucks, cargo, and employees with the right mix of coverage",
    icon: "👤",
  },
  {
    title: "Avoiding Unnecessary",
    desc: "Save money by avoiding unnecessary or duplicate policies",
    icon: "🤝",
  },
  {
    title: "Fast Certificates",
    desc: "Get fast certificates of insurance specific to your operation",
    icon: "❄️",
  },
];

const coverageOptions = [
  {
    title: "New Venture Trucking",
    desc: "Helping startups and first-time DOT/MC holders get affordable coverage",
    img: "url('/men.jpeg')",
  },
  {
    title: "For-Hire Trucking",
    desc: " Policies for carriers moving freight under contract",
    img: "url('/gray.jpeg')",
  },
  {
    title: "Construction & Demolition",
    desc: "  Dump trucks, heavy haulers, and contractors working on job sites",
    img: "url('/dump-truck.jpeg')",
  },
  {
    title: "Expedited Delivery Service",
    desc: "Coverage for same-day and last-mile delivery operations",
    img: "url('/scene.jpeg')",
  },
  {
    title: "Waste Haulers",
    desc: "Specialized insurance for garbage, refuse, and recycling haulers",
    img: "url('/garbagee.jpeg')",
  },
  {
    title: "Hot Shot Trucking",
    desc: "Protection for dually and flatbed small-load operators",
    img: "url('/small-load.jpeg')",
  },
  {
    title: "Hazmat Haulers",
    desc: " High-risk coverage for hazardous materials transport",
    img: "url('/oil.jpeg')",
  },
  {
    title: "Other Trucking Operations",
    desc: "HCustomized policies for niche industries and unique operations",
    img: "url('/other.jpeg')",
  },
];

const reasons = [
  {
    title: "Multiple Trucking",
    desc: " Dedicated expertise across multiple trucking sectors",
    icon: "🚛",
  },
  {
    title: "Top-Rated Carriers",
    desc: "Access to top-rated carriers for competitive pricing",
    icon: "⭐",
  },
  {
    title: "Customized packages",
    desc: "Customized packages for startups, fleets, and niche haulers",
    icon: "⚡",
  },
  {
    title: "Nationwide",
    desc: "Support from quote to claim — nationwide",
    icon: "📑",
  },
];

function BusinessType() {
  return (
    <AppLayout>
      <Herosection />
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl mt-20 font-extrabold text-center drop-shadow-xl z-10"
        variants={fadeInUp}
      >
        Business Types
      </motion.h2>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Trucking isn’t one-size-fits-all. Each type of trucking operation faces
        unique risks, regulations, and insurance needs. At Truck Insurance USA,
        we design coverage packages tailored to the specific challenges of your
        business type.
      </motion.p>

      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Why Business Type Matters
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Insurance underwriters assess risk differently depending on what you
        haul, how far you drive, and how your operation is structured. By
        understanding your business type, we make sure you get coverage that is
        both compliant and cost-effective.
      </motion.p>

      {/* Why Semi Truck Insurance Matters */}

      {/* What’s Covered in a Semi Truck Policy? */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Who We Serve
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        We work with a wide variety of trucking businesses, including:
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
        Tailored Coverage Benefits
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
        title="Why Choose Truck Insurance USA?"
        description="We don’t believe in cookie-cutter policies. We build insurance programs that fit your business
model and your growth goals"
      />

      {/* Get a Free Auto Liability Insurance Quote */}
      <GetFreeQuoteCTA
        title="Protect Your Business Today"
        descriptionBeforeCTA="No matter your trucking business, we’ve got you covered. Call Truck Insurance USA at 909-275-7245 or complete our online form today for a "
        descriptionAfterCTA="free, customized quote. Truck
Insurance USA — Tailored Coverage for Every Trucking Operation  "
      />
    </AppLayout>
  );
}

export default BusinessType;

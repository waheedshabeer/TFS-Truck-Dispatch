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
    img: "url('/small.jpeg')",
  },
  {
    title: "Physical Damage",
    desc: "Pays for repairs or replacement of your tractor-trailer",
    img: "url('/box-truck.jpeg')",
  },
  {
    title: "Motor Truck Cargo",
    desc: "Protects freight in your trailer against loss or damage",
    img: "url('/cargo-box.jpeg')",
  },
  {
    title: "General Liability",
    desc: "Covers incidents off the road, like at docks or warehouses",
    img: "url('/incident.jpeg')",
  },
  {
    title: "Workers Compensation",
    desc: "Protects drivers and staff from workplace injuries",
    img: "url('/comp.jpeg')",
  },
  {
    title: "Optional Endorsements",
    desc: "Reefer breakdown, hazmat liability, and more",
    img: "url('/black.jpeg')",
  },
];

const everydayRisks = [
  {
    title: "Property Damage",
    desc: "A mover damages a client’s property during delivery, creating liability exposure.",
    icon: "🏠",
  },
  {
    title: "City Traffic Accidents",
    desc: "A box truck gets sideswiped in busy city traffic, leading to costly repairs and claims.",
    icon: "🚚",
  },
  {
    title: "Cargo Theft",
    desc: "Packages or cargo are stolen mid-route, resulting in financial loss and disruptions.",
    icon: "📦",
  },
  {
    title: "Injured Helper",
    desc: "A helper gets injured while unloading heavy items, raising medical and legal costs.",
    icon: "🩹",
  },
  {
    title: "Proof of Insurance",
    desc: "A contract requires proof of insurance before freight can be released, making coverage essential.",
    icon: "📄",
  },
];

const reasons = [
  {
    title: "Affordable Premiums",
    desc: "Cost-effective premiums designed for startups and local operators who need reliable protection.",
    icon: "💲",
  },
  {
    title: "Single Truck or Small Fleet",
    desc: "Flexible coverage available for single trucks or small fleets tailored to your business size.",
    icon: "🚚",
  },
  {
    title: "Fast Certificates",
    desc: "Quick certificates of insurance to help you secure contracts without delays.",
    icon: "⚡",
  },
  {
    title: "Specialized Programs",
    desc: "Custom programs for movers, couriers, and last-mile carriers with unique operational needs.",
    icon: "📦",
  },
  {
    title: "Nationwide Expertise",
    desc: "Nationwide reach with trucking-focused expertise you can trust.",
    icon: "🌎",
  },
];

function BoxTruckInsurance() {
  return (
    <AppLayout>
      <Herosection />
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl mt-20 font-extrabold text-center drop-shadow-xl z-10"
        variants={fadeInUp}
      >
        Box Truck Insurance
      </motion.h2>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Box trucks keep local businesses moving — from furniture movers and
        contractors to Amazon DSPs and last-mile delivery fleets. But one
        accident in traffic, a stolen truck, or an injured employee can put your
        operation at risk. At Truck Insurance USA, we design **box truck
        insurance** packages built for small businesses, contractors, and
        independent haulers.
      </motion.p>

      {/* Coverage That Fits Small Business Needs */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Coverage That Fits Small Business Needs
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Our policies are flexible and affordable — designed for contractors,
        couriers, and growing fleets:
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
        Everyday Risks Box Trucks Face
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Even smaller trucks face big risks in daily operations:
      </motion.p>
      <motion.div
        className="z-10 mt-6 max-w-7xl place-self-center justify-center items-center w-full mx-auto"
        variants={staggerContainer}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10"
          variants={staggerContainer}
        >
          {everydayRisks.map((item, index) => (
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
        title="Get a Free Box Truck Insurance Quote"
        descriptionBeforeCTA="Your trucks are the backbone of your business — let’s keep them protected. Call Truck Insurance USA at"
        descriptionAfterCTA="or fill out our online form today for a free, no-obligation quote. Truck Insurance USA — Coverage Built for Local Delivery and Small Business Success."
      />
    </AppLayout>
  );
}

export default BoxTruckInsurance;

"use client";
import React from "react";
import AppLayout from "@/components/AppLayout";
import { motion } from "framer-motion";
import { cardHover, fadeInUp, staggerContainer } from "@/animations";
import WhyChooseUs from "@/components/WhyChooseUs";
import GetFreeQuoteCTA from "@/components/GetFreeQuoteCTA";
import Herosection from "../../commercial-truck-insurance/herosection";

const reasons = [
  {
    title: "Shipper & Broker Expertise",
    desc: "We understand shipper and broker requirements, making sure your coverage meets their expectations.",
    icon: "📦",
  },
  {
    title: "Custom Limits",
    desc: "Tailored liability limits to match your specific contract obligations and secure the right deals.",
    icon: "📊",
  },
  {
    title: "Fast Certificates",
    desc: "Quick turnaround on certificates of insurance so you can secure loads without delay.",
    icon: "⚡",
  },
  {
    title: "Nationwide Network",
    desc: "Access to a nationwide network of carriers offering competitive rates and reliable coverage.",
    icon: "🌎",
  },
  {
    title: "Specialty Cargo Support",
    desc: "Coverage and support for hazmat, reefer, and specialty cargo operations.",
    icon: "🚛",
  },
];

const coverageOptions = [
  {
    title: "Dry Goods",
    desc: "Dry goods like packaged food, paper products, and consumer goods",
    img: "url('/dry-goods.png')",
  },
  {
    title: "Refrigerated Goods",
    desc: "Refrigerated items that may spoil if equipment fails",
    img: "url('/refrigerated-goods.jpeg')",
  },
  {
    title: "Auto Hauler Goods",
    desc: "Automobiles and heavy machinery",
    img: "url('/automobiles.png')",
  },
  {
    title: "Hazardous Goods",
    desc: "Hazardous materials requiring specialized coverage",
    img: "url('/hazardous-goods.png')",
  },
  {
    title: "High-Value Goods",
    desc: "High-value electronics, pharmaceuticals, or metals",
    img: "url('/pharmaceuticals.jpeg')",
  },
];

const checklist = [
  {
    title: "Hauling Under Contract",
    desc: "Do you haul goods under contract for brokers or shippers? Make sure your coverage matches their requirements.",
    icon: "📑",
  },
  {
    title: "Perishable & High-Value Loads",
    desc: "Do you transport perishable or high-value loads? Specialized cargo coverage helps protect against unique risks.",
    icon: "🥦",
  },
  {
    title: "Cross-State Hauling",
    desc: "Do you cross state lines where cargo claims are more common? Nationwide protection keeps you covered everywhere.",
    icon: "🛣️",
  },
  {
    title: "Contract Coverage Requirements",
    desc: "Do your contracts specify minimum cargo coverage requirements? We help you meet or exceed them with confidence.",
    icon: "✅",
  },
];

const MotorTruckCargo = () => {
  return (
    <AppLayout>
      <Herosection />
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl mt-20 font-extrabold text-center drop-shadow-xl z-10"
        variants={fadeInUp}
      >
        Motor Truck Cargo Insurance
      </motion.h2>

      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Shippers trust you with their freight, and they expect proof that it’s
        protected. Motor Truck Cargo Insurance isn’t just a smart choice — it’s
        often a contract requirement. At Truck Insurance USA, we help you stay
        compliant and safeguard the loads that keep your business profitable.
      </motion.p>

      {/* What Is Motor Truck Cargo Insurance? */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        What Is Motor Truck Cargo Insurance?
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Motor Truck Cargo Insurance covers the goods you haul against loss or
        damage. Whether it’s stolen electronics, spoiled refrigerated items, or
        damaged building materials, cargo coverage ensures your business doesn’t
        absorb the loss.
      </motion.p>

      {/* Why Shippers Require Cargo Coverage? */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Why Shippers Require Cargo Coverage?
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Many freight brokers and shippers demand cargo insurance before they’ll
        work with you. Without it, you could lose contracts and steady revenue
        streams. Cargo coverage shows clients you’re professional, reliable, and
        ready for business.
      </motion.p>

      {/* What Cargo Insurance Can Cover */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        What Cargo Insurance Can Cover
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Coverage can be tailored to the type of freight you haul. Examples
        include:
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

      {/* Checklist: Do You Need Cargo Coverage? */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Checklist: Do You Need Cargo Coverage?
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        If you answer YES to any of these, you need Motor Truck Cargo Insurance:
      </motion.p>
      <motion.div
        className="z-10 mt-6 max-w-7xl place-self-center justify-center items-center w-full mx-auto"
        variants={staggerContainer}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 z-10"
          variants={staggerContainer}
        >
          {checklist.map((item, index) => (
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
      <WhyChooseUs title="Why Choose Truck Insurance USA?" reasons={reasons} />

      {/* Get a Free Auto Liability Insurance Quote */}
      <GetFreeQuoteCTA
        title="Get a Free Motor Truck Cargo Insurance Quote"
        descriptionBeforeCTA="Protect your loads, protect your contracts, and protect your business. Call Truck Insurance USA at"
        descriptionAfterCTA="or fill out our online form to request a free quote today. Truck Insurance USA — Keeping Your Cargo Covered from Dock to Delivery."
      />
    </AppLayout>
  );
};

export default MotorTruckCargo;

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
    desc: "Required by FMCSA to activate your authority",
    img: "url('/miror.jpeg')",
  },
  {
    title: "Physical Damage",
    desc: "Protects your truck investment",
    img: "url('/phyy.jpeg')",
  },
  {
    title: "Cargo Coverage",
    desc: "Required by many brokers and shippers",
    img: "url('/brokerss.jpeg')",
  },
  {
    title: "General Liability",
    desc: "Covers business risks outside of driving",
    img: "url('/coverr.jpeg')",
  },
  {
    title: "Workers Compensation",
    desc: "Needed if you plan to hire drivers or staff",
    img: "url('/helpings.jpeg')",
  },
];

const reasons = [
  {
    title: "Affordable New Venture Policies",
    desc: "Cost-effective policies designed specifically for first-time DOT/MC authorities starting out.",
    icon: "💲",
  },
  {
    title: "Step-by-Step Compliance Guidance",
    desc: "Expert guidance through FMCSA and state compliance requirements to keep you on track.",
    icon: "📋",
  },
  {
    title: "Carrier Access for New Ventures",
    desc: "Access to carriers that welcome and support new ventures in the trucking industry.",
    icon: "🚛",
  },
  {
    title: "Fast Filings & Certificates",
    desc: "Quick filings and certificates of insurance to activate contracts without delay.",
    icon: "⚡",
  },
  {
    title: "Flexible Payment Options",
    desc: "Flexible payment solutions designed to help you manage cash flow effectively.",
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
        New Venture Trucking
      </motion.h2>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Starting your own trucking company is exciting — but it can also feel
        overwhelming. Between FMCSA filings, DOT authority, and finding loads,
        the last thing you need is confusion about insurance. At Truck Insurance
        USA, we make it simple for new ventures to get insured and on the road
        quickly.
      </motion.p>

      {/* Why New Ventures Struggle With Insurance */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Why New Ventures Struggle With Insurance
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Most insurance carriers see new trucking companies as high risk. Without
        driving history or a track record of safety, premiums can be higher and
        options limited. That’s where we come in.
      </motion.p>

      {/* Encouragement for New Truckers */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Encouragement for New Truckers
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Every big fleet once started as a single truck. With the right insurance
        partner, you can build a safe, profitable business. Our job is to make
        sure insurance doesn’t hold you back.
      </motion.p>

      {/* Coverage for New Ventures */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Coverage for New Ventures
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Even as a startup, you’ll need several core coverages to operate legally
        and protect your business:
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

      {/* How We Help New Trucking Companies */}
      <WhyChooseUs
        reasons={reasons}
        title="How We Help New Trucking Companies"
        description="We know the challenges startups face, and we’re here to help you succeed from day one:"
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

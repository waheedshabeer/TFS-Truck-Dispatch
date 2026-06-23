"use client";
import React from "react";
import AppLayout from "@/components/AppLayout";
import { motion } from "framer-motion";
import { cardHover, fadeInUp, staggerContainer } from "@/animations";
import WhyChooseUs from "@/components/WhyChooseUs";
import GetFreeQuoteCTA from "@/components/GetFreeQuoteCTA";
import Herosection from "../../commercial-truck-insurance/herosection";

const realWorldExamples = [
  {
    title: "A customer slips and falls in your office",
    desc: "general liability covers medical costs.",
  },
  {
    title: "Your employee damages property while unloading cargo",
    desc: "Coverage pays for repairs.",
  },
  {
    title: "A competitor sues for advertising-related claims",
    desc: "coverage helps with legal defense.",
  },
  {
    title: "A visitor is injured in your yard or facility",
    desc: "Coverage pays for damages",
  },
];

const whoNeedsIt = [
  {
    title:
      "Freight brokers and shippers often require proof of coverage before doing business with you.",
    img: "url('/freight-brokers.png')",
  },
  {
    title:
      "Construction contracts frequently demand liability insurance to meet project requirements.",
    img: "url('/construction-site.png')",
  },
  {
    title:
      "Leased operators may be required to carry coverage under their lease agreements.",
    img: "url('/show.jpeg')",
  },
  {
    title:
      "Fleet owners with offices, yards, or warehouses gain added protection and peace of mind with coverage.",
    img: "url('/fleet-owners.png')",
  },
];

const reasons = [
  {
    title: "Custom Coverage Limits",
    desc: "Custom coverage limits tailored to meet shipper and broker demands with confidence.",
    icon: "📊",
  },
  {
    title: "Fast Certificates",
    desc: "Quick certificates of insurance provided for contracts so you can keep business moving.",
    icon: "⚡",
  },
  {
    title: "Top-Rated Carriers",
    desc: "Access to top-rated carriers offering competitive pricing without compromising coverage.",
    icon: "⭐",
  },
  {
    title: "Property Protection",
    desc: "Protection for your offices, terminals, and loading areas to safeguard business assets.",
    icon: "🏢",
  },
  {
    title: "Trucking Liability Support",
    desc: "Expert support designed specifically for trucking-related liability claims.",
    icon: "🚛",
  },
];

const GeneralLiability = () => {
  return (
    <AppLayout>
      <Herosection />
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl mt-20 font-extrabold text-center drop-shadow-xl z-10"
        variants={fadeInUp}
      >
        General Liability Insurance
      </motion.h2>

      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Accidents don’t just happen on the road. A slip at your office, damage
        at a loading dock, or a lawsuit from a third party can cost your
        trucking business thousands. General Liability Insurance provides the
        protection you need against claims that go beyond auto accidents.
      </motion.p>

      {/* What Is General Liability Insurance? */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        What Is General Liability Insurance?
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        General Liability Insurance protects your business from third-party
        claims of bodily injury, property damage, or personal/advertising injury
        that aren’t caused by your trucks on the road. It’s often required by
        brokers, shippers, and contracts.
      </motion.p>

      {/* Why Trucking Businesses Need It? */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Why Trucking Businesses Need It?
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Even the safest trucking companies face risks beyond driving. Lawsuits
        can arise from simple accidents, and legal costs alone can cripple a
        small or mid-sized business. General liability ensures you can defend
        your company and continue operating.
      </motion.p>

      {/* Real World Examples */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Real World Examples
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Here’s how physical damage insurance protects truckers in real
        situations:
      </motion.p>
      <motion.div
        className="z-10 mt-6 max-w-7xl place-self-center justify-center items-center w-full mx-auto"
        variants={staggerContainer}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 z-10"
          variants={staggerContainer}
        >
          {realWorldExamples.map((item, index) => (
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

      {/* Who Needs It? */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Who Requires General Liability Coverage?
      </motion.h3>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 z-10 mt-6 max-w-7xl place-self-center justify-center items-center w-full mx-auto"
        variants={staggerContainer}
      >
        {whoNeedsIt.map((item, index) => (
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
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Why Choose Truck Insurance USA? */}
      <WhyChooseUs
        reasons={reasons}
        title="Why Choose Truck Insurance USA?"
        description="We understand that every trucking operation is different. We’ll build a general liability policy that fits your contracts and risks:"
      />

      {/* Get a Free Auto Liability Insurance Quote */}
      <GetFreeQuoteCTA
        title="Get a Free General Liability Insurance Quote"
        descriptionBeforeCTA="Protect your trucking business beyond the road. Call Truck Insurance USA at"
        descriptionAfterCTA="or complete our online form for a free, no-obligation quote. Truck Insurance USA — Covering the Risks That Liability on the Road Doesn’t."
      />
    </AppLayout>
  );
};

export default GeneralLiability;

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
    title: "Medical expenses for work-related injuries",
    img: "url('/hospital.png')",
  },
  {
    title: "Rehabilitation and therapy costs",
    img: "url('/rehab-cost.jpeg')",
  },
  {
    title: "Lost wages while recovering",
    img: "url('/lost-wages.png')",
  },
  {
    title: "Disability benefits if the driver cannot return to work",
    img: "url('/disability-benefits.png')",
  },
  {
    title: "Death benefits for families in the event of a fatal accident",
    img: "url('/death-benefits.png')",
  },
];

const whoNeedsIt = [
  {
    title: "Trucking Companies with Employees",
    desc: "Ideal for trucking companies with employees or multiple drivers who need reliable protection.",
    icon: "👥",
  },
  {
    title: "Fleets Across States",
    desc: "Perfect for fleets operating across state lines, ensuring compliance and coverage everywhere you haul.",
    icon: "🛣️",
  },
  {
    title: "Construction & Demolition Haulers",
    desc: "Designed for construction and demolition haulers managing large crews and higher risks.",
    icon: "🏗️",
  },
  {
    title: "New Ventures Hiring Staff",
    desc: "Great for new ventures hiring drivers and office staff who need essential coverage from day one.",
    icon: "🚀",
  },
  {
    title: "State-Mandated Coverage",
    desc: "For any trucking business required by state law to carry coverage to stay compliant and protected.",
    icon: "⚖️",
  },
];

const reasons = [
  {
    title: "State-by-State Expertise",
    desc: "Knowledge of state-by-state workers' comp requirements to ensure compliance wherever you operate.",
    icon: "📍",
  },
  {
    title: "Custom Programs",
    desc: "Tailored programs for fleets, contractors, and new ventures designed to fit unique needs.",
    icon: "⚙️",
  },
  {
    title: "Competitive Rates",
    desc: "Access to competitive rates from top carriers without compromising on coverage quality.",
    icon: "💲",
  },
  {
    title: "Fast Setup",
    desc: "Quick setup so your employees are covered immediately and operations stay on track.",
    icon: "⚡",
  },
  {
    title: "Dedicated Claims Support",
    desc: "Dedicated support to handle workers' comp claims efficiently and with care.",
    icon: "🤝",
  },
];

const WorkersCompensation = () => {
  return (
    <AppLayout>
      <Herosection />
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl mt-20 font-extrabold text-center drop-shadow-xl z-10"
        variants={fadeInUp}
      >
        Workers Compensation Insurance
      </motion.h2>

      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Behind every truck is a driver who keeps your business moving. When
        drivers or employees get hurt on the job, Workers Compensation Insurance
        makes sure they’re taken care of — and that your business avoids
        devastating financial exposure.
      </motion.p>

      {/* What Is Workers Compensation Insurance? */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        What Is Workers Compensation Insurance?
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Workers Compensation Insurance provides medical coverage, wage
        replacement, and rehabilitation benefits for employees injured while
        working. It also protects your business from lawsuits related to
        workplace injuries.
      </motion.p>

      {/* Why It Matters in Trucking? */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Why It Matters in Trucking?
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Trucking is physically demanding and comes with unique risks. From
        loading injuries to accidents on the road, drivers face hazards every
        day. Workers comp ensures they get the support they need while keeping
        your business compliant with state laws.
      </motion.p>

      {/* Why It Matters in Trucking? */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Driver-Focused Protection
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Your drivers are your most valuable asset. Workers compensation helps
        you attract and retain quality employees by showing them their safety
        and well-being are priorities.
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
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Who Needs Workers Comp? */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Who Needs Workers Comp?
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
        description="We make it simple to protect your team and your business:"
      />

      {/* Get a Free Auto Liability Insurance Quote */}
      <GetFreeQuoteCTA
        title="Get a Free Workers Compensation Insurance Quote"
        descriptionBeforeCTA="Take care of your drivers, and they’ll take care of your business. Call Truck Insurance USA at"
        descriptionAfterCTA="or complete our online form to request a free quote today. Truck Insurance USA — Protecting the People Who Keep America’s Trucks Rolling."
      />
    </AppLayout>
  );
};

export default WorkersCompensation;

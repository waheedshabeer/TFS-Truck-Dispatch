"use client";
import { cardHover, fadeInUp, staggerContainer } from "@/animations";
import AppLayout from "@/components/AppLayout";
import GetFreeQuoteCTA from "@/components/GetFreeQuoteCTA";
import WhyChooseUs from "@/components/WhyChooseUs";
import Herosection from "../../commercial-truck-insurance/herosection";
import { motion } from "framer-motion";
import { ArrowUpCircle, MapPin, Package, Truck } from "lucide-react";

const fmcsaRequirements = [
  {
    title: "General Freight",
    desc: "$750,000",
    img: "url('/flight.jpeg')",
  },
  {
    title: "Oil Transport",
    desc: "$1,000,000",
    img: "url('/oil-transport.png')",
  },
  {
    title: "Hazardous Materials",
    desc: "$5,000,000",
    img: "url('/hazardous-material.jpeg')",
  },
  {
    title: "Household Goods Movers",
    desc: "$300,000",
    img: "url('/household-goods-movers.png')",
  },
];

const commonQuestions = [
  {
    title: "Do I need liability if I’m leased to a carrier?",
    desc: "In most cases, the carrier provides it, but you may still need additional coverage.",
    icon: <Truck className="w-6 h-6 text-american-white" />,
  },
  {
    title: "What if I drive intrastate only?",
    desc: "States also require liability; limits vary by state.",
    icon: <MapPin className="w-6 h-6 text-american-white" />,
  },
  {
    title: "Can I raise my liability limits?",
    desc: "Yes, many shippers demand higher than federal minimums for contracts.",
    icon: <ArrowUpCircle className="w-6 h-6 text-american-white" />,
  },
  {
    title: "Does liability cover cargo?",
    desc: "No, cargo requires separate Motor Truck Cargo coverage.",
    icon: <Package className="w-6 h-6 text-american-white" />,
  },
];

const reasons = [
  {
    title: "FMCSA Filing Expertise",
    desc: "We understand FMCSA filing requirements and handle them for you, ensuring compliance and peace of mind.",
    icon: "📄",
  },
  {
    title: "Top-Rated Carriers",
    desc: "Access to multiple top-rated carriers, giving you the most competitive rates without sacrificing quality.",
    icon: "⭐",
  },
  {
    title: "Fast Certificates",
    desc: "Get certificates of insurance quickly so you can start hauling without unnecessary delays.",
    icon: "⚡",
  },
  {
    title: "Custom Policies",
    desc: "Tailored coverage options for hazmat, oil, and specialized freight to match your unique operations.",
    icon: "⚙️",
  },
  {
    title: "Support for All Fleets",
    desc: "Whether you’re a new venture or an established fleet, we provide support and solutions to fit your needs.",
    icon: "🤝",
  },
];

const AutoLiability = () => {
  return (
    <AppLayout>
      <Herosection />
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl mt-20 font-extrabold text-center drop-shadow-xl z-10"
        variants={fadeInUp}
      >
        Auto Liability Insurance
      </motion.h2>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Auto liability insurance is the foundation of every trucking policy —
        and it’s required by law. Without it, you cannot operate legally under
        FMCSA or DOT authority. At Truck Insurance USA, we help trucking
        companies, new ventures, and owner-operators secure the right liability
        coverage to stay compliant and protected.
      </motion.p>

      {/* What Is Auto Liability Insurance? */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        What Is Auto Liability Insurance?
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        This coverage pays for injuries or property damage that your truck
        causes in an accident. It does not cover your own truck — instead, it
        protects the public and satisfies federal requirements for trucking
        operations.
      </motion.p>

      {/* Why It Matters? */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Why It Matters?
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Without liability coverage, your trucking authority can be revoked,
        shippers won’t contract with you, and one accident could bankrupt your
        business. Liability insurance is more than compliance — it’s financial
        survival.
      </motion.p>

      {/* FMCSA Requirements */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        FMCSA Requirements
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        The Federal Motor Carrier Safety Administration requires minimum
        liability limits based on the type of freight you haul:
      </motion.p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 z-10 mt-6 max-w-7xl place-self-center justify-center items-center w-full mx-auto"
        variants={staggerContainer}
      >
        {fmcsaRequirements.map((item, index) => (
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
              <h4 className="text-lg">{item.title}</h4>
              <p className="text-5xl font-extrabold">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Common Questions */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Common Questions
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        We know truckers often have the same questions about liability coverage.
        Here are a few answers:
      </motion.p>
      <motion.div
        className="z-10 mt-6 max-w-7xl place-self-center justify-center items-center w-full mx-auto"
        variants={staggerContainer}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 z-10"
          variants={staggerContainer}
        >
          {commonQuestions.map((item, index) => (
            <motion.div
              key={index}
              className="text-left w-full md:max-w-md overflow-hidden break-words hyphens-auto text-wrap z-10"
              variants={fadeInUp}
            >
              <div className="flex gap-3 items-center">
                <div className="text-4xl">{item.icon}</div>
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
        title="Get a Free Auto Liability Insurance Quote"
        descriptionBeforeCTA="Stay compliant, stay protected, and stay on the road. Call Truck Insurance USA today at"
        descriptionAfterCTA="or fill out our online form for a fast, no-obligation quote. Truck Insurance USA — Your Partner in Trucking Liability Protection."
      />
    </AppLayout>
  );
};

export default AutoLiability;

"use client";
import { Star, ThumbsUpIcon } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  getResponsiveViewport,
} from "@/animations";
import HappyCustomers from "./HappyCostomers";
import TruckCoverageMap from "./TruckCoverageMap";

const reasons = [
  {
    title: "Industry Expertise",
    desc: "With over a decade of hands-on experience in the commercial trucking insurance sector, we understand the unique challenges and risks faced by trucking companies. Our deep industry knowledge ensures you get the best advice and coverage tailored to your needs.",
    icon: "🚚",
  },
  {
    title: "Personalized Support",
    desc: "We believe in providing a customer-first experience. Our team is available to offer tailored solutions and personalized guidance every step of the way. Whether it's choosing the right policy or handling claims, you can rely on us for prompt, attentive support.",
    icon: "🛠️",
  },
  {
    title: "Competitive Pricing",
    desc: "We offer cost-effective, flexible insurance plans that meet your budget while ensuring comprehensive coverage. Our team works with you to build a customized policy that balances quality and affordability, making sure you don’t compromise on protection.",
    icon: "💰",
  },
];

const TestimonialsSection = () => {
  return (
    <motion.section
      className="relative flex flex-col items-center w-full py-20 bg-american-gradient text-american-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={getResponsiveViewport()}
    >
      {/* Background Dim Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      {/* Truck Types Section */}
      <motion.h3
        className="text-3xl font-extrabold text-center text-american-white z-10"
        variants={fadeInUp}
      >
        Types of Trucks We Cover
      </motion.h3>

      <motion.p
        className="text-lg mt-6 text-center leading-relaxed max-w-3xl z-10"
        variants={fadeInUp}
      >
        We provide specialized insurance coverage for various types of trucks,
        ensuring comprehensive protection for your operations. Whether you
        operate dump trucks, box trucks, flatbeds, tankers, reefers, or
        long-haul semis, our tailored policies safeguard your business against
        potential risks, keeping you on the road with confidence.
      </motion.p>

      <TruckCoverageMap />

      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Why Choose TruckInsuranceUSA?
      </motion.h2>

      {/* Why Us Reasons Section */}
      <motion.div className="mt-16" variants={staggerContainer}>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10"
          variants={staggerContainer}
        >
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              className="text-center max-w-full text-american-white overflow-hidden break-words hyphens-auto text-wrap z-10 w-full md:max-w-md"
              variants={fadeInUp}
            >
              <div className="flex items-center justify-center w-full gap-3">
                <ThumbsUpIcon />
                <ThumbsUpIcon />
                <ThumbsUpIcon />
              </div>

              <h4 className="mt-2 text-lg font-bold">{item.title}</h4>
              <p className="mt-2 text-sm text-white/80">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold tracking-tight text-center drop-shadow-lg mt-16 z-10"
        variants={fadeInUp}
      >
        Happy Customers
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-lg mt-6 text-center leading-relaxed max-w-3xl text-american-white z-10"
        variants={fadeInUp}
      >
        Satisfied customers are our best advertisement! See what they have to
        say.
      </motion.p>

      {/* Star Icons */}
      <motion.div
        className="flex justify-center mt-6 gap-3"
        variants={fadeInUp}
      >
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="drop-shadow-lg text-3xl"
            fill="currentColor"
            stroke="none"
          />
        ))}
      </motion.div>

      <HappyCustomers />
    </motion.section>
  );
};

export default TestimonialsSection;

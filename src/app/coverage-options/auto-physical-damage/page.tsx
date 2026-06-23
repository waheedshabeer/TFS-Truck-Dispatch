"use client";
import React from "react";
import AppLayout from "@/components/AppLayout";
import { motion } from "framer-motion";
import { cardHover, fadeInUp, staggerContainer } from "@/animations";
import GetFreeQuoteCTA from "@/components/GetFreeQuoteCTA";
import WhyChooseUs from "@/components/WhyChooseUs";
import Herosection from "../../commercial-truck-insurance/herosection";

const reasons = [
  {
    title: "Best Rates",
    desc: "We shop multiple carriers to find the best rates for physical damage coverage, ensuring you save without compromising protection.",
    icon: "💲",
  },
  {
    title: "Flexible Deductibles",
    desc: "Choose from flexible deductible options so you can balance your premiums and protection according to your needs.",
    icon: "⚖️",
  },
  {
    title: "Fast Claim Support",
    desc: "Get back on the road quickly with our fast and reliable claim support service.",
    icon: "⚡",
  },
  {
    title: "Truck Coverage Options",
    desc: "Coverage available for both new and used trucks, whether financed or owned outright.",
    icon: "🚛",
  },
  {
    title: "Specialized Packages",
    desc: "Custom insurance packages designed for fleets as well as independent owner-operators.",
    icon: "📦",
  },
];

const realWorldExamples = [
  {
    title: "A hailstorm damages the cab roof and windshield",
    desc: "Comprehensive coverage pays for repairs.",
  },
  {
    title: "Your truck is stolen from a rest stop",
    desc: "Coverage pays for replacement.",
  },
  {
    title: "You slide on black ice and collide with a guardrail",
    desc: "Collision coverage pays for repairs.",
  },
  {
    title: "A vandal breaks into your truck, damaging the locks and dashboard",
    desc: "Coverage pays for repairs.",
  },
];

const coverageOptions = [
  {
    title: "Collision Coverage",
    desc: "Pays for damage to your truck if it collides with another vehicle or object.",
    img: "url('/mssg.jpeg')",
  },
  {
    title: "Comprehensive Coverage",
    desc: "Pays for damage from fire, theft, vandalism, weather, or other non-collision events.",
    img: "url('/truck-theft.png')",
  },
];

const AutoPhysicalDamage = () => {
  return (
    <AppLayout>
      <Herosection />
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl mt-20 font-extrabold text-center drop-shadow-xl z-10"
        variants={fadeInUp}
      >
        Auto Physical Damage Insurance
      </motion.h2>

      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Your truck isn’t just a vehicle — it’s your livelihood. Imagine waking
        up to find your rig stolen, vandalized, or totaled in an accident.
        Without physical damage coverage, the repair or replacement costs come
        straight out of your pocket. At Truck Insurance USA, we make sure you
        never face that risk alone.
      </motion.p>

      {/* What Is Auto Physical Damage Insurance? */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        What Is Auto Physical Damage Insurance?
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Auto Physical Damage Insurance protects your truck itself. Unlike
        liability (which pays for damage you cause to others), this coverage
        pays to repair or replace your vehicle after covered losses.
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
        Trucks are expensive assets. A totaled tractor could cost $100,000 or
        more to replace. Physical damage coverage ensures you don’t have to
        shoulder that cost yourself. It also helps satisfy lender requirements
        if your truck is financed or leased.
      </motion.p>

      {/* Who Needs It? */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Who Needs It?
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Any trucking business that owns or leases vehicles should carry physical
        damage coverage. Even if you’re leased to a carrier who provides
        liability, you’re usually responsible for insuring your own truck.
      </motion.p>

      {/* Types of Coverage Included */}
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        Types of Coverage Included
      </motion.h3>
      <motion.p
        className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
        variants={fadeInUp}
      >
        Physical damage coverage typically includes two key protections:
      </motion.p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 z-10 mt-6 max-w-7xl place-self-center justify-center items-center w-full mx-auto"
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

      {/* Why Choose Truck Insurance USA? */}
      <WhyChooseUs title="Why Choose Truck Insurance USA?" reasons={reasons} />

      {/* Get a Free Auto Liability Insurance Quote */}
      <GetFreeQuoteCTA
        title="Get a Free Auto Physical Damage Insurance Quote"
        descriptionBeforeCTA="Don’t let one accident or theft take your truck off the road for good. Call Truck Insurance USA at"
        descriptionAfterCTA="or fill out our online form to get a free quote today. Truck Insurance USA — Protecting the Trucks That Keep America Moving."
      />
    </AppLayout>
  );
};

export default AutoPhysicalDamage;

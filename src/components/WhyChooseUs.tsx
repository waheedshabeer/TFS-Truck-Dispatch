import { fadeInUp, staggerContainer } from "@/animations";
import { motion } from "framer-motion";
import { ThumbsUpIcon } from "lucide-react";
import React from "react";

interface WhyChooseUsProps {
  title: string;
  description?: string;
  reasons: {
    title: string;
    desc: string;
  }[];
}

const WhyChooseUs = (props: WhyChooseUsProps) => {
  const { title, reasons, description } = props;
  return (
    <>
      <motion.h3
        className="text-3xl font-extrabold text-center drop-shadow-xl z-10 mt-16"
        variants={fadeInUp}
      >
        {title}
      </motion.h3>
      {description && (
        <motion.p
          className="text-lg mt-6 text-center max-w-7xl z-10 place-self-center"
          variants={fadeInUp}
        >
          {description}
        </motion.p>
      )}
      <motion.div
        className="z-10 mt-6 max-w-7xl place-self-center justify-center items-center w-full mx-auto"
        variants={staggerContainer}
      >
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
    </>
  );
};

export default WhyChooseUs;

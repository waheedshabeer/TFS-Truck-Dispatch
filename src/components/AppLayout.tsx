"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <motion.section
      className="relative flex flex-col items-center w-full  bg-american-gradient text-american-white overflow-hidden"
      initial="hidden"
      animate="visible" // Fixed animation issue
    >
      <div className="absolute inset-0 bg-black/80 z-0"></div>
      <div className="relative z-10 w-full">{children}</div>
    </motion.section>
  );
};

export default AppLayout;

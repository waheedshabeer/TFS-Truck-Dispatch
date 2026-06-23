"use client";

import React from "react";
import { motion } from "framer-motion";

interface AppInputProps {
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  delay?: number;
  name?: string;
  className?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}

const AppInput: React.FC<AppInputProps> = ({
  type = "text",
  value,
  onChange,
  placeholder = "",
  error,
  delay = 0.6,
  name,
  inputMode,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min={type === "number" ? "0" : undefined}
        inputMode={inputMode}
        className={`w-full p-4 bg-white/10 border ${
          error ? "border-red-500" : "border-white/30"
        } rounded-md focus:ring-2 focus:ring-american-blue text-white text-lg placeholder-white/60 transition outline-none`}
        onWheel={(e) => type === "number" && e.currentTarget.blur()}
      />
      {error && <p className="text-red-400 text-left mt-1 text-sm">{error}</p>}
    </motion.div>
  );
};

export default AppInput;

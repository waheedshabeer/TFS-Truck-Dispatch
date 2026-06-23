"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cardHover, fadeInUp, staggerContainer } from "@/animations";

const truckTypes = [
  // Row 1 (3 trucks) — evenly spaced and centered
  {
    name: "Box Trucks",
    icon: "/3d-box-truck.png",
    position: { top: "10%", left: "18%" },
  },
  {
    name: "Flatbed Trucks",
    icon: "/3d-flatbed-truck.png",
    position: { top: "10%", left: "48%" },
  },
  {
    name: "Refrigerated Trucks",
    icon: "/3d-refridgerated-truck.png",
    position: { top: "10%", left: "77%" },
  },

  // Row 2 (4 trucks) — evenly spaced and centered
  {
  name: "Dump Trucks",
  icon: "/md_dump-truck.svg",
  position: { top: "40%", left: "7%" },
},

  {
    name: "Tankers",
    icon: "/3d-oil-tanker.png",
    position: { top: "40%", left: "32%" },
  },
  {
    name: "Tow Trucks",
    icon: "/3d-tow-truck.png",
    position: { top: "40%", left: "62%" },
  },
  {
    name: "Semi-Truck",
    icon: "/3d-livestock-hauler.png",
    position: { top: "40%", left: "88%" },
  },

  // Row 3 (3 trucks) — evenly spaced and centered
  {
    name: "Cement Mixers",
    icon: "/3d-cement-mixer.png",
    position: { top: "70%", left: "18%" },
  },
  {
    name: "Car Haulers",
    icon: "/3d-car-hauler.png",
    position: { top: "70%", left: "48%" },
  },
  {
    name: "Garbage Trucks",
    icon: "/3d-waste-truck.png",
    position: { top: "70%", left: "77%" },
  },
];

const TruckCoverageMap = () => {
  return (
    <>
      <div className="hidden md:flex relative mt-16 w-full h-[600px] rounded-lg overflow-hidden">
        <Image
          src="/usa-map.webp"
          alt="Truck Coverage Map"
          fill
          className="object-cover"
          priority
        />

        {/* Background Dim Overlay */}
        <div className="absolute inset-0 bg-black/80 z-0"></div>

        {/* Overlay icons */}
        <motion.div
          className="absolute inset-0 z-20"
          variants={staggerContainer}
        >
          {truckTypes.map((type, index) => (
            <motion.div
              key={index}
              className="absolute z-30 flex flex-col items-center justify-center bg-white/10 p-2 w-32 h-32 rounded-full backdrop-blur-sm"
              style={{
                top: type.position.top,
                left: type.position.left,
                transform: "translate(-50%, -50%)",
              }}
              variants={fadeInUp}
              whileHover={cardHover}
            >
              <Image src={type.icon} alt={type.name} width={50} height={50} />
              <h4 className="mt-1 text-xs font-semibold text-white text-center drop-shadow">
                {type.name}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div className="mt-16 z-10 md:hidden" variants={staggerContainer}>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-6"
          variants={staggerContainer}
        >
          {truckTypes.map((type, index) => (
            <motion.div
              key={index}
              className="text-center flex flex-col items-center justify-center"
              variants={fadeInUp}
            >
              <Image src={type.icon} alt={type.name} width={80} height={80} />
              <h4 className="mt-2 text-lg font-bold text-white drop-shadow">
                {type.name}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default TruckCoverageMap;

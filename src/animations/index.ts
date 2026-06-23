import type { Variants, TargetAndTransition } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

export const cardHover: TargetAndTransition = {
  scale: 1.05,
  rotate: 2,
  transition: { duration: 0.3, ease: "easeOut" },
};

// Responsive viewport configuration for animations
export const getResponsiveViewport = () => {
  if (typeof window === "undefined") {
    return { once: true, amount: 0.2 };
  }

  // On mobile devices (screen width < 768px), trigger animations instantly
  const isMobile = window.innerWidth < 768;
  return {
    once: true,
    amount: isMobile ? 0.01 : 0.2, // 1% on mobile, 20% on desktop
  };
};

// Responsive intersection observer threshold
export const getResponsiveThreshold = () => {
  if (typeof window === "undefined") {
    return 0.25;
  }

  // On mobile devices, trigger instantly
  const isMobile = window.innerWidth < 768;
  return isMobile ? 0.01 : 0.25; // 1% on mobile, 25% on desktop
};

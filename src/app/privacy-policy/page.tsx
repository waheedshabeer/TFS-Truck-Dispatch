"use client";
import React from "react";
import AppLayout from "@/components/AppLayout";
import { motion } from "framer-motion";
import { fadeInUp } from "@/animations";
import Herosection from "../commercial-truck-insurance/herosection";

const PrivacyPolicy = () => {
  return (
    <AppLayout>
      <Herosection />
      <motion.div
        className="max-w-5xl mx-auto  text-left z-10 space-y-6"
        variants={fadeInUp}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold drop-shadow-xl"
          variants={fadeInUp}
        >
          Privacy Policy
        </motion.h2>

        <p className="text-lg">
          Welcome to our Truck App (“we”, “our”, or “us”). Your privacy is
          important to us. This Privacy Policy explains how we collect, use,
          disclose, and protect your information when you use our mobile
          application and related services (collectively, the “App”).
        </p>

        <h3 className="text-2xl font-bold mt-6">1. Information We Collect</h3>
        <p className="text-lg">
          We collect the following types of information to provide and improve
          our services:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>
            <strong>Personal Information:</strong> Such as your name, phone
            number, email address, and account details when you register or
            contact us.
          </li>
          <li>
            <strong>Vehicle and Trip Data:</strong> Details about your truck,
            routes, deliveries, and performance metrics.
          </li>
          <li>
            <strong>Location Data:</strong> Real-time GPS location when the app
            is active, to support navigation, dispatching, and tracking.
          </li>
          <li>
            <strong>Usage Data:</strong> Information on how you interact with
            the App, including log data, device type, and operating system.
          </li>
        </ul>

        <h3 className="text-2xl font-bold mt-6">2. How We Use Your Information</h3>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>To operate, maintain, and improve the App and our services.</li>
          <li>
            To provide real-time tracking, dispatching, and route management.
          </li>
          <li>
            To communicate with you about updates, support, or promotional
            content.
          </li>
          <li>To comply with legal obligations and prevent fraud or misuse.</li>
        </ul>

        <h3 className="text-2xl font-bold mt-6">3. How We Share Information</h3>
        <p className="text-lg">
          We may share your information in the following situations:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>
            With service providers who help operate our business (e.g., hosting,
            analytics).
          </li>
          <li>
            With logistics partners or dispatch managers if necessary for
            service delivery.
          </li>
          <li>If required by law, regulation, or court order.</li>
          <li>With your consent or at your direction.</li>
        </ul>

        <h3 className="text-2xl font-bold mt-6">4. Data Security</h3>
        <p className="text-lg">
          We use administrative, technical, and physical safeguards to protect
          your information from unauthorized access, loss, or misuse. However,
          no system is completely secure, and we cannot guarantee absolute
          protection.
        </p>

        <h3 className="text-2xl font-bold mt-6">5. Your Choices</h3>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>You can update or delete your account information at any time.</li>
          <li>
            You can disable location tracking through your device settings,
            though some app features may not function properly.
          </li>
          <li>
            You may opt out of marketing communications by following the
            unsubscribe link in our emails.
          </li>
        </ul>

        <h3 className="text-2xl font-bold mt-6">6. Children’s Privacy</h3>
        <p className="text-lg">
          Our App is not intended for use by individuals under the age of 18. We
          do not knowingly collect personal information from children.
        </p>

        <h3 className="text-2xl font-bold mt-6">7. Changes to This Policy</h3>
        <p className="text-lg">
          We may update this Privacy Policy from time to time. The updated
          version will be posted within the App with a new “Last Updated” date.
        </p>

        <h3 className="text-2xl font-bold mt-6">8. Contact Us</h3>
        <p className="text-lg">
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at:
        </p>
        <p className="font-semibold text-lg cursor-pointer">
info@truckinsuranceusa.com
        </p>
      </motion.div>
    </AppLayout>
  );
};

export default PrivacyPolicy;

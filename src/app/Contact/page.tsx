"use client";
import React, { useState } from "react";
import AppLayout from "@/components/AppLayout";
import { motion } from "framer-motion";
import { fadeInUp } from "@/animations";
import { Phone } from "lucide-react";
import { MapPin, FileText, Mail } from "lucide-react";
import GetFreeQuoteCTA from "@/components/GetFreeQuoteCTA";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { trackConversion, GOOGLE_ADS_CONVERSIONS } from "@/utils/gtag";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  // Helper function to check if device supports tel: links
  const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  };

  // Handle phone number click
  const handlePhoneClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    const phoneNumber = "909-275-7245";
    trackConversion(GOOGLE_ADS_CONVERSIONS.PHONE_909_275_7245);

    // On mobile devices, tel: link will work automatically
    if (isMobileDevice()) {
      // Let the default tel: link behavior work
      return;
    }

    // On desktop, prevent default and copy to clipboard
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(phoneNumber);
      toast.success("Phone number copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy phone number");
    }
  };

  // Handle email click
  const handleEmailClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    const emailAddress = "info@truckinsuranceusa.com";

    // On mobile devices, mailto: link will work automatically
    if (isMobileDevice()) {
      // Let the default mailto: link behavior work
      return;
    }

    // On desktop, prevent default and copy to clipboard
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(emailAddress);
      toast.success("Email address copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy email address");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!fullName.trim()) {
      toast.error("Please enter your full name");
      return;
    }
    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!phone.trim()) {
      toast.error("Please enter your phone number");
      return;
    }
    const digitsOnlyPhone = phone.replace(/\D/g, "");
    if (digitsOnlyPhone.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }
    if (!message.trim()) {
      toast.error("Please enter your message");
      return;
    }

    setSending(true);
    toast.info("Sending your message...");

    try {
      const payload = {
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        message: message.trim(),
      };

      const response = await fetch("/api/send-contact-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await response.json();

      if (json?.success) {
        trackConversion(GOOGLE_ADS_CONVERSIONS.WEBSITE_LEAD_FORM);
        // Reset form
        setFullName("");
        setEmail("");
        setPhone("");
        setMessage("");

        Swal.fire({
          title: "Success",
          text: "Your message has been sent successfully! We'll get back to you soon.",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        toast.error(
          json?.message || "Failed to send message. Please try again.",
        );
      }
    } catch (error) {
      console.log("handleSubmit error in Contact page ", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <AppLayout>
      <section className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-48 min-h-screen flex flex-col items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-red-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-10 w-56 sm:w-80 h-56 sm:h-80 bg-blue-600/20 rounded-full blur-3xl" />
        </div>
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold text-center text-white drop-shadow-lg relative z-10 mb-4 sm:mb-6"
          variants={fadeInUp}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-center text-gray-300 max-w-3xl mx-auto leading-relaxed relative z-10 mb-8 sm:mb-10 md:mb-12 px-2"
          variants={fadeInUp}
        >
          We’re here to make{" "}
          <span className="text-red-400 font-semibold">trucking insurance</span>{" "}
          simple. Whether you’re ready for a free quote or need expert help, our
          team of experienced<strong> truck insurance brokers</strong> is ready
          to guide you every step of the way.
        </motion.p>
        <motion.div
          id="form"
          className="relative z-10 w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-8 md:p-10 shadow-2xl mb-8 sm:mb-12"
          variants={fadeInUp}
        >
          <h2 className="text-lg  sm:text-xl md:text-2xl font-semibold text-white mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-200 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={sending}
                className="w-full px-4 py-3 bg-white/20 text-white rounded-lg border border-gray-400 focus:ring-2 focus:ring-red-500 outline-none placeholder-gray-300 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-gray-200 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={sending}
                className="w-full px-4 py-3 bg-white/20 text-white rounded-lg border border-gray-400 focus:ring-2 focus:ring-red-500 outline-none placeholder-gray-300 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-gray-200 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+1 123 456 7890"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={sending}
                className="w-full px-4 py-3 bg-white/20 text-white rounded-lg border border-gray-400 focus:ring-2 focus:ring-red-500 outline-none placeholder-gray-300 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-gray-200 font-medium mb-2">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell us how we can help you..."
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={sending}
                className="w-full px-4 py-3 bg-white/20 text-white rounded-lg border border-gray-400 focus:ring-2 focus:ring-red-500 outline-none placeholder-gray-300 resize-none text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: sending ? 1 : 1.03 }}
              whileTap={{ scale: sending ? 1 : 0.97 }}
              disabled={sending}
              className="w-full py-3 bg-[#B22335] text-white font-bold rounded-lg shadow-lg hover:bg-american-blue transition-all duration-300 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info + Map */}
        <motion.div
          className="relative z-10 w-full max-w-5xl lg:max-w-6xl 2xl:max-w-7xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-8 md:p-10 lg:p-12 shadow-2xl flex flex-col lg:flex-row gap-8 lg:gap-12"
          variants={fadeInUp}
        >
          {/* Left - Contact Info */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-6">
              Ways to Reach Us
            </h2>

            <ul className="space-y-4 text-gray-200 text-sm sm:text-base md:text-lg">
              <li className="flex items-start gap-3">
                <Phone className="text-white w-6 h-6 flex-shrink-0" />
                <span>
                  <strong>Phone:</strong> Call us at{" "}
                  <a
                    href="tel:9092757245"
                    onClick={handlePhoneClick}
                    className="text-red-400 cursor-pointer hover:text-red-300 transition-colors"
                  >
                    909-275-7245
                  </a>{" "}
                  for fast help.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-white text-xl" />
                <span>
                  <strong>Email:</strong> Send your questions to{" "}
                  <a
                    href="mailto:info@truckinsuranceusa.com"
                    onClick={handleEmailClick}
                    className="text-red-400 cursor-pointer hover:text-red-300 transition-colors"
                  >
                    info@truckinsuranceusa.com
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FileText className="text-white text-xl" />
                <span>
                  <strong>Online Form:</strong>Fill out our quick quote form and
                  we’ll get back to you fast
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-white text-xl" />
                <span>
                  <strong>Location:</strong> Serving truckers nationwide — no
                  matter where you’re based
                </span>
              </li>
            </ul>

            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mt-10 mb-4">
              Why Contact Truck Insurance USA?
            </h2>
            <ul className="list-disc list-inside text-gray-200 text-sm sm:text-base md:text-lg space-y-2">
              <li>Fast, no-obligation trucking insurance quotes</li>
              <li>Specialized expertise in all types of trucking operations</li>
              <li>Access to multiple top-rated carriers for the best rates</li>
              <li>
                Nationwide service for owner-operators, fleets, and new ventures
              </li>
              <li>Dedicated support from quote to claim</li>
            </ul>

            <div className="mt-8">
              <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mt-10 mb-4">
                Let’s Get You Covered
              </h1>
              <p className="text-gray-300 mb-4 text-sm sm:text-base md:text-lg">
                Your trucks are your livelihood. Don’t wait until an accident or
                contract requirement catches you unprepared. Reach out today and
                let’s protect your business.
              </p>
            </div>
          </div>

          {/* Right - Google Map */}
          <div className="w-full lg:w-1/2">
            <motion.div
              className="w-full h-64 sm:h-80 md:h-[450px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              variants={fadeInUp}
            >
              <iframe
                className="w-full h-full grayscale-[40%] hover:grayscale-0 transition-all duration-700"
                src="https://maps.google.com/maps?width=700&height=500&hl=en&q=Fontana&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                frameBorder="0"
                loading="lazy"
                allowFullScreen
              />
            </motion.div>
          </div>
        </motion.div>
        {/* Get a Free Auto Liability Insurance Quote */}
        <GetFreeQuoteCTA
          title=""
          descriptionBeforeCTA="Call  909-275-7245  now, or ■ complete our online form to get started. "
          descriptionAfterCTA="Truck Insurance USA — Insurance That Keeps You Moving."
        />
      </section>
    </AppLayout>
  );
};

export default Contact;

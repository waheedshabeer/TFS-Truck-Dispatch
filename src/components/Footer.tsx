"use client";
import { Clock, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
import { trackConversion, GOOGLE_ADS_CONVERSIONS } from "@/utils/gtag";

const EMAIL_ADDRESS = "info@truckinsuranceusa.com";

const Footer = () => {
  const isMobileDevice = () => {
    if (typeof window === "undefined") return false;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  };

  const handlePhoneClick = () => {
    trackConversion(GOOGLE_ADS_CONVERSIONS.PHONE_909_275_7245);
  };

  const handleEmailClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isMobileDevice()) return;
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      toast.success("Email address copied to clipboard!");
    } catch {
      toast.error("Failed to copy email address");
    }
  };
  return (
    <footer className="relative bg-american-gradient text-american-white w-full pb-[50px]">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
        {/* Left Section - Logo & About */}
        <div className="flex flex-col items-start">
          <a href="#" className="cursor-pointer">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={150}
              height={150}
              className="cursor-pointer rounded-full"
            />
          </a>
          <p className="mt-4 text-sm text-white max-w-xs">
            Protecting the Trucks That Keep America Moving. From owner-operators
            to large fleets, we deliver fast, reliable coverage built for the
            men and women who keep this country running. Get your free quote in
            minutes and stay protected mile after mile.
          </p>
        </div>

        {/* Center Section - Navigation */}
        <div>
          <h3 className="text-lg font-bold text-american-yellow">
            Other Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                href="/commercial-truck-insurance"
                className="hover:text-american-yellow"
              >
                Commercial Truck Insurance
              </Link>
            </li>
            <li>
              <Link
                href="/coverage-options"
                className="hover:text-american-yellow"
              >
                Coverage Options
              </Link>
            </li>
            <li>
              <Link
                href="/business-types"
                className="hover:text-american-yellow"
              >
                Business Types
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-american-yellow"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section - Contact Info & Newsletter */}
        <div className="space-y-4">
          <h3 className=" font-bold text-american-yellow">Contact Us</h3>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-american-red" />
            <p className="text-sm">16055 Foothill Blvd, Fontana CA 92335</p>
          </div>
          <div className="flex items-center gap-3">
            <EnvelopeIcon className="w-5 h-5 text-american-red " />
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              onClick={handleEmailClick}
              className="text-sm hover:text-american-yellow transition-colors cursor-pointer"
            >
              {EMAIL_ADDRESS}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-american-red" />
            <a
              href="tel:9092757245"
              onClick={handlePhoneClick}
              className="text-sm hover:text-american-yellow transition-colors cursor-pointer"
            >
              909-275-7245
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-american-red" />
            <p className="text-sm">Monday - Friday: 10:00 AM - 5:00 PM</p>
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-6">
            <h3 className="text-lg font-bold text-american-white">
              Subscribe to Our Newsletter
            </h3>

            <div className="mt-2 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-l-lg bg-american-white text-american-blue outline-none"
              />
              <button className="bg-american-red text-american-white px-6 py-3 rounded-r-lg font-bold">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import React, { Suspense, useEffect, useState } from "react";
import AppLayout from "@/components/AppLayout";
import { motion } from "framer-motion";
import { fadeInUp } from "@/animations";
import { useSearchParams } from "next/navigation";
import { ButtonPrimary } from "@/components/buttons/Buttons";
import AppInput from "@/components/AppInput";
import Dropdown from "@/components/Dropdown";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { trackConversion, GOOGLE_ADS_CONVERSIONS } from "@/utils/gtag";

type QuoteFormErrors = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  businessName: string;
  permissionToText: string;
  additionalInfo: string;
  zip: string;
  insuranceType: string;
};

const QuickQuoteRequestComponent = () => {
  const searchParams = useSearchParams();

  const [sending, setSending] = useState<boolean>(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [permissionToText, setPermissionToText] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [zip, setZip] = useState("");
  const [insuranceType, setInsuranceType] = useState("");
  const [showExtraFields, setShowExtraFields] = useState(false);

  const options = [
    { label: "Select Business Type", value: "" },
    { label: "New Venture Trucking", value: "new-venture-trucking" },
    { label: "For-Hire Trucking", value: "for-hire-trucking" },
    { label: "Construction and Demolition", value: "construction-demolition" },
    { label: "Expedited Delivery Service", value: "expedited-delivery" },
    { label: "Waste Haulers", value: "waste-haulers" },
    { label: "Hot Shot Trucking", value: "hot-shot-trucking" },
    { label: "Hazmat Haulers", value: "hazmat-haulers" },
    { label: "Other", value: "other" },
  ];

  const [errors, setErrors] = useState<QuoteFormErrors>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessName: "",
    permissionToText: "",
    additionalInfo: "",
    zip: "",
    insuranceType: "",
  });

  useEffect(() => {
    if (searchParams) {
      const source = searchParams.get("source");
      if (source === "fab") {
        setShowExtraFields(true);
      }
    }
  }, [searchParams]);

  useEffect(() => {
    if (searchParams) {
      const paramFromUrl = searchParams.get("data")
        ? JSON.parse(decodeURIComponent(searchParams.get("data")!))
        : null;

      console.log("paramFromUrl: ", paramFromUrl);
    }
  }, [searchParams]);

  const validateQuoteForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const digitsOnlyPhone = phone.replace(/\D/g, "");

    const newErrors: QuoteFormErrors = {
      firstName: firstName.trim() ? "" : "First name is required.",
      lastName: lastName.trim() ? "" : "Last name is required.",
      email: !email.trim()
        ? "Email is required."
        : emailRegex.test(email.trim())
          ? ""
          : "Email is invalid.",
      phone: !phone.trim()
        ? "Phone number is required."
        : digitsOnlyPhone.length < 10
          ? "Phone number is invalid."
          : "",
      businessName: businessName.trim() ? "" : "Business name is required.",
      permissionToText:
        permissionToText === "Yes" || permissionToText === "No"
          ? ""
          : "Please select permission to text.",
      additionalInfo: additionalInfo.trim() ? "" : "Text message is required.",
      zip:
        showExtraFields && (!zip || zip.length !== 5)
          ? "Zip code must be exactly 5 digits"
          : "",
      insuranceType:
        showExtraFields && !insuranceType
          ? "Please select an insurance type"
          : "",
    };

    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((val) => val === "");

    return {
      valid: isValid,
      message: "Please fix the highlighted fields.",
    };
  };

  const submitQuote = async () => {
    const validation = validateQuoteForm();
    if (!validation.valid) {
      toast(validation.message);
      return;
    }

    setSending(true);
    toast("Sending Your Information");

    try {
      const payload = {
        firstName,
        lastName,
        email,
        phone,
        businessName,
        permissionToText,
        additionalInfo,
        zip: showExtraFields ? zip : "",
        insuranceType: showExtraFields ? insuranceType : "",
      };

      const response = await fetch("/api/send-email", {
        method: "post",
        body: JSON.stringify(payload),
      });

      const json = await response.json();
      if (json?.success) {
        trackConversion(GOOGLE_ADS_CONVERSIONS.COMMERCIAL_AUTO_LEAD_FORM_2);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setBusinessName("");
        setPermissionToText("");
        setAdditionalInfo("");
        setZip("");
        setInsuranceType("");

        Swal.fire({
          title: "Success",
          text: "Quote Request Submitted Successfully",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log("submitQuote error in QuickQuoteRequestComponent ", error);
    } finally {
      setSending(false);
    }
  };

  return (
    <AppLayout>
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center drop-shadow-xl"
        variants={fadeInUp}
      >
        Quick Quote Request
      </motion.h2>

      <motion.div
        className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-xl shadow-sm border border-white/20 mt-16 mx-auto w-full max-w-6xl"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          initial="hidden"
          animate="visible"
        >
          {showExtraFields && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <input
                  type="number"
                  placeholder="Enter Zip Code"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  min="0"
                  className={`w-full p-4 bg-white/10 border ${
                    errors.zip ? "border-red-500" : "border-white/30"
                  } rounded-md focus:ring-2 focus:ring-american-blue text-white text-lg placeholder-white/60 transition outline-none`}
                  onWheel={(e) => e.currentTarget.blur()} // Prevents zooming on mobile
                />
                {errors.zip && (
                  <p className="text-red-400 text-left mt-1 text-sm">
                    {errors.zip}
                  </p>
                )}
              </motion.div>

              <motion.div
                className="relative w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Dropdown options={options} onChange={setInsuranceType} />
                {errors.insuranceType && (
                  <p className="text-red-400 text-left mt-1 text-sm">
                    {errors.insuranceType}
                  </p>
                )}
              </motion.div>
            </>
          )}

          <AppInput
            value={firstName}
            onChange={setFirstName}
            placeholder="First Name"
            error={errors.firstName}
          />

          <AppInput
            value={lastName}
            onChange={setLastName}
            placeholder="Last Name"
            error={errors.lastName}
          />

          <AppInput
            value={email}
            onChange={setEmail}
            placeholder="Email"
            type="email"
            error={errors.email}
          />

          <AppInput
            value={phone}
            onChange={setPhone}
            placeholder="Phone Number"
            type="tel"
            inputMode="tel"
            error={errors.phone}
          />

          <AppInput
            value={businessName}
            onChange={setBusinessName}
            placeholder="Business / Organization Name"
            className="md:col-span-2"
            error={errors.businessName}
          />

          {/* Permission To Text */}
          <div className="md:col-span-2">
            <label className="font-bold text-lg text-white">
              Permission To Text?
            </label>

            <div className="mt-2 flex gap-6">
              <label className="flex items-center space-x-2 text-white">
                <input
                  type="radio"
                  name="permissionToText"
                  value="Yes"
                  checked={permissionToText === "Yes"}
                  onChange={() => setPermissionToText("Yes")}
                  className="w-5 h-5"
                />
                <span>Yes</span>
              </label>

              <label className="flex items-center space-x-2 text-white">
                <input
                  type="radio"
                  name="permissionToText"
                  value="No"
                  checked={permissionToText === "No"}
                  onChange={() => setPermissionToText("No")}
                  className="w-5 h-5"
                />
                <span>No</span>
              </label>
            </div>

            {errors.permissionToText && (
              <p className="text-red-400 text-left mt-1 text-sm">
                {errors.permissionToText}
              </p>
            )}
          </div>

          {/* Disclaimer */}
          <div className="md:col-span-2 p-4 bg-white/10 border border-white/20 rounded-lg text-white/60">
            By submitting this form and signing up for texts, you consent to
            receive text messages from Auto Solutions Insurance Services LLC at
            the number provided, including automated messages and messages
            related to Customer Care. Consent is not a condition of purchase.
            Msg &amp; data rates may apply. Msg frequency varies. Unsubscribe at
            any time by replying STOP or clicking the unsubscribe link (where
            available). Reply HELP for help.
            <br />
            <a
              href="https://2autoinsurance.com/privacy-policy/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </a>{" "}
            &amp;{" "}
            <a
              href="https://2autoinsurance.com/text-messaging-terms-conditions/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Text Messaging Terms and Conditions"
            >
              Terms and Conditions
            </a>
          </div>

          {/* Text Message */}
          <div className="md:col-span-2">
            <textarea
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 resize-none h-48"
              placeholder="Text Message ( DOT# / Vehicle(s) / Driver(s) / Radius /
              Description of Operations )"
            />
            {errors.additionalInfo && (
              <p className="text-red-400 text-left mt-1 text-sm">
                {errors.additionalInfo}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <motion.div
            className="md:col-span-2 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <ButtonPrimary
              label="Submit"
              type="button"
              onClick={submitQuote}
              disabled={sending}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </AppLayout>
  );
};

const QuickQuoteRequest = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QuickQuoteRequestComponent />
    </Suspense>
  );
};

export default QuickQuoteRequest;

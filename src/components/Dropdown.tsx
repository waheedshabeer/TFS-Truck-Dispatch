"use client";

import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

type Option = { label: string; value: string };

interface DropdownProps {
  options: Option[];
  onChange: (value: string) => void;
}

const Dropdown = ({ options, onChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const isPlaceholder = selected?.label == options[0]?.label;

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const handleSelect = (option: Option) => {
    setSelected(option);
    setIsOpen(false);
    onChange?.(option?.value);
  };

  return (
    <div className="relative w-full">
      {/* Trigger Button */}
      <button
        type="button"
        onClick={toggleDropdown}
        className={`flex items-center justify-between w-full p-3 sm:p-4 bg-white/10 border border-white/30 rounded-md focus:ring-2 focus:ring-american-blue text-base sm:text-lg transition outline-none
          appearance-none min-h-[44px] touch-manipulation ${isPlaceholder ? "text-white/60" : "text-white"}`}
        style={{ fontSize: "16px" }}
      >
        <span className="text-left flex-1 truncate pr-2">{selected.label}</span>
        <ChevronDown className={`w-5 h-5 text-white flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop for mobile */}
          <div
            className="fixed inset-0 z-40 sm:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute w-full bg-american-gradient text-american-white rounded-md shadow-lg z-50 mb-1 bottom-full sm:bottom-auto sm:top-full sm:mt-1">
            <div className="absolute inset-0 bg-black/80 rounded-md -z-10" />
            <ul className="py-1 sm:py-2 text-base sm:text-lg text-left relative z-10 max-h-48 sm:max-h-64 overflow-y-auto overscroll-contain">
              {options.slice(1).map((option, index) => (
                <li key={index}>
                  <div
                    className={`px-3 sm:px-4 py-2.5 sm:py-2 hover:bg-american-red active:bg-american-red cursor-pointer min-h-[44px] flex items-center touch-manipulation ${
                      selected.value === option.value ? "bg-american-red" : ""
                    }`}
                    onClick={() => handleSelect(option)}
                  >
                    {option.label}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Dropdown;

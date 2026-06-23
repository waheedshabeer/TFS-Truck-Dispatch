"use client";
import { ButtonPrimaryProps } from "@/types/Component";

export const ButtonPrimary = (props: ButtonPrimaryProps) => {
  const { label, className, onClick, type, disabled } = props;

  return (
    <div className={className}>
      <button
        type={type}
        disabled={disabled}
        onClick={() => onClick?.()}
        className="w-full bg-american-red text-american-white font-bold py-3 sm:py-4 rounded-md text-base sm:text-lg transition-all duration-300 hover:bg-american-blue hover:scale-105 active:scale-95 min-h-[44px] touch-manipulation disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ fontSize: "16px" }}
      >
        {label}
      </button>
    </div>
  );
};

export const CustomButton = (props: ButtonPrimaryProps) => {
  const { label, className, onClick, type } = props;

  return (
    <div className={className}>
      <button
        type={type}
        onClick={() => onClick?.()}
        className="w-full bg-transparent font-bold py-4 rounded-md text-lg transition-all duration-300 hover:scale-105"
      >
        {label}
      </button>
    </div>
  );
};

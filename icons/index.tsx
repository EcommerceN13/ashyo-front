import React from "react";

export const ArrowIcon: React.FC<{ classList?: string }> = ({ classList }) => {
  return (
    <svg
      className={classList}
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.96484 1.26147L5.00112 4.71674L1.00004 1.30481"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;

/** @format */

import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: (e: any) => void;
  position?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

function Button({
  children,
  onClick,
  position,
  top,
  right,
  bottom,
  left,
}: Props) {
  return (
    <button
      type="submit"
      className={`btn btn-primary ${
        position && `${position} ${top} ${right} ${bottom} ${left}`
      } `}
      onClick={onClick}
    >
      <span className="font-medium"> {children}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 ml-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </button>
  );
}

export default Button;

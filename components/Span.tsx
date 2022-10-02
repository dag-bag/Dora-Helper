/** @format */

import React from "react";
interface Props {
  text: string;
  borderColor?: string;
}
function Span({ text, borderColor }: Props) {
  return (
    <span
      className={`rounded-lg shadow-xl px-2 py-1 border border-${
        borderColor || "black"
      } hover:opacity-60 cursor-pointer `}
    >
      {text}
    </span>
  );
}

export default Span;

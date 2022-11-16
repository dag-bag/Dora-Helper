/** @format */

import React from "react";

type Props = {
  options: string[];
};

function DropDown({ options }: Props) {
  return (
    <select className="select w-full max-w-xs">
      <option disabled selected>
        Pick your favorite Theme
      </option>
      {options.map((option, index) => {
        return <option key={index}>{option}</option>;
      })}
    </select>
  );
}

export default DropDown;

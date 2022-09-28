/** @format */

import React from "react";
import { refinedCategory } from "../pages/admin/data/option";

type Props = {
  title?: string;
  options: typeof refinedCategory;
  name: string;
  value: string;
  onchange: (e: any) => void;
  disabled?: boolean;
  currentCategory?: string;
};

function Select({
  title,
  options,
  name,
  value,
  onchange,
  disabled,
  currentCategory,
}: Props) {
  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <select
          disabled={disabled}
          className="form-select appearance-none block disabled:opacity-60
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding bg-no-repeat
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
          value={value}
          onChange={onchange}
          name={name}
        >
          <option selected={true}>{title}</option>
          {options.map((option) => {
            return name === "category" ? (
              <option key={option.category}>{option.category}</option>
            ) : (
              currentCategory === option.category &&
                option.subCategory.map((subCategory) => (
                  <option key={subCategory}>{subCategory}</option>
                ))
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default Select;

/** @format */

import React from "react";
interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  name: string;
}
function InputField({
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
  name,
}: InputFieldProps) {
  return (
    <div>
      <label className="sr-only" htmlFor={label}>
        {name}
      </label>
      <input
        className="w-full p-3 text-sm border-gray-200 rounded-lg"
        placeholder={placeholder}
        type={type}
        id={label}
        onChange={onChange}
        value={value}
        name={label}
      />
      <p>{error}</p>
    </div>
  );
}

export default InputField;

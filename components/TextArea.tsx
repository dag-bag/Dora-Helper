/** @format */

import React from "react";

type Props = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: any) => void;
  name: string;
};

function TextArea({ label, placeholder, value, onChange, name }: Props) {
  return (
    <div>
      <label className="sr-only" htmlFor={label}>
        {label}
      </label>
      <textarea
        className="w-full p-3 text-sm border-gray-200 rounded-lg"
        placeholder={placeholder}
        rows={8}
        id={label}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
}

export default TextArea;

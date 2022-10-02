/** @format */

import React from "react";
import Button from "./Button";

type Props = {
  code: string;
  title: string;
  subCategory: string;
  category: string;
};

function Code({ code, title, subCategory, category }: Props) {
  console.log(subCategory);
  const handleTextCopy = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };
  const [copy, setCopy] = React.useState(false);
  return (
    <div className="max-w-5xl m-auto">
      <div>
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-blue-400">
          {category}
        </p>
      </div>
      <div>
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-orange-400">
          {subCategory}
        </p>
      </div>
      <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
        {title}
      </h5>
      <pre
        className="language-markup 
    h-80 overflow-scroll text-sm relative bg-blue-500 rounded-xl p-3
    "
        tabIndex={0}
      >
        <Button
          position="sticky"
          top="top-0"
          right="right-0"
          onClick={() => handleTextCopy(code)}
        >
          {copy ? "Copied" : "Copy"}
        </Button>
        <code className=" text-white">{code}</code>
      </pre>
    </div>
  );
}

export default Code;

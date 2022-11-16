/** @format */

import React from "react";
import Button from "./Button";
import { BsArrowLeft } from "react-icons/bs";
import BackButton from "./BackButton";
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
    <div className="max-w-5xl m-auto ">
      <div className="flex space-x-4">
        <div className="badge badge-primary">{category}</div>

        <div className="badge badge-secondary">{subCategory}</div>
      </div>
      <h1 className="text-5xl font-bold my-4">{title}</h1>

      <div className="mockup-code relative p-10 ">
        <Button
          position="absolute"
          top="top-0"
          right="right-0"
          onClick={() => handleTextCopy(code)}
        >
          {copy ? "Copied" : "Copy"}
        </Button>
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

export default Code;

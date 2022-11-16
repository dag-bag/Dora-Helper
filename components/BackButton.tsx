/** @format */

import { useRouter } from "next/router";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
type Props = {
  Text: string;
};

function BackButton({ Text }: Props) {
  const router = useRouter();
  const backPageFunction = () => {
    router.back();
  };
  return (
    <button
      className="btn btn-primary left-20 top-2/4 fixed"
      onClick={backPageFunction}
    >
      <BsArrowLeft className="text-xl mr-2" /> {Text}
    </button>
  );
}

export default BackButton;

/** @format */

import Link from "next/link";
import React from "react";
import Span from "./Span";

type Props = {
  category: string;
  subCategory: string[];
  components?: number;
};

function Card({ category, subCategory, components }: Props) {
  console.log(subCategory);
  return (
    <Link href={`components/${category}`}>
      <a className="flex flex-col justify-between p-8 transition-shadow bg-white rounded-sm shadow-xl group hover:shadow-lg">
        <div>
          <h5 className="text-5xl font-bold text-indigo-600">{components}+</h5>
          <div className="pt-2 mt-4 border-t-2 border-indigo-100">
            <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">
              {category}
            </p>
          </div>
        </div>
        <div className="inline-flex items-center mt-16 text-indigo-600">
          <p className="text-lg font-medium flex flex-wrap space-x-2">
            {subCategory?.map((subC) => {
              return <Span text={subC} key={subC} borderColor={"blue"} />;
            })}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 ml-3 transition-transform transform group-hover:translate-x-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </a>
    </Link>
  );
}

export default Card;

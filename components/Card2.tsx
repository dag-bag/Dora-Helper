/** @format */

import Link from "next/link";
import React from "react";
import Span from "./Span";

type Props = {
  category: string;
  subCategory: string[];
  components?: number;
};

function Card2({ category, subCategory, components }: Props) {
  return (
    <Link href={`components/${category}`}>
      <div className="card w-96 bg-primary text-primary-content cursor-pointer">
        <div className="card-body text-center">
          <h2 className="card-title justify-center">{category}</h2>
          <p>Number of components - {components}</p>
          <div className="card-actions justify-center">
            {subCategory.map((category, index) => {
              return (
                <button className="btn" key={index}>
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card2;

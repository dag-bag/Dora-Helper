/** @format */

import React, { useState } from "react";
import InputField from "../../components/InputField";
import Select from "../../components/Select";
import TextArea from "../../components/TextArea";
import { addComponent } from "../../libs/crud/post.server";
import { category, refinedCategory } from "./data/option";

function AddComponent() {
  const [component, setComponent] = useState({
    title: "",
    category: "Category",
    subCategory: "Sub Category",
    code: "",
  });
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComponent((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <>
      {JSON.stringify(component)}
      <section className="bg-gray-100">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:py-12 lg:col-span-2">
              <p className="max-w-xl text-lg">
                At the same time, the fact that we are wholly owned and totally
                independent from manufacturer and other group control gives you
                confidence that we will only recommend what is right for you.
              </p>
              <div className="mt-8">
                <a href="" className="text-2xl font-bold text-pink-600">
                  0151 475 4450
                </a>
                <address className="mt-2 not-italic">
                  282 Kevin Brook, Imogeneborough, CA 58517
                </address>
              </div>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
              <form action="" className="space-y-4">
                <InputField
                  name="Title"
                  placeholder="Component Title"
                  value={component.title}
                  onChange={handleInput}
                  label="title"
                  type="text"
                  error=""
                />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Select
                    options={refinedCategory}
                    name="category"
                    value={component.category}
                    onchange={handleInput}
                    title="Category"
                  />
                  <Select
                    options={refinedCategory}
                    name="subCategory"
                    value={component.subCategory}
                    onchange={handleInput}
                    title="Sub Category"
                    disabled={component.category === "Category"}
                    currentCategory={component.category}
                  />
                </div>
                {/* <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <input
                      className="sr-only"
                      id="option1"
                      type="radio"
                      tabIndex={-1}
                    />
                    <label
                      htmlFor="option1"
                      className="block w-full p-3 border border-gray-200 rounded-lg"
                      tabIndex={0}
                    >
                      <span className="text-sm font-medium"> Option 1 </span>
                    </label>
                  </div>
                  <div>
                    <input
                      className="sr-only"
                      id="option2"
                      type="radio"
                      tabIndex={-1}
                    />
                    <label
                      htmlFor="option2"
                      className="block w-full p-3 border border-gray-200 rounded-lg"
                      tabIndex={0}
                    >
                      <span className="text-sm font-medium"> Option 2 </span>
                    </label>
                  </div>
                  <div>
                    <input
                      className="sr-only"
                      id="option3"
                      type="radio"
                      tabIndex={-1}
                    />
                    <label
                      htmlFor="option3"
                      className="block w-full p-3 border border-gray-200 rounded-lg"
                      tabIndex={0}
                    >
                      <span className="text-sm font-medium"> Option 3 </span>
                    </label>
                  </div>
                </div> */}
                <TextArea
                  name="code"
                  onChange={handleInput}
                  value={component.code}
                  label="code"
                  placeholder="Paste your code here"
                />
                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
                    onClick={(e) => {
                      addComponent(e, component);
                    }}
                  >
                    <span className="font-medium"> Send Code </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddComponent;

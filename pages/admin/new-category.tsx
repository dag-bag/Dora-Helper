/** @format */ /** @format */

import React, { useState } from "react";
import Button from "../../components/Button";
import InputField from "../../components/InputField";

import { addNewCategory } from "../../libs/crud/post.server";
import { removeValue } from "../../libs/form/crud";
import { handleInput } from "../../libs/handleForms";

function AddComponent() {
  let initialValue: string[] = [];
  const [component, setComponent] = useState({
    name: "",
    subCategory: initialValue,
  });
  const [subCategory, setSubCategory] = useState("");
  const addNewValue = (newValue: any) => {
    if (newValue === "") return null;
    let Value = { ...component };
    Value.subCategory = [...Value.subCategory, newValue];
    setComponent(Value);
    setSubCategory("");
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
                  name="name"
                  placeholder="New Category"
                  value={component.name}
                  onChange={(e) => {
                    handleInput(e, setComponent);
                  }}
                  label="name"
                  type="text"
                  error=""
                />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className=" flex justify-center items-center flex-wrap gap-2">
                    {component.subCategory.map((i, index) => {
                      return (
                        <span
                          className="rounded-lg shadow-xl px-2 py-1 border border-black hover:opacity-60 cursor-pointer"
                          key={index}
                          onClick={() => {
                            removeValue(component, index, setComponent);
                          }}
                        >
                          {i}
                        </span>
                      );
                    })}
                  </div>
                  <InputField
                    name="subcategory"
                    placeholder="New Subcategory Category"
                    value={subCategory}
                    onChange={(e) => {
                      setSubCategory(e.target.value);
                    }}
                    label="subcategory"
                    type="text"
                    error=""
                  />
                </div>

                <div className="mt-4 flex justify-between">
                  <Button
                    onClick={(e: any) => {
                      addNewCategory(e, component);
                    }}
                  >
                    Create New Category
                  </Button>
                  <Button
                    onClick={(e: any) => {
                      e.preventDefault();
                      addNewValue(subCategory);
                    }}
                  >
                    Add New Category
                  </Button>
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

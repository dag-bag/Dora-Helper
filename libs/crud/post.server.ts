/** @format */
import { CategoryProps, ComponentProps } from "../../types/component";

export const addComponent = async (e: any, component: ComponentProps) => {
  e.preventDefault();
  const { title, category, subCategory, code } = component;
  if (category === "Category" || subCategory === "Sub Category") return null;
  const res = await fetch("/api/component", {
    method: "POST",
    body: JSON.stringify({
      title,
      category,
      subCategory,
      code,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await res.json();
  console.log(result);
};

export const addNewCategory = async (e: any, category: CategoryProps) => {
  e.preventDefault();
  const { name, subCategory } = category;

  const res = await fetch("/api/category", {
    method: "POST",
    body: JSON.stringify({
      name,
      subCategories: subCategory,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await res.json();
  console.log(result);
};

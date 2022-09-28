/** @format */
import { ComponentProps } from "../../types/component";

export const addComponent = async (e: any, component: ComponentProps) => {
  e.preventDefault();
  const { title, category, subCategory, code } = component;
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

/** @format */

import { CategoryProps, ComponentProps } from "../../types/component";

export const removeValue = (
  arr: CategoryProps,
  index: number,
  setValue: (newArr: CategoryProps) => void
) => {
  let newArr = { ...arr };
  newArr.subCategory.splice(index, 1);
  setValue(newArr);
};

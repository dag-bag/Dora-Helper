/** @format */

export interface ComponentProps {
  title: string;
  category: string;
  subCategory: string;
  code: string;
}

export interface CategoryProps {
  name: string;
  subCategory: string[];
  components?: string[];
}

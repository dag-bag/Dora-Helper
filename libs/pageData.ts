/** @format */
import { atom } from "recoil";
let fetchCategories = async () => {
  const categories = await fetch("http://localhost:3000/api/category");
  const data = await categories.json();
  return data;
};
let themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];
const selectedTheme = atom({
  key: "selectedTheme",
  default: "cyberpunk",
});

export { fetchCategories, themes, selectedTheme };

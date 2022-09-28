/** @format */

import { ComponentProps } from "../types/component";
/** @format */
var mongoose = require("mongoose");
var { Schema } = mongoose;

const componentSchema = new Schema(
  {
    category: String,
    subCategory: String,
    title: String,
    code: String,
  },
  { timestamps: true }
);

mongoose.models = {};
export default mongoose.model("Component", componentSchema);

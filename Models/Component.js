/** @format */

import { ComponentProps } from "../types/component";
/** @format */
var mongoose = require("mongoose");
var { Schema } = mongoose;
const stringRequired = { type: String, required: true };

const componentSchema = new Schema(
  {
    category: stringRequired,
    subCategory: stringRequired,
    title: stringRequired,
    code: stringRequired,
    image: String,
  },
  { timestamps: true }
);

mongoose.models = {};
export default mongoose.model("Component", componentSchema);

/** @format */

import { ComponentProps } from "../types/component";
/** @format */
import mongoose from "mongoose";
var { Schema } = mongoose;

const categorySchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    subCategories: [String],
    components: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Component",
      },
    ],
  },
  { timestamps: true }
);

mongoose.models = {};
export default mongoose.model("Category", categorySchema);

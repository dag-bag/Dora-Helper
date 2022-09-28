/** @format */

/** @format */

import mongoose from "mongoose";
import { NextApiResponse } from "next";
import { NextApiRequest } from "next";

const connector = async () => {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGODB_URI as string);
  }
};
export default connector;

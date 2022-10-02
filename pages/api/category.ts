/** @format */

import connectDb from "../../libs/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import Category from "../../Models/Category";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // if (req.method === "GET") {
  // }
  switch (req.method) {
    case "GET":
      try {
        const components = await Category.find({});
        return res.status(200).json(components);
      } catch (error: any) {
        res.status(500).json({ error: error.message });
      }
      break;
    case "POST":
      try {
        const { name, subCategories } = req.body;

        const isExist = await Category.findOne({ name });
        if (isExist)
          return res.status(400).json({ error: "Category already exist" });
        // if (alreadyExists)
        //   return res.status(400).json({ error: "Category already exists" });
        const component = await Category.create({
          name,
          subCategories,
        });
        return res.status(201).json(component);
      } catch (error: any) {
        res.status(500).json({ error: error.message });
      }

    default:
      break;
  }
};
export default connectDb(handler);

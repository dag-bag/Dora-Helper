/** @format */

import connectDb from "../../libs/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import Component from "../../Models/Component";

import Category from "../../Models/Category";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // if (req.method === "GET") {
  // }
  switch (req.method) {
    case "GET":
      try {
        const components = await Component.find({});
        return res.status(200).json(components);
      } catch (error: any) {
        res.status(500).json({ error: error.message });
      }
      break;
    case "POST":
      try {
        const { title, category, subCategory, code } = req.body;
        const isExist = await Component.findOne({ title });
        if (isExist)
          return res.status(400).json({ error: "Component already exist" });
        const component = await Component.create(req.body);
        const postRelated = await Category.findOneAndUpdate(
          { name: category },
          {
            $push: { components: component },
          }
        );
        return res.status(201).json(component);
      } catch (error: any) {
        res.status(500).json({ error: error.message });
      }

    default:
      break;
  }
};
export default connectDb(handler);

/** @format */

import connectDb from "../../libs/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import Component from "../../Models/Component";
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
        const component = await Component.create(req.body);
        return res.status(201).json(component);
      } catch (error: any) {
        res.status(500).json({ error: error.message });
      }

    default:
      break;
  }
};
export default connectDb(handler);

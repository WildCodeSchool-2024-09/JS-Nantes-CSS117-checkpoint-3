import type { RequestHandler } from "express";

const browse: RequestHandler = async (req, res, next) => {
  res.send("");
};

const validate: RequestHandler = async (req, res, next) => {
  // your code here
};

export default {
  browse,
  validate,
};

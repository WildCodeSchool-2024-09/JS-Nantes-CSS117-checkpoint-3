import type { RequestHandler } from "express";
import boatRepository from "../boat/boatRepository";
import tileRepository from "./tileRepository";

const browse: RequestHandler = async (req, res, next) => {};

const validate: RequestHandler = async (req, res, next) => {};

export default {
  browse,
  validate,
};

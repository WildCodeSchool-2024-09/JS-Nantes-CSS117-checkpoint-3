import type { RequestHandler } from "express";
import boatRepository from "../boat/boatRepository";
import tileRepository from "./tileRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all boats from the database
    const tile = await tileRepository.readAll();

    // Respond with the boats in JSON format
    res.json(tile);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const validate: RequestHandler = async (req, res, next) => {};

export default {
  browse,
  validate,
};

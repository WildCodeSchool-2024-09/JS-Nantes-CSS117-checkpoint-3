import type { RequestHandler } from "express";
import tileRepository from "./tileRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all boats from the database
    const tiles = await tileRepository.readAll();

    // Respond with the boats in JSON format
    res.json(tiles);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const validate: RequestHandler = async (req, res, next) => {
  const { coord_y, coord_x } = req.body;
  const x = coord_x;
  const y = coord_y;
  if (x >= 0 || x <= 11 || y >= 0 || (y <= 5 && !x) || !y) {
    res.sendStatus(422);
  } else {
    next();
  }
};

export default {
  browse,
  validate,
};

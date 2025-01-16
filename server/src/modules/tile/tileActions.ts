import type { RequestHandler } from "express";
import tileRepository from "./tileRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all tiles from the database
    const tiles = await tileRepository.readAll();

    // Respond with the tiles in JSON format
    res.json(tiles);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const validate: RequestHandler = async (req, res, next) => {
  try {
    const { coord_x, coord_y } = req.body;
    const getTile = await tileRepository.readByCoordinates(coord_x, coord_y);

    if (getTile.length) {
      next();
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    console.error(err);
  }
};

export default {
  browse,
  validate,
};

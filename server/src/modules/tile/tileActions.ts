import type { RequestHandler } from "express";
import tileRepository from "./tileRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const tiles = await tileRepository.readAll();

    res.json(tiles);
  } catch (err) {
    next(err);
  }
};

/////// du coup j'ai pas reussi ////////////

const validate: RequestHandler = async (req, res, next) => {
  try {
    const { coordX, coordY } = req.body;
    const tiles = await tileRepository.readByCoordinates(coordX, coordY);

    if (tiles.length === 0) {
      res.status(422).json({ message: "Invalid coordinates: Tile not found." });
    }
    next();
  } catch (error) {
    console.error("Error during validation:", error);
    res
      .sendStatus(422)
      .json({ message: "Internal server error during validation." });
  }
};

export default {
  browse,
  validate,
};

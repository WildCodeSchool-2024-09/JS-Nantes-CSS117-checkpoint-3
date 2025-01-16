import type { RequestHandler } from "express";
import tileRepository from "./tileRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const tile = await tileRepository.readAll();
    res.json(tile);
  } catch (err) {
    console.error(err);
  }
};

const validate: RequestHandler = async (req, res, next) => {
  const { coord_x, coord_y } = req.body;

  try {
    const tileExist = await tileRepository.readByCoordinates(coord_x, coord_y);

    if (tileExist.length === 0) {
      res.sendStatus(422);
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

export default {
  browse,
  validate,
};

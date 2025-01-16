import type { RequestHandler } from "express";
import tileRepository from "./tileRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const answer = await tileRepository.readAll();

    if (!answer) {
      res.sendStatus(404);
    } else {
      res.json(answer);
    }
  } catch (err) {
    next(err);
  }
};

const validate: RequestHandler = async (req, res, next) => {
  try {
    const { coord_x, coord_y } = req.body;

    const checkPosition = await tileRepository.readByCoordinates(
      coord_x,
      coord_y,
    );

    if (!checkPosition || checkPosition.length === 0) {
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

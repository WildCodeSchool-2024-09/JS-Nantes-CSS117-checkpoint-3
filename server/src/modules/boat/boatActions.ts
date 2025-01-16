import { error } from "node:console";
import type { RequestHandler } from "express";
import boatRepository from "./boatRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const boats = await boatRepository.readAll();

    res.json(boats);
  } catch (err) {
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const { name, coord_x, coord_y } = req.body;
    const { id } = req.params;
    const boatAction = await boatRepository.update({
      name,
      coord_x,
      coord_y,
    });

    if (boatAction) {
      res.sendStatus(204);
    } else {
      res.status(404).send("err");
    }
  } catch {}
};

export default {
  browse,
  edit,
};

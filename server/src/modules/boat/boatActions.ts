import type { RequestHandler } from "express";

import boatRepository from "./boatRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all boats from the database
    if (req.query) {
      const boats = await boatRepository.readAll(req.query);
      res.json(boats);
      next();
    }
    const boats = await boatRepository.readAll({});
    res.json(boats);
    next();

    // Respond with the boats in JSON format
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const boat = {
      id: Number(req.params.id),
      name: req.body.name,
      coord_x: req.body.coord_x,
      coord_y: req.body.coord_y,
    };

    const affectedRows = await boatRepository.update(boat);

    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    next(error);
  }
};

export default {
  browse,
  edit,
};

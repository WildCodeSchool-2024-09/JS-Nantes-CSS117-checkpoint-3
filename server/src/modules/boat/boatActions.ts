import type { RequestHandler } from "express";

import boatRepository from "./boatRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all boats from the database
    const boats = await boatRepository.readAll();

    // Respond with the boats in JSON format
    res.json(boats);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  // your code here
  try {
    const id = Number(req.params.id);
    const { coord_x, coord_y, name } = req.body;
    const updateBoat = await boatRepository.update({
      id,
      coord_x,
      coord_y,
      name,
    });

    if (updateBoat) {
      res.sendStatus(204);
    } else {
      res.status(404);
    }
  } catch (err) {
    next(err);
  }
};

export default {
  browse,
  edit,
};

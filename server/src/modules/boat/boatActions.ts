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
  try {
    const { id } = req.params;
    const { name, coord_x, coord_y } = req.body;
    const updateBoat = await boatRepository.update({
      id: Number(id),
      name,
      coord_x,
      coord_y,
    });
    if (updateBoat) {
      res.status(204).end("Félicitation");
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    console.error(err);
  }
};

export default {
  browse,
  edit,
};

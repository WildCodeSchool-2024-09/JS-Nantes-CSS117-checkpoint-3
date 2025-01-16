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
    const { coord_x, coord_y, name } = req.body;
    const id = Number(req.params.id);
    const addBoats = await boatRepository.update({
      coord_x,
      coord_y,
      name,
      id,
    });
    if (addBoats) {
      res.sendStatus(204);
    } else {
      res.status(404).send("An error occured");
    }
  } catch (err) {
    console.error(err);
  }
};

export default {
  browse,
  edit,
};

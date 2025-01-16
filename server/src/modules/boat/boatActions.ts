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
    const { coord_x, coord_y } = req.body;

    const editBoats = await boatRepository.update({
      coord_x,
      coord_y,
      id,
    });

    if (editBoats) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404).send("An error occured");
    }
  } catch (err) {
    console.error(err);
  }
};

export default {
  browse,
  edit,
};

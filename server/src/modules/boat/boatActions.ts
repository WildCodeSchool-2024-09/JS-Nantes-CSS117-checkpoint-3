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
    const editJackSparow = await boatRepository.update({
      id,
      coord_x,
      coord_y,
    });
    if (editJackSparow) {
      res.sendStatus(204);
    } else {
      res.sendStatus(401).send("An error has occured");
    }
  } catch (err) {
    console.error(err);
  }
};

export default {
  browse,
  edit,
};

import type { RequestHandler } from "express";

import boatRepository from "./boatRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all boats from the database
    const boats = await boatRepository.readAll({
      name: req.query.name as string,
    });

    // Respond with the boats in JSON format
    res.json(boats);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    // find id given in params
    const id = req.params.id;
    const { coord_x, coord_y } = req.body;
    const boatToUpdate = {
      id: Number.parseInt(id),
      coord_x: Number.parseInt(coord_x),
      coord_y: Number.parseInt(coord_y),
    };
    // edit boat with given id
    const boat = await boatRepository.update(boatToUpdate);

    // Respond with the boat in JSON format
    if (boat) res.sendStatus(204);
    else res.sendStatus(400);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default {
  browse,
  edit,
};

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
    const boatId = Number(req.params.id);
    const { coord_x, coord_y } = req.body;
    await boatRepository.update({ id: boatId, coord_x, coord_y });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

export default {
  browse,
  edit,
};

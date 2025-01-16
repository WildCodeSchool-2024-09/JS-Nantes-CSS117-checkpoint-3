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

const edit: RequestHandler = async (req, res, next): Promise<void> => {
  try {
    // Exemple d'opération asynchrone
    const { id } = req.params;
    const data = req.body;

    const updatedBoat = await boatRepository.update(data);
    res.status(200).json({ message: "Boat updated successfully", updatedBoat });
  } catch (error) {
    next(error);
  }
};

export default {
  browse,
  edit,
};

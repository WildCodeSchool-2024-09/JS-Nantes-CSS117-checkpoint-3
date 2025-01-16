import type { RequestHandler } from "express";

import boatRepository from "./boatRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all boats from the database
    const boats = await boatRepository.readAll();

    // Respond with the boats in JSON format
    res.json(boats);
  } catch (err) {
    try {
      const boats = await boatRepository.readAll();

      res.json({ boats });
    } catch (err) {
      console.error("Error fetching boats or tiles:", err);
      res.status(500).json({ error: "Internal server error" });
    }
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  // your code here
};

export default {
  browse,
  edit,
};

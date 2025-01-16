import type { RequestHandler } from "express";

import boatRepository from "./boatRepository";

const browse: RequestHandler = async (req, res, next) => {};

const edit: RequestHandler = async (req, res, next) => {
  // Respond with the boats in JSON format
  const edit: RequestHandler = async (req, res) => {
    try {
      const { name, coord_x, coord_y } = req.body;
      const { id } = req.params;
      const editboat = await boatRepository.update({ name, coord_x, coord_y });

      if (editboat) {
        res.sendStatus(204);
      } else {
        res.status(204).send("An error occurred");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // try {
  //   const boats = await boatRepository.readAll();
  //   const category = {
  //     id: Number(req.params.id),
  //     name: req.body.name,
  //   };

  //   res.json({ boats });
  // } catch (err) {
  //   console.error("Error fetching boats or tiles:", err);
  //   res.status(204).json({ error: "Internal server error" });
  // }
};
// your code here

export default {
  browse,
  edit,
};

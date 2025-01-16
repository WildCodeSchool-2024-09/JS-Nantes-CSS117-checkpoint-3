import type { RequestHandler } from "express";
import boatRepository from "./boatRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const boats = await boatRepository.readAll();
    res.json(boats);
  } catch (err) {
    console.error(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const { name, coord_x, coord_y } = req.body;
    const { id } = req.params;

    const editboat = await boatRepository.update({ coord_x, coord_y, id });
    if (editboat) {
      res.status(204).send();
    } else {
      res
        .status(204)
        .send(`video game named ${req.body.name}has been created sucessfully`);
    }
  } catch (err) {
    res.status(204).send("Une erreur est survenue");
  }
};

export default { browse, edit };

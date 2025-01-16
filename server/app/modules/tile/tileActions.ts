import type { RequestHandler } from "express";
import tileRepository from "../../../src/modules/tile/tileRepository";

const validate: RequestHandler = async (req, res, next) => {
  const coordX = Number.parseInt(req.body.coord_x);
  const coordY = Number.parseInt(req.body.coord_y);
  if (coordX < 0 || coordY < 0 || coordX > 11 || coordY > 5)
    res.sendStatus(422);
  else {
    const tile = await tileRepository.readByCoordinates(coordX, coordY);

    tile.length ? res.sendStatus(204) : next();
  }
};

export default { validate };

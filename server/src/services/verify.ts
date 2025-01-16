import type { RequestHandler } from "express";

const checkFields: RequestHandler = (req, res, next) => {
  const { coord_x, coord_y } = req.body;
  if (!coord_x || !coord_y) {
    res.sendStatus(422);
  } else {
    next();
  }
};

export default { checkFields };

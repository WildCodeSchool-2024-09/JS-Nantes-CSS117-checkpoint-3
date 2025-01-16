import type { RequestHandler } from "express";
import tileRepository from "./tileRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const tile = await tileRepository.readAll();

    res.json(tile);
  } catch (err) {
    console.error(err);
  }
};

export default { browse };

import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import boatRepository from "./modules/boat/boatActions";

router.get("/api/boats", boatRepository.browse);

import gameActions from "./modules/game/gameActions";
import tileActions from "./modules/tile/tileActions";
import verify from "./services/verify";

/* ************************************************************************* */
router.get("/api/tiles", tileActions.browse);
router.put("/api/boats/:id", boatRepository.edit);
router.post("/api/games", verify.checkFields, gameActions.add);
export default router;

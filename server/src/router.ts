import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import boatActions from "./modules/boat/boatActions";
import gameActions from "./modules/game/gameActions";
import tileActions from "./modules/tile/tileActions";
import tileRepository from "./modules/tile/tileRepository";

router.get("/api/tile", tileActions.browse);

router.get("/api/boats", boatActions.browse);
router.put("/api/boats/:id", tileActions.validate, boatActions.edit);

router.post("/api/games", gameActions.add);

/* ************************************************************************* */

export default router;

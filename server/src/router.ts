import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import boatActions from "./modules/boat/boatActions";
import tilesActions from "./modules/tile/tileActions";

router.get("/api/boats", boatActions.browse);
router.get("/api/tiles", tilesActions.browse);

import tileActions from "../app/modules/tile/tileActions";
import gameActions from "./modules/game/gameActions";

router.post("/api/games", gameActions.add);

router.put("/api/boats/:id", tileActions.validate, boatActions.edit);

/* ************************************************************************* */

export default router;

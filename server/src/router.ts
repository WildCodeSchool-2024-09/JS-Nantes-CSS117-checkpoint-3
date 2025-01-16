import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import boatActions from "./modules/boat/boatActions";

router.get("/api/boats", boatActions.browse);

import tileActions from "./modules/tile/tileActions";

router.put("/api/boats/:id", tileActions.validate, boatActions.edit);

import gameActions from "./modules/game/gameActions";

router.post("/api/games", gameActions.add);

router.get("/api/tiles", tileActions.browse);
/* ************************************************************************* */

export default router;

import express from "express";

const router = express.Router();

import tileActions from "./modules/tile/tileActions";
/* ************************************************************************* */
router.get("/api/tile", tileActions.browse);
/* ************************************************************************* */

import boatActions from "./modules/boat/boatActions";

router.get("/api/boats", boatActions.browse);

// import gameActions from "./modules/game/gameActions";

// router.post("/api/games", gameActions.add);

/* ************************************************************************* */

export default router;

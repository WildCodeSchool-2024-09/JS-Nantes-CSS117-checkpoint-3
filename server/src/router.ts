import express from "express";

const router = express.Router();

import titleActions from "./modules/tile/tileActions";

router.get("/api/tiles", titleActions.browse);
router.post("/api/tiles", titleActions.browse);

import boatActions from "./modules/boat/boatActions";

router.get("/api/boats", boatActions.browse);

import gameActions from "./modules/game/gameActions";

router.post("/api/games", gameActions.add);

/* ************************************************************************* */

export default router;

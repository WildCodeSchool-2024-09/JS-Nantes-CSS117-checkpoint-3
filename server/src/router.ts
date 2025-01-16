import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import boatActions from "./modules/boat/boatActions";

router.get("/api/boats", boatActions.browse);

import gameActions from "./modules/game/gameActions";

router.post("/api/games", gameActions.add);

router.put("/api/boats/:id", boatActions.browse);

/* ************************************************************************* */
// router.get("/api/tiles", boatActions.browse);
export default router;

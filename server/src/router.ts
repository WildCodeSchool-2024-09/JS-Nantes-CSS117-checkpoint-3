import express from "express";

const router = express.Router();
import boatActions from "./modules/boat/boatActions";
//import gameActions from "./modules/game/gameActions";
import tileActions from "./modules/tile/tileActions";
router.get("/api/boats", boatActions.browse);
router.get("/api/tile", tileActions.browse);
router.put("/api/boats/:id", boatActions.edit);

//router.post("/api/games", gameActions.add);

/* ************************************************************************* */

export default router;

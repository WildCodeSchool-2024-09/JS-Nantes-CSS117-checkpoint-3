import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import boatActions from "./modules/boat/boatActions";
import tileActions from "./modules/tile/tileActions";

router.get("/api/boats", boatActions.browse);
router.put("/api/boats/:id", tileActions.validate, boatActions.edit);

router.get("/api/tiles", tileActions.browse);
router.post("/api/tiles", tileActions.validate, tileActions.browse);

/* ************************************************************************* */

export default router;

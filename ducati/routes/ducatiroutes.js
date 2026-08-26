import express from "express";
const router = express.Router();

import { home, discover, testDrive, customize } from "../controllers/ducaticontroller.js";

router.get("/", home);
router.get("/discover", discover);
router.get("/test-drive", testDrive);
router.get("/customize", customize);

export default router;
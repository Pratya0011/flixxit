import express from "express";
import {
  documentaryFlixxit,
  getTitleFlixxit,
  popularFlixxit,
  recomendedVideo,
  topRatedFlixxit,
  toptenFlixxit,
} from "./controllers/homeRouteController.js";
import { authenticateToken } from "../utils/Utils.js";

const router = express.Router();

router.get("/toprated",authenticateToken, topRatedFlixxit);
router.get("/popular", popularFlixxit);
router.get("/topten", toptenFlixxit);
router.get("/documentary", documentaryFlixxit);
router.get("/recomended", recomendedVideo);
router.get("/getTitle", getTitleFlixxit)

export default router;

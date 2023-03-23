import express from "express";
import {
  addWork,
  deleteWork,
  getAllWorks,
  getWork,
  updateWork,
} from "../controllers/workController.js";
import { uploadImage } from "../utils/imageUpload.js";

const router = express.Router();

router.route("/").post(uploadImage, addWork).get(getAllWorks);
router.route("/:id").get(getWork).patch(updateWork).delete(deleteWork);

export default router;

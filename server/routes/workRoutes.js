import express from "express";
import { protect } from "../controllers/authController.js";
import {
  addWork,
  deleteWork,
  getAllWorks,
  getWork,
  updateWork,
} from "../controllers/workController.js";
import { uploadImage } from "../utils/imageUpload.js";

const router = express.Router();

router.route("/").post(protect, uploadImage, addWork).get(getAllWorks);
router
  .route("/:id")
  .get(getWork)
  .patch(protect, updateWork)
  .delete(protect, deleteWork);

export default router;

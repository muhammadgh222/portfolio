import express from "express";
import { protect } from "../controllers/authController.js";
import {
  addExperience,
  deleteExperience,
  getAllExperiences,
  getExperience,
  updateExperience,
} from "../controllers/experienceController.js";

const router = express.Router();

router.route("/").post(protect, addExperience).get(getAllExperiences);
router
  .route("/:id")
  .get(getExperience)
  .patch(protect, updateExperience)
  .delete(protect, deleteExperience);

export default router;

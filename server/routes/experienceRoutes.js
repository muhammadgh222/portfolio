import express from "express";
import {
  addExperience,
  deleteExperience,
  getAllExperiences,
  getExperience,
  updateExperience,
} from "../controllers/experienceController.js";

const router = express.Router();

router.route("/").post(addExperience).get(getAllExperiences);
router
  .route("/:id")
  .get(getExperience)
  .patch(updateExperience)
  .delete(deleteExperience);

export default router;

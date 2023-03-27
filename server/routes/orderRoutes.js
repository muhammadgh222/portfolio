import express from "express";
import { protect } from "../controllers/authController.js";
import {
  createOrder,
  getAllOrders,
  getOrder,
} from "../controllers/orderController.js";

const router = express.Router();

router.route("/").get(protect, getAllOrders).post(createOrder);

router.get("/:id", getOrder);

export default router;

import express from "express";
import {
  createOrder,
  getAllOrders,
  getOrder,
} from "../controllers/orderController.js";

const router = express.Router();

router.route("/").get(getAllOrders).post(createOrder);

router.get("/:id", getOrder);

export default router;

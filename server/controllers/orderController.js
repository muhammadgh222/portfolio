import AsyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
import AppError from "../utils/AppError.js";

export const createOrder = AsyncHandler(async (req, res, next) => {
  const { name, email, phone, message } = req.body;
  const newOrder = await Order.create({ name, email, phone, message });

  res.status(201).json({
    status: "success",
    newOrder,
  });
});

export const getAllOrders = AsyncHandler(async (req, res, next) => {
  const orders = await Order.findAll({});

  res.status(200).json({
    status: "success",
    orders,
  });
});

export const getOrder = AsyncHandler(async (req, res, next) => {
  const order = await Order.findByPk(req.params.id);

  if (!order) {
    return next(new AppError("There is no such order", 404));
  }
  res.status(200).json({
    status: "success",
    order,
  });
});

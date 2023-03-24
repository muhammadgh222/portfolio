import AsyncHandler from "express-async-handler";

import Admin from "../models/adminModel.js";
import AppError from "../utils/AppError.js";
import { createSendToken } from "../utils/jwt.js";

export const signUp = AsyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const admin = await Admin.create({ email, password });

  createSendToken(admin, 201, res);
});

export const login = AsyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError("Please provide email and password", 400));
  }
  const admin = await Admin.findAll({
    where: { email },
    attributes: {
      include: ["password"],
    },
  });

  if (!admin || !admin.validPassword(password)) {
    return next(
      new AppError("You are not authorized to access this route!", 400)
    );
  }
  console.log(admin.validPassword(password));
  createSendToken(user, 200, res);
});

import AsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import { promisify } from "util";
import jwt from "jsonwebtoken";

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
  const admin = await Admin.findOne({
    where: { email },
    attributes: {
      include: ["password"],
    },
    raw: true,
  });
  if (!admin || !(await bcrypt.compare(password, admin.password))) {
    return next(
      new AppError("You are not authorized to access this route!", 400)
    );
  }
  createSendToken(admin, 200, res);
});

export const protect = AsyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(new AppError("Please login to access this route", 401));
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const currentAdmin = await Admin.findByPk(decoded.id);
  if (!currentAdmin) {
    return next(
      new AppError(
        "The user belonging to this token does no longer exist.",
        401
      )
    );
  }
  req.admin = currentAdmin;
  next();
});

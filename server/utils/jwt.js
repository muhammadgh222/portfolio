import jwt from "jsonwebtoken";

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export const createSendToken = (admin, statusCode, res) => {
  const token = signToken(admin.id);

  admin.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    admin,
  });
};

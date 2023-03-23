import AsyncHandler from "express-async-handler";
import os from "os";

export const validateAdmin = AsyncHandler(async (req, res, next) => {
  if (os.networkInterfaces()["Wi-Fi"][0].mac === "d0:53:49:10:6c:8b") {
    return next();
  } else {
    res.redirect("/");
  }
});

import express from "express";
import cors from "cors";

import ErrorHandler from "./utils/ErrorHandler.js";

// Routes
import workRoutes from "./routes/workRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import experienceRoutes from "./routes/experienceRoutes.js";
import adminRoutes from "./routes/authRoutes.js";
import DB from "./database.js";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/images", express.static("./images"));
// Routes
DB.sync()
  .then((result) => {})
  .catch((err) => {
    console.log(err);
  });

app.use("/api/v1/works", workRoutes);
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/experience", experienceRoutes);
app.use("/api/v1/users", adminRoutes);
// app.get("/api/v1/me", validateAdmin, (req, res, next) => {
//   res.send({
//     message: "Hi",
//   });
// });
app.use(ErrorHandler);

export default app;

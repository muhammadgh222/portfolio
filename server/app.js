import express from "express";
import cors from "cors";
import ErrorHandler from "./utils/ErrorHandler.js";

// Routes
import workRoutes from "./routes/workRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import experienceRoutes from "./routes/experienceRoutes.js";
import DB from "./database.js";
const app = express();

app.use(express.json());
app.use(cors());

// Routes
DB.sync()
  .then((result) => {})
  .catch((err) => {
    console.log(err);
  });

app.use("/api/v1/works", workRoutes);
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/experience", experienceRoutes);

app.use(ErrorHandler);

export default app;

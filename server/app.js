import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import ErrorHandler from "./utils/ErrorHandler.js";

// Security
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import xss from "xss-clean"; // protects from html code with js
import hpp from "hpp";

// Routes
import workRoutes from "./routes/workRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import experienceRoutes from "./routes/experienceRoutes.js";
import adminRoutes from "./routes/authRoutes.js";
import DB from "./database.js";
const app = express();

app.use(helmet());

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many request for this IP.",
});

app.use("/api", limiter);

app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(cookieParser());

app.use(xss());
app.use(hpp());

app.use("/images", express.static("./images"));
// Routes
DB.sync()
  .then((result) => {})
  .catch((err) => {
    console.log(err);
  });

app.use("/api/v1/works", workRoutes);
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/experiences", experienceRoutes);
app.use("/api/v1/users", adminRoutes);
// app.get("/api/v1/me", validateAdmin, (req, res, next) => {
//   res.send({
//     message: "Hi",
//   });
// });
app.use(ErrorHandler);

export default app;

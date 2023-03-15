import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pool from "./database.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  try {
    let table = "users";
    pool.query(
      `CREATE TABLE ${table} (id BIGSERIAL PRIMARY KEY, first_name VARCHAR(50) NOT NULL, last_name VARCHAR(50))`
    );
    return res.status(200).json({
      message: "Table created",
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});

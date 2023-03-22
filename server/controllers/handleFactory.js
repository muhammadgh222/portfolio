import AsyncHandler from "express-async-handler";
import pool from "../database.js";

export const createOne = (Model) =>
  AsyncHandler(async (req, res, next) => {
    console.log(Object.keys(req.body)[0], Object.values(req.body)[0]);
    const newDoc = await pool.query(
      `INSERT INTO ${Model} (${
        (Object.keys(req.body)[0], Object.keys(req.body)[1])
      } )VALUES ($1, $2) RETURNING *`,
      [Object.values(req.body)[0], Object.values(req.body)[1]]
    );

    res.status(201).json({
      message: "success",
      newDoc,
    });
  });

import pg from "pg";

import dotenv from "dotenv";
dotenv.config();

const pool = new pg.Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DB_PORT,
  database: process.env.DATABASE,
});

export default pool;

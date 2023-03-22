import dotenv from "dotenv";
import { Sequelize } from "sequelize";
dotenv.config();

/*const pool = new pg.Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DB_PORT,
  database: process.env.DATABASE,
});
*/

const DB = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "postgres",
  }
);

export default DB;

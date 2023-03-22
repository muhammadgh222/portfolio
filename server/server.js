import dotenv from "dotenv";
import app from "./app.js";
import DB from "./database.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

DB.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});

export default app;

/*import request from "supertest";
import app from "./../server.js";

test("should add work", (done) => {
  const res = request("http://localhost:5000").post("/api/v1/works").send({
    title: "ddd",
    link: "sadas",
    githubLink: "asdasdsa",
  });

  expect(res.statusCode).toBe(201);
  done();
});

test("should get all works", async (done) => {
  const res = await request("http://localhost:5000").get("/api/v1/works");

  console.log(res.body);

  expect(res.statusCode).toBe(200);
  expect(res.body).toBe(true);
  done();
});
*/

import supertest from "supertest";
import app from "../app.js";

const request = supertest(app);

describe("Test GET /works", () => {
  test("It should response with 200 success", async () => {
    const response = await request
      .get("/api/v1/works")
      .expect(200)
      .expect("Content-Type", /json/);
  });
});

describe("Test POST /works", () => {
  test("It should response with 201 created", async () => {
    const response = await request
      .post("/api/v1/works")
      .send({
        title: "work1",
        link: "work1 link",
        githubLink: "work1 github link",
      })
      .expect(201)
      .expect("Content-Type", /json/);
  });
});

describe("Test PATCH /works/:id", () => {
  test("It should response with 200 success", async () => {
    const response = await request
      .patch("/api/v1/works/2")
      .send({
        title: "work12",
        link: "work12 link",
        githubLink: "work12 github link",
      })
      .expect(200)
      .expect("Content-Type", /json/);
  });
});

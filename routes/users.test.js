const app = require("../server");
const request = require("supertest");
const mongoose = require("mongoose");

beforeEach(async () => {
  await mongoose.connect(process.env.CONNECTION_STRING);
});

afterEach(async () => {
  await mongoose.connection.close();
});

describe("GET /users", () => {
  describe("when the route runs", () => {
    it("should return all the users", async () => {
      const response = await request(app).get("/users");
      expect(response.statusCode).toBe(200);
    });
  });
});

describe("POST /users", () => {
  describe("when the route runs", () => {
    it("should save a user to the database", async () => {
      const newUser = {
        name: "John Doe",
        email: "john@example.com",
        password: "secretpassword",
      };
      const response = await request(app).post("/users").send(newUser);
      expect(response.statusCode).toBe(200);
    });
  });
});

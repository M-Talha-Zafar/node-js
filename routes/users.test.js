const app = require("../server");
const request = require("supertest");
const userRoutes = require("./users");

describe("GET /users", () => {
  describe("when the route runs", () => {
    it("should return 200 status code", async () => {
      const response = await request(app).get("/users");
      expect(response.statusCode).toBe(200);
    });
  });
});

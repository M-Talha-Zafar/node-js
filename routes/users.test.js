const app = require("../server");
const request = require("supertest");

describe("GET /users", () => {
  describe("when the route runs", () => {
    it("should return 200 status code", async () => {
      const response = await request(app).get("/users");
      console.log(response.body);
      expect(response.statusCode).toBe(200);
    }, 10000);
  });
});

import request from "supertest";
import app from "../../server/index.js";

describe("GET /ping", () => {
  it("Health check", (done) => {
    request(app).get("/ping").expect(200).expect("pong").end(done);
  });
});

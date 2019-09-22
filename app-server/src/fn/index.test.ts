import supertest from "supertest";
import { default as app } from ".";

test("GET /", done => {
  supertest(app)
    .get("/")
    .expect(200, `This project is alive.`)
    .end(done);
});

import { app, assert } from "midway-mock/bootstrap";

describe("test/app/controller/page.test.ts", () => {
  it("should GET /", () => {
    return app
      .httpRequest()
      .get("/")
      .expect("Welcome to midwayjs!")
      .expect(200);
  });
});

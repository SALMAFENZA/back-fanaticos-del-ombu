const app = require("../app");
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");

// discrabe agrupa test cases
describe("GET /api/hoteles/?name=&order=", () => {
    it("check status 404", (done) => {
        const checkStatus = "Error 404";
        request(app)
        .get(`/api/hoteles/?name=${checkStatus}&order=`)
        .expect(404, done);
    });
});

const app = require("../app");
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");

describe("GET /api/cities", function() {
  it("should return an array of objects", function(done) {
    request(app)
      .get('/api/cities/')
      .expect((response) => {
        assert.typeOf(response.body.city, "array");
        response.body.city.forEach((e) => {
          assert.typeOf(e, "object");
        });
      })
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
  });
});

const app = require("../app");
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");

describe("GET /api/cities", function(){
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

      it('Cant create 400', function (done) {
        request(app)
            .post(url)
            .send({
                "name": "Buenos Aires",
                "capacity": 100,
                "cityId": "21213213",
            })
            .expect(res => res.success === false)
            .end(function (err, res) {
                if (err) return done(err);
                done()
            })
    })
    

    it('name must be a string', function (done) {
        request(app)
            .post(url)
            .send({                
                    name: "Brasil",
                    continent: "America",
                    photo:
                      "https://media.traveler.es/photos/61375f04030de94d067fbfd0/master/w_1920%2Cc_limit/213219.jpg",
                    population: 32222222,
                    userId: "636f1edc14f79b76f5e442bb"                  
            })
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .expect( res => {
                assert.isString(res.body.response.name, 'Is a string =)')              
            })
            .end(function (err, res) {
                if (err) return done(err);
                done()
            })
    })
  });
});

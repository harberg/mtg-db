require('../../../server');
var chai = require('chai');
var chaihttp = require('chia-http');
chai.use(chaihttp);
var expect = chai.expect;

describe('cardRoutes', function() {
    var id;

    it('creates a new card in the database', function(done) {
        chai.request('http://localhost:3000')
            .post('/api/cards')
            .req(function(req) {
                req.send({"cardName" : "Alpine Grizzly"});
            })
            .res(function(res) {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('_id');
                expect(res.body.cardName).to.eql("Apline Grizzly");
                id = res.body._id;
                done();
            });
    });
});
require('../../server');
var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;

describe('cardRoutes', function() {
    var id = "Utter End";

    it('creates a new card', function(done) {
        chai.request('http://localhost:3000')
            .post('/api/cards')
            .req(function(req) {
                req.send({"cardName" : "alpine grizzly"});
            })
            .res(function(res) {
                expect(res).to.have.status(200);
                expect(res.body[0]).to.have.property('_id');
                expect(res.body[0].cardName).to.eql('Utter End');// the db is populated and the first entry is "Utter End"
                done();
            })
    });

    it('gets all the cards in the database', function(done) {
        chai.request('http://localhost:3000')
            .get('/api/cards')
            .res(function(res) {
                expect(res).to.have.status(200);
                expect(Array.isArray(res.body)).to.be.true;
                expect(res.body[0]).to.have.property('_id');
                done();
            });
    });

    it('gets one card', function(done) {
        chai.request('http://localhost:3000')
            .get('/api/cards/' + id)
            .res(function(res) {
                expect(res).to.have.status(200);
                expect(res.body[0].cardName).to.eql('Utter End');
                done();
            });
    });
});
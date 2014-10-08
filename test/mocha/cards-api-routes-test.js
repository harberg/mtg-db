require('../../server');
var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;

describe('cardRoutes', function() {
    var newCard = {
        cardName: "alpine grizzly" + Math.floor(Math.random()*1000)
    };

    it('creates a new card', function(done) {
        chai.request('http://localhost:3000')
            .post('/api/cards')
            .req(function(req) {
                req.send(newCard);
            })
            .res(function(res) {
                expect(res).to.have.status(200);
                expect(res.body[0]).to.have.property('_id');
                expect(res.body[0].cardName).to.eql(newCard.cardName);
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
            .get('/api/cards/' + newCard.cardName)
            .res(function(res) {
                expect(res).to.have.status(200);
                expect(res.body[0].cardName).to.eql(newCard.cardName);
                done();
            });
    });
});
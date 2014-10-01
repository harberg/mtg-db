'use strict';

var Card = require('../models/Card');

module.exports = function(app) {

    app.get("/api/cards/:id", function(req, res) {
        console.log("top of the get request");
        res.setHeader("Content-Type", "application/json");
        Card.find({"cardName" : req.params.id}, function(err, data) {
            if(err) {
                res.send(500, {error: err});
                console.log("express no go bro");
                return false;
            }
            res.send(data);
        });
    });

    app.get("/api/cards", function(req, res) {
        res.setHeader("Content-Type", "application/json");
        Card.find({}, function(err, data) {
            if(err) {
                res.send(err);
                //return false;
            }
            res.send(data);
        });
    });

    app.post("/api/cards", function(req, res) {
        Card.create({
            cardName  : req.body.cardName,
            cardRare  : req.body.cardRare,
            cardColor : req.body.cardColor,
            cardSet   : req.body.cardSet,
            cardQty   : req.body.cardQty,
            cardPrice : req.body.cardPrice

        }, function(err, card) {
            if(err) {
                res.send(err);
            }
            Card.find(function(err, cards) {
                if(err) {
                    res.send(err);
                }
                res.json(cards);
            });
        });
    });// end app.post("api/cards")


};// end module.exports

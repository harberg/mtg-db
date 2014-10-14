'use strict';

var Card = require('../models/Card');

module.exports = function(app) {
    app.get("/api/cards/:id", function(req, res) {
        console.log("top of the get request");
        res.setHeader("Content-Type", "application/json");
        Card.findOne({"_id" : req.params.id}, function(err, data) {
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
                return false;
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

        // Send newly created card back
        }, function(err, card) {
            if(err) {
                res.send(err);
            }

            res.json([card]);
        });
    });// end app.post("api/cards")

    app.put("/api/cards/:id", function(req,res) {
        var card = req.body;
        delete card._id;
        Card.findOneAndUpdate({"_id" : req.params.id}, card, function(err, resCard) {
            if(err) {
                return res.status(500).json(err);
            }
            return res.status(202).json(resCard);
        });
    });// end app.put

    app.delete("/api/cards/:id", function(req,res) {
        Card.remove({"_id" : req.params.id}, function(err) {
            if(err) {
                return res.status(500).json(err);
            }
            return res.status(200).json({"message" : "deleted"});
        });
    });// end app.delete

};// end module.exports


// var working = true;
// var queue = [];

// async.whilst(function () {
//     return !(queue.length === 0 && working === false);
// }, function (cb) {
//     if (queue.length) {
//         queue.pop() //POST TO MONGOOSE THEN cb()
//     } else {
//         // data is coming in slow if you get here
//         // and you need to wait somehow
//     }
// }, function (err) {
//     if (err) { handle }
//     res.send({ success })
// });

// on(data) { queue.push(data) }
// on(end) { working = false; }






























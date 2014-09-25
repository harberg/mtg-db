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
        res.setHeader("Content-Type", "application-json");
        Card.find({}, function(err, data) {
            if(err) {
                res.send(err);
                return false;
            }
            res.send(data);
        });
    });
};// end module.exports

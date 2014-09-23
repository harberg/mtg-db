'use strict';

var Card = require('../models/Card');

module.exports.collection = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    Card.find({}, function(err, name) {
        if(err) {
            res.send(500, {err:err});
        }
        res.send(name);
    });
};

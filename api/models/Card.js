'use strict';

var mongoose = require('mongoose');
var cardSchema = mongoose.Schema({
    cardName = String
});

module.exports = mongoose.model('Card', cardSchema);
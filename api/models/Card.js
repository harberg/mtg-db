/* jslint node: true */
'use strict';

var mongoose = require('mongoose');

var cardSchema = mongoose.Schema({
    cardName : { type : String, trim : true },
    cardPrice : Number,
    cardSet : { type : String, trim : true },
    cardColor : String
});

module.exports = mongoose.model('Card', cardSchema);
/* jslint node: true */
'use strict';

var mongoose = require('mongoose');

var cardSchema = mongoose.Schema({
    cardName  : { type : String, trim : true },
    cardRare  : { type : String, trim : true },
    cardColor : { type : String, trim : true },
    cardSet   : { type : String, trim : true },
    cardQty   : Number,
    cardPrice : Number,

});

module.exports = mongoose.model('Card', cardSchema);
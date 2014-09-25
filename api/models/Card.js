/* jslint node: true */
'use strict';

var mongoose = require('mongoose');

var cardSchema = mongoose.Schema({
    cardName : { type : String, trim : true }
});

module.exports = mongoose.model('Card', cardSchema);
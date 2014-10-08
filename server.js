'use strict';

var express = require('express');
var http = require('http');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var Converter = require('csvtojson').core.Converter;
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var csvFileName = "./cardsDB.csv";
var jsonFileName = "./cardsDB.json";

var readStream = fs.createReadStream(csvFileName);
var writeStream = fs.createWriteStream(jsonFileName);

var param = {constructResult : false};
var csvConverter = new Converter(param);

readStream.pipe(csvConverter).pipe(writeStream);

var app = express();

var db = require('./api/db.js');

mongoose.connect(db.url, function(err) {
    if(err) {
        console.log('you have not bowed to the Mongod');
    }
});

var insertDocs = function(database, callback) {
    var collection = database.collection('cards');
    collection.insert({a:2}, function(err, result) {
        assert.equal(err, null);
        console.log("inserted a document");
        callback(result);
    });
}

MongoClient.connect(db.url, function(err, dbcon) {
    assert.equal(null, err);
    //console.log(db.collection);
    insertDocs(dbcon, function() {
        dbcon.close();
    });
});




app.set('port', 3000 || process.env.PORT );
app.set('apiBase', '/api/');

app.use(bodyParser());
app.use(morgan());
app.use(express.static(__dirname + '/app/dist/'));

// routes =================================================
require("./api/routes/cardRoutes.js")(app);

var server = http.createServer(app);
server.listen(app.get('port'), function() {
    console.log('Server running on ' + app.get('port'));
});
'use strict';

var express = require('express');
var http = require('http');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var cardRoutes = require('./api/routes/cardRoutes');

var app = express();

var db = require('./api/db.js');
mongoose.connect(db.url);

app.set('port', process.env.PORT || 3000);
app.set('apiBase', '/api/');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));
app.get('/api/cards', cardRoutes.collection);


var server = http.createServer(app);
server.listen(app.get('port'), function() {
    console.log('Server running on ' + app.get('port'));
});
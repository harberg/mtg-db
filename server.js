'use strict';

var express = require('express');
var http = require('http');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

var db = require('./api/db.js');

mongoose.connect(db.url, function(err) {
    if(err) {
        console.log('you have not bowed to the Mongod');
    }
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
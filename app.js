'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');
var http = require('http');

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', require('./app/routes/api')());

var port = 3333;

app.listen(port, '0.0.0.0', function() {
    console.log('Listening to port: ' + port)   
})

//var server = http.createServer(app)
//server.listen(port, '0.0.0.0');

/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname)));

http.createServer(app).listen(8000, function(){
  	console.log('Server Run');
});

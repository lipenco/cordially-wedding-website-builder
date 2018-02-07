var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 9000

app.use(express.static(__dirname + '/'))


app.listen(port);

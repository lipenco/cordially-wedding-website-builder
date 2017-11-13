var express = require('express');
var app = express();
var path = require('path');
var proxy = require('http-proxy-middleware');

var options = {
        target: 'https://app.cordially.co/', // target host
        changeOrigin: true,               // needed for virtual hosted sites
    };
var exampleProxy = proxy(options);

app.use(express.static(__dirname + '/'))

app.use('/*.png', exampleProxy);
app.use('/*.img', exampleProxy);
app.use('*.img', exampleProxy);
app.use('/*.js', exampleProxy);
app.use('/*.css', exampleProxy);
app.use('/*/*', exampleProxy);

app.listen(8080);

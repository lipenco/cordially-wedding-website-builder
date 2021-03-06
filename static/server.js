var express = require("express");
var app = express();
var path = require("path");
var proxy = require("http-proxy-middleware");
var port = process.env.PORT || 9000;

var options = {
  target: "http://app.cordially.co/", // target host
  changeOrigin: true, // needed for virtual hosted sites
  secure: false
};
var exampleProxy = proxy(options);

app.use(express.static(__dirname + "/"));

app.use("/*.png", exampleProxy);
app.use("/*.img", exampleProxy);
app.use("*.img", exampleProxy);
app.use("/*.js", exampleProxy);
app.use("/*.css", exampleProxy);
app.use("/*/*", exampleProxy);

app.listen(port);

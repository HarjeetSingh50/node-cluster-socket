var express = require("express");
var path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const db = require("./db"); 
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
var util = require('util');

app.get("/", function(req, res) {
  console.log(Object.keys(process));
  console.log(process.pid);
  console.log(process.ppid);
  console.log(process.platform);
  console.log('%s', util.format.apply(util));

  res.sendFile(__dirname + "/index.html");
});
db();

module.exports = app;

//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/service", function (req, res) {
  res.sendFile(__dirname + "/service.html");
});

app.get("/privacy", function (req, res) {
  res.sendFile(__dirname + "/privacy.html");
});

app.get("/contact", function (req, res) {
  res.sendFile(__dirname + "/contact.html");
});

app.get("/portfoilo", function (req, res) {
  res.sendFile(__dirname + "/portfoilo.html");
});

app.listen(5000, function () {
  console.log("Server is running on port 5000");
});

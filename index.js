process.env.NODE_ENV = process.env.NODE_ENV || "development";

var express = require("./config/express");
// Create new mongoose connection and express apllication

var app = express();

app.listen(5000);
module.exports = app;

console.log("Server running at http://localhost:5000/");

var users = require("../../app/controllers/users.server.controller");
var express = require("express");
var router = express.Router();

module.exports = function (app) {
  app.get("/studentlist", users.studentlist);
};

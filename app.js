"use strict";
exports.__esModule = true;
var dotenv_1 = require("dotenv");
var server_1 = require("./models/server");
// Config dot.env
dotenv_1["default"].config();
var server = new server_1["default"]();
server.listen();

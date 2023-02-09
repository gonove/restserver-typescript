"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_1 = require("sequelize");
// Config dot.env
dotenv_1.default.config();
const db = new sequelize_1.Sequelize(process.env.NAME_LOCAL || 'db_name', process.env.RDS_USERNAME || 'user-name', process.env.RDS_PASSWORD, {
    host: process.env.RDS_HOSTNAME,
    dialect: 'mysql',
    port: Number(process.env.RDS_PORT),
    // logging : false //muestra en consola comandos ejecutados
});
exports.default = db;

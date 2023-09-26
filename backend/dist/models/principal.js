"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conection_1 = __importDefault(require("../db/conection"));
const sequelize_1 = require("sequelize");
const principal = conection_1.default.define('principal', {
    novedades: {
        type: sequelize_1.DataTypes.STRING
    },
    logico: {
        type: sequelize_1.DataTypes.NUMBER
    },
    fecha: {
        type: sequelize_1.DataTypes.DATE
    },
    idcategoria: {
        type: sequelize_1.DataTypes.NUMBER
    },
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = principal;

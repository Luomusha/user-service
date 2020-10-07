"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
console.log(config_1.MYSQL_PORT, config_1.MYSQL_USERNAME, config_1.MYSQL_PASSWORD, config_1.MYSQL_HOST, config_1.MYSQL_DATABASE);
const sequelize = new sequelize_1.Sequelize({
    dialect: 'mysql',
    host: config_1.MYSQL_HOST,
    port: config_1.MYSQL_PORT,
    database: config_1.MYSQL_DATABASE,
    username: config_1.MYSQL_USERNAME,
    password: config_1.MYSQL_PASSWORD,
    define: {
        freezeTableName: true,
    },
    logging: console.log,
});
exports.default = sequelize;

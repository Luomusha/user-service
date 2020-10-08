"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLocationSchema = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
class UserLocationSchema extends sequelize_1.Model {
}
exports.UserLocationSchema = UserLocationSchema;
UserLocationSchema.init({
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        field: 'id',
    },
}, {
    tableName: 'user-location',
    sequelize: db_1.default,
    comment: '用户定位表',
    charset: 'utf8mb4',
    underscored: true,
});

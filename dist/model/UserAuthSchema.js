"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthSchema = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
/**
 * 用户授权信息表
 */
class UserAuthSchema extends sequelize_1.Model {
}
exports.UserAuthSchema = UserAuthSchema;
UserAuthSchema.init({
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        field: 'id',
    },
    uid: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
    },
    certificate: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        comment: '密码凭证(站内的保存密码，站外的不保存或保存token)',
    },
    identityType: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        comment: '密码凭证(站内的保存密码，站外的不保存或保存token)',
    },
}, {
    tableName: 'user-auth',
    sequelize: db_1.default,
    comment: '用户授权表',
    charset: 'utf8mb4',
    underscored: true,
});

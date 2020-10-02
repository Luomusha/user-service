"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBaseSchema = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
/**
 * 用户基础信息表
 */
class UserBaseSchema extends sequelize_1.Model {
}
exports.UserBaseSchema = UserBaseSchema;
UserBaseSchema.init({
    uid: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false,
        comment: '用户账号，必须唯一',
    },
    nickname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: '二狗子',
        comment: '用户昵称',
    },
    gender: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: 'male',
        comment: '用户性别 female/male',
    },
    birthday: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
        comment: '用户生日',
    },
    registerSource: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: 'username',
        comment: '注册来源',
    },
    signature: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: '留下了平庸的签名',
        comment: '用户个人签名',
    },
    mobile: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
        unique: true,
        comment: '手机号码(唯一)',
    },
    mobileBindTime: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
        comment: '手机号码绑定时间',
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false,
        defaultValue: '',
        comment: '邮箱(唯一)',
    },
    emailBindTime: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
        comment: '邮箱绑定时间',
    },
    userRole: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: 'normal',
    },
}, {
    sequelize: db_1.default,
    underscored: true,
    tableName: 'user-base',
    charset: 'utf8mb4',
    comment: '用户基础信息',
});

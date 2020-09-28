import {DataTypes, Model} from 'sequelize';
import sequelize from '../db';
import {GENDER, PLATFORM, USER_ROLE} from '../type';

export interface UserBase {
    uid: number;
    userRole: USER_ROLE;
    registerSource: PLATFORM;
    username: string;
    nickname: string;
    gender: GENDER;
    birthday: string;
    signature: string;
    mobile: string;
    mobileBindTime: string;
    email: string;
    emailBindTime: string;
    face: string;
    createTime: string;
    updateTime: string;
}

/**
 * 用户基础信息表
 */
class UserBaseSchema extends Model implements UserBase {
    uid: number;
    username: string;
    nickname: string;
    registerSource: PLATFORM;
    face: string;
    gender: GENDER;
    signature: string;
    userRole: USER_ROLE;
    birthday: string;
    email: string;
    emailBindTime: string;
    mobile: string;
    mobileBindTime: string;
    createTime: string;
    updateTime: string;
}

UserBaseSchema.init({
    uid: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        comment: '用户账号，必须唯一',
    },
    nickname: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "二狗子",
        comment: '用户昵称',
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'male',
        comment: '用户性别 female/male',
    },
    birthday: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
        comment: '用户生日',
    },
    registerSource: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
        comment: '注册来源',
    },
    signature: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '留下了平庸的签名',
        comment: '用户个人签名',
    },
    mobile: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
        unique: true,
        comment: '手机号码(唯一)',
    },
    mobileBindTime: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
        comment: '手机号码绑定时间',
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        defaultValue: '',
        comment: '邮箱(唯一)',
    },
    emailBindTime: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
        comment: '邮箱绑定时间',
    },
    userRole: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "normal"
    }
}, {
    sequelize: sequelize,
    underscored: true,
    tableName: 'user-base',
    charset: 'utf8mb4',
    comment: '用户基础信息',
});

export {UserBaseSchema};

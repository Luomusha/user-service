import {DataTypes, Model} from "sequelize";
import sequelize from "../db";
import {GENDER, PLATFORM, USER_ROLE} from "../type";

export interface UserBase {
    uid: number;
    user_role: USER_ROLE;
    register_source: PLATFORM;
    username: string;
    nick_name: string;
    gender: GENDER;
    birthday: string;
    signature: string;
    mobile: string;
    mobile_bind_time: string;
    email: string;
    email_bind_time: string;
    face: string;
    create_time: string;
    update_time: string;
}

class UserBaseSchema extends Model implements UserBase {
    uid: number;
    username: string;
    nick_name: string;
    register_source: PLATFORM;
    face: string;
    gender: GENDER;
    signature: string;
    user_role: USER_ROLE;
    birthday: string;
    email: string;
    email_bind_time: string;
    mobile: string;
    mobile_bind_time: string;
    create_time: string;
    update_time: string;
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
        comment: "用户账号，必须唯一",
    },
    nickname: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "用户昵称",
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "male",
        comment: "用户性别 female/male"
    },
    birthday: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "用户生日"
    },
    signature: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "留下了平庸的签名",
        comment: "用户个人签名"
    },
    mobile: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
        unique: true,
        comment: "手机号码(唯一)"
    },
    mobile_bind_time: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
        comment: "手机号码绑定时间"
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        defaultValue: "",
        comment: "邮箱(唯一)"
    },
    email_bind_time: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
        comment: "邮箱绑定时间"
    }
}, {
    sequelize: sequelize
})

export {UserBaseSchema}

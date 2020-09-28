import {DataTypes, Model} from 'sequelize';
import sequelize from '../db';
import {PLATFORM} from '../type';

export interface UserAuth {
    id: number;
    uid: number;
    identityType: PLATFORM;
    identifier: string;
    certificate: string;
    createTime: string;
    updateTime: string;
}

/**
 * 用户授权信息表
 */
class UserAuthSchema extends Model implements UserAuth {
    id!: number;
    uid!: number;
    identityType!: PLATFORM;
    identifier!: string;
    certificate!: string;
    createTime: string;
    updateTime: string;
}

UserAuthSchema.init({
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    field: 'id',
  },
  uid: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  certificate: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '密码凭证(站内的保存密码，站外的不保存或保存token)',
  },
  identityType: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '密码凭证(站内的保存密码，站外的不保存或保存token)',
  },
}, {
  tableName: 'user-auth',
  sequelize: sequelize,
  comment: '用户授权表',
  charset: 'utf8mb4',
  underscored: true,
});

export {UserAuthSchema};

import {DataTypes, Model} from 'sequelize';
import {sequelize} from '../../db';
import {Family, Member} from "../../type";


/**
 * 家庭信息表
 */
class FamilySchema extends Model implements Family {
  id?: number;
  host: Member | number;
  owner: string;
  createTime: string;
  updateTime: string;
}

FamilySchema.init({
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  owner: {
    type: DataTypes.STRING,
  },
  host: {
    type: DataTypes.BIGINT,
    allowNull: false,
  }

}, {
  sequelize: sequelize,
  underscored: true,
  tableName: 'Family',
  charset: 'utf8mb4',
  comment: '家庭信息',
});

export {FamilySchema};

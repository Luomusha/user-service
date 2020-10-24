import {DataTypes, Model} from 'sequelize';
import {sequelize} from '../../db';
import {Genealogy} from "../../type";


/**
 * 家庭信息表
 */
class GenealogySchema extends Model implements Genealogy {
  id?: number;
  cover: string;
  name: string;
  owner: string;
  createTime: string;
  updateTime: string;
}

GenealogySchema.init({
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '家谱名字',
  },
  cover:{
    type: DataTypes.STRING,
    comment: '家谱封面',
  },
  owner: {
    type: DataTypes.STRING,
  },
}, {
  sequelize: sequelize,
  underscored: true,
  tableName: 'Genealogy',
  charset: 'utf8mb4',
  comment: '家庭信息',
});

export {GenealogySchema};

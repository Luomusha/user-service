import {DataTypes, Model} from 'sequelize';
import {sequelize} from '../../db';
import {Genealogy, Member} from "../../type";


/**
 * 家庭信息表
 */
class GenealogySchema extends Model implements Genealogy {
  id?: number;
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

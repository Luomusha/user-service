import {DataTypes, Model} from "sequelize";
import {GenealogyRelative} from "../../type";
import {sequelize} from "../../db";

class GenealogyRelativeSchema extends Model implements GenealogyRelative {
  id: number;
  genealogyId: number;
  relativeId: number;
}


GenealogyRelativeSchema.init({
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  genealogyId: {
    type: DataTypes.BIGINT,
    allowNull: false,

  },
  relativeId: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
}, {
  sequelize: sequelize,
  underscored: true,
  tableName: 'GenealogyRelative',
  charset: 'utf8mb4',
  comment: '家庭成员关系表',
})

export {GenealogyRelativeSchema}

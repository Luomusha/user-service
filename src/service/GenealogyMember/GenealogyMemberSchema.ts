import {DataTypes, Model} from "sequelize";
import {GenealogyMember} from "../../type";
import {sequelize} from "../../db";

class GenealogyMemberSchema extends Model implements GenealogyMember {
  id: number;
  genealogyId: number;
  memberId: number;
}


GenealogyMemberSchema.init({
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
  memberId: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
}, {
  sequelize: sequelize,
  underscored: true,
  tableName: 'GenealogyMember',
  charset: 'utf8mb4',
  comment: '家庭成员关系表',
})

export {GenealogyMemberSchema}

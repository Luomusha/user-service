import {DataTypes, Model} from "sequelize";
import {FamilyMember} from "../../type";
import {sequelize} from "../../db";

class FamilyMemberSchema extends Model implements FamilyMember {
  id: number;
  familyId: number;
  memberId: number;
}


FamilyMemberSchema.init({
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  familyId: {
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
  tableName: 'FamilyMember',
  charset: 'utf8mb4',
  comment: '家庭成员关系表',
})

export {FamilyMemberSchema}

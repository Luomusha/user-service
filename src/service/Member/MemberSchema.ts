import {DataTypes, Model} from 'sequelize';
import {sequelize} from '../../db';
import {GENDER, Member} from "../../type";


/**
 * 家庭信息表
 */
class MemberSchema extends Model implements Member {
  id: number;
  birthday: string;
  gender: GENDER;
  name: string;
}

MemberSchema.init({
  uid: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
}, {
    sequelize: sequelize,
    underscored: true,
    tableName: 'Member',
    charset: 'utf8mb4',
    comment: '成员信息',
});

export {MemberSchema};


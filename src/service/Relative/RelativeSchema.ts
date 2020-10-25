import {DataTypes, Model} from 'sequelize';
import {sequelize} from '../../db';
import {GENDER, Relative} from "../../type";


/**
 * 家庭信息表
 */
class RelativeSchema extends Model implements Relative {
  id: number;
  uid: string;
  birthday: string;
  gender: GENDER;
  name: string;
}

RelativeSchema.init({
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    comment: "亲属id",
  },
  uid: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    comment: "关联用户id",
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "亲戚姓名",
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: GENDER.male,
    comment: "亲戚性别",
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
    comment: "生日",
  }
}, {
    sequelize: sequelize,
    underscored: true,
    tableName: 'Relative',
    charset: 'utf8mb4',
    comment: '成员信息',
});

export {RelativeSchema};


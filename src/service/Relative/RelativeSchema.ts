import {DataTypes, Model} from 'sequelize';
import {sequelize} from '../../db';
import {GENDER, Relative} from "../../type";


/**
 * 家庭信息表
 */
class RelativeSchema extends Model implements Relative {
  id: number;
  birthday: string;
  gender: GENDER;
  name: string;
}

RelativeSchema.init({
  uid: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
}, {
    sequelize: sequelize,
    underscored: true,
    tableName: 'Relative',
    charset: 'utf8mb4',
    comment: '成员信息',
});

export {RelativeSchema};


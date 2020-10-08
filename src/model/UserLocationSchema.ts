import {DataTypes, Model} from "sequelize";
import sequelize from "../db";

export interface UserLocation {
  uid: number;
  currentNation: string;
  currentProvince: string;
  currentCity: string;
  currentDistrict: string;
  location: string;
  longitude: number;
  latitude: number;
  createTime: string;
  updateTime: string;
}

class UserLocationSchema extends Model implements UserLocation{
  uid: number;
  currentCity: string;
  currentDistrict: string;
  currentNation: string;
  currentProvince: string;
  latitude: number;
  location: string;
  longitude: number;
  createTime: string;
  updateTime: string;

}

UserLocationSchema.init({
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    field: 'id',
  },
},{
  tableName: 'user-location',
  sequelize: sequelize,
  comment: '用户定位表',
  charset: 'utf8mb4',
  underscored: true,
})

export {UserLocationSchema}

import {DataTypes, Model} from "sequelize";
import {sequelize} from "../db";

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
  longitude: number;
  location: string;
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
  uid: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    comment: "具体地址"
  },
  latitude: {
    type: DataTypes.STRING,
    comment: "纬度"
  },
  longitude: {
    type: DataTypes.STRING,
    comment: "经度"
  },
  currentDistrict: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "所在地地区"
  },
  currentCity: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "所在地城市"
  },
  currentProvince: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "所在地省份"
  },
  currentNation: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "所在地国家"
  }
},{
  tableName: 'user-location',
  sequelize: sequelize,
  comment: '用户定位表',
  charset: 'utf8mb4',
  underscored: true,
})

export {UserLocationSchema}

import {Relationship, RELATIONSHIP_TYPE} from "../../type";
import {DataTypes, Model} from "sequelize";
import {sequelize} from "../../db";


class RelationshipSchema extends Model implements Relationship {
  from: number;
  id: number;
  relationshipType: RELATIONSHIP_TYPE;
  to: number;

}

RelationshipSchema.init({
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  }
}, {
  sequelize: sequelize,
  underscored: true,
  tableName: 'Relationship',
  charset: 'utf8mb4',
  comment: '成员关系表',
})

export {RelationshipSchema}

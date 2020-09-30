import {Sequelize} from 'sequelize';
import {MYSQL_DATABASE, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_PORT, MYSQL_USERNAME} from '../config';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  database: MYSQL_DATABASE,
  username: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
  define: {
    freezeTableName: true,
  },
  logging: console.log,
});

export default sequelize;

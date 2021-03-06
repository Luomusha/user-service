import {Sequelize} from 'sequelize';
import * as fs from 'fs';
import {MYSQL_DATABASE, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_PORT, MYSQL_USERNAME} from '../config';

console.log(MYSQL_PORT, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_HOST, MYSQL_DATABASE)
const logStream = fs.createWriteStream('./sql.log', {'flags': 'a'});

export const sequelize = new Sequelize({
  dialect: 'mysql',
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  database: MYSQL_DATABASE,
  username: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
  define: {
    freezeTableName: true,
  },
  logging: msg => logStream.write(msg + '\n'),
});

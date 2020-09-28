import {Sequelize} from "sequelize";
import {MYSQL_DATABASE, MYSQL_PASSWORD, MYSQL_USERNAME} from "../config";

const sequelize = new Sequelize({
    dialect: "mysql",
    host: "127.0.0.1",
    port: 3306,
    database: MYSQL_DATABASE,
    username: MYSQL_USERNAME,
    password: MYSQL_PASSWORD,
    define: {
        freezeTableName: true
    },
    logging: false
});

export default sequelize;

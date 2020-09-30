"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const db_1 = require("./db");
const config_1 = require("./config");
db_1.default.authenticate().then(() => {
    console.log('db connected...');
    return db_1.default.sync({ force: true });
}).then(() => {
    console.log('server listen at', config_1.USER_SERVICE_PORT);
    app_1.default.listen(config_1.USER_SERVICE_PORT);
}).catch((error) => {
    console.log(error);
    process.exit(0);
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const UsersController_1 = require("../controller/UsersController");
const userRouter = new Router();
userRouter.get('/', UsersController_1.beforeGetUsers, UsersController_1.getUsers);
exports.default = userRouter;

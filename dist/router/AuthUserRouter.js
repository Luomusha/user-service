"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const AuthUserController_1 = require("../controller/AuthUserController");
const authUserRouter = new Router();
authUserRouter.get('/:username', AuthUserController_1.beforeGetUser, AuthUserController_1.getUser);
authUserRouter.post('/', AuthUserController_1.beforePostUser, AuthUserController_1.postUser);
authUserRouter.put('/', AuthUserController_1.beforePutUser, AuthUserController_1.putUser);
exports.default = authUserRouter;

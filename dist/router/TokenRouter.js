"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const TokenController_1 = require("../controller/TokenController");
const tokenRouter = new Router();
tokenRouter.get('/', TokenController_1.generateToken);
exports.default = tokenRouter;

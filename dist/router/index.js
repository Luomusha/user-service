"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const UsersRouter_1 = require("./UsersRouter");
const AuthUserRouter_1 = require("./AuthUserRouter");
const TokenRouter_1 = require("./TokenRouter");
const router = new Router();
router.use('/user', AuthUserRouter_1.default.routes());
router.use('/users', UsersRouter_1.default.routes());
router.use('/token', TokenRouter_1.default.routes());
exports.default = router;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putUser = exports.beforePutUser = exports.postUser = exports.beforePostUser = void 0;
const UserBaseSchema_1 = require("../model/UserBaseSchema");
const UserAuthSchema_1 = require("../model/UserAuthSchema");
const UserLocationSchema_1 = require("../model/UserLocationSchema");
exports.beforePostUser = (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = ctx.request.body;
    if (!username) {
        ctx.status = 400;
        ctx.body = {
            message: 'username is required.',
        };
    }
    else if (!password) {
        ctx.status = 400;
        ctx.body = {
            message: 'password is required.',
        };
    }
    else {
        yield next();
    }
});
exports.postUser = (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = ctx.request.body;
    const ip = ctx.request.ip;
    const ips = ctx.request.ips;
    console.log("request ip", ip, ips);
    const user = yield UserBaseSchema_1.UserBaseSchema.create({
        username: username,
        source: 'username',
    });
    const auth = yield UserAuthSchema_1.UserAuthSchema.create({
        uid: user.uid,
        identityType: 'username',
        identifier: username,
        certificate: password
    });
    const location = yield UserLocationSchema_1.UserLocationSchema.create({});
    ctx.status = 201;
    ctx.message = 'created';
    ctx.body = user;
    yield next();
});
exports.beforePutUser = (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = ctx.request.body;
    if (!username && !password) {
        ctx.status = 400;
        ctx.body = {
            message: 'username is required.',
        };
    }
    else {
        yield next();
    }
});
exports.putUser = (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield UserBaseSchema_1.UserBaseSchema.create({
        username: 'lossa',
    });
    ctx.status = 201;
    ctx.message = 'created';
    ctx.body = user;
    yield next();
});

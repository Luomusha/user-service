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
exports.putUser = exports.beforePutUser = exports.postUser = exports.beforePostUser = exports.getUser = exports.beforeGetUser = void 0;
const UserBaseSchema_1 = require("../model/UserBaseSchema");
exports.beforeGetUser = (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = ctx.params;
    if (!username) {
        ctx.status = 400;
        ctx.body = {
            message: 'username in path is required',
        };
    }
    else {
        yield next();
    }
});
exports.getUser = (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = ctx.params;
    const user = yield UserBaseSchema_1.UserBaseSchema.findOne({
        where: {
            username: username,
        },
    });
    ctx.status = 200;
    ctx.body = user;
    yield next();
});
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
    const user = yield UserBaseSchema_1.UserBaseSchema.create({
        username: 'lossa',
    });
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

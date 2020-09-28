import {Context, Next} from "koa";
import {UserBase, UserBaseSchema} from "../model/UserBaseSchema";

export const postUser = async (ctx: Context, next: Next) => {
    const user: UserBase = await UserBaseSchema.create({})
    ctx.status = 201;
    ctx.message = "created"
    ctx.body = user
    await next();
}

export const getUserList = async (ctx: Context, next: Next) => {
    ctx.body = "ok"
    await next();
}

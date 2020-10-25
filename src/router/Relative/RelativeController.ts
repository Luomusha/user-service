import {Context, DefaultState, Middleware, Next} from "koa";
import {saveRelative, findRelativeById, findRelatives} from "../../service/Relative";
import {IParamMiddleware} from "koa-router";

export const getRelatives = async (ctx: Context, next: Next) => {
  ctx.body = await findRelatives();
  await next();
}

export const postRelative: Middleware = async (ctx: Context, next: Next) => {
  const {user} = ctx.state;
  const relative = ctx.request.body;
  relative.uid = user.id;
  console.log("user", user,user.id, user._id, typeof user._id, typeof user.id);
  const relativeDocument = await saveRelative(relative)
  ctx.body = relativeDocument;
  await next();
}


export const appendRelative:IParamMiddleware<DefaultState, Context> = async (relativeId: string, ctx: Context, next: Next) => {
  const relative = await findRelativeById(relativeId);
  ctx.assert(relative, 401, 'relative not exist')
  ctx.state.relative = relative
  await next();
}

export const getRelative: Middleware = async (ctx: Context, next: Next) => {
  await next();
}

export const putRelative: Middleware = async (ctx: Context, next: Next) => {
  await next();
}

export const patchRelative: Middleware = async (ctx: Context, next: Next) => {
  await next();
}


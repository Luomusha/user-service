import {Context, Next} from "koa";

export const postFile = async (ctx:Context, next:Next) => {
  console.log(ctx.request.files)
  console.log(ctx.request.body)
  ctx.body = JSON.stringify(ctx.request.files)

  await next();
}

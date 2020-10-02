import {Context, Next} from 'koa';

export const generateToken = async (ctx:Context, next: Next) => {
  ctx.body = 'ok';
  await next();
};

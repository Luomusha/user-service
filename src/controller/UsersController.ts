import {Context, Next} from 'koa';
import {UserBase, UserBaseSchema} from '../model/UserBaseSchema';

export const getUsers = async (ctx: Context, next: Next) => {
  ctx.body = 'ok';
  await next();
};

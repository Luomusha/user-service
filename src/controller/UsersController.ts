import {Context, Next} from 'koa';
import {UserBase, UserBaseSchema} from '../model/UserBaseSchema';

export const getUsers = async (ctx: Context, next: Next) => {
  ctx.body = 'ok';
  const users:UserBase[] = await UserBaseSchema.findAll({});
  console.log(users);
  await next();
};

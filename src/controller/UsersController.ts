import {Context, Next} from 'koa';
import {UserBase, UserBaseSchema} from '../model/UserBaseSchema';

export const beforeGetUsers = async (ctx: Context, next: Next) => {

};

export const getUsers = async (ctx: Context, next: Next) => {
  const users:UserBase[] = await UserBaseSchema.findAll({});
  console.log(users);
  ctx.body = users;
  await next();
};

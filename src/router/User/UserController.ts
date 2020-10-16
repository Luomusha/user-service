import {Context, Next} from 'koa';
import {UserBaseSchema} from '../../model/UserBaseSchema';
import {UserBase} from "../../type";

export const getUsers = async (ctx: Context, next: Next) => {
  ctx.body = 'ok';
  const users: UserBase[] = await UserBaseSchema.findAll({});
  console.log(users);
  await next();
};

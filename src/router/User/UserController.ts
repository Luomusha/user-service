import {Context, Next} from 'koa';
import {User} from "../../type";
import {findUsers} from "../../service/User";

export const getUsers = async (ctx: Context, next: Next) => {
  const users: User[] = await findUsers();
  ctx.body = users;
  await next();
};


import {Context, Next} from 'koa';
import {PLATFORM, User, USER_ROLE} from "../../type";
import {findUsers, saveUser} from "../../service/User";
import {saveAuthentication} from "../../service/Authentication";

export const getUsers = async (ctx: Context, next: Next) => {
  const users: User[] = await findUsers();
  ctx.body = users;
  await next();
};

export const postUser = async (ctx: Context, next: Next) => {
  const {username, password} = ctx.request.body;
  const user: User = await saveUser({
    username,
    userRole: USER_ROLE.normal,
    registerSource: PLATFORM.username
  });
  const authentication = await saveAuthentication({
    user,
    identityType: PLATFORM.username,
    identifier: username,
    certificate: password,
  })
  ctx.body = user
  await next();
};

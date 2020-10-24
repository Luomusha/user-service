import {Context, Next} from "koa";
import {PLATFORM, User, USER_ROLE} from "../../type";
import {saveUser} from "../../service/User";
import {saveAuthentication} from "../../service/Authentication";

export const beforeGetUser = async (ctx: Context, next: Next) => {
  await next();

}
export const getUser = async (ctx: Context, next: Next) => {
  const {token} = ctx.state;
  ctx.body = token.user;
  await next();
}

export const beforePostUser = async (ctx: Context, next: Next) => {
  await next();
}

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

export const beforePutUser = async (ctx: Context, next: Next) => {
  await next();
}
export const putUser = async (ctx: Context, next: Next) => {
  await next();
}

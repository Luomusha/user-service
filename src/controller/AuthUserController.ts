import {Context, Next} from 'koa';
import {UserBase, UserBaseSchema} from '../model/UserBaseSchema';

export const beforePostUser = async (ctx: Context, next: Next) => {
  const {username, password} = ctx.request.body;
  if (!username) {
    ctx.status = 400;
    ctx.body = {
      message: 'username is required.',
    };
  } else if (!password) {
    ctx.status = 400;
    ctx.body = {
      message: 'password is required.',
    };
  } else {
    await next();
  }
};

export const postUser = async (ctx: Context, next: Next) => {
  const user: UserBase = await UserBaseSchema.create({
    username: 'lossa',
  });
  ctx.status = 201;
  ctx.message = 'created';
  ctx.body = user;
  await next();
};


export const beforePutUser = async (ctx: Context, next: Next) => {
  const {username, password} = ctx.request.body;
  if (!username && !password) {
    ctx.status = 400;
    ctx.body = {
      message: 'username is required.',
    };
  } else {
    await next();
  }
};

export const putUser = async (ctx: Context, next: Next) => {
  const user: UserBase = await UserBaseSchema.create({
    username: 'lossa',
  });
  ctx.status = 201;
  ctx.message = 'created';
  ctx.body = user;
  await next();
};


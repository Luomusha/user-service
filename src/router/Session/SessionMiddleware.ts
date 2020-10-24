import {redis} from "../../db";

export const session = async (ctx, next) => {
  const base64Session = ctx.cookies.get('session')
  const buffer = Buffer.from(base64Session, 'base64')
  const session = buffer.toString('utf8')
  const token = await redis.hgetall(session);
  ctx.request.header.Authorization = `${token.token_type} ${token.access_token}`
  await next();
}

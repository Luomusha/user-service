import {redis} from "../../db";
import {Token} from "../../type";

export const saveSession = async (key: string, token: Token) => {
  await redis.hset(key,
    "access_token", token.access_token,
    "refresh_token", token.refresh_token,
    "token_type", token.token_type,
    "expires_in", token.expires_in,
  )
  const buffer = Buffer.from(key)
  const base64Session = buffer.toString('base64')
  return base64Session
}

export const removeSession = async (key: string):Promise<number> => {
  const removeCount = await redis.del(key);
  return removeCount
}

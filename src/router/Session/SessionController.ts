import {Context, Next} from "koa";
import fetch from "node-fetch";
import {redis} from "../../db";
import {Token} from "../../type";
import {saveSession} from "../../service/Session";

export const beforePostSession = async (ctx: Context, next: Next) => {
  const {username, password} = ctx.request.body;
  if (!username || !password) {
    ctx.status = 400;
    ctx.message = 'Bad Request'
  } else {
    await next();
  }
}

export const postSession = async (ctx: Context, next: Next) => {
  const {username, password} = ctx.request.body;
  console.log(username,password)
  const params = new URLSearchParams()
  params.append('client_id', "5f83175688fb8a3c94660150")
  params.append('client_secret', "ppp")
  params.append('grant_type', 'password')
  params.append('username', username)
  params.append('password', password)
  const response = await fetch('http://localhost:8080/oauth/token', {
    method: 'POST',
    body: params,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  });
  const token:Token = await response.json();
  const session = await saveSession(username, token)
  const expire = await redis.expire(username, token.expires_in)
  ctx.cookies.set('session', session, {
    maxAge: token.expires_in * 1000,
    signed: true,
  })
  ctx.cookies.set('authorized', 'yes', {
    maxAge: token.expires_in * 1000 * 10,
    httpOnly: false,
    signed: false,
  })
  ctx.redirect('http://localhost:3000');
  await next();
}

export const getSession = async (ctx: Context) => await ctx.render('authorization')

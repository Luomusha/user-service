import {Context, Next} from "koa";
import fetch from "node-fetch";

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
  const params = new URLSearchParams()
  params.append('client_id', "5f83175688fb8a3c94660150")
  params.append('client_secret', "ppp")
  params.append('grant_type', 'password')
  params.append('username', ctx.request.body.username)
  params.append('password', ctx.request.body.password)
  const response = await fetch('http://localhost:8080/oauth/token', {
    method: 'POST',
    body: params,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  });
  const token = await response.json();
  ctx.cookies.set('session', token, {
    maxAge: 36000,
  })
  ctx.redirect('/');
  await next();
}

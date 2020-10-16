import fetch from 'node-fetch'
import {Context, Next} from "koa";

export const session = async (ctx: Context, next: Next) => {
  const params = new URLSearchParams()
  params.append('client_id', "5f83175688fb8a3c94660150")
  params.append('client_secret', "ppp")
  params.append('grant_type', 'password')
  params.append('username', ctx.request.body.username)
  params.append('password', ctx.request.body.password)
  const response: Response = await fetch('http://localhost:8080/oauth/token', {
    method: 'POST',
    body: params,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  });
  const token = await response.json();
  console.log(token)
  ctx.cookies.set('token', JSON.stringify(token), {
    httpOnly: true,
    overwrite: true,
    signed: true,
    maxAge: token.expires_in,
  })
  ctx.redirect('/')
  await next();
}

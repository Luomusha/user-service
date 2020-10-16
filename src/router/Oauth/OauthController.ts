import {oauth, Request, Response} from '../../service/Oauth'

export const authorize = async (ctx, next) => {
  const oauthRequest = new Request(ctx.request);
  const oauthResponse = new Response(ctx.response);
  const authenticateHandler = {
    handle: function (request, response) {
      console.log('authenticateHandler')
      return '5a8ffa48775be8238c04478f'
    }
  }
  const options = {
    authenticateHandler: authenticateHandler,
  }
  const code = await oauth.authorize(oauthRequest, oauthResponse, options)
  ctx.body = oauthResponse.body
  ctx.status = oauthResponse.status
  ctx.set(oauthResponse.headers)
  await next();
}

export const token = async (ctx, next) => {
  const oauthRequest = new Request(ctx.request);
  const oauthResponse = new Response(ctx.response);

  const token = await oauth.token(oauthRequest, oauthResponse)
  ctx.body = oauthResponse.body;
  ctx.status = oauthResponse.status;
  ctx.set(oauthResponse.headers);
  await next();
}

export const authenticate = async (ctx, next) => {
  const oauthRequest = new Request(ctx.request);
  const oauthResponse = new Response(ctx.response);

  try {

    const token = await oauth.authenticate(oauthRequest, oauthResponse)
    console.log(token);
    ctx.body = oauthResponse.body;
    ctx.status = oauthResponse.status;
    ctx.set(oauthResponse.headers);
    await next();
  } catch (e) {
    ctx.status = e.code;
    ctx.body = {error: e.name, error_description: e.message}
  }
}

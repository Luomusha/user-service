import {oauth, Request, Response} from '../../service/oauth'

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
  // ctx.body = oauthResponse.body
  // ctx.status = oauthResponse.status
  // ctx.set(oauthResponse.headers)
  await ctx.render('404');
  await next();
}

export const token = async (ctx, next) => {
  const oauthRequest = new Request(ctx.request);
  const oauthResponse = new Response(ctx.response);

  const token = await oauth.token(oauthRequest, oauthResponse)
  ctx.body = oauthResponse.body
  ctx.status = oauthResponse.status
  ctx.set(oauthResponse.headers)
  await next();
}

export const authenticate = async (ctx, next) => {
  const oauthRequest = new Request(ctx.request);
  const oauthResponse = new Response(ctx.response);

  const token = await oauth.authenticate(oauthRequest, oauthResponse)
  await next();
}
import {oauth, Request, Response} from '../../service/Oauth'

export const authorize = async (ctx, next) => {
  const oauthRequest = new Request(ctx.request);
  const oauthResponse = new Response(ctx.response);
  const authenticateHandler = {
    handle: function (request, response) {
      console.log('authenticateHandler')
      return '5f85b6c2d43ec65337cac93a'
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

  try {

    const token = await oauth.token(oauthRequest, oauthResponse)
    ctx.body = oauthResponse.body;
    ctx.status = oauthResponse.status;
    ctx.set(oauthResponse.headers);
  } catch (e) {
    console.log(e)
    ctx.body = {error: e.name, error_description: e.message};
    ctx.status = e.code;
  }
  await next();
}



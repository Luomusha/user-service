import {oauth, Request, Response} from "../../service/Oauth";

export const authenticate = async (ctx, next) => {
  const oauthRequest = new Request(ctx.request);
  const oauthResponse = new Response(ctx.response);
  const {scope} = ctx.request.body;
  try {
    const token = await oauth.authenticate(oauthRequest, oauthResponse, {
      scope: scope
    })
    ctx.state.token = token;
    ctx.body = oauthResponse.body;
    ctx.status = oauthResponse.status;
    ctx.set(oauthResponse.headers);
    await next();
  } catch (e) {
    ctx.status = e.code;
    ctx.body = {error: e.name, error_description: e.message}
  }
}

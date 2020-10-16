import * as Router from 'koa-router';
import {authenticate, authorize, token} from "./OauthController";
import {Context, DefaultState} from "koa";

const OauthRouter = new Router<DefaultState, Context>();

OauthRouter.get('/authorize', authorize)
OauthRouter.post('/token', token)
OauthRouter.post('/authenticate', authenticate)

export default OauthRouter

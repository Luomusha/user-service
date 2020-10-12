import * as Router from 'koa-router';
import {authenticate, authorize, token} from "../controller/OauthController";

const oauthRouter = new Router();

oauthRouter.get('/authorize', authorize)
oauthRouter.post('/token', token)
oauthRouter.get('/aaa', authenticate)

export default oauthRouter

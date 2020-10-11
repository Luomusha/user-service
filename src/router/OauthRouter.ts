import * as Router from 'koa-router';
import {authenticate, authorize, token} from "../controller/OauthController";

const oauthRouter = new Router();

oauthRouter.get('/', authorize)
oauthRouter.post('/', token)
oauthRouter.get('/', authenticate)

export default oauthRouter

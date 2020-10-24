import * as Router from 'koa-router';
import {Context, DefaultState} from "koa";
import {beforeGetUser, beforePostUser, beforePutUser, getUser, postUser, putUser} from "./AuthUserController";

const AuthUserRouter = new Router<DefaultState, Context>();
AuthUserRouter.get('/', beforeGetUser, getUser);
AuthUserRouter.post('/', beforePostUser, postUser);
AuthUserRouter.put('/', beforePutUser, putUser);
export default AuthUserRouter;

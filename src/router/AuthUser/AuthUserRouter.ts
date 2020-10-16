import * as Router from 'koa-router';
import {Context, DefaultState} from "koa";

const AuthUserRouter = new Router<DefaultState, Context>();
// AuthUserRouter.post('/', beforePostUser, postUser);
// AuthUserRouter.put('/', beforePutUser, putUser);
export default AuthUserRouter;

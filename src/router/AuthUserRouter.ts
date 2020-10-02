import * as Router from 'koa-router';
import {beforePostUser, beforePutUser, postUser, putUser} from '../controller/AuthUserController';

const authUserRouter = new Router();
authUserRouter.post('/', beforePostUser, postUser);
authUserRouter.put('/', beforePutUser, putUser);
export default authUserRouter;

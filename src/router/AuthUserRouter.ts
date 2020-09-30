import * as Router from 'koa-router';
import {
  beforeGetUser,
  beforePostUser,
  beforePutUser,
  getUser,
  postUser,
  putUser,
} from '../controller/AuthUserController';

const authUserRouter = new Router();
authUserRouter.get('/:username', beforeGetUser, getUser);
authUserRouter.post('/', beforePostUser, postUser);
authUserRouter.put('/', beforePutUser, putUser);
export default authUserRouter;

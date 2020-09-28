import * as Router from 'koa-router';
import {getUserList, postUser} from '../controller/UserController';

const userRouter = new Router();
userRouter.get('/', getUserList);
userRouter.post('/', postUser);
export default userRouter;

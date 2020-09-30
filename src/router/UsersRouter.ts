import * as Router from 'koa-router';
import {beforeGetUsers, getUsers} from '../controller/UsersController';

const userRouter = new Router();
userRouter.get('/', beforeGetUsers, getUsers);
export default userRouter;

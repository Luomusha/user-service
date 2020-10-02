import * as Router from 'koa-router';
import {getUsers} from '../controller/UsersController';

const userRouter = new Router();
userRouter.get('/', getUsers);
export default userRouter;

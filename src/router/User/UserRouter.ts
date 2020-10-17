import * as Router from 'koa-router';
import {getUsers, postUser} from './UserController';
import {Context, DefaultState} from "koa";

const UserRouter = new Router<DefaultState, Context>();
UserRouter.get('/', getUsers);


UserRouter.post('/', postUser);
export default UserRouter;

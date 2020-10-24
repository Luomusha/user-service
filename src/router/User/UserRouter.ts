import * as Router from 'koa-router';
import {getUsers} from './UserController';
import {Context, DefaultState} from "koa";

const UserRouter = new Router<DefaultState, Context>();
UserRouter.get('/', getUsers);


export default UserRouter;

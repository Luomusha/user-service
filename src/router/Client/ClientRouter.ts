import {session} from "./SessionController";
import * as Router from "koa-router";
import {Context, DefaultState} from "koa";
import {home, login, register} from "./ClientController";

const ClientRouter = new Router<DefaultState, Context>();
ClientRouter.get('/', home)
ClientRouter.get('/login', login)
ClientRouter.get('/register', register)
ClientRouter.post('/session', session)

export default ClientRouter;

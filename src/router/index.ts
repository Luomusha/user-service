import * as Router from 'koa-router';
import usersRouter from './UsersRouter';
import authUserRouter from './AuthUserRouter';
import tokenRouter from './TokenRouter';
import oauthRouter from "./OauthRouter";


const router = new Router();
router.use('/user', authUserRouter.routes());
router.use('/users', usersRouter.routes());
router.use('/token', tokenRouter.routes());
router.use('/oauth', oauthRouter.routes());

export default router;

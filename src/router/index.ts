import * as Router from 'koa-router';
import UsersRouter from './Users/UsersRouter';
import {AuthUserRouter} from './AuthUser';
import {OauthRouter} from "./Oauth";
import ClientRouter from "./Client/ClientRouter";


const router = new Router();


router.use('/user', AuthUserRouter.routes());
router.use('/users', UsersRouter.routes());
router.use('/oauth', OauthRouter.routes());

router.use(ClientRouter.routes());

export default router;

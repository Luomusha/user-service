import * as Router from 'koa-router';
import {UserRouter} from './User';
import {AuthUserRouter} from './AuthUser';
import {authenticate, OauthRouter} from "./Oauth";
import {session, SessionRouter} from "./Session";
import {FileRouter} from "./File";


const router = new Router();

router.use('/session', SessionRouter.routes());

router.use('/user', authenticate, AuthUserRouter.routes());
router.use('/users', UserRouter.routes());
router.use('/oauth', OauthRouter.routes());

router.use('/file', session, authenticate, FileRouter.routes());



export default router;

import * as Router from 'koa-router';
import {UserRouter} from './User';
import {AuthUserRouter} from './AuthUser';
import {authenticate, OauthRouter} from "./Oauth";
import {MemberRouter} from "./Member";
import {GenealogyRouter} from "./Genealogy";
import {SessionRouter} from "./Session";
import {session} from "./Session/SessionMiddleware";


const router = new Router();

router.use('/session', SessionRouter.routes());

router.use('/user', session, authenticate, AuthUserRouter.routes());
router.use('/users', UserRouter.routes());
router.use('/oauth', OauthRouter.routes());


router.use('/members',  MemberRouter.routes());
router.use('/genealogies',  GenealogyRouter.routes());



export default router;

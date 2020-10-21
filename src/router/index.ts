import * as Router from 'koa-router';
import {UserRouter} from './User';
import {AuthUserRouter} from './AuthUser';
import {OauthRouter} from "./Oauth";
import {MemberRouter} from "./Member";
import {FamilyRouter} from "./Family";
import {SessionRouter} from "./Session";


const router = new Router();


router.use('/user', AuthUserRouter.routes());
router.use('/users', UserRouter.routes());
router.use('/oauth', OauthRouter.routes());

router.use('/session', SessionRouter.routes());

router.use('/members',  MemberRouter.routes());
router.use('/families',  FamilyRouter.routes());



export default router;

import * as Router from 'koa-router';
import {UserRouter} from './User';
import {AuthUserRouter} from './AuthUser';
import {authenticate, OauthRouter} from "./Oauth";
import {RelativeRouter} from './Relative';
import {GenealogyRouter} from "./Genealogy";
import {session, SessionRouter} from "./Session";
import {FileRouter} from "./File";


const router = new Router();

router.use('/session', SessionRouter.routes());

router.use('/user', session, authenticate, AuthUserRouter.routes());
router.use('/users', UserRouter.routes());
router.use('/oauth', OauthRouter.routes());


router.use('/relatives', session, authenticate, RelativeRouter.routes());
router.use('/genealogies', GenealogyRouter.routes());

router.use('/file', FileRouter.routes());



export default router;

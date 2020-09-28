import * as Router from 'koa-router';
import userRouter from './UserRouter';
import tokenRouter from './TokenRouter';


const router = new Router();
router.use('/user', userRouter.routes());
router.use('/token', tokenRouter.routes());
export default router;

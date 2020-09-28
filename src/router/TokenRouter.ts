import * as Router from "koa-router";
import {generateToken} from "../controller/TokenController";

const tokenRouter = new Router();
tokenRouter.get("/", generateToken)
export default tokenRouter;

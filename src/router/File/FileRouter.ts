import {Context, DefaultState} from "koa";
import * as Router from "koa-router";
import {postFile} from "./FileController";


const FileRouter = new Router<DefaultState, Context>();

FileRouter.post('/', postFile);

export default FileRouter;

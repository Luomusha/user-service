import {Context, DefaultState} from "koa";
import * as Router from "koa-router";
import {postFile} from "./FileController";
import * as koaStatic from "koa-static";
import * as path from "path";

const ROOT = process.cwd();

const FileRouter = new Router<DefaultState, Context>();

FileRouter
  .get('/', koaStatic(path.join(ROOT, 'upload')))
  .post('/', postFile);

export default FileRouter;

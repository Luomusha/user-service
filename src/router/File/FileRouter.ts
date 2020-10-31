import {Context, DefaultState} from "koa";
import * as Router from "koa-router";
import {getFile, postFile} from "./FileController";

const FileRouter = new Router<DefaultState, Context>();

FileRouter
  .get('/:username/:filename', getFile)
  .post('/', postFile);

export default FileRouter;

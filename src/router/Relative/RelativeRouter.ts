import {Context, DefaultState} from "koa";
import {appendRelative, getRelative, getRelatives, patchRelative, postRelative, putRelative} from "./RelativeController";
import Router = require("koa-router");

const RelativeRouter = new Router<DefaultState, Context>();

RelativeRouter
  .get('/', getRelatives)
  .post('/', postRelative)

RelativeRouter
  .param('relativeId', appendRelative)
  .get('/:relativeId', getRelative)
  .put('/:relativeId', putRelative)
  .patch('/:relativeId', patchRelative)

export default RelativeRouter

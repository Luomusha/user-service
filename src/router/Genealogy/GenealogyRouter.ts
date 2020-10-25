import {Context, DefaultState} from "koa";
import {appendGenealogy, getGenealogies, postGenealogy, postRelative} from "./GenealogyController";
import Router = require("koa-router");

const GenealogyRouter = new Router<DefaultState, Context>();

GenealogyRouter.get('/', getGenealogies);
GenealogyRouter.post('/', postGenealogy);

GenealogyRouter
  .param('genealogyId', appendGenealogy)
  .post('/:genealogyId/relatives', postRelative)
export default GenealogyRouter

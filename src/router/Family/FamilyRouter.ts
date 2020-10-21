import {Context, DefaultState} from "koa";
import {appendFamily, getFamilies, postMember} from "./FamilyController";
import Router = require("koa-router");

const FamilyRouter = new Router<DefaultState, Context>();

FamilyRouter.get('/', getFamilies);

FamilyRouter
  .param('familyId', appendFamily)
  .post('/:familyId/members', postMember)
export default FamilyRouter

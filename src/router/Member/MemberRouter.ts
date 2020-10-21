import {Context, DefaultState} from "koa";
import {appendMember, getMember, getMembers, patchMember, postMember, putMember} from "./MemberController";
import Router = require("koa-router");

const MemberRouter = new Router<DefaultState, Context>();

MemberRouter
  .get('/', getMembers)
  .post('/', postMember)

MemberRouter
  .param('memberId', appendMember)
  .get('/:memberId', getMember)
  .put('/:memberId', putMember)
  .patch('/:memberId', patchMember)

export default MemberRouter

import {Context, DefaultState, Middleware, Next} from "koa";
import {saveMember} from "../../service/Member";
import {IParamMiddleware} from "koa-router";
import {findMemberById} from "../../service/Member/MemberService";

export const getMembers = async (ctx: Context, next: Next) => {
  await next();
}

export const postMember: Middleware = async (ctx: Context, next: Next) => {
  const member = ctx.request.body;
  const memberDocument = await saveMember(member)
  ctx.body = memberDocument;
  await next();
}


export const appendMember:IParamMiddleware<DefaultState, Context> = async (memberId: string, ctx: Context, next: Next) => {
  const member = await findMemberById(memberId);
  ctx.assert(member, 401, 'member not exist')
  ctx.state.member = member
  await next();
}

export const getMember: Middleware = async (ctx: Context, next: Next) => {
  await next();
}

export const putMember: Middleware = async (ctx: Context, next: Next) => {
  await next();
}

export const patchMember: Middleware = async (ctx: Context, next: Next) => {
  await next();
}


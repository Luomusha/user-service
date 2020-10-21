import {Context, DefaultState, Next} from "koa";
import {findFamilies, saveFamily} from "../../service/Family";
import {saveFamilyMember} from "../../service/FamilyMember/FamilyMemberService";
import {IParamMiddleware} from "koa-router";
import {findMemberById} from "../../service/Member/MemberService";

export const getFamilies = async (ctx: Context, next: Next) => {
  const families = await findFamilies()
  ctx.body = families
  await next();
}

export const postFamily = async (ctx: Context, next: Next) => {
  const {host, owner} = ctx.request.body;
  const familyInstance = await saveFamily({
    host,
    owner,
  })
  ctx.body = familyInstance
  await next();
}

export const appendFamily: IParamMiddleware<DefaultState, Context> = async (familyId: string, ctx: Context, next: Next) => {
  const member = await findMemberById(familyId);
  ctx.assert(member, 401, 'member not exist')
  ctx.state.member = member
}

export const postMember = async (ctx: Context, next: Next) => {
  const {familyId, memberId} = ctx.request.body
  const familyMember = await saveFamilyMember(familyId, memberId)
  return true
}

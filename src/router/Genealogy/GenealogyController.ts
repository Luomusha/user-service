import {Context, DefaultState, Next} from "koa";
import {IParamMiddleware} from "koa-router";
import {saveGenealogyMember} from "../../service/GenealogyMember";
import {findMemberById} from "../../service/Member/MemberService";
import {findGenealogies, saveGenealogy} from "../../service/Genealogy";

export const getGenealogies = async (ctx: Context, next: Next) => {
  const genealogies = await findGenealogies()
  ctx.body = genealogies
  await next();
}

export const postGenealogy = async (ctx: Context, next: Next) => {
  const {name, cover, owner} = ctx.request.body;
  const genealogyInstance = await saveGenealogy({
    name,
    cover,
    owner,
  })
  ctx.body = genealogyInstance
  await next();
}

export const appendGenealogy: IParamMiddleware<DefaultState, Context> = async (genealogyId: string, ctx: Context, next: Next) => {
  const member = await findMemberById(genealogyId);
  ctx.assert(member, 401, 'member not exist')
  ctx.state.member = member
}

export const postMember = async (ctx: Context, next: Next) => {
  const {genealogyId, memberId} = ctx.request.body
  const genealogyMember = await saveGenealogyMember(genealogyId, memberId)
  return genealogyMember
}

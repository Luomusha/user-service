import {Context, DefaultState, Next} from "koa";
import {IParamMiddleware} from "koa-router";
import {saveGenealogyRelative} from "../../service/GenealogyRelative";
import {findRelativeById} from "../../service/Relative";
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
  const relative = await findRelativeById(genealogyId);
  ctx.assert(relative, 401, 'relative not exist')
  ctx.state.relative = relative
}

export const postRelative = async (ctx: Context, next: Next) => {
  const {genealogyId, relativeId} = ctx.request.body
  const genealogyRelative = await saveGenealogyRelative(genealogyId, relativeId)
  return genealogyRelative
}

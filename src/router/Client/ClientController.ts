import {Context} from "koa";

export const home = async (ctx: Context, next) => await ctx.render('home')
export const login = async (ctx: Context, next) => await ctx.render('login')
export const register = async (ctx: Context, next) => await ctx.render('register')

import {Context} from "koa";

export const home = async (ctx: Context) => await ctx.render('home')
export const login = async (ctx: Context) => await ctx.render('login')
export const register = async (ctx: Context) => await ctx.render('register')

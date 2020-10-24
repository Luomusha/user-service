import * as Router from 'koa-router';
import {Context, DefaultState} from "koa";
import {beforePostSession, getSession, postSession} from "./SessionController";

const SessionRouter = new Router<DefaultState, Context>();

// sign in
SessionRouter
  .get('/', getSession)
  .post('/', beforePostSession, postSession)

export default SessionRouter

import * as Router from 'koa-router';
import {Context, DefaultState} from "koa";
import {beforePostSession, postSession} from "./SessionController";

const SessionRouter = new Router<DefaultState, Context>();

// sign in
SessionRouter
  .post('/', beforePostSession, postSession)

export default SessionRouter

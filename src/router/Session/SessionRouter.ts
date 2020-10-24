import * as Router from 'koa-router';
import {Context, DefaultState} from "koa";
import {beforeDeleteSession, beforePostSession, deleteSession, getSession, postSession} from "./SessionController";

const SessionRouter = new Router<DefaultState, Context>();

// sign in
SessionRouter
  .get('/', getSession)
  .post('/', beforePostSession, postSession)
  .delete('/', beforeDeleteSession, deleteSession)

export default SessionRouter

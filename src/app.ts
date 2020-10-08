import * as Koa from 'koa';
import {APP_KEY} from './config';
import * as logger from 'koa-logger';
import * as koaBody from 'koa-body';
import router from './router';

const app = new Koa();
app.keys = [APP_KEY];
app.proxy = true;
app.use(logger());
app.use(koaBody());
app.use(router.routes());

export default app;

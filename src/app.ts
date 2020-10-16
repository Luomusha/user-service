import * as Koa from 'koa';
import {APP_KEY} from './config';
import * as logger from 'koa-logger';
import * as koaBody from 'koa-body';
import * as koaViews from 'koa-views';
import * as koaStatic from 'koa-static';
import * as path from 'path'
import router from './router';

const staticRoot = path.resolve(__dirname, '..', 'static')
const app = new Koa();
app.keys = [APP_KEY];
app.proxy = true;

app.use(logger());
app.use(koaStatic(staticRoot))
app.use(koaViews(path.resolve(staticRoot)))
app.use(koaBody());
app.use(router.routes());

export default app;

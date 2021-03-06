import {APP_KEY} from './config';
import * as Koa from 'koa';
import * as logger from 'koa-logger';
import * as koaBody from 'koa-body';
import * as koaViews from 'koa-views';
import * as koaStatic from 'koa-static';
import * as path from 'path'
import router from './router';

const ROOT = process.cwd();

const staticRoot = path.join(ROOT, 'static')
const uploadRoot = path.join(ROOT, 'upload')
const app = new Koa();
app.keys = [APP_KEY];
app.proxy = true;

app.use(logger());
app.use(koaStatic(staticRoot))
app.use(koaViews(path.resolve(staticRoot)))
app.use(koaBody({
  multipart: true,
  formidable: {
    uploadDir: uploadRoot,
    keepExtensions: true,
    maxFieldsSize:2 * 1024 * 1024,
  }
}));
app.use(router.routes());

export default app;

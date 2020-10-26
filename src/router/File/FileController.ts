import {Context, Next} from "koa";
import * as fs from "fs";
import * as path from "path";

const ROOT = process.cwd();

export const postFile = async (ctx: Context, next: Next) => {
  const file = ctx.request.files.file;
  const p = path.parse(file.path);
  console.log(file, p);
  const newPath = path.join(ROOT, 'upload', ctx.state.user.username);
  const newFile = path.join(newPath, p.base);
  await fs.mkdirSync(newPath, {recursive: true});
  await fs.renameSync(file.path, newFile);
  ctx.body = {
    uri: p.base
  };
  await next();
}

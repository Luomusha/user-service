import {Context, Next} from "koa";
import * as fs from "fs";
import * as path from "path";

const ROOT = process.cwd();

export const getFile = async (ctx: Context, next: Next) => {
  const {username, filename} = ctx.params;
  const fileName = path.join(ROOT, 'upload', username, filename);
  console.log("@@@", username, filename, fileName);
  const file = await fs.readFileSync(fileName);
  console.log(file);
  ctx.body = file;
  ctx.type = 'image/png'
}
export const postFile = async (ctx: Context, next: Next) => {
  const file = ctx.request.files.file;
  const {username} = ctx.state.user;
  const p = path.parse(file.path);
  console.log(file, p);
  const newPath = path.join(ROOT, 'upload', username);
  const newFile = path.join(newPath, p.base);
  console.log(newFile);
  await fs.mkdirSync(newPath, {recursive: true});
  await fs.renameSync(file.path, newFile);
  ctx.body = {
    uri: path.join('/', username, p.base)
  };
  await next();
}

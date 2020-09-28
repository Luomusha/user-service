import * as dotenv from 'dotenv';

dotenv.config();

export const MYSQL_USERNAME = process.env.MYSQL_USERNAME;
export const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
export const MYSQL_DATABASE = process.env.MYSQL_DATABASE || 'user-server';
export const APP_KEY = process.env.APP_KEY || 'user-server';

if (!MYSQL_DATABASE) {
  throw new Error('MYSQL_DATABASE config is required.Check your .env file.');
}
if (!MYSQL_USERNAME) {
  throw new Error('MYSQL_USERNAME config is required.Check your .env file.');
}
if (!MYSQL_PASSWORD) {
  throw new Error('MYSQL_PASSWORD config is required.Check your .env file.');
}

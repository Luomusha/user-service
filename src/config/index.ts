import * as dotenv from 'dotenv';

dotenv.config();

export const MYSQL_USERNAME = process.env.MYSQL_USERNAME || 'root';
export const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || '123456';
export const MYSQL_DATABASE = process.env.MYSQL_DATABASE || 'user-server';
export const MYSQL_PORT = Number(process.env.MYSQL_PORT) || 3306;
export const MYSQL_HOST = process.env.MYSQL_HOST || 'db';
export const USER_SERVICE_PORT = Number(process.env.USER_SERVICE_PORT) || 8080;
export const APP_KEY = process.env.APP_KEY || 'user-server';

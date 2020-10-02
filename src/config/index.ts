import * as dotenv from 'dotenv';

dotenv.config();

export const MYSQL_USERNAME = process.env.MYSQL_USERNAME;
export const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
export const MYSQL_DATABASE = process.env.MYSQL_DATABASE;
export const MYSQL_PORT = Number(process.env.MYSQL_PORT);
export const MYSQL_HOST = process.env.MYSQL_HOST;

export const USER_SERVICE_PORT = Number(process.env.USER_SERVICE_PORT);
export const APP_KEY = process.env.APP_KEY || 'user-server';

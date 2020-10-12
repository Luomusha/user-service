export enum PLATFORM { 'username', 'mobile', 'email', 'wechat', 'qq', 'weibo'}

export enum USER_ROLE { 'normal', 'admin'}

export enum GENDER {'male' = 'male', 'female' = 'female'}

export enum CLIENT {'web' = 'web', 'wechat' = 'wechat'}

export enum OPERATING_SYSTEM { 'android', 'ios', 'windows', 'linux', 'osx'}

export interface User {
  userRole: USER_ROLE;
  registerSource: PLATFORM;
  username: string;
  nickname: string;
  gender: GENDER;
  birthday: Date;
  signature: string;
  mobile: string;
  mobileBindTime: Date;
  email: string;
  emailBindTime: Date;
  face: string;
}

export interface UserBase {
  uid: number;
  userRole: USER_ROLE;
  registerSource: PLATFORM;
  username: string;
  nickname: string;
  gender: GENDER;
  birthday: string;
  signature: string;
  mobile: string;
  mobileBindTime: string;
  email: string;
  emailBindTime: string;
  face: string;
  createTime: string;
  updateTime: string;
}

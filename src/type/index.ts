export enum PLATFORM { 'username' = 'username', 'mobile' = 'mobile', 'email' = 'email', 'wechat' = "wechat", 'qq' = "qq", 'weibo' = "weibo"}

export enum USER_ROLE { 'normal' = 'normal', 'admin' = 'admin'}

export enum GENDER {'male' = 'male', 'female' = 'female'}

export enum OPERATING_SYSTEM { 'android', 'ios', 'windows', 'linux', 'osx'}

export enum RELATIONSHIP_TYPE {
  'Consanguinity' = 'Consanguinity',
  'Marriage' = 'Marriage',
  'FictitiousBlood' = 'FictitiousBlood',
}
interface UserBasic{
  userRole: USER_ROLE;
  registerSource: PLATFORM;
  username: string;

}

interface UserWithOptional extends UserBasic{
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

export type User = UserBasic | UserWithOptional

export interface Authentication {
  identityType: string;
  identifier: string;
  certificate: string;
  user: User;
}


export interface Member {
  id: number,
  name: string,
  birthday: string,
  gender: GENDER,
}

export interface Genealogy {
  id?: number;
  name: string;
  cover: string;
  owner: string,
}

export interface GenealogyMember {
  id: number,
  genealogyId: number;
  memberId: number;
}

export interface Relationship {
  id: number;
  from: number;
  to: number;
  relationshipType: RELATIONSHIP_TYPE
}

export type Token = {
  "access_token": string;
  "refresh_token": string;
  "token_type": string;
  "expires_in": number;

}

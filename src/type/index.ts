export type PLATFORM = 'username' | 'mobile' | 'email' | 'wechat' | 'qq' | 'weibo'
export type USER_ROLE = 'normal' | 'admin'
export type GENDER = 'male' | 'female'
export type AUTH_COMMAND = 'sign_in_success' | 'sign_in_fail' | 'sign_out_success' | 'sign_out_fail'
export type CLIENT = 'web' | 'wechat'
export type OPERATING_SYSTEM = 'android' | 'ios' | 'windows' | 'linux' | 'osx'


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

export interface Client {
  id: string;
  clientSecret: string;
  redirectUris: [string];
  grants: [string];
  accessTokenLifetime: number;
  refreshTokenLifetime: number;
}

export interface Code {
  authorizationCode: string;
  expiresAt: string;
  redirectUri: string;
  scope: string;
  client: Client;
  user: UserBase;
}

import {CLIENT, OPERATING_SYSTEM, PLATFORM} from '../type';

export interface UserAuthorizeLog {
  id: number;
  uid: number;
  type: PLATFORM;
  client: CLIENT;
  ip: string;
  os: OPERATING_SYSTEM;
  createTime: string;

}

import * as OAuth2Server from 'oauth2-server'
import {Request, Response} from 'oauth2-server'
import {model} from './Oauth2Model'
import {saveUser} from "../user/UserService";
import {GENDER, PLATFORM, USER_ROLE} from "../../type";

const oauth = new OAuth2Server({model})

// saveUser({
//   username: 'lossa',
//   nickname: '祝二狗',
//   gender: GENDER.male,
//   userRole: USER_ROLE.normal,
//   registerSource: PLATFORM.mobile,
//   birthday: new Date(),
//   signature: '祝二狗大脑门',
//   mobile: '15566968763',
//   mobileBindTime: new Date(),
//   email: 'zhuchuanpeng@qq.com',
//   emailBindTime: new Date(),
//   face: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/1024px-Google_Contacts_icon.svg.png',
// })

export {Request, Response, oauth}

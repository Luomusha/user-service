import * as OAuth2Server from 'oauth2-server'
import {Request, Response} from 'oauth2-server'
import {model} from './Oauth2Model'
import {saveUser} from "../user";
import {GENDER, PLATFORM, USER_ROLE} from "../../type";
import {saveAuthentication} from "../authentication";

const oauth = new OAuth2Server({model})

const init = async () => {

  const user = await saveUser({
    username: 'lossa',
    nickname: '祝二狗',
    gender: GENDER.male,
    userRole: USER_ROLE.normal,
    registerSource: PLATFORM.username,
    birthday: new Date(),
    signature: '祝二狗大脑门',
    mobile: '15566968763',
    mobileBindTime: new Date(),
    email: 'zhuchuanpeng@qq.com',
    emailBindTime: new Date(),
    face: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/1024px-Google_Contacts_icon.svg.png',
  })
  const authentication = await saveAuthentication({
    user,
    identityType: PLATFORM.username,
    identifier: 'lossa',
    certificate: '123456'
  })
}
init();

export {Request, Response, oauth}

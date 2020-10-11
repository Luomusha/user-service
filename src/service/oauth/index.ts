import {OAuth2Server, Request, Response} from 'oauth2-server'
import {model} from './Oauth2Model'

const oauth = new OAuth2Server({
  model
})

export {Request, Response, oauth}

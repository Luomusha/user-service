import {AuthorizationCode, AuthorizationCodeModel, Client, PasswordModel, Token} from "oauth2-server";
import {getClientById} from "../client";
import {saveCode} from "../code";
import {saveToken} from "../token";
import {getCodeByAuthorizationCode} from "../code/CodeService";
import {getTokenByAccessToken} from "../token/TokenService";

export const model: AuthorizationCodeModel | PasswordModel = {

  /**
   * request authentication
   * @param accessToken
   */
  getAccessToken: async (accessToken) => {
    const token = await getTokenByAccessToken(accessToken)
    return token
  },

  /**
   * authorization_code grant
   * @param authorizationCode
   * @returns {Promise<AuthorizationCode>}
   */
  getAuthorizationCode: async (authorizationCode) => {
    const code = await getCodeByAuthorizationCode(authorizationCode)
    return code
  },

  /**
   *  authorization_code grant
   *  client_credentials grant
   *  refresh_token grant
   *  password grant
   * @param clientId
   * @param clientSecret
   * @returns {Promise<Client>}
   */
  getClient: getClientById,

  /**
   * password grant
   * @param username
   * @param password
   */
  getUser: async (username, password) => {
    return {}
  },

  /**
   * authorization_code grant
   * client_credentials grant
   * refresh_token grant
   * password grant
   * @param token
   * @param client
   * @param user
   * @returns {Promise<Token>}
   */
  saveToken: async (token, client, user) => {
    return await saveToken({...token, client, user});
  },

  /**
   * authorization_code grant
   * @param code
   * @param client
   * @param user
   * @returns {Promise<AuthorizationCode>}
   */
  saveAuthorizationCode: async (code, client, user) => {
    const codeModel = await saveCode({...code, user, client});
    return codeModel
  },

  /**
   * authorization_code grant
   * @param code
   * @returns {Promise<boolean>}
   */
  revokeAuthorizationCode: async (code) => {
    return true
  },

  /**
   * request authentication
   * @param token
   * @param scope
   */
  verifyScope: async (token, scope) => {
    console.log(token, scope)
    return true
  },

}

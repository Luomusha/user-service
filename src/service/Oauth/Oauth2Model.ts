import {
  AuthorizationCode,
  AuthorizationCodeModel,
  Client,
  PasswordModel,
  RefreshTokenModel,
  Token,
  User
} from "oauth2-server";
import {getClientById} from "../Client";
import {getCodeByAuthorizationCode, saveCode} from "../Code";
import {getTokenByAccessToken, saveToken} from "../Token";
import {getAuthenticationByUsername} from "../Authentication/AuthenticationService";
import {deleteToken, findTokenByRefreshToken} from "../Token/TokenService";

export const model: AuthorizationCodeModel | PasswordModel | RefreshTokenModel = {

  /**
   * request authentication
   * @param accessToken
   */
  getAccessToken: getTokenByAccessToken,

  /**
   * authorization_code grant
   * @param authorizationCode
   * @returns {Promise<AuthorizationCode>}
   */
  getAuthorizationCode: getCodeByAuthorizationCode,

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
  getUser: async (username, password): Promise<User> => {
    const authentication = await getAuthenticationByUsername(username, password);
    return authentication.user;
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
  saveToken: async (token, client, user): Promise<Token> => {
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
    return token.scope === scope;
  },

  /**
   * refresh_token
   * @param refreshToken
   */
  getRefreshToken: findTokenByRefreshToken,

  /**
   * refresh_token
   */
  revokeToken: async(token) => {
    const tokenInstance = await deleteToken(token);
    return tokenInstance.refreshToken === token.refreshToken;
  },
}

const model = {
  /**
   * request authentication
   * @param accessToken
   */
  getAccessToken: async (accessToken) => {

  },

  /**
   * refresh_token grant
   * @param refreshToken
   */
  getRefreshToken: async (refreshToken) => {


  },

  /**
   * authorization_code grant
   * @param authorizationCode
   * @returns {Promise<void>}
   */
  getAuthorizationCode: async (authorizationCode) => {

  },

  /**
   *  authorization_code grant
   *  client_credentials grant
   *  refresh_token grant
   *  password grant
   * @param clientId
   * @param clientSecret
   * @returns {Promise<{id: string, redirectUris: string[], grants: string[], accessTokenLifetime: number, refreshTokenLifetime: number}>}
   */
  getClient: async (clientId, clientSecret) => {
  },

  /**
   * password grant
   * @param username
   * @param password
   */
  getUser: async (username, password) => {

  },

  /**
   * client_credentials grant
   * @param client
   */
  getUserFromClient: async (client) => {

  },

  /**
   * authorization_code grant
   * client_credentials grant
   * refresh_token grant
   * password grant
   * @param token
   * @param client
   * @param user
   * @returns {Promise<void>}
   */
  saveToken: async (token, client, user) => {

  },

  /**
   * authorization_code grant
   * @param code
   * @param client
   * @param user
   * @returns {Promise<void>}
   */
  saveAuthorizationCode: async (code, client, user) => {

  },

  /**
   * authorization_code grant
   * @param code
   * @returns {Promise<void>}
   */
  revokeAuthorizationCode: async (code) => {

  },

  /**
   * request authentication
   * @param accessToken
   * @param scope
   */
  verifyScope: (accessToken, scope) => {


  },

}

export {model}

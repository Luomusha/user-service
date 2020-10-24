import {Token} from "oauth2-server";
import {TokenModel} from "./TokenSchema";


export const saveToken = async (token: Token): Promise<Token> => {
  const tokenInstance = new TokenModel(token);
  const result = await tokenInstance.save();
  return result.toObject();
}

export const getTokenByAccessToken = async (accessToken: string) => {
  const tokenInstance = await TokenModel.findOne({accessToken}).populate('user')
  return tokenInstance.toObject();
}

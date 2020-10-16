import {CodeModel} from './CodeSchema'
import {AuthorizationCode} from "oauth2-server";


export const saveCode = async (code: AuthorizationCode):Promise<AuthorizationCode> => {
  const codeInstance = new CodeModel(code)
  const result = await codeInstance.save();
  return result.toObject()
}

export const getCodeByAuthorizationCode = async (authorizationCode: string) => {
  const codeInstance = await CodeModel.findOne({authorizationCode}).populate('client')
  return codeInstance.toObject();
}

export const removeCode = async (code: AuthorizationCode) => {
  await CodeModel.findOneAndDelete(code)
}

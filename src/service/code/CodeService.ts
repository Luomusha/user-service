import {CodeSchema} from './CodeSchema'
import {mongoose} from '../../db'
import {Code} from "../../type";

const CodeModel = mongoose.model('Code', CodeSchema)

export const saveCode = async (code:Code) => {
  const codeInstance = new CodeModel(code)
  await codeInstance.save();
}

export const removeCode = async (code:Code) => {
  await CodeModel.findOneAndDelete(code)
}

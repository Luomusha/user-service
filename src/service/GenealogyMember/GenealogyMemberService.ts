import {GenealogyMember} from "../../type";
import {GenealogyMemberSchema} from "./GenealogyMemberSchema";

export const findGenealogyMembersByGenealogy = async (genealogyId: number): Promise<GenealogyMember[]> => {
  const genealogyMemberList = await GenealogyMemberSchema.findAll({
    where: {
      genealogyId: genealogyId
    }
  })
  return genealogyMemberList
}

export const saveGenealogyMember = async (genealogyId: string, memberId: string,) => {
  const instance = await GenealogyMemberSchema.create({
    genealogyId: genealogyId,
    memberId: memberId,
  })
  return instance
}

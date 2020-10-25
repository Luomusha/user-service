import {GenealogyRelative} from "../../type";
import {GenealogyRelativeSchema} from "./GenealogyRelativeSchema";

export const findGenealogyRelativesByGenealogy = async (genealogyId: number): Promise<GenealogyRelative[]> => {
  const genealogyRelativeList = await GenealogyRelativeSchema.findAll({
    where: {
      genealogyId: genealogyId
    }
  })
  return genealogyRelativeList
}

export const saveGenealogyRelative = async (genealogyId: string, relativeId: string,) => {
  const instance = await GenealogyRelativeSchema.create({
    genealogyId: genealogyId,
    relativeId: relativeId,
  })
  return instance
}

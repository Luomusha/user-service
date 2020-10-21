import {FamilyMember} from "../../type";
import {FamilyMemberSchema} from "./FamilyMemberSchema";

export const findFamilyMembersByFamily = async (familyId: number): Promise<FamilyMember[]> => {
  const familyMemberList = await FamilyMemberSchema.findAll({
    where: {
      familyId: familyId
    }
  })
  return familyMemberList
}

export const saveFamilyMember = async (familyId: string, memberId: string,) => {
  const instance = await FamilyMemberSchema.create({
    familyId: familyId,
    memberId: memberId,
  })
  return instance
}
